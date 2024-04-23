# Canix Take Home Assessment

# Getting Started with Rails App

## Dependencies
  * Ruby 3.2.2
  * Rails 7.1

## Installing Project in your Local Machine

  To get started with the app, first clone the repo and cd into the directory:
  ### Clone the application
  ```
  $ cd canix_take_home
  ```

  Then install the needed gems:
  ```
  $ bundle install
  ```

  Next, migrate the database:
  ```
  $ rails db:migrate
  ```

  You'll be ready to run the app in a local server:
  ```
  $ rails server
  ```

# Getting Started with Create React App
## Prerequisites

Run command `npm install` in the terminal.

## Available Scripts

In the project directory, to start the server run:

```
$ npm start
```

Runs the app in the development mode.
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

You are good to go now!


## Assumptions and Decisions

1. Added unique validation on product_id so it avoides uploading duplicate products.
2. Weights are in 'grams', 'kilograms', or 'pounds' only.
3. Total weight for each category is converted and shown in kilograms.
4. Weights are displayed to a decimal value of 3.
5. Product_id, date, weight, and unit must be present for each product.
