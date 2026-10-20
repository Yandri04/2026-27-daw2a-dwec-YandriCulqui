let x = Math.floor(Math.random() * 256) ;
let y = Math.floor(Math.random() * 256) ;
let z = Math.floor(Math.random() * 256) ;



document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";

console.log(`RGB (${x},${y},${z})`)