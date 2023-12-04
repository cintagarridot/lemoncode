// import { cloneDeep } from 'lodash';

console.log("************** DELIVERABLE 03 *********************");

type Source = {
    name: string;
    surname: string;
    age: number;
    country: string;
    hasChildren: boolean;
}

type Target = {
    name: string,
    age: number,
    country: string,
    isMarried: boolean,
}

const source: Source = {
    name: 'Cinta',
    surname: 'Garrido',
    age: 27,
    country: 'Spain',
    hasChildren: false,
};

const target: Target = {
    name: 'Katia',
    age: 35,
    country: 'Poland',
    isMarried: true,
}

// CLONE

function clone(data: Source | Target) {
    return { ...data };
}

// Otro ejemplo que tambien funciona es llamando a la funcion cloneDeep de lodash
// function clone2(source) {
//     const sourceClone = cloneDeep(source);
//     return sourceClone
// }

const getClone: Source = clone(source) as Source;
console.log('getClone', getClone);


// const getClone2 = clone2(source);
// console.log('getClone2', getClone2);

// MERGE

function merge(source: Source, target: Target) {
    const sourceClone = clone(source);
    const targetClone = clone(target);
    return {
        ...targetClone,
        ...sourceClone,
    }
}

const getMerge = merge(source, target);
console.log('getMerge', getMerge);