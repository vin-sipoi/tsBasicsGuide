/**
 *  Boolean 
 * 
 * True or false statement 
*/
let isOpen: Boolean = true; //(assigning a boolean value to a variable)

/**
 * Number 
 * 
 * floating-points (variables)
 * octal literals and binary
 */
const numberDataType = ()=> {
let decimalExample: number = 6;
let hexExample: number = 0xf00d;
let octalExalmple: number = 0o744;
let bigExample: bigint = 100n;
let binaryExample: number = 0b1010;
}
/**
 * Strings 
 * 
 * ', "" textual datatypes
 */
const stringExample = () =>{
let colour: string = "yellow";
colour = 'white';
}

/**
 * Template literals, represented using backticks()
 */
const templateLiteral = () => {
let fullName: string = `Vin Sipoi`;
let age: number = 50;
let text: string = `Hello, my name is ${fullName}`;
}

/**
 * Enum
 * Special class that contains constant values.
 * Numbering starts from the index zero.
 * Classified as a means of giving awesome names to a set of numeric values
 */

const enumSpecialClass = () =>{
enum Fruits {
    Orange,
    Apple,
    Banana
}
// Accessing items 
let c: Fruits = Fruits.Apple;

// Setting numbers

enum Fruits2 {
    Orange = 1,
    Apple = 4,
    Banana =7
}
// accessing 
let c2: Fruits2 = Fruits2.Apple
}

/**
 * Array
 * 
 * Consist of a set of elements 
 * Each element is defined by an index or key
 * 
 * Tips about an Array
 * Once it is initialized it can't be resized because it is static. 
 * Sequential memory is allocated when an array is declared 
 * Requires a declaration before use.
 */
const setArray = () =>{
    let listOfNumbers: number [] = [1,2,3,4,5,6];

    // Generic declaration 
    let listOfNumberss: Array<number> = [1,2,3,4,5,6]
}

/**
 * Object 
 * 
 * An instance that contains a set of key-value pairs.
 * 
 * Object is non-primitive type
 */

const setObject = () =>{
    let person = {
        firstName: "Vincent",
        lastName: "Sipoi"
    }
}

/**
 * Any
 * Allows to set any particular variable to a variable
 */

const assignAny = () =>{
    let amount: any;

    amount = 26;
    amount = true;
    amount = "Hello Vin";
    amount = [];
    amount = {};
    amount = null;
    amount = undefined;
}

/**
 * Unknown
 * 
 * Works similar to Any
 * Gives an error when you try to reassign a value that has been initialized 
 *
 */
const setSnknown = () =>{
    let amount: unknown;

    //Error 
    let newAmount: number = amount

}

/**
 * Void 
 * 
 * return type of a function that does not return a value
 */

const greetings  =  (): void =>{
    
    console.log("Returning nothing")
}

/**
 * Class and Interfaces
 * 
 * Interface 
 * Is a structured group of properties that describe an object
 * 
 * Class
 * Is a blue print so objects can be created and configured using same property methods
 * 
 * Fields - in class represents data pertaining to objects
 * 
 * Constructors - responsible for allocating memory for the objects of the class
 * 
 * Functions - reffered to as methods, they represent actions an object can take
 *
 */

const interfaces = () =>{
    interface IStudent {
        studentCode: number;
        studentName: string;
        getIncome: (number) => number; //arrow function
        getStudentAdvisor(number): string;
    }
}

const classes = () =>{
    class WelcomeMessage{
        greeting: string;

        constructor(message: string){
            this.greeting = message;
        }

        greet(){
            return "Welcome," + this.greeting
        }
    }
    let welcomeUser = new WelcomeMessage("Vincent");
}

