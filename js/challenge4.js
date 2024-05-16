function challenge4(){
    console.log("here");

    nameField = document.querySelector("#name").value;

    addrField = document.querySelector("#addr").value;

    nameError = document.querySelector("#nameError");

    addrError = document.querySelector("#addrError");

    if (nameField.length == 0) {
        nameError.classList.remove("errormsg")

    }
    else {
        nameError.classList.add("errormsg")
    }

    if (addrField.length == 0) {
        addrError.classList.remove("errormsg");
    } else {
        addrError.classList.add("errormsg");
    }

    if (nameField.length == 0 || addrField.length == 0) {
        e.preventDefault();
    }
}