// DijkstraList.ts
import PriorityQueue from "js-priority-queue";

export default function dijkstra_list(
    source: number,
    sink: number,
    adjList: WeightedAdjacencyList,
): number[] {
    const n = adjList.length;
    const dist = new Array(n).fill(Infinity);
    const prev = new Array(n).fill(-1);
    dist[source] = 0;

    // Correct comparator for the PriorityQueue
    const pq = new PriorityQueue<number>({
        comparator: (a, b) => dist[a] - dist[b],
    });

    pq.queue(source);

    while (pq.length > 0) {
        const u = pq.dequeue();

        // Early termination if we reach the sink
        if (u === sink) break;

        for (const [v, w] of adjList[u]) {
            const alt = dist[u] + w;
            if (alt < dist[v]) {
                dist[v] = alt;
                prev[v] = u;
                pq.queue(v);
            }
        }
    }

    // If the sink is unreachable
    if (dist[sink] === Infinity) {
        return [];
    }

    // Reconstruct the shortest path
    const path: number[] = [];
    for (let at = sink; at !== -1; at = prev[at]) {
        path.push(at);
    }
    path.reverse();

    return path;
}

type WeightedAdjacencyList = Array<Array<[number, number]>>;
