const temp = document.querySelector("template");
const ul = document.querySelector("ul");



const updateUI = (products) => {
  ul.innerHTML = "";
  products.forEach((product) => {
    const clone = temp.content.cloneNode(true);
    console.log(product);

    const h3 = clone.querySelector("h3");
    const a = clone.querySelector("a");
    const img = clone.querySelector("img");
    const para = clone.querySelector("p");
    const span = clone.querySelector("span");
    const heart = clone.querySelector("#heart");
    const cartNumber = document.getElementById("cart-number");
    const cards = clone.getElementById("cards");
    const numberOfDiscount = clone.getElementById("numberOfDiscount");
    const starRating = clone.getElementById("star-rating");

    let counter = 0;

    if (product.discountPercentage) {
      para.style = `
          text-decoration: line-through;
          opacity: 0.5;
      `;
      span.textContent =
        (
          product.price -
          (product.price * product.discountPercentage) / 100
        ).toFixed(2) + " $";
    }

    img.src = product.thumbnail;

    starRating.textContent = product.rating + "/5";

    h3.textContent = product.title;
    para.textContent = "Old price : " + product.price + " $";

    a.href = `../about/about.html?product=${product.id}`;

    numberOfDiscount.textContent = product.discountPercentage + "% ";

    heart.addEventListener("click", () => {
      heart.classList.toggle("red");
    });
   

    const bosish = () => {
      a.click();
    };
    cards.addEventListener("click", bosish);

    ul.appendChild(clone);
  });
};
