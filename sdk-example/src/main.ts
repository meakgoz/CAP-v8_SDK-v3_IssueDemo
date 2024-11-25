import express, { Express, Request, Response, Application } from "express";
import fs from "fs";
import moment from "moment";
import BigNumber from "bignumber.js";

import { bookshop } from "./odata-clients/bookshop";
const { booksApi } = bookshop();

import { reviews } from "./odata-clients/reviews";
const { reviewsApi } = reviews();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  console.log("Server is running");

  res.send("Welcome to Express & TypeScript Server");
});

//#region Reviews
app.get("/reviews", async (req: Request, res: Response) => {
  // get reviews using SDK
  const reviewsRequest = reviewsApi.requestBuilder().getAll();
  const reviews = await reviewsRequest.execute({
    url: "http://localhost:4005",
    username: "alice",
    password: "",
    authentication: "BasicAuthentication",
  });

  console.log(reviews);

  res.send(`${reviews.length} reviews found.`);
});

app.get("/post-reviews", async (req: Request, res: Response) => {
  // read from file, and post reviews using SDK
  // const reviewsToPost = JSON.parse(fs.readFileSync('./test-data/reviews.json', 'utf8'));
  const reviewsToPost = JSON.parse(
    fs.readFileSync("./test-data/reviews_copilot-orig.json", "utf8")
  );
  const createReviewsReq = reviewsApi
    .requestBuilder()
    .create(reviewsApi.entityBuilder().fromJson(reviewsToPost[0]));

  const result = await createReviewsReq.execute({
    url: "http://localhost:4005",
    username: "alice",
    password: "",
    authentication: "BasicAuthentication",
  });

  console.log(result);

  res.send("Reviews posted");
});
//#endregion

//#region Books

// WIP didnt finish this
app.get("/books", (req: Request, res: Response) => {
  // get books using SDK
  const booksRequest = booksApi.requestBuilder().getAll();
  const books = booksRequest.execute({
    url: "http://localhost:4004",
    username: "alice",
    password: "",
    authentication: "BasicAuthentication",
  });

  console.log(books);

  res.send("Welcome to Express & TypeScript Server");
});

app.get("/post-books", async (req: Request, res: Response) => {
  const bookEntityToPost = booksApi
    .entityBuilder()
    .title("Test Book")
    .authorId(101)
    .descr("Test Description")
    .price(new BigNumber(100.0))
    .stock(10)
    .testField(moment.utc("2022-12-15 18:00:31.139000000"))
    .build();

  const craeteBookRequest = booksApi
    .requestBuilder()
    .create(bookEntityToPost)
    .skipCsrfTokenFetching();

  const result = await craeteBookRequest.execute({
    url: "http://localhost:4004",
    username: "alice",
    password: "",
    authentication: "BasicAuthentication",
  });

  console.log(result);

  res.send("Book posted");
});

app.get("/post-books2", async (req: Request, res: Response) => {
  // read from file, and post books using SDK
  const bookToPost = JSON.parse(
    fs.readFileSync("./test-data/books.json", "utf8")
  ).Books[0];
  console.log(`created by: ${bookToPost.createdBy}`); // just making sure the correct test data is being used.

  // const bookEntityToPost = booksApi.entityBuilder().fromJson(bookToPost);
  // bookEntityToPost.authorId = 101;
  // bookEntityToPost.testField = moment.utc("2021-09-01T00:00:00Z"); // this doesn't work
  // // bookEntityToPost.testField = moment.utc("2022-12-15 18:00:31.139000000"); // this doesn't work

  // This doesn't work
  const bookEntityToPost = booksApi
    .entityBuilder()
    .title("Test Book")
    .authorId(101)
    .descr("Test Description")
    .price(new BigNumber(100.0))
    .stock(10)
    .testField(moment.utc("2022-12-15 18:00:31.139000000"))
    .build();

  const craeteBookRequest = booksApi
    .requestBuilder()
    .create(bookEntityToPost)
    .skipCsrfTokenFetching();

  const result = await craeteBookRequest.execute({
    url: "http://localhost:4004",
    username: "alice",
    password: "",
    authentication: "BasicAuthentication",
  });

  console.log(result);

  res.send("Book posted");
});

//#endregion

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
