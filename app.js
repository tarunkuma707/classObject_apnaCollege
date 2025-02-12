// // const student   =   {
// //     fullName    :   "test",
// //     marks       :   94.5,
// //     printmarks  :   function(){
// //         console.log("marks = ",this.marks);
// //     }
// // }

// // const employee  =   {
// //     calculateTax(){
// //         console.log("Tax is 10%");
// //     }
// // }

// // const karanArjun    =   {
// //     salary  : "50000",
// // }

// // karanArjun.__proto__    =   employee;

// // class TyotaCar{
// //     constructor(brand,mileage){
// //         console.log("I am inside constructor");
// //         this.brand      =   brand;
// //         this.mileage    =   mileage;
// //     }

// //     start(){
// //         console.log("start");
// //     }

// //     stop() {
// //         console.log("stop");
// //     }

// //     setBrand(brand){
// //         this.brand  =   brand;
// //     }
// // }

// // let fourtuner   =   new TyotaCar("fourtuner",7);
// // let lexus       =   new TyotaCar("lexus",8);

// // class Parent{
// //     hello(){
// //         console.log("Hello World!!");
// //     }
// // }

// // class Child extends Parent{

// // }

// // let obj =    new Child();

// class Person{
//     constructor(name){
//         this.species    =   "Homo sapiens";
//         this.name       =   "Tarun";
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
// }

// class Engineer extends Person{
//     constructor(namep){
//         console.log("Enter Child Constructor");
//         super(namep);
//         console.log("Exit Child Constructor");
//     }
//     work(){
//         super.eat();
//         console.log("Working and fixing");
//         super.sleep();
//     }
// }

// // class Doctor extends Person{
// //     work(){
// //         console.log("Treating Patients!!");
// //     }
// // }

// let engObj     =   new Engineer("Chemical");
// //let obj2    =   new Doctor();

let dataInfo    =   "secret data";
class User{
    constructor(name,email){
        this.name   =    name;
        this.email  =   email;
    }
    viewData(){
        console.log("View Data",dataInfo);
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        dataInfo    =   "some new data";
    }
}

let student1 = new User("abc","abc@email.com");
let student2 = new User("xyx","aman@email.com");

let admin1  =   new Admin("admin","admin@admin.com");