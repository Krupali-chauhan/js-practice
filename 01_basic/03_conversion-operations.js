//conversion & operation
//string to number
let a="33"
let numberValue=Number(a)
console.log(typeof(numberValue))
console.log(numberValue)
//output
//number
// 33


//***when value comes from a form then we must have to check value type beacuse 
// The number value can also be in string form. beause fronted devloper is duffernt person ***
//  string convert into number when a="33abc" convert is done but after conversion it will store NaN value
//Lets check it 
let b="33abc"
let numberBvalue=Number(b)
console.log(typeof(numberBvalue))
console.log(numberBvalue)
//output
//number
// NaN

//*** null to number  */
let c=null
c=Number(c)
console.log(typeof(c))
console.log(c)
// output 
// number
// 0

//*** undefind to number */
let x
let undefindValue=Number(x)
console.log(typeof(undefindValue))
console.log(undefindValue)
//number
// NaN


//**boolean to number */
let isLoggedIn=true
let numberBolleanValue=Number(isLoggedIn)
console.log(typeof(numberBolleanValue))
console.log(numberBolleanValue)
// op
// number
// 1

//***number to bollean*/
let d=1
let ischeck=Boolean(d)
console.log(ischeck)
console.log(typeof(ischeck))
// op
// true
// boolean

//***number to string */
let e =122
let isString=String(e)
console