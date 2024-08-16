declare module "js-priority-queue" {
    type Comparator<T> = (a: T, b: T) => number;

    interface PriorityQueueOptions<T> {
        comparator: Comparator<T>;
        initialValues?: T[];
    }

    class PriorityQueue<T> {
        constructor(options: PriorityQueueOptions<T>);
        queue(value: T): void;
        dequeue(): T;
        peek(): T;
        length: number;
    }

    export default PriorityQueue;
}
