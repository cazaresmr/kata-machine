// Queue.ts
export default class Queue<T> {
    private items: T[];
    public length: number;

    constructor() {
        this.items = [];
        this.length = 0;
    }

    enqueue(item: T): void {
        this.items.push(item);
        this.length++;
    }

    deque(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }
        this.length--;
        return this.items.shift();
    }

    peek(): T | undefined {
        return this.items[0];
    }
}
