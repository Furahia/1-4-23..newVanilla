// console.log  ('brendah crash course')
const name = 'mary'
const age = 12;
// CONCATENATION//////////////////////////
console.log('my name is' +  name  +  'the age is' + age);

// TEMPLATE STRING////////////////////////////
console.log('my name is ${name} the age is {age}');


// STRINGS////////////////

const s = 'hello worlllld'
console.log(s.toLowerCase());
console.log(s.substring(0,7));
console.log(s.substring(0,7).toUpperCase());

// SPLITTING STRINGS TO ARRAYS///////

console.log(s.split('')); //spliting by letter

const y= 'technology, chairs, brendah';
console.log(y.split(', '));

// ARRAYS////////////////////////////////////////////////
const numbers = new Array(1,2,3,4,5) //using Array constructors
console.log(numbers);

const fruits=['orange', 'apples', 'pears']
fruits[3]= 'mango'
console.log(fruits);
fruits.push('strawberries') //adding a new value
fruits.pop() //removes the value u just added 'strawberries'

console.log(Array.isArray(fruits)) //checking if smthg is an array  //true
console.log(Array.isArray('hello')) //checking if smthg is an array  //false


// OBJECT LITERALS

const person={
    firtName:'john',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music','movies', 'sports'],
    address: {
        street: '50 main',
        city: 'Boston',
        state:'Ma'
    }
}
console.log(person);
//alert(person)
console.log(person.hobbies[1]);
console.log(person.address.city);

const { firstName, lastName, address: {state}} = person;
console.log(lastName);
console.log(state);


//ARRAY OF OBJECTS////////////////////////////////////////////
 const todos= [
    {
    id: 1,
    text: 'take the garbage out',
    isCompleted: true,
},

    {
    id: 2,
    text: 'say hi',
    isCompleted: false,
},
   {
    id: 3,
    text: 'greetings',
    isCompleted: true,
},
]

console.log(todos);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//LOOPS//////////////////////////////////////

//FOR...........
for(let i=0; i<10; i++){
    // console.log(i);
    console.log('for Loop Number: ${i}');
}

//looping thru arrays.........
for(let i=0; i<todos.length; i++){

     console.log(todos[i].id);
     }

    //  forEach....map......filter........
    todos.forEach(function(t){
console.log(t.text);
    },
    ) 


    // map......
   const tText= todos.map(function(t){
    return t.text;
            },
            ) 
            console.log(tText);


    // FILTER.........
    // const tCompleted= todos.filter(function(t){
    //     return t.isCompleted===true;
    //             },
    //             ) 
    //             console.log(tCompleted); 
    //OR

   const tCompleted= todos.filter(function(t){
        return t.isCompleted===true;
        }).map(function(t){
            return t.text;

        }) 
    
    console.log(tCompleted); 





    // CONDITIONALS///////////////////////////////////////////////////////////////
     
const x= 20
if(x===10){
console.log('x is 10'); 
} else{
    console.log('x is not 10');
}

// or
 
const a=5
const b=18
if (a > 6 || b > 15) {
    console.log('a is more than 4 or b is more than 13'); //one has to be true
    
}
if (a > 4 && b > 15) {
    console.log('a is more than 2 or b is more than 10'); //both have to be true
}


// TERNARY OPERATOR//////////////////////////////////////////////////

const z = 1
const color = z > 10 ? 'red' : 'blue'
console.log(color);

// usng switch......
const  i = 1;
const car = 'green'

switch (car) {
    case 'red':
        console.log('car is red');
        break;

    default: 
    console.log('car is NOT red or blue');
        break;
}

// functins/////////////////////////////////////////////////
function addNums(num1, num2) {
    console.log(num1 + num2);
}
addNums(2,3)

// or.................
function addNums(num1, num2) {
return num1 + num2;
}
console.log(addNums(8,3));

// or //while using arrow functions
const addNumbs= (numb1, numb2) =>{
    return numb1 + numb2;
    }
    console.log(addNumbs(6,3));


    // OOP/////////////////////// USING CONSTRUCTOR FUNCTIONS WITH PROTOTYPES

    function Person(firstName, lastName, dob) {
        this.firstName =firstName;
        this.lastName =lastName;
        this.dob =dob;
    }
    // instantiate object
    const person1 = new Person('John', 'doe', '4-3-1910');
    const person2 = new Person('Mary', 'doe', '4-3-50');
    console.log(person2.dob);

    // adding methods-which are basically functions to the person object

function Person(firstName, lastName, dob) {
        this.firstName =firstName;
        this.lastName =lastName;
        this.dob =dob;
        this.getBirthYear = function() {
         return this.dob.getFullYear   
          }
    }
    console.log(person1);

    // classes.........
    // class Person {
    //     constructor(firstName, lastName, dob){
    //         this.firstName =firstName;
    //         this.lastName =lastName;
    //         this.dob =new Date(dob); 
    //     }
        // getBirthYear() {
        //     return this.dob.getFullYear();
        // }
        // getFirstName() {
        //     return'${this.firstNme}'
        // }
    //}