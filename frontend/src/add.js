function buttonOnClick(){
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const department = document.querySelector("#department").value;
    const college = document.querySelector("#college").value;
    fetch('http://localhost:3000/register/',{
        method: 'POST',
        body: JSON.stringify({
            name : name,
            email : email,
            department : department,
            college : college,
        })
    })
}


const registerButton = document.querySelector("#register");
registerButton.addEventListener("click",buttonOnClick);

