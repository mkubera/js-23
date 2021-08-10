const catsDOM = document.querySelector("#cats");
const btnTest = document.querySelector("#btn-test");

const cats = [
  // {id, width, height, url}
  {
    height: 924,
    id: "U-B3L9JWm",
    url: "https://cdn2.thecatapi.com/images/U-B3L9JWm.jpg",
    width: 1395,
  },
];

const url = "https://api.thecatapi.com/v1/images/search";

fetch(url)
  .then((data) => data.json())
  .then((data) => {
    // 01 prepare data
    const newCat = {
      id: data[0].id,
      width: data[0].width,
      height: data[0].height,
      url: data[0].url,
    };

    // 02 add new cat to local array of cats
    cats.push(newCat);

    // DOM
    // 03 show the cat to the user
    // const img = document.createElement("img");
    // img.setAttribute("src", newCat.url);
    // img.setAttribute("width", newCat.width / 2);
    // img.dataset.id = newCat.id;
    // catsDOM.appendChild(img);

    console.log(cats);
    renderCats();
  })
  .catch((err) => console.log(err));

// btnTest.addEventListener("click", (e) => {
//   const id = cats[0].id;
//   const catDOM = document.querySelector(`#cats img[data-id="${id}"]`);
//   catDOM.setAttribute("style", "border: 5px solid red");
// });

function renderCats() {
  // 01 reset (delete) cats in DOM
  catsDOM.innerHTML = "";

  // 02 render (add) all cats in DOM
  cats.forEach((cat) => {
    const img = document.createElement("img");
    img.setAttribute("src", cat.url);
    img.setAttribute("width", cat.width / 2);
    img.dataset.id = cat.id;
    catsDOM.appendChild(img);
  });
}
