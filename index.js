let avilableKeyords = [
    "HTML",
    "CSS",
    "JavaScript",
    "How to learn programming",
    "How to center a div",
    "React",
    "TypeScript",
    "How to create a website",
    "Frontent Development Courses",
    "Backend Development Courses",
]
const resultbox = document.querySelector('.result-box');
const Inputbox = document.getElementById("Input-box");

Inputbox.onkeyup = function () {
    let result = [];
    let input = Inputbox.value;

    if (input.length) {
        result = avilableKeyords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        })
    }
    display(result);
    if (!result.length) {
        resultbox.innerHTML = "";
    }
}
function display(result) {
    const content = result.map((list) => {
        return "<li onclick=selectinput(this)>" + list + "</li>"
    })
    resultbox.innerHTML = "<ul>" + content.join('') + "</ul>";
}
function selectinput(list) {
    Inputbox.value = list.innerHTML;
    resultbox.innerHTML = "";
}
