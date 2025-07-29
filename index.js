const avilablekeywords = [
  "The Dark Knight",
  "Avengers: Endgame",
  "Spider-Man: No Way Home",
  "Iron Man",
  "Black Panther",
  "Captain America: The Winter Soldier",
  "Wonder Woman",
  "Thor: Ragnarok",
  "Doctor Strange",
  "Guardians of the Galaxy",
  "Man of Steel",
  "Deadpool",
  "The Avengers",
  "Shazam!",
  "Ant-Man",
  "The Incredible Hulk",
  "Justice League",
  "X-Men: Days of Future Past",
  "Batman Begins",
  "Eternals"
];
const resultbox = document.getElementById("Display");
const search = document.getElementById("Search");
const Button = document.getElementById("Button");


search.onkeyup = function () {
  let results = [];
  let input = search.value;

  if (input.length) {
    results = avilablekeywords.filter((keyword) => {
      if (keyword.toLowerCase().includes(input.toLowerCase())) {
        return keyword;
      }
    }

    )
  }
  display(results);



}
function display(results) {
  const content = results.map((list) => {
    return `<li onclick=selectinput(this)>` + list + `</li>`
  })
  resultbox.innerHTML = `<ul>` + content.join("") + `</ul>`;
}

function selectinput(list) {
  search.value = list.innerHTML;
  resultbox.innerHTML = "";
}

Button.onclick = function () {
  search.value = "";
}
