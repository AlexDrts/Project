let cart =
  JSON.parse(localStorage.getItem("cart")) || [];

const cartItems =
  document.getElementById("cartItems");

const total =
  document.getElementById("total");

let sum = 0;

cart.forEach((item, index) => {

  const div = document.createElement("div");

  div.innerHTML = `
  <h3>${item.name}</h3>
  <p>${item.price}</p>
  <button class="delete-btn">Видалити</button>
`;

  const deleteBtn = div.querySelector(".delete-btn");

  deleteBtn.addEventListener("click", () => {

    cart.splice(index, 1);

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    location.reload();
  });

  cartItems.append(div);

  const price = Number(
    item.price.replace(/\s/g, "").replace("грн", "")
  );

  sum += price;
});

total.textContent = `Разом: ${sum.toLocaleString()} грн`;

function createOrder(orderId) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      if (Math.random() < 0.1) {
        reject("Замовлення загубив менеджер");
        return;
      }

      resolve(`Замовлення створено: ${orderId}`);

    }, 1000);

  });
}

function processOrder(orderId) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      if (Math.random() < 0.1) {
        reject("Помилка під час обробки замовлення");
        return;
      }

      resolve(`Замовлення оброблено: ${orderId}`);

    }, 2000);

  });
}

function deliverOrder(orderId) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      if (Math.random() < 0.1) {
        reject("Замовлення загубила служба доставки");
        return;
      }

      resolve(`Замовлення доставлено: ${orderId}`);

    }, 3000);

  });
}

const form = document.getElementById("orderForm");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  const name =
    document.getElementById("name").value.trim();

  const phone =
    document.getElementById("phone").value.trim();

  const email =
    document.getElementById("email").value.trim();

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

  const orderId = Date.now();

  createOrder(orderId)
    .then(result => {
      console.log(result);
      return processOrder(orderId);
    })
    .then(result => {
      console.log(result);
      return deliverOrder(orderId);
    })
    .then(result => {
      console.log(result);
      alert("Замовлення успішно доставлено!");
    })
    .catch(error => {
      console.error(error);
      alert(error);
    });

});
