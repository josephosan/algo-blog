import type { Post } from "@/types";

export const post: Post = {
  slug: "bfs-graph-traversal",
  date: "2024-07-18",
  title: {
    en: "Breadth-First Search (BFS)",
    fa: "جستجوی سطح‌اول (BFS)",
  },
  category: {
    en: "Graphs",
    fa: "گراف‌ها",
  },
  excerpt: {
    en: "An essential algorithm for searching a tree or graph data structure level by level.",
    fa: "یک الگوریتم حیاتی برای جستجوی ساختار داده درخت یا گراف به صورت سطح به سطح.",
  },
  tags: {
    en: ["graphs", "search", "queue", "algorithms"],
    fa: ["گراف‌ها", "جستجو", "صف", "الگوریتم‌ها"],
  },
  content: {
    en: `Breadth-First Search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a 'search key') and explores the neighbor nodes first, before moving to the next level neighbors.

### Key Characteristics

*   **Queue:** BFS uses a Queue data structure to keep track of nodes to visit.
*   **Shortest Path:** In an unweighted graph, BFS finds the shortest path between the starting node and any other reachable node.
*   **Layer-wise:** It explores the graph layer by layer.

### Code Example (TypeScript)

\`\`\`typescript
function bfs(graph: Record<string, string[]>, start: string): string[] {
  const queue: string[] = [start];
  const visited: Set<string> = new Set([start]);
  const result: string[] = [];

  while (queue.length > 0) {
    const vertex = queue.shift()!; // Dequeue
    result.push(vertex);

    for (const neighbor of graph[vertex]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor); // Enqueue
      }
    }
  }

  return result;
}

const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D', 'E'],
  'C': ['A', 'F'],
  'D': ['B'],
  'E': ['B', 'F'],
  'F': ['C', 'E']
};

console.log(bfs(graph, 'A')); // ['A', 'B', 'C', 'D', 'E', 'F']
\`\`\``,
    fa: `جستجوی سطح‌اول (BFS) الگوریتمی برای پیمایش یا جستجوی ساختارهای داده درخت یا گراف است. این الگوریتم از ریشه درخت (یا هر گره دلخواه از یک گراف) شروع می‌شود و ابتدا گره‌های همسایه را بررسی می‌کند، قبل از اینکه به همسایگان سطح بعدی برود.

### ویژگی‌های کلیدی

*   **صف:** BFS از ساختار داده صف برای پیگیری گره‌هایی که باید بازدید شوند استفاده می‌کند.
*   **کوتاه‌ترین مسیر:** در یک گراف بدون وزن، BFS کوتاه‌ترین مسیر بین گره شروع و هر گره قابل دسترسی دیگر را پیدا می‌کند.
*   **لایه به لایه:** گراف را لایه به لایه بررسی می‌کند.

### مثال کد (TypeScript)

\`\`\`typescript
function bfs(graph: Record<string, string[]>, start: string): string[] {
  const queue: string[] = [start];
  const visited: Set<string> = new Set([start]);
  const result: string[] = [];

  while (queue.length > 0) {
    const vertex = queue.shift()!; // خروج از صف
    result.push(vertex);

    for (const neighbor of graph[vertex]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor); // ورود به صف
      }
    }
  }

  return result;
}

const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D', 'E'],
  'C': ['A', 'F'],
  'D': ['B'],
  'E': ['B', 'F'],
  'F': ['C', 'E']
};

console.log(bfs(graph, 'A')); // ['A', 'B', 'C', 'D', 'E', 'F']
\`\`\``,
  },
};
