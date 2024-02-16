export const letCode = `if (x > 10) {
  let y = 20;
  console.log(y); // 20
}
console.log(y); // ReferenceError: y is not defined
`;

export const functionScopeCode = `function test(){
 var a = 10;
 console.log("Value of 'a' inside funuction", a);
}
test();
try{
    console.log("Triyng  to access 'a' defined in function ")
    console.log(a); 
}catch(e){
    console.log(e.message); 
}`;

export const blockScopeCode = `function test() {
    {
      let a = 10;
      const b = 5;
    }
    
    try{
      console.log("We will get error when we try to access a  b")
      console.log(a, b);// error will be thrown here 
    } catch(e) {
      console.log(e.message);
    }
}
test();`;

export const varCode = `function f1()
{
    var a=10;
}
console.log(a)`;

export const constCode = `const PI = 3.14;
PI = 3.14159; // TypeError: Assignment to constant variable.
`;

export const diffCode = `function varScoping() {
  var x = 1;

  if (true) {
    var x = 2;
    console.log(x); // will print 2
  }

  console.log(x); // will print 2
}

function letScoping() {
  let x = 1;

  if (true) {
    let x = 2;
    console.log(x); // will print 2
  }

  console.log(x); // will print 1
}
`;
