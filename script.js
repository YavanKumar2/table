const buttonDiv=document.getElementById('button')
const tableDiv=document.getElementById('table')

const students=["Anakin","Obi-Wan","Luke","Leia"]

buttonDiv.onclick=()=>{
    let x=`<table>`
    for(var i=0;i<students.length;i++) {
        x+=`<tr><td>${i+1}</td><td>${students[i]}</td></tr>`
    }
    x+=`</table>`
    tableDiv.innerHTML= x
   
    
}
const buttonHide=document.getElementById('hide')
buttonHide.onclick = () => {
    tableDiv.innerHTML=''
    x=''
}

