//shopping cart
const cart ={
    items:["apple","banana","orange"],
    total: 0,
    addItem(item){
        this.items.push(item);
        this.total = this.items.length;
        console.log(`added ${item},totalitems:${this.total}`);
}
}
cart.addItem("mango");

//exception handling
try{
    //code that might cause an error
} catch(error){
    console.log("an error occurred:"+error.message);
}

//handling missing variables
console.log("program starts")

try{
    console.log(undefined);
}catch(error){
    console.log("caught")
}
console.log("program continues")

//division by zero
function divide()   