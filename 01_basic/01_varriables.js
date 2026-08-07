const accountId=123453 // constant jeni value change na thay 
let accountNmae="Kruapli"   // value change after once declare
var accountEmail="krupichauhan@gmail.com" // not used because not functional scope
                                        //not block scope
accountState="Gujarat"
console.log(accountId)
console.table([accountId,accountNmae,accountEmail]) // ek jode print kare 

//  accountId=13333  TypeError: Assignment to constant variable.
 console.log(accountId)
let x  // jeni value assign na kari hoy teni value by default " undefind" hoy che 
console.log(x)

console.time()//backend ma time start kare 
console.timeEnd() // time end kare tyare je time thi strat thayu hoy ae print kare 