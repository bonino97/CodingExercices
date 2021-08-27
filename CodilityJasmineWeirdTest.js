// ** Task description
// ------------------------------------------------------------

// Write a function that receives a key-value pair (for example: { 3.5: 40 }) where the key (in this case: 3.5) is the note and the value (in this case: 40) is the percentage of the respective note. The function returns an object with two properties: the total accumulated percentage that is the sum of all values, and the definitive accumulated academic note that is the sum of each product between key (the note) and value (percentage of the respective note). Make sure that the input entered is fully correct with the validations needed.


// ** Hints
// ------------------------------------------------------------
// * Since the notes and percentages are entered in an object, the notes (keys) must all be different.


// ** Requirements
// ------------------------------------------------------------
// * Enter only an object (arrays are not allowed); the object is not permitted to be empty.
// * Keys or values that are null, undefined or empty are not allowed.
// * Keys must be a number in the range (0 <= value <= 5).
// * Values must be integer numbers in the range (0 < key <= 100).
// * The total sum of percentage values must be a maximum of 100.
// * Output is an object that contains accumulatedPercentage and accumulatedNote properties.


// ** Examples
// ------------------------------------------------------------
// * Case 1: Input is not an object (arrays are not allowed). For the input: academicNotes([{ 2.9: 40 }]) expected output: 'Not an Object'
// * Case 2: Input is an empty object. For the Input: academicNotes({}) Expected Output: 'Object is Empty'
// * Case 3: Input has some null, undefined, empty or not a number as key. For the Input: academicNotes({ 2.9: 40, null: 30 }) or academicNotes({ undefined: 40, 3.1: 30 }) or academicNotes({ 2.9: 40, '': 30 }) or academicNotes({ '2.9x': 40, 3.1: 30 }) Expected Output: 'Some key is Not a Number'
// * Case 4: Input has some key out of range allowed. For the Input: academicNotes({ 2.9: 40, '-3.1': 30 }) Expected Output: 'Some key Out of Range allowed'
// * Case 5: Input has some null, undefined, empty, not a number or not an integer as value. For the Input: academicNotes({ 2.9: null, 3.1: 30 }) or academicNotes({ 2.9: 40, 3.1: undefined }) or academicNotes({ 2.9: '', 3.1: 30 }) or academicNotes({ 2.9: 40, 3.1: '30x' }) or academicNotes({ 2.9: 40.1, 3.1: 30 }) Expected Output: 'Some key is Not an Integer'
// * Case 6: Input has some value out of range allowed. For the Input: academicNotes({ 2.9: 40, 3.1: -30 }) Expected Output: 'Some value is Out of Range allowed'
// * Case 7: Input has values that exceed the maximum sum allowed. For the Input: academicNotes({ 2.9: 71, 3.1: 30 }) Expected Output: 'Total sum of percentage values exceeds the maximum allowed'
// * Case 8: Output is an object that contains accumulatedPercentage and accumulatedNote properties. For the Input: academicNotes({ 2.9: 40, 3.1: 30 }) Expected Output: (Object as example) { accumulatedPercentage: 70, accumulatedNote: 2.09 }


// ** Available packages/libraries
// ------------------------------------------------------------

// You may use the default libraries and packages:
// * Node 12.19.0
function academicNotes(objectNotes) {
    console.log('Initial solution - academicNotes')
    // Implement function

    describe('Academic Notes Testing', function () {
        describe('When Academic notes are Not an Object', function () {
            it('it should return Not an Object', function () {
                expect(objectNotes).toThrow('Not an Object');
            })
        })

        describe('When Academic notes Object is Empty', function () {
            it('it should return Object is Empty', function () {
                expect(objectNotes).toThrow('Object is Empty');
            })
        })

        describe('When Academic notes Some key is Not a Number', function () {
            it('it should return Some key is Not a Number', function () {
                expect(objectNotes).toThrow('Some key is Not a Number');
            })
        })

        describe('When Academic notes Some key is Out of Range allowed', function () {
            it('it should return Some key is Out of Range allowed', function () {
                expect(objectNotes).toThrow('Some key is Out of Range allowed');
            })
        })

        describe('When Academic notes Some value is Not an Integer', function () {
            it('it should return Some value is Not an Integer', function () {
                expect(objectNotes).toThrow('Some value is Not an Integer');
            })
        })

        describe('When Academic notes Some value is Out of Range allowed', function () {
            it('it should return Some value is Out of Range allowed', function () {
                expect(objectNotes).toThrow('Some value is Out of Range allowed');
            })
        })

        describe('When Academic notes Total sum of percentage values exceed the maximum allowed', function () {
            it('it should return Total sum of percentage values exceed the maximum allowed', function () {
                expect(objectNotes).toThrow('Total sum of percentage values exceed the maximum allowed');
            })
        })

        describe('When Academic notes { accumulatedPercentage: 70, accumulatedNote: 2.09 }', function () {
            it('it should return { accumulatedPercentage: 70, accumulatedNote: 2.09 }', function () {
                expect(objectNotes).toBe(new Object(accumulatedPercentage, accumulatedNote))
            })
        })
    })

    return;  // { accumulatedPercentage: 70, accumulatedNote: 2.09 } (Object as example)

    // throw new Error
    // 'Not an Object' ||
    // 'Object is Empty' ||
    // 'Some key is Not a Number' ||    <!-null, undefined, empty, not a number-->
    // 'Some key is Out of Range allowed' ||
    // 'Some value is Not an Integer' ||    <!-null, undefined, empty, not a number, not an integer-->
    // 'Some value is Out of Range allowed' ||
    // 'Total sum of percentage values exceed the maximum allowed'
}

module.exports = {
    academicNotes
}
