const { Given, Then, When } = require("cucumber");

Given("I visit the site", async function() {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

Then('I should see {string}', async function(content) {
  return 'pending'
});

When('I click {string}', async function(string) {
  return 'pending'
});

Then('I fill in {string} with {string}', async function(string, string2) {
  return 'pending'
});

Then('I should have {int} contact in my address book', async function(int) {
  return 'pending'
});

Then('I should not see {string}', async function(string) {
  return 'pending'
});