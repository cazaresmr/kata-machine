// Stack.ts
export default class Stack<T> {
    public length: number;
    private items: T[];

    constructor() {
        this.items = [];
        this.length = 0;
    }

    push(item: T): void {
        this.items.push(item);
        this.length++;
    }

    pop(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }
        this.length--;
        return this.items.pop();
    }

    peek(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }
        return this.items[this.length - 1];
    }
}
