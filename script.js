function calculateUnitPlace() {
    // getting value of base & exponenent from user 
    const base = parseInt(document.getElementById('base').value);
    const exponent = parseInt(document.getElementById('exponent').value);
    // step one
    const lastDigit = base % 10; 
    const cycles = {
        0: [0], 1: [1], 2: [2, 4, 8, 6], 3: [3, 9, 7, 1],
        4: [4, 6], 5: [5], 6: [6], 7: [7, 9, 3, 1],
        8: [8, 4, 2, 6], 9: [9, 1]
    };
    // step 2
    const cycle = cycles[lastDigit];
    // step 3
    const remainder = exponent % cycle.length;
    // last step
    const unitPlaceDigit = remainder === 0 ? cycle[cycle.length - 1] : cycle[remainder - 1];
    // Answer of unit digit 
    document.getElementById('result').innerText = `The unit place digit of ${base}^${exponent} is: ${unitPlaceDigit}`;
}