import { Second } from './Second.js';
import { Third } from "./Third.js";

const second = new Second();
const third = new Third();

third.getFirstName();
second.getSecondName();
third.getThirdName();
console.log(third.getnum());