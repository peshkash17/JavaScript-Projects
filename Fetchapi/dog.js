let p = fetch("https://catfact.ninja/fact");
p.then((value1) => {
    return value1.json()

}).then((value2) =>{

    console.log(value2)
}) 