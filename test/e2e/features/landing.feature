Feature: Merc Solutions Landing Page Navigation

@LP001
Scenario: Click on Unete option
    Given I am on Merc Solutions landing page
    When I click on sidebar button
    And I click on Unete option on navbar
    Then I can see the section CTA

@LP002
Scenario Outline: Click on navbar options
    Given I am on Merc Solutions landing page
    When I click on sidebar button
    Then I click on <option>
    Examples:
    | option            |
    | Presencia         |
    | Conocenos         |
    | Galeria           |
    | Eventos           |
    | Unete             |
    | BolsaDeTrabajo    |