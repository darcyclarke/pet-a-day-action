require("jasmine");
const { When, Then, BeforeAll, AfterAll } = require('cucumber');
const expect = require('expect');
const World = require('../../world');
const { join }= require('path');

let originalPrimaryImage;
let newImage = { name: null };

BeforeAll(async () => {
  const _world = new World();
  originalPrimaryImage = await _world.getPrimaryImageUseCase.execute();
})

When("an image is uploaded", async function() {
  const imagePath = join(__dirname, '../../../Common/Assets/shrimp.jpg');
  this.setNewImageUseCase.imageFilePath = imagePath;
  newImage.name = await this.setNewImageUseCase.execute();
  expect(newImage.name).toBeDefined();
});

Then("the primary image is updated", async function() {
  setTimeout(async () => {
    const primaryImage = await this.getPrimaryImageUseCase.execute();
    expect(newImage.name).toEqual(primaryImage.name);
  }, 2000);
});

AfterAll(() => {
  const world = new World();
  setTimeout(async () => {
    if(originalPrimaryImage.name){
      await world.client.useUserImage(originalPrimaryImage.name);
    }
    await world.client.deleteUserImage(newImage.name);
  }, 3000);
})
