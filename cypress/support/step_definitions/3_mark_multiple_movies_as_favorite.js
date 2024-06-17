import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import homePage from "../../pageobjects/homePage";
import loginPage from "../../pageobjects/loginPage";
import moviePage from "../../pageobjects/moviePage";
import profilePage from "../../pageobjects/profilePage";
import dataLogin from "../../fixtures/datalogin.json";

Given("I am logged in", () => {
  cy.visit(Cypress.env("links").live)
  homePage.visitLoginPage();
  const { username, password } = dataLogin;
  loginPage.login(username, password);
});

When("I mark multiple movies as favorite", () => {
  homePage.clickNavBarMovies();
  homePage.visitPopularMovies();
  moviePage.Mark5MoviesAsFavorite();
});

Then("The movie should be listed in my favorite movies", () => {
  homePage.visitProfilePage();
  profilePage.visitMyFavoriteMovies();
  profilePage.assertMyFavoriteMovies();
});
