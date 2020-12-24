import { Selector } from "testcafe";

fixture`Golka`
  .page`https://golka.com.ua/knitting/knitting-1111/pp--fashion-boucle`;

test("Save products", async (t) => {
  const productItems = await Selector(".product-grid .list_item");

  const count = await productItems.count;
  const products = [];
  for (var i = 0; i < count; i++) {
    const item = await productItems.nth(i);
    const name = await item.find(".name").innerText;
    const imageUrl = await item.find(".image img").getAttribute('src');
    const description = await item.find(".description").innerText;
    const price = await item.find(".price").innerText;
    const quantity = await item.find(".qty b").exists ? await item.find(".qty b").innerText : 0;
    products.push({ name, imageUrl, description, price, quantity });
  }
  console.log("Products on page:", products);
});
