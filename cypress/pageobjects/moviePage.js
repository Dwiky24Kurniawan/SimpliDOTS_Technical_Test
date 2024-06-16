class MoviePage {
  popularMovieDetail = "h2 a[title='Godzilla x Kong: The New Empire']";
  favouriteButton = "#favourite";
  favouriteButtonClicked = "span[class='glyphicons_v2 heart white false true']";
  coverMovie = "a[class='image']";

  visitPopularMovieDetail() {
    cy.get(this.coverMovie).eq(5).should("be.visible").click();
  }

  markAsFavorite() {
    cy.get(this.favouriteButton).should("be.visible").click();
  }

  markedAsFavorite() {
    cy.get(this.favouriteButtonClicked).should("have.class", "true");
  }

  unmarkFromFavorite(){
    cy.get(this.favouriteButton).should("be.visible").click();
  }

  Mark5MoviesAsFavorite() {
    cy.get(this.coverMovie).then(($elements) => {
      Cypress._.slice($elements, 0, 5).forEach(($el) => {
      cy.wrap($el)
        .invoke("attr", "href")
        .then((href) => {
          cy.visit((Cypress.env("links").live)+href);
          cy.url().should("include", href);
          cy.wait(1000);
          this.markAsFavorite();
          cy.wait(1000);
          this.markedAsFavorite();
          cy.go("back");
          cy.wait(1000);
        });
      });
    });
  }
}

module.exports = new MoviePage();
