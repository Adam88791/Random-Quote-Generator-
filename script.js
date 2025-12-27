let button = document.querySelector(".button");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const quoteLeftIcon = document.querySelector(".fa-quote-left");
const quoteRightIcon = document.querySelector(".fa-quote-right");
const clickText = document.querySelector(".click");


button.onclick = () => {
    getQuote();
    quoteLeftIcon.classList.remove("hide");
    quoteRightIcon.classList.remove("hide");
    clickText.style.display = "none";
}

async function getQuote() {
    const response = await fetch(`https://dummyjson.com/quotes/random`);
    const data = await response.json();
    console.log(data);
    quoteText.textContent = data.quote;
    authorText.textContent = data.author;

    authorText.dataset.author = data.author;

}

authorText.addEventListener("click", () => {
    const authorName = authorText.dataset.author;
    if (!authorName) return;

    const url = `https://www.google.com/search?q=${(authorName)}`;
    window.open(url, "_blank");
});

