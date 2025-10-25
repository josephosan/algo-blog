import type { Post } from '@/types';

const posts: Post[] = [
  {
    slug: 'binary-search-explained',
    title: 'Binary Search Explained',
    date: '2024-07-28',
    category: 'Algorithms',
    excerpt: 'A deep dive into the binary search algorithm, a fundamental concept in computer science for efficient searching in sorted arrays.',
    tags: ['searching', 'algorithms', 'data structures', 'logarithmic time'],
    content: `Binary search is a highly efficient searching algorithm that works on sorted arrays. Its core idea is to repeatedly divide the search interval in half. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half. You continue this process until the value is found or the interval is empty.

### How it Works

1.  **Start with the entire array.** The search interval is initially the whole array.
2.  **Find the middle element.** Compare the middle element of the interval with the key.
3.  **Compare and narrow.**
    *   If the key matches the middle element, the search is successful.
    *   If the key is less than the middle element, the new interval is the lower half of the current one.
    *   If the key is greater than the middle element, the new interval is the upper half.
4.  **Repeat.** Continue steps 2 and 3 until the element is found or the interval is empty.

### Code Example (TypeScript)

Here's a simple implementation of binary search in TypeScript:

\`\`\`typescript
function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    // Check if target is present at mid
    if (arr[mid] === target) {
      return mid;
    }

    // If target is greater, ignore left half
    if (arr[mid] < target) {
      left = mid + 1;
    } 
    // If target is smaller, ignore right half
    else {
      right = mid - 1;
    }
  }

  // Target not present in array
  return -1;
}

const sortedArray = [2, 3, 4, 10, 40];
const target = 10;
const result = binarySearch(sortedArray, target);

console.log(result); // Output: 3
\`\`\`

### Complexity

-   **Time Complexity:** O(log n) in the worst case, which is incredibly fast.
-   **Space Complexity:** O(1) for the iterative approach.

Binary search is a testament to the power of "divide and conquer" strategies in algorithms.`,
  },
  {
    slug: 'understanding-quicksort',
    title: 'Understanding Quicksort',
    date: '2024-07-25',
    category: 'Sorting',
    excerpt: 'An exploration of Quicksort, one of the most efficient and widely used sorting algorithms based on the "divide and conquer" paradigm.',
    tags: ['sorting', 'algorithms', 'divide and conquer', 'recursion'],
    content: `Quicksort is an elegant sorting algorithm that, on average, makes O(n log n) comparisons to sort n items. In the worst case, it makes O(n²) comparisons, though this behavior is rare. It's a "divide and conquer" algorithm.

### The Partitioning Scheme

The key to Quicksort is the \`partition()\` function. Given an array and an element \`x\` of the array as a "pivot", put \`x\` at its correct position in a sorted array and put all smaller elements (smaller than \`x\`) before \`x\`, and put all greater elements (greater than \`x\`) after \`x\`. All this should be done in linear time.

### Algorithm Steps

1.  **Pick a pivot.** This can be the first element, the last, a random element, or the median.
2.  **Partition.** Reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it. After this partitioning, the pivot is in its final sorted position.
3.  **Recurse.** Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.

### Code Example (JavaScript)

\`\`\`javascript
function quickSort(arr, low, high) {
  if (low < high) {
    // pi is partitioning index, arr[pi] is now at right place
    let pi = partition(arr, low, high);

    // Separately sort elements before partition and after partition
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

// This function takes last element as pivot, places the pivot element at its
// correct position in sorted array, and places all smaller (smaller than pivot)
// to left of pivot and all greater elements to right of pivot
function partition(arr, low, high) {
  let pivot = arr[high];
  let i = (low - 1); // index of smaller element

  for (let j = low; j < high; j++) {
    // If current element is smaller than or equal to pivot
    if (arr[j] <= pivot) {
      i++;
      // swap arr[i] and arr[j]
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // swap arr[i+1] and arr[high] (or pivot)
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return i + 1;
}

let arr = [10, 7, 8, 9, 1, 5];
quickSort(arr, 0, arr.length - 1);
console.log("Sorted array: ", arr); // [1, 5, 7, 8, 9, 10]
\`\`\`
Quicksort's performance is sensitive to the choice of pivot. A good pivot selection can help avoid the worst-case scenario.`,
  },
  {
    slug: 'dijkstras-shortest-path',
    title: "Dijkstra's Shortest Path Algorithm",
    date: '2024-07-22',
    category: 'Graphs',
    excerpt: "A guide to Dijkstra's algorithm, which finds the shortest paths between nodes in a weighted graph.",
    tags: ['graphs', 'algorithms', 'shortest path', 'data structures'],
    content: `Dijkstra's algorithm is a classic algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks. It was conceived by computer scientist Edsger W. Dijkstra in 1956.

### When to Use Dijkstra's

The algorithm finds the shortest path from a starting node to all other nodes in a weighted graph. It's important to note that it only works with graphs that have non-negative edge weights.

### The Algorithm

1.  **Initialization:**
    *   Create a set of unvisited nodes, initially containing all nodes.
    *   Assign to every node a tentative distance value: set it to zero for our initial node and to infinity for all other nodes.
    *   Set the initial node as current.

2.  **Main Loop:**
    *   For the current node, consider all of its unvisited neighbors and calculate their tentative distances through the current node.
    *   Compare the newly calculated tentative distance to the current assigned value and assign the smaller one.
    *   When we are done considering all of the unvisited neighbors of the current node, mark the current node as visited and remove it from the unvisited set.
    *   Select the unvisited node that is marked with the smallest tentative distance, set it as the new "current node", and go back to step 2.

3.  **Termination:** The algorithm finishes when the destination node has been visited or when the smallest tentative distance among the nodes in the unvisited set is infinity.

### Data Structures

A priority queue is often used to efficiently select the unvisited node with the smallest tentative distance.

### Example Code (Conceptual)

\`\`\`python
import heapq

def dijkstra(graph, start_node):
    distances = {node: float('infinity') for node in graph}
    distances[start_node] = 0
    
    priority_queue = [(0, start_node)]
    
    while priority_queue:
        current_distance, current_node = heapq.heappop(priority_queue)
        
        if current_distance > distances[current_node]:
            continue
            
        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight
            
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(priority_queue, (distance, neighbor))
                
    return distances

# Example graph representation
graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 2, 'D': 5},
    'C': {'A': 4, 'B': 2, 'D': 1},
    'D': {'B': 5, 'C': 1}
}

print(dijkstra(graph, 'A'))
# Output: {'A': 0, 'B': 1, 'C': 3, 'D': 4}
\`\`\`
Dijkstra's is a cornerstone of graph theory and has applications in network routing protocols, mapping, and logistics.`,
  },
];

export async function getPosts(): Promise<Post[]> {
  // In a real app, you'd fetch this from a database or CMS.
  // We'll sort by date to show the newest posts first.
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  // In a real app, you'd fetch this from a database or CMS.
  return posts.find((post) => post.slug === slug);
}
