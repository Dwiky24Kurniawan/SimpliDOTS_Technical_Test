class HomePage {
  buttonLanguage = ".translate > div";
  navBarLogin = "div[class='flex'] li:nth-child(3) a:nth-child(1)";
  navBarAvatar = ".no_click > .avatar";
  viewProfileButton = ".k-tooltip-content > .settings_content > :nth-child(1) > p > a";
  navBarMovies = ".dropdown_menu > :nth-child(1) > .no_click";
  popularMovies = ".k-animation-container > .k-group > .k-first > .k-link";
  dropDownLanguageList = "#default_language_popup-list";
  dropDownLanguage = "#default_language_popup_label > span.k-widget.k-dropdown";
  listLanguage = "#default_language_popup-list";
  selectBahasaIndonesia = "#default_language_popup_listbox > li:nth-child(26)";
  selectBahasaInggrisUS = "#default_language_popup_listbox > li:nth-child(80)";
  navBar = "header[class='normal smaller no_animation smaller subtle nav-down']";
  contentNavBar = "body > div.page_wrap.movie_wrap > header > div.content";
  titlePage = "title > h2";
  popUpLanguage = "div.k-widget.k-tooltip.k-tooltip-closable.k-popup.k-group.k-reset.min_100px_height.tmdb_theme_white.flex";

  visitLoginPage() {
    cy.get(this.navBarLogin).should("be.visible").click();
  }

  clickButtonLanguage() {
    cy.get(this.buttonLanguage).should("be.visible").click();
  }

  clickDropDownLanguage() {
    cy.get(this.popUpLanguage)
      .invoke("css", "display", "flex")
      .should("have.css", "display", "flex");
    cy.get(this.dropDownLanguage).should("be.visible").click()
    cy.get(this.popUpLanguage)
      .invoke("css", "display", "flex")
      .should("have.css", "display", "flex");
  }

  selectIndonesianLanguage() {
    cy.contains(this.selectBahasaIndonesia).should("be.visible").click();
  }

  selectInggrisUS() {
    cy.contains(this.selectBahasaInggrisUS).should("be.visible").click();
  }

  changeLanguageToIndonesian() {
    this.clickButtonLanguage();
    this.clickDropDownLanguage().then(($el) => {
      $el.on("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
      });
    });
    cy.get(this.popUpLanguage)
      .invoke("css", "display", "flex")
      .should("have.css", "display", "flex");
    this.selectIndonesianLanguage();
  }

  changeLanguageToInggrisUS() {
    this.clickButtonLanguage();
    cy.wait(3000);
    this.clickDropDownLanguage();
    cy.wait(3000);
    this.selectInggrisUS();
    cy.wait(3000);
  }

  assertChangeLanguageToIndonesian() {
    this.clickButtonLanguage.should("have.text", "id");
  }

  assertChangeLanguageToInggrisUS() {
    this.clickButtonLanguage.should("have.text", "en");
  }

  assertTitlePageIndonesian() {
    this.titlePage;
  }

  assertTitlePageEnglishUs() {}

  clickNavBarMovies() {
    cy.get(this.navBarMovies).click();
  }

  visitPopularMovies() {
    cy.get(this.popularMovies).should("be.visible").click();
  }

  visitProfilePage() {
    cy.scrollTo("top");
    cy.get(this.navBarAvatar).should("be.visible").click();
    cy.get("#settings_tooltip").invoke("removeClass", "hide");
    cy.contains("View profile").click();
  }
}

module.exports = new HomePage();
