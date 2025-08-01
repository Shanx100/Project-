const searchresults = document.querySelector(".search-results");
let avilablekeywords = [
    "Naruto",
    "Naruto: Shippuden",
    "One Piece",
    "Bleach",
    "Dragon Ball Z",
    "Dragon Ball Super",
    "Attack on Titan",
    "Demon Slayer",
    "My Hero Academia",
    "Jujutsu Kaisen",
    "Death Note",
    "Fullmetal Alchemist: Brotherhood",
    "Hunter x Hunter",
    "Tokyo Ghoul",
    "Sword Art Online",
    "Fairy Tail",
    "Black Clover",
    "Blue Lock",
    "Vinland Saga",
    "Chainsaw Man",
    "Mob Psycho 100",
    "The Seven Deadly Sins",
    "One Punch Man",
    "Dr. Stone",
    "Fire Force",
    "Erased",
    "Code Geass",
    "Steins;Gate",
    "Spy x Family",
    "Re:Zero",
    "Noragami",
    "Parasyte",
    "Akame ga Kill!",
    "Psycho-Pass",
    "The Rising of the Shield Hero",
    "Made in Abyss",
    "Berserk",
    "Claymore",
    "JoJo’s Bizarre Adventure",
    "Gintama",
    "Kaguya-sama: Love is War",
    "Your Lie in April",
    "Clannad",
    "Toradora!",
    "Horimiya",
    "Anohana",
    "The Promised Neverland",
    "Hellsing",
    "Fate/Zero",
    "Kill la Kill",
    "Solo Levelling",
    "Death Note",
    "Blood Eyes",
    "Cyberpunk Edgerunners"
]
let search = document.getElementById("search");
const Button = document.getElementById("Button");
let filterdkeywords = [];

search.onkeyup = function () {
    const input = search.value;
    if (input.length) {
        filterdkeywords = avilablekeywords.filter((keyword) => {
            if (keyword.toLowerCase().includes(input.toLowerCase())) {
                return keyword;
            }
        })
    }
    display(filterdkeywords);
    if (!filterdkeywords.length) {
        searchresults.innerHTML = "";
    }

}
function display(filterdkeywords) {
    const content = filterdkeywords.map((list) => {
        return `<li onclick=selectInput(this)>` + list + `</li>`
    })
    searchresults.innerHTML = `<ul>` + content.join("") + `</ul>`;
}
function selectInput(list) {
    search.value = list.innerHTML;
    searchresults.innerHTML = "";
}

Button.onclick = function () {
    search.value = "";
}

function scrollintoSection() {
    document.getElementById("Anime").scrollIntoView({ behaviour: "smooth" });

}

const animeCharacters = [
    "Naruto Uzumaki",
    "Sasuke Uchiha",
    "Sakura Haruno",
    "Kakashi Hatake",
    "Itachi Uchiha",
    "Monkey D. Luffy",
    "Roronoa Zoro",
    "Nami",
    "Sanji",
    "Portgas D. Ace",
    "Goku",
    "Vegeta",
    "Gohan",
    "Trunks",
    "Frieza",
    "Ichigo Kurosaki",
    "Rukia Kuchiki",
    "Uryu Ishida",
    "Renji Abarai",
    "Byakuya Kuchiki",
    "Eren Yeager",
    "Mikasa Ackerman",
    "Armin Arlert",
    "Levi Ackerman",
    "Erwin Smith",
    "Tanjiro Kamado",
    "Nezuko Kamado",
    "Zenitsu Agatsuma",
    "Inosuke Hashibira",
    "Kyojuro Rengoku",
    "Light Yagami",
    "L (Lawliet)",
    "Ryuk",
    "Rem",
    "Edward Elric",
    "Alphonse Elric",
    "Roy Mustang",
    "Winry Rockbell",
    "Saitama",
    "Genos",
    "Tatsumaki",
    "Boruto Uzumaki",
    "Sarada Uchiha",
    "Killua Zoldyck",
    "Gon Freecss",
    "Hisoka",
    "Kurapika",
    "Shoto Todoroki",
    "Izuku Midoriya",
    "Katsuki Bakugo"
];
const lastButton = document.getElementById("last-btn");
const Wordresult = document.getElementById("Wordresult");
const sound = document.getElementById("sound");

lastButton.onclick = function () {
    update();
    setInterval(update, 3000);
    sound.currentTime = 0;
    sound.loop = true;
    sound.play();

}
lastButton.display = "none";

function update() {
    let word = "";
    for (let i = 0; i < 1; i++) {
        const randomindex = Math.floor(Math.random() * animeCharacters.length);
        word += animeCharacters[randomindex];
    }
    Wordresult.textContent = word;

}
