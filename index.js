const Searchbar = document.getElementById("Searchbar");
const SearchResults = document.getElementById("search-items");
const Button = document.getElementById("button");
const sound = document.getElementById("sound");

let avilablekeywords = [
    "How to code",
    "Learn programming from scratch",
    "Best way to learn coding",
    "HTML for beginners",
    "CSS animations tutorial",
    "JavaScript for beginners",
    "What is an API",
    "How to make a website",
    "Responsive web design",
    "What is a function in JavaScript",
    "Difference between HTML and CSS",
    "How to use GitHub",
    "How to center a div",
    "What is a loop",
    "Fix JavaScript error",
    "Beginner Python project ideas",
    "JavaScript array methods",
    "Async vs defer",
    "Learn React step by step",
    "How to use Flexbox",
    "CSS Grid layout tutorial",
    "Python for absolute beginners",
    "What is recursion",
    "JavaScript DOM manipulation",
    "Top programming languages",
    "Difference between == and ===",
    "JavaScript ES6 features",
    "How to fetch data from API",
    "JSON explained",
    "Create a contact form in HTML",
    "Node.js crash course",
    "What is back-end development",
    "Front-end vs back-end",
    "How to deploy a website",
    "JavaScript function examples",
    "Arrow function in JavaScript",
    "What is local storage",
    "How to debug JavaScript",
    "Web development roadmap",
    "How to install Python",
    "Learn Django for beginners",
    "Best code editor",
    "How to comment in HTML",
    "For loop syntax",
    "What is a variable",
    "JavaScript click event",
    "What is an object in JavaScript",
    "Responsive navbar HTML CSS",
    "How to learn coding fast",
    "JavaScript if else statement",
    "JavaScript vs Python",
    "Best YouTube channels to learn coding",
    "Create calculator using JavaScript",
    "Simple projects for beginners",
    "HTML form validation",
    "What is ReactJS",
    "Learn TypeScript",
    "Difference between var let const",
    "HTML semantic tags",
    "CSS box model explained",
    "Create login page using HTML CSS",
    "How to style input fields",
    "Host website on GitHub Pages",
    "VS Code shortcuts",
    "How to use terminal for coding",
    "Best programming laptops",
    "Responsive image in CSS",
    "What is CRUD in programming",
    "JavaScript map method",
    "What is a framework",
    "Install Node and NPM",
    "Create portfolio website",
    "Build a to-do list app",
    "Git basic commands",
    "Push code to GitHub",
    "Clone GitHub repo",
    "CSS hover effects",
    "JavaScript project ideas",
    "Simple games using JavaScript",
    "Create animated button",
    "CSS transitions and transforms",
    "What is a promise in JavaScript",
    "Learn coding with no experience",
    "Can I learn coding on my own",
    "HTML cheat sheet",
    "JavaScript cheat sheet",
    "How to build a chat app",
    "JavaScript timer tutorial",
    "How to make a search bar",
    "Autocomplete search suggestions",
    "Create countdown timer",
    "Dark mode toggle JavaScript",
    "How to use media queries",
    "Use Google Fonts in CSS",
    "Mobile first design",
    "Best free coding websites",
    "Responsive layout tutorial",
    "Add sound to website",
    "CSS background image tricks",
    "Add video to HTML page",
    "Loading animation with CSS",
    "JavaScript setTimeout example",
    "How to use loops",
    "Learn programming in 30 days",
    "Best coding challenges for beginners",
    "What is full stack development",
    "Front-end project ideas",
    "HTML tags list"
];

let filteredkeywords = [];

Searchbar.onkeyup = function () {
    const input = Searchbar.value;
    filteredkeywords = avilablekeywords.filter((keyword) => {
        if (keyword.toLowerCase().includes(input.toLowerCase())) {
            return keyword;
        }
    })

    let modifiedkeys = filteredkeywords.map((list) => {
        return "<li onclick= selectkey(this)>" + list + "</li>"
    });
    SearchResults.innerHTML = "<ul>" + modifiedkeys.join("") + "</ul>";
    selectkey(list);

}
function selectkey(list) {
    Searchbar.value = list.innerHTML;
    SearchResults.innerHTML = "";
    sound.currentTime = 0;
    sound.play();
}

Button.addEventListener("click", () => {
    Searchbar.value = "";
});
