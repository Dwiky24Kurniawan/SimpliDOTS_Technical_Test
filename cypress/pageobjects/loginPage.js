class LoginPage {
  fieldUsername = "#username";
  fieldPassword = "#password";
  loginButton = "#login_button";

  inputUsername(username) {
    cy.get(this.fieldUsername).should("be.visible").type(username);
  }

  inputPassword(password) {
    cy.get(this.fieldPassword).should("be.visible").type(password);
  }

  clickLoginButton() {
    cy.get(this.loginButton).click();
  }

  login(username, password) {
    this.inputUsername(username);
    this.inputPassword(password);
    this.clickLoginButton();
  }
}

module.exports = new LoginPage();
