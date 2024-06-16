Feature: Remove all movies from favorite list

  Scenario: I remove all movies from their favorite list
    Given I am logged in
    And I have multiple favorite movies
    When I remove all movies from my favorite list
    Then My favorite movie list is empty
