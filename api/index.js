var express = require('express');
var app = express();
const env = require('dotenv');

env.config();

const port = 3001;
const productsRouter = require('../router');

// (async () => {
//   const products = await Product.findAll();
//   // console.log("All products:", JSON.stringify(products, null, 2));
//   require('fs').writeFileSync('./out.jpg', products[0].image)
// })();

app.use('/products', productsRouter);
app.use(express.static('client'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
