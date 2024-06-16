Feature: Mark multiple movies as favorite

  Scenario: I mark multiple movies as favorite
    Given I am logged in
    When I mark multiple movies as favorite
    Then The movie should be listed in my favorite movies
    