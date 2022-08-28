//1.do below program

// A.print odd number in array

let x1 = [1,2,3,4,5,6,7,8,9,10];

console.log(x1.filter((n)=>(n%2 == 1)));

//B.Convert the all the strings to title caps in a string array

let words =['apple','ball','cat','dog','ego'];

let cap =words.map((n)=>n[0].toUpperCase() + n.slice(1).toLocaleLowerCase());
console.log(cap);

//c. sum of all number in array

let x2 = [1,2,3,4,5,6,7,8,9,10];
console.log(x2.reduce((n,m)=>(n+m),0));

//D.Return all the prime number

var s1=[2,3,4,5,6,,7,8,9,10,11,12,13,14,15,16,17];
function isprime(num){
    for(let start=2;num>start;start++){
        if(num%start==0){
            return false;
        }
    }
    return num>1
}
console.log(s1.filter(isprime));

//E.Return all the paliindrome in an array

let x4=['ananth','rar'];
let straight = x4.map((n)=>n.split('').reverse().join(''));
if(x4===straight){
    console.log("palindrom");
}
else{
    console.log('its not palindrom');
}

//F.Return median of two sorted arrays of the same size

num1=[1,3,7,4,5];
num2=[6,8 ,2,9,10];

const findmediansortedarray = (num1,num2)=>{
    let compare =(i,j)=>{
        return i-j;
    }
let arr=num1.concat(num2).sort(compare);
if(arr.length%2==0){
    return(arr[arr.length/2-1]+arr[arr.length/2])/2;
}
return arr[Math.floor(arr.length/2)];
}

console.log(findmediansortedarray(num1,num2));

//G.Remove dublicate from an array

let x3 =['ananth','ram'];
let newone =x3.join('').split('');
let spl=newone.filter((n,m)=>newone.indexOf(n)===m)
console.log(spl);

//H.Rotata an array by k times

const d1=[1,2,3,4,5,6,7,8];
const k=4;

function arrayRotation(arr,numberofshift){
    for(let i=0;i<numberofshift;i++){
        arr.unshift(d1.pop());
        console.log(`step${i+1}:`,d1);
    }
}
console.log("finaloupt:",arrayRotation(d1,k));


//3.do below program

//A.print odd numbers in array

let t1 = [1,2,3,4,5,6,7,8,9,10];

console.log(x1.filter((n)=>(n%2 == 1)));

//B.Convert the all the strings to title caps in a string array
let words1 =['apple','ball','cat','dog','ego'];

let cap1 =words.map((n)=>n[0].toUpperCase() + n.slice(1).toLocaleLowerCase());
console.log(cap);

//c. sum of all number in array

let t2 = [1,2,3,4,5,6,7,8,9,10];
console.log(x2.reduce((n,m)=>(n+m),0));

//D.Return all the prime number

var s1=[2,3,4,5,6,,7,8,9,10,11,12,13,14,15,16,17];
function isprime(num){
    for(let start=2;num>start;start++){
        if(num%start==0){
            return false;
        }
    }
    return num>1
}
console.log(s1.filter(isprime));

//E.Return all the paliindrome in an array

let t4=['ananth','rar'];
let straight1 = x4.map((n)=>n.split('').reverse().join(''));
if(x4===straight){
    console.log("palindrom");
}
else{
    console.log('its not palindrom');
}

