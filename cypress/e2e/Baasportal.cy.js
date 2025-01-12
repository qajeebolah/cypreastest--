///  <reference types="cypress" />

describe('launch Baas portal', () => {
  it('Negative', () => {
    cy.visit('https://vbaas.vfdtech.ng/auth/login/')
    cy.get('[data-testid="username"]').type("qa@gmail.com") //username
    cy.get('[data-testid="password"]').type("@Jeebolah12+")   //password
    cy.get('.justify-between > .flex').click()  //login button
  })

it('Positive', () => {
    cy.visit('https://vbaas.vfdtech.ng/auth/login/')
    cy.get('[data-testid="username"]').type("qlateef341@gmail.com") //username
    cy.get('[data-testid="password"]').type("@Jeebolah12++")   //password
    cy.get('.justify-between > .flex').click()  //login button
    cy.wait(5000)
    cy.get('nav > .relative').click()           //hamburger menu
    cy.get('.w-full > .flex > :nth-child(6) > .text-base').click()  //settings
    cy.get('#headlessui-tabs-tab-24').click()   //user
    cy.get('.my-3 > .flex > :nth-child(2)').click()  //create user
    cy.get('[data-testid="email"]').type('qlateef342@gmail.com')
    cy.get('[data-testid="firstname"]').type("QA")
    cy.get('[data-testid="lastname"]').type("team")
    cy.get('[data-testid="mobile"]').type("07012121212")
    cy.get('.space-x-10 > :nth-child(2) > .flex > :nth-child(2)').click()
  })

})