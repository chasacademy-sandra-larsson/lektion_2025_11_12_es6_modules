// Här ska vi kunna importera från andra filer
import {PI, caculateAreaCircle} from "./utils.js";

// Import av en export default 
import addFn from "./utils.js";

console.log(caculateAreaCircle(PI, 5));

console.log(addFn(1,2));

