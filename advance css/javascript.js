// let prm = new Promise ((resolve , reject )=>{
//   //LOGIC
//   setTimeout(()=>{
//       resolve();

//   },3000)
// })
  
// prm
// .then(function() {
//     console.log("print")
// })
// .catch(function(){
//     console.log("rejct")
// });


// fetch('https://randomuser.me/api/')
// .then((raw) => raw.json())
// .then((data)=>{
//     console.log(data.results[0].name.first);
// });


//  (async()=>{
//   let raw = await fetch('https://randomuser.me/api/');
//   let data = await raw.json();
//   console.log(data.results[0].name.first);
//  })
//  ();

// sceniaro 1 : Warher Dashboard with error Handling


// async function getWeather(city){
//     let apikey = `e1ffb33de03bdd431636023aa7fdbbac`;
// let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);

// let realdata = await raw.json();
// console.log(realdata)

// }
// getWeather("chennai");

//bulk emalling

const users = [
    "shivam@xxy.com",
    "hello@hsdj.com",
    "why@hello.com"
];

((email)=>{
    return new Promise((resolve,reject)=>{
        let time = Math.floor(Math.random()*5)
      setTimeout(()=>{
        let prob = Math.floor(Math.random() * 10);
        if (prob<=5) {
            resolve("email send")
        }else{
            reject("email not sent")
        }
        
    },time* 1000)
    })
})
("shivam@mail.com")
.then(msg=> console.log(msg))
.catch(err=> console.log(err));