import {
  KYOBO_ID,
  KYOBO_PW,
  ELEVENST_ID,
  ELEVENST_PW,
  GMARKET_ID,
  GMARKET_PW
} from '../constants/loginInfo';

describe('출첵용', function() {
  it('교보문고 로그인', function() {
    cy.visit(
      'http://www.kyobobook.co.kr/login/login.laf?Kc=GNHHNOlogin&orderClick=c03&retURL=http%3A//www.kyobobook.co.kr/event/dailyCheckSpci.laf%3ForderClick%3Dc1j'
    );

    // Get an input, type into it and verify that the value has been updated
    cy.get('#memid')
      .type(KYOBO_ID)
      .should('have.value', KYOBO_ID);

    cy.get('#pw')
      .type(KYOBO_PW)
      .should('have.value', KYOBO_PW);

    cy.get('.btn_submit').click();
  });

  it('11st 로그인 & 출첵', function() {
    cy.visit(
      'https://login.11st.co.kr/auth/front/login.tmall?xfrom=&returnURL=https%3A%2F%2Fwww.11st.co.kr%2Fhtml%2Fmain.html'
    );

    cy.get('#loginName').type(ELEVENST_ID);

    cy.get('#passWord').type(ELEVENST_PW);

    cy.get('.btn_Atype.btn_a').click();

    // 이벤트 페이지 진입
    cy.get('[data-log-actionid-label="event"]').click();

    // 출석체크 페이지 진입, target: _blank 제거
    cy.get(
      '[href="http://www.11st.co.kr/browsing/MallPlanDetail.tmall?method=getMallPlanDetail&planDisplayNumber=935566"]'
    )
      .invoke('removeAttr', 'target')
      .click();

    // cy.get('.attend_chk').children().first().click();
    cy.get('iframe[title="출석체크하기"]').then(function($iframe) {
      const $body = $iframe.contents().find('body');
      // query into the iframe
      cy.wrap($body)
        .find('[href="javascript:evtAttendJoin();"]')
        .click();
      cy.wrap($body)
        .find('[href="javascript:evtAttendFstJoin();"]')
        .click();
      cy.wrap($body)
        .find('[href="javascript:evtAttendScdJoin();"]')
        .click();
      cy.wrap($body)
        .find('[href="javascript:evtAttendThdJoin();"]')
        .click();
    });
  });

  it('Gmarket', function() {
    cy.visit(
      'https://signinssl.gmarket.co.kr/login/login?url=http://promotion.gmarket.co.kr/Event/Pluszone.asp'
    );

    // Get an input, type into it and verify that the value has been updated
    cy.get('#id')
      .type(GMARKET_ID)
      .should('have.value', GMARKET_ID);

    cy.get('#pwd')
      .type(GMARKET_PW)
      .should('have.value', GMARKET_PW);

    cy.get('button[title="login"]')
      .first()
      .click();

    cy.get('iframe#AttendRulletFrame').then(function($iframe) {
      const $body = $iframe.contents().find('body');
      // 아직 iframe 내의 alert은 핸들링을 못 한다.
      cy.wrap($body)
        .find('a.button_start')
        .click();
    });
    cy.get('div.attendance_benefit li a').then(function($buttons) {
      cy.wrap($buttons[0]).click();
      cy.wrap($buttons[1]).click();
      cy.wrap($buttons[2]).click();
    });
  });
});
