
let an = Math.round(Math.random()*100 )
console.log(an)

for(let i=9;i>=0;--i){
let b=prompt("enter your no.")
if((b-an)<10 && (b-an)>0)
{
   alert(`your guess is high.no of attempts you have ${i}`)
}
else if(b<an){
   alert(`your guess is too low.no of attempts you have ${i}`)
}
else if(b>an){
   alert(`your guess is too high.no of attempts you have ${i}`)
}
else if((an-b)<10 && (an-b)>0)
{
   alert(`your guess is low.no of attempts you have ${i}`)
}
else if(b==an){
   alert(`your guess is correct.you win by ${i}`)
   break;
}
}


