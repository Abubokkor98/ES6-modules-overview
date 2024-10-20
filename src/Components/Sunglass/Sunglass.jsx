import React from 'react';

import './Sunglass.css';
import Watch from '../Watch/Watch';
import { add, multiply, divideTheFirstNumberByTheSecondNumber as divide } from '../../Utilities/calculate';


export default function Sunglass() {
    const first = 55;
    const second = 40;
    const sum = add(first, second);
    const mult = multiply(first, second);
    const vaag = divide(first, second);
    console.log(sum);
    console.log(mult);
    console.log(vaag);
  return (
    <div>
        <Watch></Watch>
    </div>
  )
}
