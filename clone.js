const person={
    name:"Seher",
    age: 25,
    address:{
        city:"New York",
        country:"USA"
    },
    greet:function(){
        console.log("Hello");
    }   
}
// const otherPerson=Object.assign({}, person)
// const otherPerson={...person} // top level only
// const otherPerson=JSON.parse(JSON.stringify(person)) // deep copy
const otherPerson=structuredClone(person) // deep copy
otherPerson.name="Jane"
otherPerson.address.city="Los Angeles"  // shallow copy issue
console.log(person);
console.log(otherPerson.greet());