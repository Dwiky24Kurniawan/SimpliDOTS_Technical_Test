import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import homePage from "../../pageobjects/homePage";
import loginPage from "../../pageobjects/loginPage";
import moviePage from "../../pageobjects/moviePage";
import dataLogin from "../../fixtures/datalogin.json";

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
  
  When("I remove all movies from my favorite list", () => {
    profilePage.removeAllMoviesFromFavorite();
  });
  
  Then("My favorite movie list is empty", () => {
    homePage.visitProfilePage();
    profilePage.visitMyFavoriteMovies();
    profilePage.assertRemoveAllMoviesFromFavorites();
  });
  