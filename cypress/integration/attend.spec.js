import {
  KYOBO_ID,
  KYOBO_PW,
  ELEVENST_ID,
  ELEVENST_PW,
  GMARKET_ID,
  GMARKET_PW,
  ENURI_ID,
  ENURI_PW,
  OKCASHBAG_ID,
  OKCASHBAG_PW,
  YES24_ID,
  YES24_PW,
  HPOINT_ID,
  HPOINT_PW
} from '../constants/loginInfo';

describe('출첵용', function() {
  // it('교보문고 로그인', function() {
  //   cy.visit(
  //     'http://www.kyobobook.co.kr/login/login.laf?Kc=GNHHNOlogin&orderClick=c03&retURL=http%3A//www.kyobobook.co.kr/event/dailyCheckSpci.laf%3ForderClick%3Dc1j'
  //   );
  //   // Get an input, type into it and verify that the value has been updated
  //   cy.get('#memid')
  //     .type(KYOBO_ID)
  //     .should('have.value', KYOBO_ID);
  //   cy.get('#pw')
  //     .type(KYOBO_PW)
  //     .should('have.value', KYOBO_PW);
  //   cy.get('.btn_submit').click();
  // });
  // it('11st 로그인 & 출첵', function() {
  //   cy.visit(
  //     'https://login.11st.co.kr/auth/front/login.tmall?xfrom=&returnURL=https%3A%2F%2Fwww.11st.co.kr%2Fhtml%2Fmain.html'
  //   );
  //   cy.get('#loginName').type(ELEVENST_ID);
  //   cy.get('#passWord').type(ELEVENST_PW);
  //   cy.get('.btn_Atype.btn_a').click();
  //   // 이벤트 페이지 진입
  //   cy.get('[data-log-actionid-label="event"]').click();
  //   // 출석체크 페이지 진입, target: _blank 제거
  //   cy.get(
  //     '[href="http://www.11st.co.kr/browsing/MallPlanDetail.tmall?method=getMallPlanDetail&planDisplayNumber=935566"]'
  //   )
  //     .invoke('removeAttr', 'target')
  //     .click();
  //   // cy.get('.attend_chk').children().first().click();
  //   cy.get('iframe[title="출석체크하기"]').then(function($iframe) {
  //     const $body = $iframe.contents().find('body');
  //     // query into the iframe
  //     cy.wrap($body)
  //       .find('[href="javascript:evtAttendJoin();"]')
  //       .click();
  //     cy.wrap($body)
  //       .find('[href="javascript:evtAttendFstJoin();"]')
  //       .click();
  //     cy.wrap($body)
  //       .find('[href="javascript:evtAttendScdJoin();"]')
  //       .click();
  //     cy.wrap($body)
  //       .find('[href="javascript:evtAttendThdJoin();"]')
  //       .click();
  //   });
  // });
  // it('Gmarket', function() {
  //   cy.visit(
  //     'https://signinssl.gmarket.co.kr/login/login?url=http://promotion.gmarket.co.kr/Event/Pluszone.asp'
  //   );
  //   // Get an input, type into it and verify that the value has been updated
  //   cy.get('#id')
  //     .type(GMARKET_ID)
  //     .should('have.value', GMARKET_ID);
  //   cy.get('#pwd')
  //     .type(GMARKET_PW)
  //     .should('have.value', GMARKET_PW);
  //   cy.get('button[title="login"]')
  //     .first()
  //     .click();
  //   cy.get('iframe#AttendRulletFrame').then(function($iframe) {
  //     const $body = $iframe.contents().find('body');
  //     // 아직 iframe 내의 alert은 핸들링을 못 한다.
  //     cy.wrap($body)
  //       .find('a.button_start')
  //       .click();
  //   });
  //   cy.get('div.attendance_benefit li a').then(function($buttons) {
  //     cy.wrap($buttons[0]).click();
  //     cy.wrap($buttons[1]).click();
  //     cy.wrap($buttons[2]).click();
  //   });
  // });
  // it('에누리', function() {
  //   cy.visit(
  //     'https://www.enuri.com/member/login/login.jsp?rtnUrl=http%3A%2F%2Fwww.enuri.com%2Fevt%2Fvisit.jsp%23evt1&cmdtype='
  //   );
  //   // Get an input, type into it and verify that the value has been updated
  //   cy.get('#user_id')
  //     .type(ENURI_ID)
  //     .should('have.value', ENURI_ID);
  //   cy.get('#user_pw')
  //     .type(ENURI_PW)
  //     .should('have.value', ENURI_PW);
  //   cy.get('#btnLogin').click();
  //   cy.get('em.chkat.today').click();
  //   cy.get('a.btn.layclose').click();
  //   cy.get('#txt_area').type('오늘 하루도 화이팅하세요! 힘찬 하루!');
  //   cy.get('#regist').click();
  // });

  // it('OK 캐시백 로그인', function() {
  //   cy.visit('http://m.okcashbag.com/life/event/attend/attendMain.mocb');
  //   // Get an input, type into it and verify that the value has been updated
  //   cy.get('li.today p button[type="button"]').click();
  //   cy.get('#loginname')
  //     .type(OKCASHBAG_ID)
  //     .should('have.value', OKCASHBAG_ID);
  //   cy.get('#passwd')
  //     .type(OKCASHBAG_PW)
  //     .should('have.value', OKCASHBAG_PW);
  //   // 보안문자에서 막힘.
  // });

  // describe('yes24', function() {
  //   it('공연', function() {
  //     cy.visit(
  //       'https://m.yes24.com/Momo/Templates/FTLogin.aspx?ReturnURL=http://m.ticket.yes24.com/Event/2017/DailyStamp.aspx'
  //     );
  //     cy.get('input#SMemberID').type(YES24_ID);
  //     cy.get('input#SMemberPassword').type(YES24_PW);
  //     cy.get('button#btn_login').click();

  //     cy.get('em.close a').click();
  //     cy.get('div.chk_btn a').click();
  //   });

  // it('별사탕', function() {
  //   cy.visit(
  //     'https://www.yes24.com/Templates/FTLogin.aspx?ReturnURL=http://www.yes24.com/campaign/00_corp/2015/2016ChulCheck.aspx'
  //   );
  //   cy.get('input#SMemberID').type(YES24_ID);
  //   cy.get('input#SMemberPassword').type(YES24_PW);
  //   cy.get('button#btnLogin.btn_login.btnC.xb_size.btn_blue').click();

  //   cy.get('div.quizBtn a').then(function($buttons) {
  //     cy.wrap($buttons[0]).click();
  //     cy.wrap($buttons[1]).click();
  //   });
  // });
  // });

  it('hpoint', function() {
    cy.visit(
      'https://www.thehyundai.com/front/cob/loginPup.thd?MainpageGroup=Util&GroupbannerName=GNB_Login'
    );
    cy.get('input#custId').type(HPOINT_ID);
    cy.get('input#custPwd').type(HPOINT_PW);
    cy.get('#hMember form div button.btn.btn-login').click();
    cy.visit(
      'https://www.thehyundai.com/CS/eva/evntPatternedDetail.thd?prmoNo=00000708&EvMainpageGroup=Runningevent&EvGroupbannerName=Runningevent_7'
    );
    // 오류. 계속 휴대폰 인증하라고 뜸...
    cy.get('div.ecb-roulette-btn a').click();
  });
});
