import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import homePage from "../../pageobjects/homePage";
import loginPage from "../../pageobjects/loginPage";
import profilePage from "../../pageobjects/profilePage";
import dataLogin from "../../datalogin.json";

Given("I am logged in", () => {
  cy.visit(Cypress.env("links").live)
  homePage.visitLoginPage();
  const { username, password } = dataLogin;
  loginPage.login(username, password);
});

When("I try to see my favorite list", () => {
    profilePage.visitMyFavoriteMovies();
});

Then("The movie should be listed under my favorite movies", () => {
    profilePage.assertMyFavoriteMovies();
});
