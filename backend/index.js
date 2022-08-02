import http from "http";
import "dotenv/config";
import { faker } from "@faker-js/faker";

const PORT = process.env.PORT || 5000;
http
  .createServer((req, res) => {
    //   console.log({ req, res });
    if (req.url === "/api/product" && req.method === "GET") {
      res.writeHead(200, { "Access-Control-Allow-Origin": "*" });

      function createRandomDataSet(numberOfRows) {
        const rows = [];
        for (let i = 1; i <= numberOfRows; i++) {
          rows.push({
            id: i,
            name: faker.name.findName(),
            productName: faker.commerce.product(),
            email: faker.internet.email(),
            image: faker.image.food(null, null, true),
            price: faker.commerce.price(1430, 2250, 0, "$"),
            commit: faker.git.commitMessage(),
            likes: faker.datatype.number({
              min: 0,
              max: 5,
              precision: 2.0,
            }),
            description: faker.commerce.productDescription(),
          });
        }
        return JSON.stringify(rows);
      }
      res.end(createRandomDataSet(100));
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end(`Route not found`);
    }
  })
  .listen(PORT, undefined, undefined, () =>
    console.log(`Server is running at http://localhost:${PORT}`)
  );

// import mysql from "mysql";

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "signupecom",
// });

// connection.connect();
// // const name = "noman";
// // let name = e.targe.name;
// const name = document.getElementsByName(name).values;
// connection.query(
//   `insert into databasee values ("${name}", "${name}","${name}","${name}")`,
//   function (err, results, fields) {
//     if (err) {
//       throw err;
//     }

//     console.log(results);
//     console.log(fields);
//   }
// );

// connection.end();
// console.log(`server is running on localhost:${PORT}`);
// module.exports = { createRandomDataSet };
