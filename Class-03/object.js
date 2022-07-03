const obj = {
  name: "Tipu Sultan",
  email: "tipusultancse101@gmail.com",
  "1email": "tipusultancse101@gmail.com",
};
// Object.keys
//complexity 0(n)
console.log(Object.keys(obj));

//Oject.values
//complexity 0(n)
console.log(Object.values(obj));

//Object.entries()
console.log(Object.entries(obj));

//searching element 0(n)
for (let key in obj) {
  console.log(obj[key]);
  if (obj[key] === obj.email) {
    console.log(true);
  }
  //searching 0(1)
  console.log("email" in obj);

  console.log(key);
}

//accessing element 0(1)
console.log(obj.name);
console.log(obj.email);
console.log(obj["1email"]);
//adding element
obj.profession = "Programmer";
console.log(obj);
//delete/remove element 0(1)
delete obj.profession;
console.log(obj);

//when to use array
// 1.if order is important
// 2.when order is important
// 3.when you need faster access (by index) or
// 4.adding or removal

//when to use object
// 1.when order isn't important
// 2.when you need faster access or removal
