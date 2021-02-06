# A fast GraphQL API with Node.js, MongoDB and Fastify!

> A Node.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start
```

## Prerequisites

-   Nodejs
-   MongoDB

**Request:**

```gql
mutation {
    addCar(
        title: "Model S"
        brand: "Tesla"
        price: "200000"
        age: 20
        owner_id: "601a69e12d62a11f149354e5"
    ) {
        title
        brand
    }
}

mutation {
    editCar(
        id: "601e65d3855be92c34165fb3"
        title: "Model X"
        brand: "Tesla"
        price: "200000"
        age: 20
        owner_id: "601a69e12d62a11f149354e5"
    ) {
        title
        brand
        _id
    }
}

mutation {
    deleteCar(id: "601e628bf1940545680c78e9") {
        _id
    }
}
```

## Issue & Pending

-   Mutation

    -   Owner
    -   Service

-   Seed Not Working
