// function debounce(fn, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => fn.apply(this, args), delay);
//   };
// }

// // Usage
// const handleInput = debounce((val) => console.log("Search:", val), 500);

// function throttle(fn, delay) {
//   let last = 0;
//   return function (...args) {
//     const now = Date.now();
//     if (now - last >= delay) {
//       fn.apply(this, args);
//       last = now;
//     }
//   };
// }

// // Usage
// window.addEventListener("scroll", throttle(() => {
//   console.log("Scroll event triggered");
// }, 1000));

// - Debounce: Wait until user stops typing/clicking → then run. eg. Search input API call

const debounce=(fn, delay)=>{
  let timer;
  return (...args)=>{
    clearTimeout(timer);
    timer=setTimeout(()=>fn.apply(this, args), delay);
  }
}

// - Throttle: Allow function to run only once in a given interval. eg.:Window scroll event, resize handler.

const throttle=(fn, delay)=>{
  let last= 0 ;
  return (...args)=>{
    const now=Date.now();
    if(now-last>delay){
      fn.apply(this, args);
      last=now;
    }
  }
}

// Interview Q
// “How would you prevent an API from firing on every keypress?” → Answer: Debounce.
// “How to improve scroll performance in React?” → Answer: Throttle.