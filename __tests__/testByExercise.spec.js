const {reversedNum, capitalizer, sortedStr,likePicture, primeNumber} = require('../script');


describe("Testing functions.", () =>{
    test("The output to be: ", () => {
        expect(reversedNum("349210")).toBe("012943");
    });
    test("The length:", () => {
        expect(capitalizer("the quick brown fox")).toHaveLength(19);
    });
    test("Truthy:", () => {
        expect(sortedStr("webmaster")).toBeTruthy();
    });
});


test('Like the picture', () => {
    const thisPicture = jest.fn();
    likePicture(thisPicture, 'nature');
    expect(thisPicture).toHaveBeenCalled();
  });

  test("Testing prime", () => {
    const thisNumber = jest.fn();
    thisNumber();
    expect(thisNumber).toHaveReturned();
})

