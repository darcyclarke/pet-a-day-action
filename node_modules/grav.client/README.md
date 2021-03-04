# grav.client NodeJS SDK

 A NodeJS SDK for the [Gravatar XML-RPC API](https://en.gravatar.com/site/implement/xmlrpc)
 
 ---
 
[![Build Status](https://travis-ci.com/mrtillman/grav.client.svg?branch=master)](https://travis-ci.com/mrtillman/grav.client)
[![Coverage Status](https://coveralls.io/repos/github/mrtillman/grav.client/badge.svg?branch=master)](https://coveralls.io/github/mrtillman/grav.client?branch=master)
[![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/mrtillman/grav.client?sort=semver)](https://github.com/mrtillman/grav.client/releases/tag/2.4.20)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mrtillman/grav.client/blob/master/LICENSE.md)

[![NPM](https://nodei.co/npm/grav.client.png)](https://www.npmjs.com/package/grav.client)

If you are just getting started, be sure to see the [Wiki](https://github.com/mrtillman/grav.client/wiki) and [API docs](https://documenter.getpostman.com/view/1403721/TWDcEuXX).

 [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/0e7ec98e4fac2e5849c4)

## Installation

```sh
$  npm install grav.client
```

## Tests

```bash
# unit tests
$ npm run test

# end-to-end tests
$ npm run test:e2e

# test coverage
$ npm run test:cov

# acceptance tests
$ npm run test:spec
```

## Usage

```javascript
import { GravatarClient } from 'grav.client';

const client = new GravatarClient('user@example.com', 'password');

client.test().then(data => ... );
 ```
 
## Methods
 
|Method     | Description  |
|-----------|--------------|
| `client.exists()` | check if a primary image is set |
| `client.addresses()` | list account email addresses |
| `client.userImages()` | list account images |
| `client.saveImage(imageFilePath)` | upload an image |
| `client.saveEncodedImage(base64String)` | upload an encoded image |
| `client.saveImageUrl(imageUrl)` | upload image from URL |
| `client.useUserImage(imageName)` | update primary image |
| `client.removeImage()` | remove primary image |
| `client.deleteUserImage(imageName)` | delete an image |
| `client.test()` | sanity check |


# Use Cases

**`grav.client`** ships with several [use case classes](https://github.com/mrtillman/grav.client/wiki/Use-Cases) that model different programming scenarios:

- `FindImageUseCase`
- `GetPrimaryImageUseCase`
- `LoadNextImageUseCase`
- `LoadPreviousImageUseCase`
- `SetNewImageUseCase`
- `VerifyAccountUseCase`

Example:

```js
import { 
  GravatarClient,
  GetPrimaryImageUseCase
} from 'grav.client';

...

// create use case
const getPrimaryImageUseCase = new GetPrimaryImageUseCase();

// connect client
getPrimaryImageUseCase.client = new GravatarClient(email, password);

// let it rip
const primaryImage = await getPrimaryImageUseCase.execute();
```

## License
[MIT](https://github.com/mrtillman/grav.client/blob/master/LICENSE.md)
