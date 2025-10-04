const orders = [
  { id: 1, customer: "A", amount: 250 },
  { id: 2, customer: "B", amount: 400 },
  { id: 3, customer: "A", amount: 100 },
  { id: 4, customer: "C", amount: 50 },
  { id: 5, customer: "B", amount: 150 },
];
// ✅ Task:

// Only include orders with amount ≥ 100.

// Group them by customer and sum their amounts.

// Return an array like:
// [
//   { customer: "A", total: 350 },
//   { customer: "B", total: 550 }
// ]
const result = orders.filter(order=>order.amount>=100).
filter(order=>({customer: order.customer, amount:order.amount}))

orders.reduce((acc, order)=>{
  console.log(acc, order);
  
})



