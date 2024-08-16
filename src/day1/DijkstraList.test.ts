// DijkstraList.test.ts

import dijkstra_list from "./DijkstraList";

type GraphEdge = [number, number];
type WeightedAdjacencyList = Array<Array<GraphEdge>>;

describe("dijkstra_list Tests", () => {
    it("should find the shortest path in a basic connected graph", () => {
        const adjList: WeightedAdjacencyList = [
            [
                [1, 1],
                [2, 4],
            ],
            [
                [2, 2],
                [3, 5],
            ],
            [[3, 1]],
            [],
        ];
        expect(dijkstra_list(0, 3, adjList)).toEqual([0, 1, 2, 3]);
    });

    it("should return an empty array when nodes are disconnected", () => {
        const adjList: WeightedAdjacencyList = [[[1, 1]], [], [[3, 1]], []];
        expect(dijkstra_list(0, 3, adjList)).toEqual([]);
    });

    it("should find the shortest path when multiple paths are available", () => {
        const adjList: WeightedAdjacencyList = [
            [
                [1, 1],
                [2, 4],
            ],
            [
                [2, 2],
                [3, 5],
            ],
            [
                [3, 1],
                [1, 1],
            ],
            [],
        ];
        expect(dijkstra_list(0, 3, adjList)).toEqual([0, 1, 2, 3]);
    });

    it("should handle a single node graph correctly", () => {
        const adjList: WeightedAdjacencyList = [[]];
        expect(dijkstra_list(0, 0, adjList)).toEqual([0]);
    });

    it("should return an empty array when there are no edges", () => {
        const adjList: WeightedAdjacencyList = [[], [], []];
        expect(dijkstra_list(0, 2, adjList)).toEqual([]);
    });

    it("should correctly find a path that circles back to the source", () => {
        const adjList: WeightedAdjacencyList = [[[1, 1]], [[2, 1]], [[0, 1]]];
        expect(dijkstra_list(0, 2, adjList)).toEqual([0, 1, 2]);
    });
});
