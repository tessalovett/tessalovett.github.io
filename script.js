/* color change button one */
const colorBtn = document.getElementById('colorBtn');
colorBtn.addEventListener('click', colors);
function colors(){
    /*changes backgroundcolor*/
    document.body.style.backgroundColor = "#5D768C";

    //changing lower menu colors
    const menu2 = document.getElementsByClassName('menu1');
    for (let i = 0; i < menu2.length; i++){
        document.getElementsByClassName('menu1')[i].style.backgroundColor = "#BFB8BD";
        document.getElementsByClassName('menu1')[i].style.color = "#401612";
    }
    //changing headers colors
    const header = document.getElementById('header');
    const header1 = document.getElementById('h1');
    const header2 = document.getElementById('h2');
    header.style.backgroundColor = "transparent";
    header.style.color = "#401612"
    header1.style.backgroundColor = "#BFB8BD";
    header2.style.backgroundColor = "#BFB8BD";

    //changes menu with descriptions
    const topMenu = document.getElementById('menu2');
    const topMenuItems = document.getElementsByClassName('menucontaineritems');
    topMenu.style.backgroundColor = "#BFB8BD";
    topMenu.style.color = "#8C7474";
    for (let i =0; i < topMenuItems.length; i++){
        topMenuItems[i].style.backgroundColor = "#401612";
        document.getElementsByTagName('a')[i].style.color = "#8C7474";
    }

    //changes forms colors
    const formBtn = document.getElementById('contactBtn');
    const form = document.getElementById('contactForm');
    const subBtn = document.getElementById('submitBtn');
    formBtn.style.backgroundColor = "#401612";
    formBtn.style.color = "#8C7474";
    form.style.backgroundColor = "#401612";
    form.style.color = "#8C7474";
    subBtn.style.backgroundColor = "#401612";
    subBtn.style.color = "#8C7474";
} 



/* color change button two */
const colorBtn2 = document.getElementById('colorBtn2');
colorBtn2.addEventListener('click', color2);

function color2(){
    /*changes backgroundcolor*/
    document.body.style.backgroundColor = "#400101";
     //changing lower menu colors
     const menu2 = document.getElementsByClassName('menu1');
     for (let i = 0; i < menu2.length; i++){
         document.getElementsByClassName('menu1')[i].style.backgroundColor = "#260101";
         document.getElementsByClassName('menu1')[i].style.color = "#3D5E73";
     }

     //changing headers colors
     const header = document.getElementById('header');
     const header1 = document.getElementById('h1');
     const header2 = document.getElementById('h2');
     header.style.backgroundColor = "transparent";
     header.style.color = "#3D5E73";
     header1.style.backgroundColor = "#260101";
     header2.style.backgroundColor = "#260101";

     //changing description menu colors
     const topMenu = document.getElementById('menu2');
     const topMenuItems = document.getElementsByClassName('menucontaineritems');
     topMenu.style.backgroundColor = "#400101";
     topMenu.style.color = "#400101";
     for (let i =0; i < topMenuItems.length; i++){
         topMenuItems[i].style.backgroundColor = "#3D5E73";
         document.getElementsByTagName('a')[i].style.color = "#400101";
     }

     //changing form colors
     const formBtn = document.getElementById('contactBtn');
     const form = document.getElementById('contactForm');
     const subBtn = document.getElementById('submitBtn');
     formBtn.style.backgroundColor = "#A60303";
     formBtn.style.color = "#260101";
     form.style.backgroundColor = "#3D5E73";
     form.style.color = "#260101";
     subBtn.style.backgroundColor = "#A60303";
     subBtn.style.color = "#400101";
}

//back to original color scheme
const ogBtn = document.getElementById('og');
ogBtn.addEventListener('click', removeListeners);
function removeListeners(){
    window.location.reload();
    return false;
}



/* form */
// button that opens form
const formBtn = document.getElementById('contactBtn');
//form container
const contactForm = document.getElementById('contactForm');

//event that shows form when form button is clicked
formBtn.addEventListener('click', showForm);
function showForm(){
    contactForm.style.visibility = "visible";
    formBtn.style.visibility = "hidden";
}
//event for validating form
const subBtn = document.getElementById('submitBtn');
subBtn.addEventListener('click', formValidate);
function formValidate(event){ 
    event.preventDefault();

    //form variables
    const first = document.getElementById('firstInput');
    const last = document.getElementById('lastInput');
    const email = document.getElementById('emailInput');
    const phone = document.getElementById('phoneInput');
    const check = document.getElementById('favColorInput');
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (!first.value || !last.value || !email.value || !phone.value) {
        //check if input is filled
        alert('Please Fill All Input Fields');
    } else if (!email.value.match(emailPattern)){ 
        //check email 
        alert('Invalid Email');
    } else if (!check.checked){ 
        //check a favourite color is checked
        alert('Please Fill All Input Fields');
    } else if (isNaN(phone.value)) { 
        //phone number is greater than 1 and less than 10
        alert('Invalid Phone Number');
    } else {
        //input successful, send notification and hide input again
        //notfication sent when form submitted successfully
        if(!("Notification" in window)){
            alert("Browser does not support system notification");
        } else if (Notification.permission === "granted"){
            //create new notification
            const notifySub = new Notification("Thank You!");
        } else if (Notification.permission !== "denied"){
            //request permission is permission isn't already granted
            Notification.requestPermission().then(permission => {
                //if users accepts...
                if (permission === "granted"){
                    const notification = new Notification("Thank You!);")
                }
            })
        } else {
            alert("Thank You!");
        }
        //hides form again and shows contact me button
        contactForm.style.visibility = "hidden";
        formBtn.style.visibility = "visible";
    }
}






