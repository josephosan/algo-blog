import type { Post } from "@/types";

export const post: Post = {
  slug: "topological-sort-graphs",
  date: "2024-07-02",
  title: {
    en: "Topological Sort",
    fa: "مرتب‌سازی توپولوژیکی",
  },
  category: {
    en: "Graphs",
    fa: "گراف‌ها",
  },
  excerpt: {
    en: "A linear ordering of vertices in a directed graph, essential for scheduling tasks with dependencies.",
    fa: "یک ترتیب خطی از رئوس در یک گراف جهت‌دار، ضروری برای زمان‌بندی وظایف با وابستگی‌ها.",
  },
  tags: {
    en: ["graphs", "sorting", "algorithms", "dfs"],
    fa: ["گراف‌ها", "مرتب‌سازی", "الگوریتم‌ها", "DFS"],
  },
  content: {
    en: `Topological sorting for a Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge \`u -> v\`, vertex \`u\` comes before \`v\` in the ordering. It is widely used in scheduling jobs from given dependencies.

### Approach (DFS)

We can use Depth First Search. The idea is to initialize a stack. We call DFS for every unvisited node. In DFS, after visiting all neighbors of a node, we push the node to the stack. Finally, popping elements from the stack gives the topological sort.

### Code Example (TypeScript)

\`\`\`typescript
function topologicalSort(graph: Record<string, string[]>): string[] {
  const visited = new Set<string>();
  const stack: string[] = [];
  const nodes = Object.keys(graph);

  function dfs(node: string) {
    visited.add(node);
    
    const neighbors = graph[node] || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
    
    stack.push(node);
  }

  for (const node of nodes) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return stack.reverse();
}

const tasks = {
  'A': ['C'],
  'B': ['C', 'D'],
  'C': ['E'],
  'D': ['F'],
  'E': ['H', 'F'],
  'F': ['G'],
  'G': [],
  'H': []
};

console.log(topologicalSort(tasks)); 
// Possible output: ['B', 'D', 'A', 'C', 'E', 'H', 'F', 'G']
\`\`\``,
    fa: `مرتب‌سازی توپولوژیکی برای یک گراف جهت‌دار بدون دور (DAG) یک ترتیب خطی از رئوس است به طوری که برای هر یال جهت‌دار \`u -> v\`، گره \`u\` قبل از \`v\` در ترتیب می‌آید. این به طور گسترده‌ای در زمان‌بندی کارها با وابستگی‌های مشخص استفاده می‌شود.

### رویکرد (DFS)

ما می‌توانیم از جستجوی عمق‌اول (DFS) استفاده کنیم. ایده این است که یک پشته را مقداردهی اولیه کنیم. ما DFS را برای هر گره بازدید نشده فراخوانی می‌کنیم. در DFS، پس از بازدید از تمام همسایگان یک گره، گره را به پشته اضافه می‌کنیم. در نهایت، بیرون کشیدن عناصر از پشته، مرتب‌سازی توپولوژیکی را می‌دهد.

### مثال کد (TypeScript)

\`\`\`typescript
function topologicalSort(graph: Record<string, string[]>): string[] {
  const visited = new Set<string>();
  const stack: string[] = [];
  const nodes = Object.keys(graph);

  function dfs(node: string) {
    visited.add(node);
    
    const neighbors = graph[node] || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
    
    stack.push(node);
  }

  for (const node of nodes) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return stack.reverse();
}

const tasks = {
  'A': ['C'],
  'B': ['C', 'D'],
  'C': ['E'],
  'D': ['F'],
  'E': ['H', 'F'],
  'F': ['G'],
  'G': [],
  'H': []
};

console.log(topologicalSort(tasks)); 
// خروجی ممکن: ['B', 'D', 'A', 'C', 'E', 'H', 'F', 'G']
\`\`\``,
  },
};
