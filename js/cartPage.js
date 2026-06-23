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

  const price = Number(
    item.price.replace(/\s/g, "").replace("грн", "")
  );

  sum += price;
});

total.textContent = `Разом: ${sum} грн`;

const form = document.getElementById("orderForm");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name.length < 2) {
    alert("Введіть коректне ім'я");
    return;
  }

  if (phone.length < 10) {
    alert("Введіть коректний телефон");
    return;
  }

  if (!email.includes("@")) {
    alert("Введіть коректний email");
    return;
  }

  const orderData = {
    name,
    phone,
    email,
    city: document.getElementById("city").value,
    delivery:
    document.querySelector(
      'input[name="delivery"]:checked'
    ).value,
    gift:
    document.getElementById("gift").checked,
    insurance:
    document.getElementById("insurance").checked
  };

  console.log("Замовлення:");
  console.log(orderData);

  alert("Замовлення успішно оформлено!");
});
