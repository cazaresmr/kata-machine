// Queue.test.ts
import Queue from "./Queue";

describe("Queue Tests", () => {
    let queue: Queue<number>;

    beforeEach(() => {
        queue = new Queue<number>();
    });

    it("should start with a length of 0", () => {
        expect(queue.length).toBe(0);
    });

    it("should enqueue items correctly", () => {
        queue.enqueue(1);
        expect(queue.length).toBe(1);
        expect(queue.peek()).toBe(1);

        queue.enqueue(2);
        expect(queue.length).toBe(2);
        expect(queue.peek()).toBe(1);
    });

    it("should dequeue items correctly", () => {
        queue.enqueue(1);
        queue.enqueue(2);
        const item = queue.deque();
        expect(item).toBe(1);
        expect(queue.length).toBe(1);
        expect(queue.peek()).toBe(2);
    });

    it("should return undefined when dequeuing from an empty queue", () => {
        const item = queue.deque();
        expect(item).toBeUndefined();
        expect(queue.length).toBe(0);
    });

    it("should peek items correctly", () => {
        queue.enqueue(1);
        expect(queue.peek()).toBe(1);
        queue.enqueue(2);
        expect(queue.peek()).toBe(1);
        queue.deque();
        expect(queue.peek()).toBe(2);
    });

    it("should return undefined when peeking in an empty queue", () => {
        expect(queue.peek()).toBeUndefined();
    });
});
