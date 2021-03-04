require("jasmine");
const { setWorldConstructor, Given, Then } = require('cucumber');

const expect = require('expect');
const World = require('../../world');

setWorldConstructor(World);

Given("a list of 2 email addresses", 
  async function(emailAddresses) { });

Then("{string} is valid", async function(validEmail) {
  const response = await this.client.exists(validEmail);
  expect(response.success).toBe(true);
});

Then("{string} is invalid", async function(invalidEmail) {
  const response = await this.client.exists(invalidEmail);
  expect(response.success).toBe(false);
});
