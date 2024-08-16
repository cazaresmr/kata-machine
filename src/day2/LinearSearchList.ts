export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    return haystack.includes(needle);
}

// Test cases
console.log(linear_search([1, 2, 3, 4, 5], 3)); // Expected output: true
console.log(linear_search([1, 2, 3, 4, 5], 6)); // Expected output: false
console.log(linear_search([], 3)); // Expected output: false
console.log(linear_search([7, 8, 9], 7)); // Expected output: true
console.log(linear_search([7, 8, 9], 10)); // Expected output: false
console.log(linear_search([1], 1)); // Expected output: true
console.log(linear_search([1], 2)); // Expected output: false
