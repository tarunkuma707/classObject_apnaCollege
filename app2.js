let a = 5;
let b = 10;
try{
    console.log("a =",a);
    console.log("b =",b);
    console.log("a + b=",a+b);
    console.log("a + b=",a+c);/// Error Here
    console.log("a + b 1=",a+b);
    console.log("a + b=",a+b);
    console.log("a + b=",a+b);
}
catch(err){
    console.log(err);
}