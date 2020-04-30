async function getRegistrationList(){
    console.log("here")
    const responseStream = await fetch('http://localhost:3000/list/');
    const rowsData = await responseStream.json();
    let rows = "";
    for(let i=0;i<rowsData.length; i++){
        const item = rowsData[i];
        rows = rows + `
        <tr>
        <td>${item.name}</d>
        <td>${item.college}</d>
        <td>${item.department}</d>
        <td>${item.email}</d>
        </tr>
        `
    }
    document.querySelector("#registration-list").innerHTML = rows;
    
}

const getListButton = document.querySelector("#getlist");
getListButton.addEventListener("click", getRegistrationList);

