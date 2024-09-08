
const numbers = [1, 2, 3, 4];

//using for each
numbers.forEach(num => console.log(num)); 

//using map
 const addition = numbers.map(num=>num+num)
 console.log(addition);

 //using filter

 const evennumbers = numbers.filter(num => num % 2 === 0);
console.log(evennumbers);

//using reduce

const plus=numbers.reduce((acc,num)=>acc+num,0);
console.log(plus);

//using find

const result= numbers.find(num=> num>=4);
console.log(result);

//using find index

const index= numbers.findIndex(num=> num>=2);
console.log(index);

//using some
const hasevenno= numbers.some(num=>num%2==0);
console.log(hasevenno);

//using every
const hasallevenno= numbers.every(num=>num%2==0);
console.log(hasallevenno);

//using include

const have= numbers.includes(num=> num=6);
console.log(have);

//using  push

numbers.push(9);
console.log(numbers);

//using pop
numbers.pop(9);
console.log(numbers);

//using shift
const firstnumber=numbers.shift(1)
console.log(numbers);
console.log(firstnumber);

//using unshift
numbers.unshift(1);
console.log(numbers);

//using concat
const number2=[5,6,7,8]
const newarray =numbers.concat(number2);
console.log(newarray);

//using slice
const sliced= numbers.slice(1,4);
console.log(sliced);

//using splice

number2.splice(5,6);
console.log(number2);