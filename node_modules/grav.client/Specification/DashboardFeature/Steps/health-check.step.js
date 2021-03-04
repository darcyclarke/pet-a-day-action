require("jasmine");
const { Then } = require('cucumber');
const expect = require('expect');

Then("ping the Gravatar service", async function() {
  const response = await this.client.test();
  expect(response.response).toBeDefined();
});
