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

    alert("Товар додано у кошик");
  });
});
