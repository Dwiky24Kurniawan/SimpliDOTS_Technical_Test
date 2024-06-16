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

And("I have multiple favorite movies", () => {
    profilePage.visitMyFavoriteMovies();
    profilePage.assertMyFavoriteMovies();
});

When("I sort the favorite movies list by title", () => {
  profilePage.sortFavoriteMovies();
});

Then("The movies should be displayed in alphabetical order", () => {
  profilePage.assertSort();
});
