// PrimsList.test.ts

import prims from "./PrimsList";

type Edge = { node: number; weight: number };
type WeightedAdjacencyList = Array<Array<Edge>>;

describe("Prims Algorithm Tests", () => {
    it("should construct the MST for a basic connected graph", () => {
        const adjList: WeightedAdjacencyList = [
            [
                { node: 1, weight: 1 },
                { node: 2, weight: 4 },
            ],
            [
                { node: 0, weight: 1 },
                { node: 2, weight: 2 },
                { node: 3, weight: 5 },
            ],
            [
                { node: 0, weight: 4 },
                { node: 1, weight: 2 },
                { node: 3, weight: 1 },
            ],
            [
                { node: 1, weight: 5 },
                { node: 2, weight: 1 },
            ],
        ];
        const result = prims(adjList);
        expect(result).not.toBeNull();
        expect(result![0]).toEqual([{ node: 1, weight: 1 }]);
        expect(result![1]).toEqual([
            { node: 0, weight: 1 },
            { node: 2, weight: 2 },
        ]);
        expect(result![2]).toEqual([
            { node: 1, weight: 2 },
            { node: 3, weight: 1 },
        ]);
        expect(result![3]).toEqual([{ node: 2, weight: 1 }]);
    });

    it("should return null for a disconnected graph", () => {
        const adjList: WeightedAdjacencyList = [
            [{ node: 1, weight: 1 }],
            [{ node: 0, weight: 1 }],
            [{ node: 3, weight: 1 }],
            [{ node: 2, weight: 1 }],
        ];
        expect(prims(adjList)).toBeNull();
    });

    it("should handle a single node graph", () => {
        const adjList: WeightedAdjacencyList = [[]];
        const result = prims(adjList);
        expect(result).not.toBeNull();
        expect(result![0]).toEqual([]);
    });

    it("should handle a graph with no edges", () => {
        const adjList: WeightedAdjacencyList = [[], [], []];
        expect(prims(adjList)).toBeNull();
    });

    it("should correctly build the MST when multiple edges have the same weight", () => {
        const adjList: WeightedAdjacencyList = [
            [
                { node: 1, weight: 1 },
                { node: 2, weight: 1 },
            ],
            [
                { node: 0, weight: 1 },
                { node: 2, weight: 1 },
            ],
            [
                { node: 0, weight: 1 },
                { node: 1, weight: 1 },
            ],
        ];
        const result = prims(adjList);
        expect(result).not.toBeNull();
        expect(result![0]).toEqual([
            { node: 1, weight: 1 },
            { node: 2, weight: 1 },
        ]);
        expect(result![1]).toEqual([{ node: 0, weight: 1 }]);
        expect(result![2]).toEqual([{ node: 0, weight: 1 }]);
    });
});
