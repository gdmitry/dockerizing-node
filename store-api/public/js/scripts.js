async function load() {
  const data = await fetch("http://localhost:3000/products/all", {
    credentials: "include",
  });

  const products = await data.json();

  console.log(products)
  document.getElementById("ItemPreview").src = "data:image/jpg;base64," + products[0].image;
}

load();
