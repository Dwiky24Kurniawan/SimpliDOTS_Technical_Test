Feature: Mark as favorite requires login

  Scenario: I mark a movie as favorite after logging in
    Given I am logged in
    And I am on the movie details page
    When I mark the movie as favorite
    Then The movie should be marked as favorite
