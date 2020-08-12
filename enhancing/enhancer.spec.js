const enhancer = require('./enhancer.js');
// test away!

describe('game functions', () => {
    const item = { name: 'Cram Opener', durability: 25, enhancement: 16}

    describe('repair item test', () => {
        test('return item object with durability restored', () => {
            const repairedItem = {...item, durability: 100}
            expect(enhancer.repair(item)).toEqual(repairedItem)
        })
    });

    describe('success item test', () => {
        test('item succesfully modified', () => {
            const modifiedItem = {...item, enhancement: 17}
            expect(enhancer.success(item)).toEqual(modifiedItem)
        })
    });

    describe('fail item test', () => {
        test('failed to modify item', () => {
            const modifiedItem = {...item, durability: 15, enhancement: 16}
            expect(enhancer.fail(item)).toEqual(modifiedItem);
        })
    })
})
