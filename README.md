# Amazon Item's Availability and Shipping Service

## Requirements

[Requirements](https://docs.google.com/spreadsheets/d/1jAmQhyiLWy7RlhhKkWwPfVqF4SVUXgnY1TYL2BAQMh4/edit#gid=2131387446)

## Table of Contents

1. [Assumptions](#Assumptions)
1. [Setup](#Setup)
1. [Resources](#Resources)

## Assumptions

-- all Users are located in US


## Setup

### Installing Dependencies
*Install MySQL*
```console
brew install mysql@5.7
```

*Install Node Packages*
```console
npm install
```

*Create Database*
```mysql
source ./database-mysql/schema.sql
```

*Run MySQL*
```console
mysql -u root -p
```

### Setup
*setup.js*
- Copy temp_setup.js to setup.js
- Update environment information in setup.js file

*Seed the Database*
- Make sure your mysql server is running locally
```console
node ./database-mysql/seeds/loadFakeData.js
```

### Running Locally
*Compile react app for Production*
```console
npm run react-prod
```

*Run server*
```console
npm run server
```


## Resources:

### Faker
https://github.com/Marak/faker.js/wiki/

### MySql
http://www.mysqltutorial.org/mysql-foreign-key/


