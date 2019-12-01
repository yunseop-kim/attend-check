import { KYOBO_ID, KYOBO_PW } from '../constants/loginInfo';

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
    cy.visit('https://login.11st.co.kr/auth/front/login.tmall');

    cy.get('#loginName').type(ELEVENST_ID);

    cy.get('#passWord').type(ELEVENST_PW);

    cy.get('.btn_a').click();

    cy.get('.attend_chk > a').click();

    cy.visit(
      'http://www.11st.co.kr/browsing/MallPlanDetail.tmall?method=getMallPlanDetail&planDisplayNumber=935566'
    );

    cy.get('.attend_chk > a').click();
  });
});
