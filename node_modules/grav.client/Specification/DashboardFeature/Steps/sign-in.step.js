require("jasmine");
const { setWorldConstructor, Given, When, Then } = require('cucumber');
const expect = require('expect');
const World = require('../../world');
const { GravatarClient } = require('../../../Release/Presentation');
setWorldConstructor(World);

Given("email {string} and password {string}", function(email, password) {
  this.email = email;
  this.password = password;
});

When("I sign in", async function() {
  this.client = new GravatarClient(this.email, this.password);
});

Then("I receive a client instance", function() {
  expect(this.client.emailHash).toBeDefined();
});
