
const btn=document.getElementById("addBtn");
btn.addEventListener('click', (event)=>{
    
    const fname=document.getElementById('firstName');
    const lname=document.getElementById('lastName');
    const indexNum=document.getElementById('index');
    
    
    const newRow=document.createElement('tr');
    newRow.innerHTML=`
       <td>${fname.value}</td>
       <td>${lname.value}</td>
       <td>${indexNum.value}</td>
    `;


    const table=document.getElementById('studentsTable');
    table.appendChild(newRow);
});