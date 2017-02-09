import './index.css'
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
console.log(`Inline inject ${courseValue} right about here...`);
