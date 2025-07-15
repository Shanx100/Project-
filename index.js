let avilableKeywords = [
    "Naruto",
    "One Piece",
    "Attack on Titan",
    "Death Note",
    "Fullmetal Alchemist: Brotherhood",
    "Dragon Ball Z",
    "My Hero Academia",
    "Demon Slayer",
    "Jujutsu Kaisen",
    "Hunter x Hunter",
    "Bleach",
    "Sword Art Online",
    "Tokyo Ghoul",
    "One Punch Man",
    "Black Clover",
    "Haikyuu!!",
    "Fairy Tail",
    "Code Geass",
    "Steins;Gate",
    "Mob Psycho 100",
    "JoJo's Bizarre Adventure",
    "Re:Zero",
    "The Promised Neverland",
    "Dr. Stone",
    "Blue Exorcist",
    "Noragami",
    "Cowboy Bebop",
    "Your Lie in April",
    "Violet Evergarden",
    "Danganronpa"
]

const Inputbox = document.getElementById("Inputbox");
const resultbox = document.querySelector('.resultbox');

Inputbox.onkeyup = function () {
    input = Inputbox.value;
    let result = [];

    result = avilableKeywords.filter((keyword) => {
        return keyword.toLowerCase().includes(input.toLowerCase());
    })
    display(result);


}
function display(result) {
    const content = result.map((list) => {
        return "<li onclick=selectitem(this)>" + list + "</li>"
    })
    resultbox.innerHTML = "<ul>" + content.join('') + "</ul>";

}
function selectitem(list) {
    Inputbox.value = list.innerHTML;
    resultbox.innerHTML = "";
}
