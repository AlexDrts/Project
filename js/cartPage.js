let cart =
  JSON.parse(localStorage.getItem("cart")) || [];

const cartItems =
  document.getElementById("cartItems");

const total =
  document.getElementById("total");

let sum = 0;

cart.forEach(item => {

  const div = document.createElement("div");

  div.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.price}</p>
    `;

  cartItems.append(div);

  sum += parseInt(item.price);
});

total.textContent = `Разом: ${sum} грн`;
