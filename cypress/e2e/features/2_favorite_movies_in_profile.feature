Feature: Favorite movies appear in the profile

  Scenario: Favorite movie appears in my profile
    Given I am logged in
    When I try to see my favorite list
    Then The movie should be listed under my favorite movies
    