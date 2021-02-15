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