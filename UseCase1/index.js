//let x=10; //let declaration is allowed just once
// let x=15; cannot be redeclared

/* var x=10;
var x=50 */ //var redeclaration allowed

function myfunc(){
    console.log (2+5+9);
}

const x= (x,y)=> x*y;
//var x= myfunc();
console.log(x(4,3));


//Array destrutring
/* const numArray = [5,3,6,7,2];
[a,b,c,d,e]=numArray;
console.log(a);
console.log(b);
console.log(c);
console.log(e);
console.log(d) */;

/* [a,b]=[2,5];
console.log(a);
console.log(b);
[c,d]=[b,a]
console.log(c); */

const user = {
    id: 42,
    is_verified: true
};

const {id, is_verified} = user;

console.log(id); // 42
console.log(is_verified); // true