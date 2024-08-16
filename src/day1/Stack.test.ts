// Stack.test.ts
import Stack from "./Stack";

describe("Stack Tests", () => {
    it("should initialize with length 0", () => {
        const stack = new Stack<number>();
        expect(stack.length).toBe(0);
    });

    it("should push items and increase length", () => {
        const stack = new Stack<number>();
        stack.push(1);
        stack.push(2);
        expect(stack.length).toBe(2);
    });

    it("should pop items and decrease length", () => {
        const stack = new Stack<number>();
        stack.push(1);
        stack.push(2);
        expect(stack.pop()).toBe(2);
        expect(stack.length).toBe(1);
        expect(stack.pop()).toBe(1);
        expect(stack.length).toBe(0);
        expect(stack.pop()).toBeUndefined(); // Popping from an empty stack should return undefined
    });

    it("should peek at the top item without popping it", () => {
        const stack = new Stack<number>();
        stack.push(1);
        stack.push(2);
        expect(stack.peek()).toBe(2);
        expect(stack.length).toBe(2);
    });

    it("should return undefined when peeking into an empty stack", () => {
        const stack = new Stack<number>();
        expect(stack.peek()).toBeUndefined();
    });
});
