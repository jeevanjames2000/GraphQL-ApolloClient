const express = require("express");
const app = express();
const port = 5000;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schemas/index");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(
  "/",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
