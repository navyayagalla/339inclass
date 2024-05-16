function challenge1(checkbox) {
    let emailChecked = document.querySelector("#subscribe").checked;
    if (emailChecked == true) {
        document.getElementById("emailDiv").style.display = "block";
    } else {
        document.getElementById("emailDiv").style.display = "none";
    }
}
