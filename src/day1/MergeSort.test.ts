// MergeSort.test.ts

import merge_sort from "./MergeSort";

describe("merge_sort Tests", () => {
    it("should sort an array of numbers in ascending order", () => {
        const arr = [5, 3, 8, 4, 2];
        merge_sort(arr);
        expect(arr).toEqual([2, 3, 4, 5, 8]);
    });

    it("should handle an empty array", () => {
        const arr: number[] = [];
        merge_sort(arr);
        expect(arr).toEqual([]);
    });

    it("should handle an array with one element", () => {
        const arr = [1];
        merge_sort(arr);
        expect(arr).toEqual([1]);
    });

    it("should handle an array with repeated elements", () => {
        const arr = [4, 5, 4, 2, 4, 1];
        merge_sort(arr);
        expect(arr).toEqual([1, 2, 4, 4, 4, 5]);
    });

    it("should handle an already sorted array", () => {
        const arr = [1, 2, 3, 4, 5];
        merge_sort(arr);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    it("should handle an array sorted in descending order", () => {
        const arr = [5, 4, 3, 2, 1];
        merge_sort(arr);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    it("should correctly sort an array with negative numbers", () => {
        const arr = [3, -1, 4, -5, 2];
        merge_sort(arr);
        expect(arr).toEqual([-5, -1, 2, 3, 4]);
    });
});
