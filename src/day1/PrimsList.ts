import PriorityQueue from "js-priority-queue";

export default function prims(
    adjList: WeightedAdjacencyList,
): WeightedAdjacencyList | null {
    const n = adjList.length;
    if (n === 0) {
        return null;
    }

    const mst: WeightedAdjacencyList = Array.from({ length: n }, () => []);
    const visited = new Array(n).fill(false);
    const pq = new PriorityQueue<{ from: number; to: number; weight: number }>({
        comparator: (a, b) => a.weight - b.weight,
    });

    // Start with node 0
    visited[0] = true;
    for (const edge of adjList[0]) {
        pq.queue({ from: 0, to: edge.node, weight: edge.weight });
    }

    while (pq.length > 0) {
        const { from, to, weight } = pq.dequeue();

        if (visited[to]) continue;

        // Mark the node as visited
        visited[to] = true;

        // Add the edge to the MST
        mst[from].push({ node: to, weight });
        mst[to].push({ node: from, weight });

        // Explore the edges of the newly added node
        for (const edge of adjList[to]) {
            if (!visited[edge.node]) {
                pq.queue({ from: to, to: edge.node, weight: edge.weight });
            }
        }
    }

    // Check if all nodes were visited, indicating the graph was connected
    if (visited.some((v) => !v)) {
        return null;
    }

    return mst;
}

type WeightedAdjacencyList = Array<Array<Edge>>;
type Edge = { node: number; weight: number };
