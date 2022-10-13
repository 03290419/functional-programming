import { filter2 } from './functions.js';
import _ from 'underscore';
var list = _.range(200);

console.log(
    filter2(
        list,
        function (num) {
            return num % 2 == 0;
        },
        10
    )
);
