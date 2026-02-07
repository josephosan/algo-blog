import type { Post } from "@/types";

export const post: Post = {
  slug: "floyd-warshall-shortest-path",
  date: "2024-06-30",
  title: {
    en: "Floyd-Warshall Algorithm",
    fa: "الگوریتم فلوید-وارشال",
  },
  category: {
    en: "Graphs",
    fa: "گراف‌ها",
  },
  excerpt: {
    en: "An algorithm for finding shortest paths in a directed weighted graph with positive or negative edge weights (but no negative cycles).",
    fa: "الگوریتمی برای یافتن کوتاه‌ترین مسیرها در یک گراف جهت‌دار وزن‌دار با وزن‌های مثبت یا منفی (اما بدون دورهای منفی).",
  },
  tags: {
    en: ["graphs", "shortest path", "dynamic programming", "algorithms"],
    fa: ["گراف‌ها", "کوتاه‌ترین مسیر", "برنامه‌نویسی پویا", "الگوریتم‌ها"],
  },
  content: {
    en: `The Floyd-Warshall algorithm is an algorithm for finding shortest paths in a directed weighted graph with positive or negative edge weights (but no negative cycles). It is an example of dynamic programming. It computes the shortest paths between all pairs of vertices.

### Approach

We maintain a 2D matrix \`dist\` where \`dist[i][j]\` is the shortest distance from \`i\` to \`j\`. We iterate through every possible intermediate node \`k\` and check if going from \`i\` to \`j\` via \`k\` is shorter than the current know path.
\`dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])\`

### Code Example (TypeScript)

\`\`\`typescript
function floydWarshall(graph: number[][]): number[][] {
  const dist = graph.map(row => [...row]);
  const len = dist.length;

  for (let k = 0; k < len; k++) {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (dist[i][j] > dist[i][k] + dist[k][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
}

const INF = 99999;
const graph = [
  [0, 5, INF, 10],
  [INF, 0, 3, INF],
  [INF, INF, 0, 1],
  [INF, INF, INF, 0]
];

console.log(floydWarshall(graph));
\`\`\``,
    fa: `الگوریتم فلوید-وارشال الگوریتمی برای یافتن کوتاه‌ترین مسیرها در یک گراف جهت‌دار وزن‌دار با وزن‌های مثبت یا منفی (اما بدون دورهای منفی) است. این نمونه‌ای از برنامه‌نویسی پویا است. این الگوریتم کوتاه‌ترین مسیرها را بین تمام جفت‌های رئوس محاسبه می‌کند.

### رویکرد

ما یک ماتریس دو بعدی \`dist\` نگهداری می‌کنیم که در آن \`dist[i][j]\` کوتاه‌ترین فاصله از \`i\` به \`j\` است. ما در میان هر گره میانی ممکن \`k\` تکرار می‌کنیم و بررسی می‌کنیم که آیا رفتن از \`i\` به \`j\` از طریق \`k\` کوتاه‌تر از مسیر شناخته شده فعلی است یا خیر.
\`dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])\`

### مثال کد (TypeScript)

\`\`\`typescript
function floydWarshall(graph: number[][]): number[][] {
  const dist = graph.map(row => [...row]);
  const len = dist.length;

  for (let k = 0; k < len; k++) {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (dist[i][j] > dist[i][k] + dist[k][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
}

const INF = 99999;
const graph = [
  [0, 5, INF, 10],
  [INF, 0, 3, INF],
  [INF, INF, 0, 1],
  [INF, INF, INF, 0]
];

console.log(floydWarshall(graph));
\`\`\``,
  },
};
