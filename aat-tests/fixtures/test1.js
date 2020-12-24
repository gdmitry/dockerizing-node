import { Selector } from "testcafe";

fixture`Golka`.page`https://golka.com.ua/knitting/knitting-1111/pp--fashion-boucle`;

test("My first test", async (t) => {
  await t
    .click(Selector(".right_links a").nth(1))
    .debug();

    // Use the assertion to check if the actual header text is equal to the expected one
    // .expect(Selector("#article-header").innerText)
    // .eql("Thank you, John Smith!");
});
