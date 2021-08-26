// original object
const person = {
    firstName: 'Sergio',
    lastName: 'Mesa',
};

const personProxy = new Proxy(person, {
    get: (target, prop) => {
        if (prop === 'fullName') {
            return `${target.firstName} ${target.lastName}`;
        }

        if (prop === 'lastNameFirst') {
            return `${target.lastName} ${target.firstName} `;
        }
        return target[prop];
    },
});

console.log(personProxy.lastNameFirst);