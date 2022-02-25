// let p = new Promise(
//     (resolve, reject)=>{
//         let a = 1+1
//         if(a == 2){
//             resolve("success")
//         }
//         else{
//             reject("failed")
//         }
// })

// p.then((message)=>{
//     console.log("We are in the then " + message)
// }).catch((message)=>{
//     console.log("We are in the catch " + message)
// })

// function checkName() {
//     let userName = new Promise(
//         (resolve, reject)=>{
//             let un = document.getElementById("textBox").value
//             if(un.length>2){
//                 resolve(un)
//             }
//             else{
//                 reject(un)
//             }
//         })

//     userName.then((message)=>{
//         console.log(message + ", your name worked")
//     }).catch((message)=>{
//         console.log("404 error: name needs to be at least 3 characters long, sorry " + message)
//     })
// }

// let btn = document.getElementById("button")
// btn.addEventListener("click", checkName)




var pokeName = document.getElementById("pokeName")
var pokeType = document.getElementById("pokeType")
var pokeNum = document.getElementById("pokeNum")
var pokeWeight = document.getElementById("pokeWeight")
var pokeHeight = document.getElementById("pokeHeight")
var pokeAbility1 = document.getElementById("pokeAbility1")
var pokeAbility2 = document.getElementById("pokeAbility2")
var frontPoke = document.getElementById("frontPoke")
var backPoke = document.getElementById("backPoke")
var pokeTextLookup = document.getElementById("textBox")

function pokeDex() {
    //get the data from url and/or api
fetch('https://pokeapi.co/api/v2/pokemon/' + pokeTextLookup.value)
//use .then to handle the response/reject promise
.then((res)=>{
    return res.json()
})
.then((data)=>{
    
    if(data.types.length>1){pokeType.textContent ="Type: " + data.types[0].type.name + " and " + data.types[1].type.name}
    else
    {pokeType.textContent = "Type: " + data.types[0].type.name}
    
    if(data.abilities.length > 1){pokeAbility2.textContent=('Ability 2: ' + data.abilities[1].ability.name)}
    else{pokeAbility2.textContent= 'Ability 2: None'}
        
    pokeName.textContent = "Pokemon Name: " + data.name
    pokeNum.textContent = "Pokemon ID: " + data.id
    pokeWeight.textContent = "Pokemon Weight: " + data.weight + " lbs"
    pokeHeight.textContent = "Pokemon Height: " + (data.height)*10 + " cm"
    pokeAbility1.textContent = "Ability 1:" + data.abilities[0].ability.name
    
    
    frontPoke.setAttribute("src", `${data.sprites.front_default}`)
    backPoke.setAttribute("src", `${data.sprites.back_default}`)
})
}

let btn = document.getElementById("button")
btn.addEventListener("click", pokeDex)