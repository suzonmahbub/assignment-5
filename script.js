const subtraction = 6;

document.getElementById('completed-btn').addEventListener('click',function(){
    if(subtraction === 6){
        alert("Board updated Successfully");
        subtraction ++
    } 
    else{
        console.log("something ronge")
    }
})
