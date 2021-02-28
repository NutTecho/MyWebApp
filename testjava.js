// let box1 = document.getElementsByClassName('box1');
// for(let i = 0; i < box1.length ; i++)
// {
//     box1[i].innerHTML = "this is halloween";
// }


// let box1 = document.querySelectorAll('.box1')
// box1.forEach((x) => {
//     x.innerHTML = "this is varentile";
//  });

let body = document.body;
let box1 = document.querySelector('.box1');
let but1 = document.querySelector('.but1');

but1.addEventListener('click',() => {
    if(box1.style.display === 'none')
    {
        box1.style.display = 'block';
    }
    else
    {
      box1.style.display = 'none';  
    }
    body.classList.toggle('dark-theme');
})






// let fruits = ["apple","banana","grave","coconut","mango","orange"];
// let score = [10,20,30,40,50,60,70,80,90];
// console.log(fruits)
// for(let i = 0;i < score.length; i++)
// {
//     console.log(fruits[i])
// }

// score.forEach((x,index) => 
// {
//     if(x > 50){ console.log(index + ':' + x.toString()) }
// });

// let getmap = score.map((x) => {
//      if(x >= 50)
//      {
//          return "pass"
//      } 
//      return "fail"
//     });
// console.log(getmap);

// let filterpass = score.filter((x) => {
//     return x >= 50;
// });
// console.log(filterpass);

// let sumscore = score.reduce((sum,x) =>{
//     return sum + x;
// });
// console.log(sumscore)

//find first data in array 
// if found data return data i array
// if not found return undefine 
// let findx = fruits.find((x) => {
//     return x = "apple";
// })
// console.log(findx)

// if found data return index in array
// if not found return -1 
// let findx = fruits.findIndex((x) => {
//     return x = "apple";
// })
// console.log(findx)


// if every data in array true return true
// else return false
// let findx = score.every((x) => {
//     return x > 50;
// })
// console.log(findx)

// if one data in array true return true
// else return false
// let findx = score.some((x) => {
//     return x >= 50;
// })
// console.log(findx)

//let player = {name:"tony",power:"beam",rank:5,money:100,talk() { console.log( this.name + ' is iron man!')}}
// let hero = [{name:"tony",power:"beam",rank:5,money:100},
//             {name:"vision",power:"gem",rank:4,money:20},
//             {name:"steve",power:"shield",rank:2,money:30},
//             {name:"peter",power:"reflex",rank:3,money:50},
//             {name:"bruce",power:"punch",rank:1,money:60}]
// hero.forEach((x) => {
//     console.log(x.name+','+x.power)
// })
//player.talk();

// function Player(name,power,rank,money)
// {
//     this.name = name;
//     this.power = power;
//     this.rank = rank;
//     this.money = money;
//     this.talk = function()
//     {
//         console.log( this.name + ' is iron man!');
//     }
// }

// let player1 = new Player("tony","beam",5,100);
// let player2 = new Player("vision","gem",4,20);
// console.log(player1);
// player1.talk();