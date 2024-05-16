function challenge2(checkbox) {
    if (checkbox.checked) {
        document.getElementById("home").value =
        document.getElementById("bill").value;
        document.getElementById("home").disabled = true;
    } else {
        document.getElementById("home").value = "";
        document.getElementById("home").disabled = false;
    }
}
