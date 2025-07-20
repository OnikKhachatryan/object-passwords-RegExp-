///////////////////////////////
//PAROLNER SAHMANAPAKUMNEROV//
//////////////////////////////



function Check() {
    var name = document.getElementById("name");
    var n = name.value;
    let regName = /^[A-Z][a-z]{1,5}$/;
    let resName = regName.test(n);
    name.style.backgroundColor = resName ? "green" : "red";

    var surname = document.getElementById("surname");
    var s = surname.value;
    let regSurname = /^[A-Z][a-z]{1,9}$/;
    let resSurname = regSurname.test(s);
    surname.style.backgroundColor = resSurname ? "green" : "red";

    var username = document.getElementById("username");
    var u = username.value;
    let regUsername = /^\w{1,5}$/;
    let resUsername = regUsername.test(u);
    username.style.backgroundColor = resUsername ? "green" : "red";

    var age = document.getElementById("age");
    var a = age.value;
    let regAge = /^\d{1,2}$/;
    let resAge = regAge.test(a);
    age.style.backgroundColor = resAge ? "green" : "red";

    var phone = document.getElementById("phone");
    var p = phone.value;
    let regPhone = /^\+374-\d{2}-\d{3}-\d{3}$/;
    let resPhone = regPhone.test(p);
    phone.style.backgroundColor = resPhone ? "green" : "red";
}

const arr1 = [
      { name: "Onik", surname: "Khachatryan", age: 19 },
      { name: "Grigor", surname: "Hovhannsiyan", age: 24 },
      { name: "Gor", surname: "Tovmasyan", age: 16 }
    ];

    const div1 = document.getElementById("col1");
    const div2 = document.getElementById("col2");
    const div3 = document.getElementById("col3");

    for (let i of arr1) {
      const nameCell = document.createElement("div");
      nameCell.className = "cell";
      nameCell.textContent = i.name;
      div1.appendChild(nameCell);

      const surnameCell = document.createElement("div");
      surnameCell.className = "cell";
      surnameCell.textContent = i.surname;
      div2.appendChild(surnameCell);

      const ageCell = document.createElement("div");
      ageCell.className = "cell";
      ageCell.textContent = i.age;
      div3.appendChild(ageCell);
    }

    // CAR OBJECT TESTS
    var car1 = {};
    car1.brand = "BMW";
    car1.year = "2023";
    car1.price = "55000";
    car1.show = function () {
      return `${this.brand} ${this.price}`;
    };

    console.log("car1.show():", car1.show());

    var car2 = {
      brand: "MERCEDERS",
      year: 2023,
      price: 55000,
      about: function () {
        return `This is ${this.brand} (${this.year}) costing $${this.price}`;
      }
    };

    console.log("car2.about():", car2.about());

    // EMAIL REGEX TEST
    let str = 'vladislav_2023@gmail.com';
    let reg = /^[\w.-]+@[\w-]+\.[a-z]{2,4}$/i;
    let res = reg.test(str);
    console.log("Email valid:", res);



// Valid object with special keys
const user1 = {
  name: "Onik",
  surname: "Khachatryan",
  age: 19,
  var: true,
  10: 20,
  "barev dzez": "hajox"
};

// Corrected user2 usage
const user2 = {};
user2.name = "Onik";
user2.name = "Grigor";
delete user2.name;
console.log("user2 after delete:", user2); // {}

// Immutable object test
const user = Object.freeze({
  name: "Onik"
});
user.name = "Grigor"; // won't change
delete user.name;     // won't delete
console.log("Frozen user:", user); // { name: "Onik" }


// const user = {
// 	name:"Onik",
// 	surname:"Khachatryan",
// 	age:19,
// 	var:true,
// 	10:20,
// 	"barev dzez":"hajox"
// }

// for(i in user){
// 	console.log(user[i])
// }


// // const arr = [1,2,3,4]
// // for(i of arr){
// // 	console.log(i)
// // }


const arr = [
	{
		name:"Onik",
		surname:"Khachatryan",
		age:19
	},
	{
		name:"Grigor",
		surname:"Hovhannsiyan",
		age:24
	}
]
for(j of arr){
	console.log(j.name)
}



// ////////////////////////



// const arr1 = [
// 	{
// 		name:"Onik",
// 		surname:"Khachatryan",
// 		age:19
// 	},
// 	{
// 		name:"Grigor",
// 		surname:"Hovhannsiyan",
// 		age:24
// 	},
// 	{
// 		name:"Gor",
// 		surname:"Tovmasyan",
// 		age:16
// 	}
// ]

// var mec = document.createElement("div")
// mec.style.height="300px"
// mec.style.width="600px"
// mec.style.border="1px solid"
// mec.style.display="flex"
// document.body.appendChild(mec)

// var div1 = document.createElement("div")
// div1.style.height="300px"
// div1.style.width="200px"
// div1.style.border="1px solid"
// mec.appendChild(div1)

// var div2 = document.createElement("div")
// div2.style.height="300px"
// div2.style.width="200px"
// div2.style.border="1px solid"
// mec.appendChild(div2)

// var div3 = document.createElement("div")
// div3.style.height="300px"
// div3.style.width="200px"
// div3.style.border="1px solid"
// mec.appendChild(div3)



// for(i of arr){
// 	var div1sharq=document.createElement("div")
// div1sharq.style.height="100px"
// div1sharq.style.width="200px"
// div1sharq.style.border="1px solid"
// div1sharq.innerHTML=i.name
// div1.appendChild(div1sharq)

// }

// for(i of arr){
// 	var div2sharq=document.createElement("div")
// div2sharq.style.height="100px"
// div2sharq.style.width="200px"
// div2sharq.style.border="1px solid"
// div2sharq.innerHTML=i.surname
// div2.appendChild(div2sharq)

// }



// for(i of arr){
// 	var div3sharq=document.createElement("div")
// div3sharq.style.height="100px"
// div3sharq.style.width="200px"
// div3sharq.style.border="1px solid"
// div3sharq.innerHTML=i.age
// div3.appendChild(div3sharq)

// }








// var car1 ={}
// 	car1.brand="BMW", 
// 	car1.year="2023",
// 	car1.price="55000",
// 	car1.show=function(){
// 		return `${this.brand} ${this.price}`
// 	}


// console.log(car1[i])

// var car2={
//     brand:"MERCEDERS", 
// 	year:2023,
// 	price:55000,
// 	about:function showcar(){
// 		return `This is ${car2}`
// 	}
// }
// console.log(car2.about())





// let str = 'vladislav_2023@gmail.com'
// let reg = /\w\w\w\w\w\w\w\w\w\w\d\d\d\d@\w\w\w\w\w\W\w\w\w/

// let res = reg.test(str)
// console.log(res)


//////////////////////////////////////////////
///////////////////////////// es6 ecmascript6
//////////////////////////////////////////////

///// var - variable globala

// x=30
// var x

// console.log(x)

////// let-location

// let x = 20
// let x = 39
// console.log(x)

// let x = 20
// if(true){
// 	let x = 30
// }
// console.log(x)

////// const - constant

// const x = 20

// const arr = [1,2,3,4]
//  	arr[0]=10
// console.log(arr)

// const str = "barev"
// console.log(`Hello ${str} Onik`)

////// spread operator

// let arr = [1,2,3,4]
// let arr2 = [5,6,7,8]
// let arr3 = [...arr,...arr2]
// console.log(arr3)




// //unenal 3 hat function meki argumenty lini mail
// //2rdiny password 3rdiny phone number

///////////////////////////////////////////////////////////////////////////////////////////
////NEW VERSIA

// let str = 'onik2922@gmail.com'
// let reg = /\w\w\w\w\d\d\d\d@\w\w\w\w\w\W\w\w\w/

// let res = reg.test(str)
// console.log(res)

////////////////////////////////////////////////////////////////////////////////////////////
////OLD VERSIA

// let str = 'onik2922@gmail.com'
// let reg = /[a-z][a-z][a-z][a-z][0-9][0-9][0-9][0-9][@][a-z][a-z][a-z][a-z][a-z][.][a-z][a-z][a-z]/

// let res = reg.test(str)
// console.log(res)















//////////////////////////////////////////////////////////////////////
////////////////////////////SAHMANAPAKUMOV MAIL///////////////////////
//////////////////////////////////////////////////////////////////////



// function f(){
// var x=a.value

// let reg = /[a-zA-Z]{2,10}[0-9]{1,6}[@][a-zA-Z]{1,6}[.][a-z]{2,4}$/

// let res = reg.test(x)
// if (res==true) {
// 	a.style.backgroundColor="green"
// }
// else{
// 	a.style.backgroundColor="red"
// }

//  }
//// console.log(res)





/////////////
// unenal mi qani input arajiny name unena sahmnapakum araji tary mecatar maxy mincev 6
// surname nuyn namei nman arajiny mecatar max qanaky 10 ays erkusy menak tarer
// username maxy minchev 5
// age miayn tiv 
// phone number haykakan hamar
// mail max qanaky 10
// password arajiny mecatar iranic heto maximum simvolner 8ic 12 hatuk nshan menak mi hat
// confirm password nuyn passwordi gracy petqa lini
// country miayn petqe grvi Armenia , Russia, USA
// ev knopka clicki hamar
// ete yndhanury jishta linum clicki kojaky sirun styla stanum
// ete sxala linum konkret nhsuma te vorna sxal u inch petqa gri



