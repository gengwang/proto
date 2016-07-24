import * as d3 from 'd3';
import * as _ from 'underscore';

export const eight = 8;

export function maythe4th() {
    return 'May the Force Be With You!';
}

export function random2() {
    return d3.randomNormal()();
}

export function isEven(arr){
    return _.map(arr, (d) => {
        return d % 2 === 0;
    });
}

export function characters(){
    return d3.csv('data/awakens.csv', (error, result) => {
        if(error) console.error(`An error has occurred: 
        ${error}
        `);

        console.log('No promises:::');
        if(result.length > 0){
            _.each(result, (d) => {
                console.log(`${d['Character Name']}`);
            });
        }
    });
}