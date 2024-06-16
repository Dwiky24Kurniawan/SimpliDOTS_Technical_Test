import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import homePage from "../../pageobjects/homePage";
import loginPage from "../../pageobjects/loginPage";
import moviePage from "../../pageobjects/moviePage";
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

When("I remove a movie from my favorite list", () => {
  profilePage.selectMovieToRemoveFromFavorite();
  profilePage.removeMovieFromFavorite();
  moviePage.unmarkFromFavorite();
});

Then("The movie should no longer appear in my favorite list", () => {
  homePage.visitProfilePage();
  profilePage.visitMyFavoriteMovies();
  profilePage.assertMyFavoriteMovies();
  profilePage.assertRemoveMovieFromFavorite();
});
