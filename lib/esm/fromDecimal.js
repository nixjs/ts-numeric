import e from"bignumber.js";export default((i,o)=>i?o?new e(i).div(e(10).pow(o)).toFixed():String(i):"0");