class ProfilePage {
  profileAccount = "div[class='content_wrapper flex'] h2";
  overviewMenu = ".true > :nth-child(1) > .k-menu-expand-arrow";
  favoritesSubmenu = "#new_shortcut_bar_mn_active > div > ul > li.false.k-item.k-menu-item.k-state-default > span";
  favoritesMoviesSubmenu = ".false > .k-animation-container > .k-group > .k-first > .k-link";
  countFavoriteMovies = "a[data-media-type='movie'] span[class='color blue']";
  myFavoriteMovies = "div[class='image']";
  sortFavMovies = "#main > div.account_page_data > div > div > div > div.title_header > div.filter_group > div > div.order_filter > div > div > a.sort_order.selected.color_hover.blue.no_click > span";
  favoriteMoviesTitle = "div[class='title']";
  coverMovie = "div[class='image'] > div > a";
  favouriteButton = "#favourite";

  assertProfilePageURL() {
    cy.url().should("include", "/u/");
  }

  clickOverviewMenu() {
    cy.get(this.overviewMenu).should("be.visible").click();
  }

  clickFavoritesSubmenu() {
    cy.get(this.favoritesSubmenu).should("be.visible").click();
  }

  clickFavoritesMoviesSubmenu() {
    cy.get(this.favoritesMoviesSubmenu).should("be.visible").click();
  }

  visitMyFavoriteMovies() {
    this.clickOverviewMenu();
    this.clickFavoritesSubmenu();
    this.clickFavoritesMoviesSubmenu();
  }

  assertMyFavoriteMovies() {
    cy.get(this.countFavoriteMovies)
      .invoke("text")
      .then((text) => {
        const number = parseInt(text, 10);
        expect(number).to.be.at.least(1);
      });
  }

  removeMovieFromFavorite() {
    cy.get(this.myFavoriteMovies).first().click();
  }

  selectMovieToRemoveFromFavorite() {
    cy.get(this.favoriteMoviesTitle)
      .first()
      .then(($title) => {
        cy.wrap($title.text()).as("movieTitle");
      });
  }

  assertRemoveMovieFromFavorite() {
    cy.get("@movieTitle").then((movieTitle) => {
      cy.get(this.favoriteMoviesTitle).should("not.contain", movieTitle);
    });
  }

  sortFavoriteMovies() {
    cy.get(this.sortFavMovies).should("be.visible").click();
    cy.wait(5000);
  }

  assertSort() {
    let movieTitle = [];
    cy.get(this.favoriteMoviesTitle).each(($el) => {
      cy.wrap($el).invoke("text").as("movie_title");
      cy.get("@movie_title").then((movie_title) => {
        movieTitle.push(movie_title);
      });
    });

    movieTitle.sort((a, b) => b.localeCompare(a));

    cy.get(this.favoriteMoviesTitle).each(($el, index) => {
      cy.wrap($el).should("have.text", movieTitle[index]);
    });
  }

  unmarkFromFavorite() {
    cy.get(this.favouriteButton).should("be.visible").click();
  }

  removeAllMoviesFromFavorite() {
    cy.get(this.coverMovie).each(($el) => {
      cy.wrap($el)
        // .find("a")
        .invoke("attr", "href")
        .then((href) => {
          cy.visit(Cypress.env("links").live + href);
          cy.wait(1000);
          this.unmarkFromFavorite();
          cy.wait(1000);
          cy.go("back");
          cy.wait(3000);
        });
    });
  }

  assertRemoveAllMoviesFromFavorites() {
    cy.get(this.countFavoriteMovies)
      .invoke("text")
      .then((text) => {
        const number = parseInt(text, 10);
        expect(number).to.equal(0);
      });
  }
}

module.exports = new ProfilePage();
