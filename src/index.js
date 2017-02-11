import './index.css'
import numeral from 'numeral';

const someValue = numeral(1000).format('$0,0.00');
console.log(`Inline inject ${someValue} right about here...`); // eslint-disable-line no-console
