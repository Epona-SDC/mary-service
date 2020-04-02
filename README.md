# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Available Api routes
I. GET
'/host/:id'
Finds and retrieves a host document from the database using the specified id from req.params.id.

II. POST
'/host'
Creates a new host document and saves it the database. Uses req.body.PROPERTY where property are the fields to be filled in in JSON format.

III> DELETE
'/host/:id'
Finds a host document in the database by specified id from req.params.id and deletes the entry from the database.

IV. PUT
'/host/:id'
Finds a host document in the database by specified id from rew.params.id and updates the name to the specified field. The fields can be changed as needed to target the specific field.



## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

