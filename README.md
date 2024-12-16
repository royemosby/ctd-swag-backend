# CTD-Swag Backend

Minimal API to support CTD's React v3 curriculum code-along project, CTD-Swag.

This project bootstrapped from Objection.js's KOA demo.

## Getting Started

1. get PNGs from <https://github.com/royemosby/ctd-swag/tree/main/src/assets>
   1. upload to hosting service (I used [imagekit.io/](https://imagekit.io/))
2. rename `example.env` to `.env`
3. establish postgres service that contains a blank database.
4. Populate the `.env` with the database details using existing variables.
5. Add base url provided by image hosting service or update the `image` in each entry's variants array found in [seeds file](/knex/seeds/initial_products.js)
6. Run these three commands in the terminal.

```terminal
npm run migrate
npm run seed
npm start
```

You only need to run the migrate and seed once unless a new migration is added.

## Available Routes

|VERB|Route|Notes|
|------|-----------------|----------------------------|
|GET   |/products        | |
|GET   |/products:/id    | |
|GET   |/users           |temp dev route              |
|POST  |/users           | |
|DELETE|/users/:firstName|temp dev route              |
