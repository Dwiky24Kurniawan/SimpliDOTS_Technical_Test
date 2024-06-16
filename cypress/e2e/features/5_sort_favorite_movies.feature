Feature: Sort favorite movies list

  Scenario: I sort my favorite movies list
    Given I am logged in
    And I have multiple favorite movies
    When I sort the favorite movies list by title
    Then The movies should be displayed in alphabetical order
