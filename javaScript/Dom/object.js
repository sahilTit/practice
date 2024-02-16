//  var Devloper =  {
//     name : "sahil",
//     age : 20,
//     hobby : ["Gaming","Anime","Coding","reading"]
//  }
 

//  console.log(Devloper);

function BellBoy (name, permitted , age , language){
    this.name = name;
    this.permitted = permitted;
    this.age = age;
    this.language = language;
    this.speak = function(){
        alert("Speaking in progress...");
    }
} 

// var BellBoy1 = new BellBoy ("Ashish",true,22,["English","hindi","marathi"]);
// var BellBoy2 = new BellBoy ("Shubham",true,21,["Marathi","hindi"]);