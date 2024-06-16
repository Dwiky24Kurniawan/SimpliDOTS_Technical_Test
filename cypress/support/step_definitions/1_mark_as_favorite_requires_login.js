import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import homePage from "../../pageobjects/homePage";
import loginPage from "../../pageobjects/loginPage";
import moviePage from "../../pageobjects/moviePage";
import dataLogin from "../../datalogin.json";

Given("I am logged in", () => {
  cy.visit(Cypress.env("links").live)
  homePage.visitLoginPage();
  const { username, password } = dataLogin;
  loginPage.login(username, password);
});

When("I am on the movie details page", () => {
  homePage.clickNavBarMovies();
  homePage.visitPopularMovies();
});

Then("I mark the movie as favorite", () => {
  moviePage.visitPopularMovieDetail();
  moviePage.markAsFavorite();
});

And("The movie should be marked as favorite", () => {
  moviePage.markedAsFavorite();
});
