const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    const card = button.parentElement;

    const product = {
      name: card.querySelector("h3").textContent,
      price: card.querySelector(".price").textContent
    };

    let cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    document.cookie =
      "cart=" +
      encodeURIComponent(JSON.stringify(cart)) +
      "; max-age=604800; path=/";

    alert("Товар додано у кошик");
  });
});

const container = document.querySelector(".container");

fetch("https://fakestoreapi.com/products/category/electronics")
  .then(response => response.json())
  .then(products => {

    products.forEach(product => {

      const card = document.createElement("div");
      card.classList.add("card");

      const price = Math.round(product.price * 40);

      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p class="price">${price} грн</p>
        <button>У кошик</button>
      `;

      const button = card.querySelector("button");

      button.addEventListener("click", () => {

        let cart =
          JSON.parse(localStorage.getItem("cart")) || [];

        cart.push({
          name: product.title,
          price: `${price} грн`
        });

        localStorage.setItem(
          "cart",
          JSON.stringify(cart)
        );

        document.cookie =
          "cart=" +
          encodeURIComponent(JSON.stringify(cart)) +
          "; max-age=604800; path=/";

        alert("Товар додано у кошик");
      });

      container.append(card);
    });

  })
  .catch(error => {
    console.error("Помилка:", error);
  });
