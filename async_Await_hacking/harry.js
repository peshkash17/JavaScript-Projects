let array = [
    "Initializing Hack tool......",
"Connecting to Facebook.......",
"Connecting to server 1........",
"Connection failed. Retrying...",
"Connecting to server 2....",
"Connected Successfully...",
"Username iamharry..........",
"Trying Brute Force.......",
"200K passwords tried...",
"Match not found.........",
"Another 200K passwords tried...",
"Match finally  found......"
];

const Sleep= async (seconds)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(true)
        }, seconds * 1000);
    })

}

const showHack = async (array)=>{
    await Sleep(2)
    hack.innerHTML = hack.innerHTML + array + "<br>"
}
(async ()=>{
    for(let i=0;i<array.length;i++)
    {
        await showHack(array[i])
       
    }
})()