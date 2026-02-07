import type { Post } from "@/types";

export const post: Post = {
  slug: "dfs-graph-traversal",
  date: "2024-07-16",
  title: {
    en: "Depth-First Search (DFS)",
    fa: "جستجوی عمق‌اول (DFS)",
  },
  category: {
    en: "Graphs",
    fa: "گراف‌ها",
  },
  excerpt: {
    en: "A traversal algorithm that explores as far as possible along each branch before backtracking.",
    fa: "یک الگوریتم پیمایش که تا حد امکان در طول هر شاخه پیش می‌رود قبل از اینکه به عقب برگردد.",
  },
  tags: {
    en: ["graphs", "search", "stack", "recursion"],
    fa: ["گراف‌ها", "جستجو", "پشته", "بازگشت"],
  },
  content: {
    en: `Depth-First Search (DFS) is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root in the case of a graph) and explores as far as possible along each branch before backtracking.

### Key Characteristics

*   **Stack:** DFS uses a Stack data structure (either explicitly or via the call stack in recursion).
*   **Backtracking:** Crucial for solving maze puzzles or finding paths.
*   **Components:** Good for finding connected components.

### Code Example (TypeScript - Recursive)

\`\`\`typescript
function dfs(
  graph: Record<string, string[]>, 
  vertex: string, 
  visited: Set<string> = new Set(), 
  result: string[] = []
): string[] {
  visited.add(vertex);
  result.push(vertex);

  for (const neighbor of graph[vertex]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited, result);
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

console.log(dfs(graph, 'A')); // Output order may vary depending on neighbor order
\`\`\``,
    fa: `جستجوی عمق‌اول (DFS) الگوریتمی برای پیمایش یا جستجوی ساختارهای داده درخت یا گراف است. این الگوریتم از گره ریشه شروع می‌شود (در مورد گراف، یک گره دلخواه را به عنوان ریشه انتخاب می‌کند) و تا حد امکان در طول هر شاخه پیش می‌رود قبل از اینکه به عقب برگردد (Backtracking).

### ویژگی‌های کلیدی

*   **پشته:** DFS از ساختار داده پشته استفاده می‌کند (یا به صراحت یا از طریق پشته فراخوانی در بازگشت).
*   **عقب‌گرد (Backtracking):** برای حل معماهای ماز یا یافتن مسیرها حیاتی است.
*   **مولفه‌ها:** برای یافتن مولفه‌های همبند مفید است.

### مثال کد (TypeScript - بازگشتی)

\`\`\`typescript
function dfs(
  graph: Record<string, string[]>, 
  vertex: string, 
  visited: Set<string> = new Set(), 
  result: string[] = []
): string[] {
  visited.add(vertex);
  result.push(vertex);

  for (const neighbor of graph[vertex]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited, result);
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

console.log(dfs(graph, 'A')); // ترتیب خروجی ممکن است بسته به ترتیب همسایگان متفاوت باشد
\`\`\``,
  },
};
