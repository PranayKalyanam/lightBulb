
let btn = document.getElementById('toggleBtn')  //selecting our button(must have id)
let bulb = document.getElementById('Bulb')  //selecting our image by id
btn.addEventListener('click', toggleBulb)   //adding event listener: like:- onlick event

function toggleBulb(e) {                  //e is event
    if (btn.textContent.includes('On')) {  // if text in button is On then,
        bulb.src = "images/BulbON.png";   // after clicking the button change image in source
        btn.textContent = "Turn Off";    // and chage the text content in button to OFF

    }
    else {
        bulb.src = "images/Bulb-OFF.png";  // write the else condition reverse of above condition
        btn.textContent = "Turn On";
    }

    //you can ignore it
    console.log(e);  // when click on button a message will come in console(it is just for checking)
}
