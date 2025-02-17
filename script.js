
let obj1 = {
    name: 'Alice',
    age: 25,
    isActive: true,
    details: {
        city: 'New York',
        country: 'USA'
    }
};

let obj2 = {
    occupation: 'Developer',
    skills: ['JavaScript', 'React'],
    isActive: false,
    details: {
        city: 'San Francisco',
        country: 'USA'
    }
};


let obj = { ...obj1, ...obj2 };


let kays = Object.keys(mergedObj);


let values = Object.values(mergedObj);


let unification = [...keys, ...values];


let types = {
    string: [],
    number: [],
    object: [],
    boolean: []
};

combined.forEach( item => {
    if (typeof item === 'string') {
        types.string.push(item);
    } else if (typeof item === 'number') {
        types.number.push(item);
    } else if (typeof item === 'object') {
        types.object.push(item);
    } else if (typeof item === 'boolean') {
        types.boolean.push(item);
    }
});

console.log(types);