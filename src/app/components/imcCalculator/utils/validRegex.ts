import {pipe, allPass } from 'ramda';
import numberToString from './numberToString';
import matchRegex from './matchRegex';
import greaterOrEqualThan1 from './greaterOrEqualThan1';
import lessOrEqualThan300 from './lessOrEqualThan300';

export default function validRegex(regex: RegExp){    
    return allPass(
        [
            pipe(
                numberToString,
                matchRegex(regex)
                ),
            greaterOrEqualThan1,
            lessOrEqualThan300
        ]
    )
}