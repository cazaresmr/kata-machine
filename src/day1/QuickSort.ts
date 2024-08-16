export default function quick_sort(arr: number[]): void {
    if (arr.length <= 1) {
        return;
    }
    quick_sort_helper(arr, 0, arr.length - 1);

    function quick_sort_helper(arr: number[], low: number, high: number): void {
        if (low < high) {
            const pivot = partition(arr, low, high);
            quick_sort_helper(arr, low, pivot - 1);
            quick_sort_helper(arr, pivot + 1, high);
        }
    }

    function partition(arr: number[], low: number, high: number): number {
        const pivot = arr[high];
        let i = low - 1;
        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                swap(arr, i, j);
            }
        }
        swap(arr, i + 1, high);
        return i + 1;
    }

    function swap(arr: number[], i: number, j: number): void {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    return;
}
