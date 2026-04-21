let modeBtn = document.querySelector("#modeBtn");
let currMode = "light"; // track current state

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        document.querySelector("body").classList.add("dark");
    } else {
        currMode = "light";
        document.querySelector("body").classList.remove("dark");
    }

    console.log("Current mode:", currMode);
});
