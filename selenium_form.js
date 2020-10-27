// Open https://the-internet.herokuapp.com/login

// Please automate next test cases:
/// <reference types="cypress" />

// 1. Login with valid creds (tomsmith/SuperSecretPassword!) and assert you successfully logged in
it ('login_happypass_test', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    
    cy.get('[name="username"]').type('tomsmith');
    cy.get('[name="password"]').type('SuperSecretPassword!');

    cy.get('.radius').click();
    cy.get('.flash.success').contains('You logged into a secure area!').should('exist');
});

// 2. Login with invalid creds and check validation error
it ('login_invalidUser_test', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    
    cy.get('[name="username"]').type('blablabla');
    cy.get('[name="password"]').type('Password!');

    cy.get('.radius').click();
    cy.get('.flash.error').contains('Your username is invalid!').should('exist');
});

// 3. Logout from app and assert you successfully logged out
it ('login_happypass_test', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    
    cy.get('[name="username"]').type('tomsmith');
    cy.get('[name="password"]').type('SuperSecretPassword!');

    cy.get('.radius').click();
    cy.get('.example h2').contains('Secure Area').should('exist');
    
    cy.get('[href="/logout"]').click();
    cy.get('.flash.success').contains('You logged out of the secure area!').should('exist');
});
