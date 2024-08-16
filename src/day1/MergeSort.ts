// MergeSort.ts
export default function merge_sort(arr: number[]): void {
    if (arr.length <= 1) {
        return;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    merge_sort(left);
    merge_sort(right);
    merge(arr, left, right);
}

function merge(arr: number[], left: number[], right: number[]) {
    let i = 0,
        j = 0,
        k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k++] = left[i++];
        } else {
            arr[k++] = right[j++];
        }
    }

    while (i < left.length) {
        arr[k++] = left[i++];
    }

    while (j < right.length) {
        arr[k++] = right[j++];
    }
}
