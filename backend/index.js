import http from "http";
import "dotenv/config";
import { faker } from "@faker-js/faker";

const PORT = process.env.PORT || 5000;
http
  .createServer((req, res) => {
    //   console.log({ req, res });
    if (req.url === "/api/product" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });

      function createRandomDataSet(numberOfRows) {
        const rows = [];
        for (let i = 1; i <= numberOfRows; i++) {
          rows.push({
            id: i,
            name: faker.name.findName(),
            productName: faker.commerce.product(),
            email: faker.internet.email(),
            image: faker.image.food(null, null, true),
            price: faker.commerce.price(100, 200, 0, "$"),
            commit: faker.git.commitMessage(),
            number: faker.datatype.number({
              min: 500,
              max: 10000,
              precision: 50,
            }),
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
// console.log(`server is running on localhost:${PORT}`);
