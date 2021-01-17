# 14MVC-Challenge-TechBlog

## Description

A simple multi-user tech blog that stores articles and is deployed to Heroku.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

[template_installation]

## Usage 

Go to the site, signup or login, enter an aritcle or read another article posted by another user.

## License

MIT License

## Contributing
Please read and understand the [Contributor Covenant](CONTRIBUTOR_COVENANT.MD) before commiting.
### Development Environment
Clone or fork the repository, run `npm install`, then create a .env file in the root of the project with your own variables (_note: techblog should be the name of the database for consistency with the production server._):
``` 
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=password
DB_APP_DATABASE=techblog
```
Run the development environment with `npm run dev`

## Tests
Run the following commands for the area you would like to see tested.
### API
`npm run api-tests`

### UI
`npm run ui-tests`

### Unit
`npm run unit-test`

## Questions

* Who is the project owner? [joe-riley](https://github.com/[template_github_user)

* How can the owner be contacted? <rileyjoseph@gmail.com>
 