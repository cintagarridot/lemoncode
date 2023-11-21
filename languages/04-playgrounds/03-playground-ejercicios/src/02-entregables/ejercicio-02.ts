console.log("************** DELIVERABLE 02 *********************");

const arrayA: number[] = [20, 40, 60, 80];
const arrayB: number[] = [30, 50, 70, 90];
const arrayC: number[] = [10, 15];
const arrayD: number[] = [100, 200, 300];

const concat = (a: number[], b: number[]): number[] => [...a, ...b];

const getConcat = concat(arrayA, arrayB);
console.log('getConcat', getConcat);

const concatMoreThanTwo = (a, b, c, d) => {
    return a.concat(b, c, d); 
}

const getConcatMoreThanTwo = concatMoreThanTwo(arrayA, arrayB, arrayC, arrayD);
console.log('getConcatMoreThanTwo', getConcatMoreThanTwo);
