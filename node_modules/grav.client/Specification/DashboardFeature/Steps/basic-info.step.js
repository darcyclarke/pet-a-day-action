require("jasmine");
const { Then } = require('cucumber');
const expect = require('expect');

Then("get account status", async function() {
  const response = await this.client.exists();
  expect(response).toBeDefined();
});

Then("get current Gravatar info", async function() {
  const response = await this.client.addresses();
  expect(response.userAddresses).toBeDefined();
});
