const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement, getElementByAuthor, addElement } = require("./utils");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));

app.get("/api/quotes/random", (req, res, next) => {
  const randomQ = getRandomElement(quotes);
  res.send({
    quote: randomQ,
  });
});

app.get("/api/quotes", (req, res, next) => {
  const author = req.query.person;
  if (author) {
    const updatedArr = getElementByAuthor(quotes, author);
    res.send({
      quotes: updatedArr,
    });
  } else {
    res.send({
      quotes: quotes,
    });
  }
});

app.post("/api/quotes", (req, res, next) => {
  const author = req.query.person;
  const quote = req.query.quote;

  if (author && quote) {
    addElement(quotes, author, quote);
    const newQoute = quotes[quotes.length - 1];

    res.send({
      quote: newQoute,
    });
  } else {
    res.status(404).send();
  }

  //   if (author) {
  //     const updatedArr = getElementByAuthor(quotes, author);
  //     res.send({
  //       quotes: updatedArr,
  //     });
  //   } else {
  //     res.send({
  //       quotes: quotes,
  //     });
  //   }
});

app.listen(PORT, () => {
  console.log("listening");
});
