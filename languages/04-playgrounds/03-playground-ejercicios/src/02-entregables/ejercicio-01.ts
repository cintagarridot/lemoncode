console.log("************** DELIVERABLE 01 *********************");

const array: string[] = ['car', 'bus', 'plane', 'boat'];
const noElementsText: string = 'There are not elements in the array';

// 1. HEAD

const head = (array: string[]): string => {
    const [first] = array;
    return first ?? noElementsText;
};

const getFirstElement: string = head(array);
console.log('first', getFirstElement);

// si lo hicieramos de la forma simple seria asi:
const simpleHead = (array: string[]): string => array[0];
const getFirstSimple: string = simpleHead(array);
console.log('first simple', getFirstSimple);

// 2. TAIL

const tail = (array: string[]): string | string[] => {
    const [_first, ...rest] = array;
    return array.length ? rest : noElementsText;
}

const getTail = tail(array);
console.log('get tail', getTail);


// 3. INIT

const init = (array: string[]): string | string[] => {
    const arrayCopy: string[] = [ ...array ];
    arrayCopy.pop();
    return arrayCopy.length ? arrayCopy : noElementsText;
}

const getInit = init(array);
console.log('get init', getInit);

// 4. LAST

const last = (array: string[]): string => {
    const arrayCopy: string[] = [ ...array ];
    const poppedElement: string = arrayCopy.pop();
    return arrayCopy.length ? poppedElement : noElementsText;
}

const getLast = last(array);
console.log('get last', getLast);
