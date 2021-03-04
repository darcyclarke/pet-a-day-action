;(async () => {
  const core = require('@actions/core')
  const fetch = require('node-fetch')
  const { GravatarClient } = require('grav.client')
  try {
    const password = core.getInput('password')
    const email = core.getInput('email')
    let query = core.getInput('query') || 'dog,cat,dogs,cats,kittens,puppies,puppy,kitten'
    query = query.split(',').map(i => i.trim()).join(',')
    const source = `https://source.unsplash.com/random/800x800?${query}`
    const client = new GravatarClient(email, password)
    await fetch(source)
      .then(res => res.buffer())
      .then(async buffer => {
        const { imageName } = await client.saveEncodedImage(buffer.toString('base64'))
        await client.useUserImage(imageName)
        core.info('Profile Image Updated')
      })
  } catch (error) {
    core.setFailed(error.message)
  }
})()
