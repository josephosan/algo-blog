import type { Post } from "@/types";

export const post: Post = {
  slug: "dijkstras-shortest-path",
  date: "2024-07-22",
  title: {
    en: "Dijkstra's Shortest Path Algorithm",
    fa: "الگوریتم کوتاه‌ترین مسیر دایکسترا",
  },
  category: {
    en: "Graphs",
    fa: "گراف‌ها",
  },
  excerpt: {
    en: "A guide to Dijkstra's algorithm, which finds the shortest paths between nodes in a weighted graph.",
    fa: "راهنمای الگوریتم دایکسترا که کوتاه‌ترین مسیرها را بین گره‌ها در یک گراف وزن‌دار پیدا می‌کند.",
  },
  tags: {
    en: ["graphs", "algorithms", "shortest path", "data structures"],
    fa: ["گراف‌ها", "الگوریتم‌ها", "کوتاه‌ترین مسیر", "ساختمان داده"],
  },
  content: {
    en: `Dijkstra's algorithm is a classic algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks. It was conceived by computer scientist Edsger W. Dijkstra in 1956.

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
    fa: `الگوریتم دایکسترا یک الگوریتم کلاسیک برای یافتن کوتاه‌ترین مسیرها بین گره‌ها در یک گراف است که می‌تواند به عنوان مثال، شبکه‌های جاده‌ای را نمایش دهد. این الگوریتم توسط دانشمند کامپیوتر، ادسخر دایکسترا در سال ۱۹۵۶ ابداع شد.

### چه زمانی از دایکسترا استفاده کنیم

این الگوریتم کوتاه‌ترین مسیر را از یک گره شروع به تمام گره‌های دیگر در یک گراف وزن‌دار پیدا می‌کند. مهم است توجه داشته باشید که این الگوریتم فقط با گراف‌هایی کار می‌کند که وزن یال‌های آن‌ها غیرمنفی باشد.

### الگوریتم

1.  **مقداردهی اولیه:**
    *   یک مجموعه از گره‌های بازدید نشده ایجاد کنید که در ابتدا شامل همه گره‌ها است.
    *   به هر گره یک مقدار فاصله آزمایشی اختصاص دهید: برای گره اولیه ما آن را صفر و برای همه گره‌های دیگر آن را بی‌نهایت قرار دهید.
    *   گره اولیه را به عنوان گره فعلی تنظیم کنید.

2.  **حلقه اصلی:**
    *   برای گره فعلی، تمام همسایگان بازدید نشده آن را در نظر بگیرید و فواصل آزمایشی آن‌ها را از طریق گره فعلی محاسبه کنید.
    *   فاصله آزمایشی تازه محاسبه شده را با مقدار تخصیص یافته فعلی مقایسه کرده و مقدار کوچکتر را اختصاص دهید.
    *   هنگامی که بررسی تمام همسایگان بازدید نشده گره فعلی به پایان رسید، گره فعلی را به عنوان بازدید شده علامت‌گذاری کرده و آن را از مجموعه بازدید نشده حذف کنید.
    *   گره بازدید نشده‌ای را که با کوچکترین فاصله آزمایشی مشخص شده است، انتخاب کرده، آن را به عنوان "گره فعلی" جدید تنظیم کنید و به مرحله ۲ بازگردید.

3.  **پایان:** الگوریتم زمانی به پایان می‌رسد که گره مقصد بازدید شده باشد یا زمانی که کوچکترین فاصله آزمایشی در میان گره‌های مجموعه بازدید نشده بی‌نهایت باشد.

### ساختمان داده‌ها

یک صف اولویت اغلب برای انتخاب کارآمد گره بازدید نشده با کوچکترین فاصله آزمایشی استفاده می‌شود.

### مثال کد (مفهومی)

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

# نمایش گراف مثال
graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 2, 'D': 5},
    'C': {'A': 4, 'B': 2, 'D': 1},
    'D': {'B': 5, 'C': 1}
}

print(dijkstra(graph, 'A'))
# خروجی: {'A': 0, 'B': 1, 'C': 3, 'D': 4}
\`\`\`
دایکسترا یکی از سنگ بناهای نظریه گراف است و در پروتکل‌های مسیریابی شبکه، نقشه‌برداری و لجستیک کاربرد دارد.`,
  },
};
