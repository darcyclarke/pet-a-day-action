Feature: Dashboard feature
  In order to verify my account details
  As a user, I want to perform basic 
  administrative operations

  Scenario: Sign in
    Given email "peter.parker@example.com" and password "letmein"
    When I sign in
    Then I receive a client instance

  Scenario: Perform health check
    * ping the Gravatar service

  Scenario: Get basic info
    * get account status
    * get current Gravatar info

  Scenario: Verify email addresses
    Given a list of 2 email addresses
      | askmrtillman@gmail.com |
      | user@example.com       |
    Then "askmrtillman@gmail.com" is valid
    And "user@example.com" is invalid
