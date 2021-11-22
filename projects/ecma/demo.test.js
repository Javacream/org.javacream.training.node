describe('ecma tests', () => {
    beforeAll(() => {
        console.log("all")
    })
    beforeEach(() => {
        console.log("each")
    })
    test('1 = 1', () => {
        expect(1).toBe(1)
    })
    test('1 is smaller than 5', () => {
        expect(1).toBeLessThan(5)
    })
})