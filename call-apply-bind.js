
function greet(city) {
  console.log(`Hi, I am ${this.name} from ${city}`);
}
const user = { name: "Tasneem" };
const boundFn = greet.bind(user, "Pune");
boundFn(); 
// Hi, I am Tasneem from Pune


greet.apply(user, ["Delhi"]); 
// Hi, I am Tasneem from Delhi
// greet.call(user, "Mumbai"); 
// Hi, I am Tasneem from Mumbai
