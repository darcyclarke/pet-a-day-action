<h3 align="center">🐶🐹🐰🐱</h3>
<h3 align="center">Pet-a-Day GitHub Action</h3>

<p align="center">This action changes your GitHub avatar to a different cute animal each day...</p>

## Requirements

1. Must have a [Gravatar/Wordpress.com](http://en.gravatar.com/) Account
2. Ensure the primary email you use with GitHub is associated with your Gravatar account
3. If you've previously uploaded a profile image to GitHub, "Revert to Gravatar" (re. [Settings > Profile > Edit](https://github.com/settings/profile))

<p align="center"><img src="https://user-images.githubusercontent.com/459713/109911892-fac3fc80-7c78-11eb-81fb-bbff3cc58091.png" alt="screen" /></p>

## Installation / Usage

1. Create a `.github/workflows/pet-a-day.yml` file in any repo...
2. Add the following...

```yaml
name: "Pet-a-Day"
on:
  schedule:
    - cron: "0 0 * * *"
jobs:
  update-avatar:
    runs-on: ubuntu-latest
    steps:
    - uses: darcyclarke/pet-a-day-action@v1
      with:
        email:  ${{ secrets.EMAIL }}
        password: ${{ secrets.PASSWORD }}
```

## Inputs

#### `email`

* **Required** The primary email used for your GitHub account
* **Note:** You should use [GitHub Action Secrets](https://docs.github.com/en/actions/reference/encrypted-secrets) to set this value (re. `https://github.com/<username>/<repo>/settings/secrets/actions`)

#### `password`

* **Required** The password associated with your Gravatar/WordPress.com account
* **Note:** You should use [GitHub Action Secrets](https://docs.github.com/en/actions/reference/encrypted-secrets) to set this value (re. `https://github.com/<username>/<repo>/settings/secrets/actions`)

#### `query`

* **Optional** Comma delimited list of categories to be used to choose the image (ex. `frogs,birds`)
* **Default** `dog,cat,dogs,cats,kittens,puppies,puppy,kitten`
