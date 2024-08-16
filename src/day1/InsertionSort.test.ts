// InsertionSort.test.ts

import insertion_sort from "./InsertionSort";

describe("insertion_sort Tests", () => {
    it("should sort an array of positive numbers", () => {
        const arr = [5, 2, 9, 1, 5, 6];
        insertion_sort(arr);
        expect(arr).toEqual([1, 2, 5, 5, 6, 9]);
    });

    it("should handle an empty array", () => {
        const arr: number[] = [];
        insertion_sort(arr);
        expect(arr).toEqual([]);
    });

    it("should handle a single element array", () => {
        const arr = [42];
        insertion_sort(arr);
        expect(arr).toEqual([42]);
    });

    it("should handle an already sorted array", () => {
        const arr = [1, 2, 3, 4, 5];
        insertion_sort(arr);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    it("should handle a reverse sorted array", () => {
        const arr = [5, 4, 3, 2, 1];
        insertion_sort(arr);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    it("should handle an array with negative numbers", () => {
        const arr = [3, -2, -1, 0, 2, 1];
        insertion_sort(arr);
        expect(arr).toEqual([-2, -1, 0, 1, 2, 3]);
    });

    it("should handle an array with duplicate values", () => {
        const arr = [4, 2, 2, 8, 3, 3, 1];
        insertion_sort(arr);
        expect(arr).toEqual([1, 2, 2, 3, 3, 4, 8]);
    });
});
