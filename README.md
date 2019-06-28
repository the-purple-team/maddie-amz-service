# Amazon Item's Availability and Shipping Service

https://docs.google.com/spreadsheets/d/1jAmQhyiLWy7RlhhKkWwPfVqF4SVUXgnY1TYL2BAQMh4/edit#gid=2131387446

## Related Projects

- https://github.com/the-purple-team/bradyProxy
- https://github.com/the-purple-team/bruce-service
- https://github.com/the-purple-team/Jose-FEC
- https://github.com/the-purple-team/maddie-amz-service

## Table of Contents

1. [Assumptions] (#Assumptions)
1. [Setup](#Setup)
1. [Resources](#Resources)

## Assumptions

-- all Users are located in US


## Setup

### Installing Global Dependencies
*Install*
```console
brew install mysql@5.7
```

*Connect*
```console
mysql -u root -p
```

### Local Dependencies / Setup
*setup.js*
- Copy temp_setup.js to setup.js
- Update environment information in setup.js file

*Database*
- Make sure your mysql server is running locally

- create database
```mysql
source ./database-mysql/schema.sql
```

- seed database
  - from command prompt (not sql)
```console
node ./database-mysql/seeds/loadFakeData.js
```

### Running Locally
Install dependencies
```console
npm install
```

Compile react app for Production
```console
npm run react-prod
```

Run server
```console
npm run server
```


## Resources:

### Faker
https://github.com/Marak/faker.js/wiki/

### MySql
http://www.mysqltutorial.org/mysql-foreign-key/


