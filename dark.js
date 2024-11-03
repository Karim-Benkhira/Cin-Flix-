let darkmode = JSON.parse(localStorage.getItem("darkmode")) || 0;
const darkbtn = document.getElementById("darkbtn");
const lightbtn = document.getElementById("lightbtn");

function Dark(){
    if(document.body.classList.contains("dark-mode") || darkmode === 1){
        document.body.classList.remove("dark-mode");
        darkmode = 0;
        lightbtn.style.display = "none";
        darkbtn.style.display = "block";
    }
    else {
        document.body.classList.add("dark-mode");
        darkmode = 1;
        lightbtn.style.display = "block";
        darkbtn.style.display = "none";

    } 
    localStorage.setItem("darkmode" , JSON.stringify(darkmode))
}
if (darkmode === 1) {
    document.body.classList.add("dark-mode");
    lightbtn.style.display = "block";
    darkbtn.style.display = "none";
}