// QuickSort.test.ts

import quick_sort from "./QuickSort";

describe("quick_sort Tests", () => {
    it("should sort an array of numbers in ascending order", () => {
        const arr = [3, 6, 8, 10, 1, 2, 1];
        quick_sort(arr);
        expect(arr).toEqual([1, 1, 2, 3, 6, 8, 10]);
    });

    it("should handle an empty array", () => {
        const arr: number[] = [];
        quick_sort(arr);
        expect(arr).toEqual([]);
    });

    it("should handle an array with one element", () => {
        const arr = [42];
        quick_sort(arr);
        expect(arr).toEqual([42]);
    });

    it("should handle an array with repeated elements", () => {
        const arr = [5, 3, 8, 3, 9, 3, 7];
        quick_sort(arr);
        expect(arr).toEqual([3, 3, 3, 5, 7, 8, 9]);
    });

    it("should handle an already sorted array", () => {
        const arr = [1, 2, 3, 4, 5];
        quick_sort(arr);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    it("should handle an array sorted in descending order", () => {
        const arr = [9, 7, 5, 3, 1];
        quick_sort(arr);
        expect(arr).toEqual([1, 3, 5, 7, 9]);
    });
});
