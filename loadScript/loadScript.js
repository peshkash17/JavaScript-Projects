// function loadScript(src,callback) {
//     let Script = document.createElement("script");
//     Script.src = src;
//     Script.onload = function() {console.log("script is loaded");
//     callback();
//      }
//     document.body.appendChild(Script);
// }

// function hello() {
//     alert("script is loaded");
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",hello);
// function loadScript=(src){
//     return new Promise((resolve, reject) => {
//         console.log("script loading.....");
//        setTimeout(() => {
//         let script = document.createElement("script");
//         script.src = src;
//         script.onload = console.log("script loaded");
//        document.body.appendChild(script);
//         }, 3000);
//         resolve(src + "done succses");
       
//     })
// }
// let a =loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js");
// a.then((value1) => {
//      console.log(value1)
// })

// const loadScript = async(src) => {
//     return new Promise((resolve, reject) => {
//         console.log("script loading.....");
//        setTimeout(() => {
//         let script = document.createElement("script");
//         script.src = src;
//         script.onload = console.log("script loaded");
//        document.body.appendChild(script);
//         }, 3000);
//         resolve(src + "done succses");
       
//     })
// }
//  const main2 = async()=>{
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js")
//     console.log(a);
//  }

//  main2();
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("your promise has been rejected"))
    }, 3000);
})

let a = async() => {
    try {
        let c = await p;
        console.log(c);
    } catch (error) {
        console.log("this error has been handled");
    }
}
a();