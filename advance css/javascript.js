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


 (async()=>{
  let raw = await fetch('https://randomuser.me/api/');
  let data = await raw.json();
  console.log(data.results[0].name.first);
 })
 ();