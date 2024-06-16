// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// import homePage from "../pageobjects/homePage";
// import loginPage from "../pageobjects/loginPage";
// import profilePage from "../pageobjects/profilePage";
// import dataLogin from '../../datalogin.json';

// Cypress.Commands.add(
//   "login",
//   (requiredEnv, requiredUser) => {
//     const links = Cypress.env("links");
//     const link = links[requiredEnv];
//     cy.visit(link);
//     cy.visit(homePage.visitLoginPage);
//     const users = Cypress.env("users");
//     const user = users[requiredUser];
//     const username = user.username;
//     const password = user.password;

//     loginPage.inputUsername(username);
//     loginPage.inputPassword(password);
//     loginPage.clickLoginButton();
//     profilePage.assertProfilePageURL();
//   },
//   {
//     cacheAcrossSpecs: true,
//   }

// import homePage from "../pageobjects/homePage";
// import loginPage from "../pageobjects/loginPage";
// import dataLogin from '../dataLogin.json';

// Cypress.Commands.add(
//   "login",
//   () => {
//     const { username, password } = dataLogin;
//     cy.visit(Cypress.env("links").live);
//     homePage.visitLoginPage();
//     loginPage.login(username, password);
//   }
// );

// export {};