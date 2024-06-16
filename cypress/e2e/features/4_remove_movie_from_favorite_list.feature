Feature: Remove movie from favorite list

  Scenario: I remove a movie from my favorite list
    Given I am logged in
    And I have multiple favorite movies
    When I remove a movie from my favorite list
    Then The movie should no longer appear in my favorite list
