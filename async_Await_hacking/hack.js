
 function hackProgram() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve ("Initializing Hack program.....")
         }, 2000);
       
    })
 }

 function userName()
 {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             resolve("Hacking Ashish userName.....")
            
         }, 2000);
        
    }) 
 }
 function found_userame()
 {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("USername  found Ashish17.....")
           }, 2000);
          
    })
 }

function connecting(){
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve("Connecting to facebook.....")
         }, 2000);
         
    })
}

async function hackingProgram()
{
    document.getElementById("hack").innerHTML= await hackProgram()
    document.getElementById("hack").innerHTML += "<br>" + await userName()
    document.getElementById("hack").innerHTML += "<br>" + await found_userame()
    document.getElementById("hack").innerHTML += "<br>" + await connecting()
}

hackingProgram();
