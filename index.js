let displayText = document.getElementById("display-text");
function inputValueById(id){
    let inputText = document.getElementById(id).value;
    return inputText;
}

function dayFinder(){
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let year = inputValueById("input-text1");
    let month = inputValueById("input-text2");
    let day = inputValueById("input-text3");
    if(year && month && day){
        let date = new Date(year, month - 1, day)
        let getDay = date.getDay();
        displayText.innerText =`This Day Of  ${daysOfWeek[getDay]}`;
    }else{
        displayText.innerText =`Please Give All The Inputs Value`;
    }
}
  