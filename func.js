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
let message = document.getElementById('message');
let inp1 = document.getElementById('input1');
let inp2 = document.getElementById('input2');

function showmessage()
{
    let num1 = Number(inp1.value);
    let num2 = Number(inp2.value);
    let out1 = num1 + num2;
    message.innerHTML = out1;   
}

but1.addEventListener('click',showmessage);
// console.log(content);

// for (let i =1;i < 10; i++)
// {
//     console.log(i);
// }