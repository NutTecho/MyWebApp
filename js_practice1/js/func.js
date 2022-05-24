function demo1(a,b)
{
   return a + b; 
}


// arr = [1,2,3,4]
// console.log(demo1(6,5));
// console.log(arr)
// let score = 8;
// if (score >= 10 )
// {
//     console.log("grade A");
// }
// else
// {
//     console.log("grade B");
// }

let but1 = document.getElementById('but1');
let but2 = document.getElementById('but2');
let message = document.getElementById('message');
let inp1 = document.getElementById('input1');
let inp2 = document.getElementById('input2');

function showmessage()
{
    let num1 = Number(inp1.value);
    let num2 = Number(inp2.value);
    let out1 = '';
    for(i = 1;i < num2;i++)
    {
        out1 += '<p>';
        out1 +=  num1 + ' x ' + i + ' = ' + num1 * i;
        out1 += '<p>';
        message.innerHTML = out1;   
    }
 
}

function clearall()
{
    message.innerHTML = '';
}

but1.addEventListener('click',showmessage);
but2.addEventListener('click',clearall);
// console.log(content);

// for (let i =1;i < 10; i++)
// {
//     console.log(i);
// }

// ===========unpack data =========================
// const fruit = ['apple','banana','orange']
// const hero = [{'name':'tom','age': 10},
//               { 'name': 'jack','age': 12},
//               {'name':'bill','age': 15}]
// const fx = [...fruit]
// fx[0] = 'coconut'
// const hero2 = {'name' : 'kim','age' : 14}
// const fy = [...hero,hero2]
// const {name : xname, age : xage} = hero2

// const editid = 1
// const editname = 'will'
// const hero3 = hero.map((getname,index) =>{
//     if(index !== editid){
//         return getname;
//     }
//     const edithero = {...getname};
//     edithero.name = editname;
//     return edithero;
// }
// )

// const hero4 = hero.filter((getname,index) =>{
//     return index !== 1
// })

// console.log(hero4)
// console.log(hero)
// console.log(fy)
// console.log(hero3)


// =============sort from max to min===============
// const numtest = [1,5,3,4,2,6]
// const numt1 = [...numtest].sort((num1,num2) =>{
//     if(num1 > num2){
//         return -1;
//     }
//     else if (num1 < num2) {
//         return 0
//     }
// })
// console.log(numtest)
// console.log(numt1)


const word = 'Black Earing'
const findword = 'ear'
const isfind = word.toLowerCase().includes(findword)
console.log(isfind)
console.log(word.slice(0,2))
console.log(`data : ${findword}`)