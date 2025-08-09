

try {
    function students() {
        console.lag("Student 1");
        console.lag("Student 1");
        console.lag("Student 1");
        console.lag("Student 1");
    }
    students();
}
catch (error) {
    console.error(error);
}
function message() {
    setTimeout(function () {
        console.log("You have successfully reached the end of the programm");
        console.log("This message will display after 5 seconds");
    }, 5000);
}
message();