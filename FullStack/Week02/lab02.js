// Mansi . 101512083

// ES6 Syntax
const gretter = (myArray, counter)=>{
    let greetText = 'Hello ';
    for(let i=0; i<myArray.length; i++){
        console.log(greetText + myArray[i]);
    }
    
}
gretter(['Randy Savage','Ric Flair','Hulk Hogan'],3);

// destructuring and spread operator 
const caps=(str)=>{
    let [first,...rest]=str;
    first=first.toUpperCase();
    return [first,...rest].join('');
}
console.log(caps('hello'));

// array.proto.map
const capsArray=(arr)=>{
    return arr.map(element=>caps(element));
}
console.log(capsArray(['hello','world']));

// array.proto.filter
const filter=(arr)=>{
    return arr.filter(element=>element<20);
}
console.log(filter(['20','12','2','23']));

// array.proto.reduce
const sum=(arr)=>{
    return arr.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
}
const product=(arr)=>{
    return arr.reduce((accumulator, currentValue)=> accumulator*currentValue,1);
}
console.log(sum([1,2,3,4]));
console.log(product([2,3]));

// ES6 Syntax

class Car{
    constructor(brand, year){
        this.brand=brand;
        this.year=year;
    }
    details(){
        return `Brand: ${this.brand}, Year:${this.year}`;
    }
}
class Sedan extends Car{
    constructor(brand,year,balance){
        super(brand,year);
        this.balance=balance;
    }
    info(){
        return `Brand: ${this.brand}, Year: ${this.year}, Balance: ${this.balance}`;
    }
}
let myCar=new Car('Toyota',2015);
let mySedan=new Sedan('Honda',2018,30000);
console.log(myCar.details());
console.log(mySedan.info());