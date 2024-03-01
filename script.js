let button = document.getElementById("btn");
let colorText = document.querySelector(".color")

let hex = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "D",
    "E",
    "F"
]

button.addEventListener("click",() => {
    // alert("clicked")

let hexColor = genrateHexColor();
document.body.style.backgroundColor = hexColor;
colorText.textContent = hexColor;
})


let genrateHexColor = () => {
    let hexColor = '#';


    for (let i = 0;i<6; i++){
        hexColor += hex[genrateRandomNumber()]
    }

   return hexColor;

}

let genrateRandomNumber = () => {
    return Math.floor(Math.random() * hex.length)
}
