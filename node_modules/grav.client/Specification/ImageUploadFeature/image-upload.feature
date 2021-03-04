Feature: Image upload
  In order to add new images 
  to my Gravatar collection
  As a user, I want to upload images

Scenario: Upload new image
  When an image file is uploaded
  And an encoded image is uploaded
  And an image url is uploaded
  Then the image file is found
  And the encoded image is found
  And the image url is found

Scenario: Upload new primary image
  When an image is uploaded
  Then the primary image is updated