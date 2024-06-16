Feature: Testing TheMovieDB functionalities

  Scenario: I mark a movie as favorite after logging in
    Given I am logged in
    And I am on the movie details page
    When I mark the movie as favorite
    Then The movie should be marked as favorite

  Scenario: Favorite movie appears in my profile
    Given I am logged in
    When I try to see my favorite list
    Then The movie should be listed under my favorite movies
    
  Scenario: I mark multiple movies as favorite
    Given I am logged in
    When I mark multiple movies as favorite
    Then The movie should be listed in my favorite movies

  Scenario: I remove a movie from my favorite list
    Given I am logged in
    And I have multiple favorite movies
    When I remove a movie from my favorite list
    Then The movie should no longer appear in my favorite list

  Scenario: I sort my favorite movies list
    Given I am logged in
    And I have multiple favorite movies
    When I sort the favorite movies list by title
    Then The movies should be displayed in alphabetical order

  Scenario: I remove all movies from their favorite list
    Given I am logged in
    And I have multiple favorite movies
    When I remove all movies from my favorite list
    Then My favorite movie list is empty
