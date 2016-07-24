import {eight, maythe4th, random2, isEven, characters} from './doodle';
import * as _ from 'underscore';

const k = _.range(3);

console.log(`\'Allo \'Allo? 
eight => ${eight}; 
maythe4th => "${maythe4th()}"; 
random2 => ${random2()}
is even [${k}] => ${isEven(k)}
characters => ${characters()}
`);
