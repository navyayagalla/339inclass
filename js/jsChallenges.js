function challenge3() {
    let standingButtons = document.getElementsByName("standing");
    let gradButtons = document.getElementsByName("gradDate");
    let isCheckedOne = False;
    let isCheckedTwo = False;
    for (let i = 0; i < standingButtons.length; i++){
        if (standingButtons[i].checked){
            isCheckedOne = True;
        }
    }
    for (let j = 0; j < gradButtons.length; j++) {
      if (gradButtons[j].checked) {
        isCheckedTwo = True;
      }
    }
    console.log(isCheckedOne)
    console.log(isCheckedTwo);
    if((isCheckedOne == False) || (isCheckedTwo == False)){
        alert("You didn't fill out one or both of the fields! Both must be selected to move on");
        return False;
    }
    else {
        return True;
    }
}