import type { Post } from '@/types';

const posts: Post[] = [
  {
    slug: 'intro-to-data-structures',
    date: '2024-07-30',
    title: {
      en: 'Introduction to Data Structures',
      fa: 'مقدمه‌ای بر ساختمان داده‌ها',
    },
    category: {
      en: 'Data Structures',
      fa: 'ساختمان داده',
    },
    excerpt: {
      en: 'Learn about the fundamental building blocks of computer science: data structures. This post introduces what they are and why they are important.',
      fa: 'با بلوک‌های سازنده بنیادین علوم کامپیوتر آشنا شوید: ساختمان داده‌ها. این پست به معرفی آن‌ها و اهمیتشان می‌پردازد.',
    },
    tags: {
      en: ['data structures', 'computer science', 'basics', 'programming'],
      fa: ['ساختمان داده', 'علوم کامپیوتر', 'مبانی', 'برنامه‌نویسی'],
    },
    content: {
      en: `Data structures are a way of organizing and storing data in a computer so that it can be accessed and modified efficiently. They are not just about storing data, but also about the relationships between data points and the operations that can be performed on the data.

### Why are they important?

Choosing the right data structure is crucial for creating efficient algorithms. The way data is organized can dramatically affect the performance of a program. For example, finding an item in a sorted array is much faster than in an unsorted one.

### Common Data Structures

Here are some of the most common data structures you'll encounter:

*   **Arrays:** A collection of items stored at contiguous memory locations.
*   **Linked Lists:** A linear collection of data elements, whose order is not given by their physical placement in memory.
*   **Stacks:** A "last-in, first-out" (LIFO) structure. Think of a stack of plates.
*   **Queues:** A "first-in, first-out" (FIFO) structure. Like a checkout line at a store.
*   **Trees:** A hierarchical structure with a root value and subtrees of children with a parent node.
*   **Graphs:** A set of nodes (or vertices) and a set of edges that connect pairs of nodes.
*   **Hash Tables:** A data structure that implements an associative array abstract data type, a structure that can map keys to values.

This blog will explore these and many other data structures in future posts. Stay tuned!`,
      fa: `ساختمان داده‌ها روشی برای سازماندهی و ذخیره داده‌ها در کامپیوتر است تا بتوان به طور کارآمد به آن‌ها دسترسی داشت و آن‌ها را تغییر داد. این مفهوم فقط به ذخیره داده‌ها محدود نمی‌شود، بلکه به روابط بین نقاط داده و عملیاتی که می‌توان روی داده‌ها انجام داد نیز می‌پردازد.

### چرا اهمیت دارند؟

انتخاب ساختمان داده مناسب برای ایجاد الگوریتم‌های کارآمد حیاتی است. نحوه سازماندهی داده‌ها می‌تواند به طور چشمگیری بر عملکرد یک برنامه تأثیر بگذارد. به عنوان مثال، پیدا کردن یک آیتم در یک آرایه مرتب شده بسیار سریع‌تر از یک آرایه نامرتب است.

### ساختمان داده‌های رایج

در اینجا برخی از رایج‌ترین ساختمان داده‌هایی که با آن‌ها روبرو خواهید شد، آورده شده است:

*   **آرایه‌ها:** مجموعه‌ای از آیتم‌ها که در مکان‌های حافظه پیوسته ذخیره می‌شوند.
*   **لیست‌های پیوندی:** مجموعه‌ای خطی از عناصر داده که ترتیب آن‌ها توسط مکان فیزیکی‌شان در حافظه مشخص نمی‌شود.
*   **پشته‌ها:** یک ساختار "آخرین ورودی، اولین خروجی" (LIFO). به یک پشته از بشقاب‌ها فکر کنید.
*   **صف‌ها:** یک ساختار "اولین ورودی، اولین خروجی" (FIFO). مانند یک صف پرداخت در فروشگاه.
*   **درخت‌ها:** یک ساختار سلسله مراتبی با یک مقدار ریشه و زیردرخت‌هایی از فرزندان با یک گره والد.
*   **گراف‌ها:** مجموعه‌ای از گره‌ها (یا رئوس) و مجموعه‌ای از یال‌ها که جفت‌هایی از گره‌ها را به هم متصل می‌کنند.
*   **جداول هش:** یک ساختمان داده که یک نوع داده انتزاعی آرایه انجمنی را پیاده‌سازی می‌کند، ساختاری که می‌تواند کلیدها را به مقادیر نگاشت دهد.

این وبلاگ در پست‌های آینده به بررسی این موارد و بسیاری از ساختمان داده‌های دیگر خواهد پرداخت. منتظر باشید!`,
    },
  },
  {
    slug: 'binary-search-explained',
    date: '2024-07-28',
    title: {
      en: 'Binary Search Explained',
      fa: 'توضیح جستجوی دودویی',
    },
    category: {
      en: 'Algorithms',
      fa: 'الگوریتم‌ها',
    },
    excerpt: {
      en: 'A deep dive into the binary search algorithm, a fundamental concept in computer science for efficient searching in sorted arrays.',
      fa: 'یک بررسی عمیق در مورد الگوریتم جستجوی دودویی، یک مفهوم اساسی در علوم کامپیوتر برای جستجوی کارآمد در آرایه‌های مرتب.',
    },
    tags: {
      en: ['searching', 'algorithms', 'data structures', 'logarithmic time'],
      fa: ['جستجو', 'الگوریتم‌ها', 'ساختمان داده', 'زمان لگاریتمی'],
    },
    content: {
      en: `Binary search is a highly efficient searching algorithm that works on sorted arrays. Its core idea is to repeatedly divide the search interval in half. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half. You continue this process until the value is found or the interval is empty.

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
      fa: `جستجوی دودویی یک الگوریتم جستجوی بسیار کارآمد است که بر روی آرایه‌های مرتب کار می‌کند. ایده اصلی آن تقسیم مکرر بازه جستجو به نصف است. اگر مقدار کلید جستجو کمتر از آیتم وسط بازه باشد، بازه را به نیمه پایینی محدود کنید. در غیر این صورت، آن را به نیمه بالایی محدود کنید. این فرآیند را تا زمانی که مقدار پیدا شود یا بازه خالی شود ادامه می‌دهید.

### چگونه کار می‌کند

1.  **با کل آرایه شروع کنید.** بازه جستجو در ابتدا کل آرایه است.
2.  **عنصر میانی را پیدا کنید.** عنصر میانی بازه را با کلید مقایسه کنید.
3.  **مقایسه و محدود کردن.**
    *   اگر کلید با عنصر میانی مطابقت داشته باشد، جستجو موفقیت‌آمیز است.
    *   اگر کلید کمتر از عنصر میانی باشد، بازه جدید نیمه پایینی بازه فعلی است.
    *   اگر کلید بزرگتر از عنصر میانی باشد، بازه جدید نیمه بالایی است.
4.  **تکرار.** مراحل ۲ و ۳ را تا زمانی که عنصر پیدا شود یا بازه خالی شود، تکرار کنید.

### مثال کد (TypeScript)

در اینجا یک پیاده‌سازی ساده از جستجوی دودویی در TypeScript آورده شده است:

\`\`\`typescript
function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    // بررسی کنید که آیا هدف در وسط قرار دارد
    if (arr[mid] === target) {
      return mid;
    }

    // اگر هدف بزرگتر است، نیمه چپ را نادیده بگیرید
    if (arr[mid] < target) {
      left = mid + 1;
    } 
    // اگر هدف کوچکتر است، نیمه راست را نادیده بگیرید
    else {
      right = mid - 1;
    }
  }

  // هدف در آرایه وجود ندارد
  return -1;
}

const sortedArray = [2, 3, 4, 10, 40];
const target = 10;
const result = binarySearch(sortedArray, target);

console.log(result); // خروجی: 3
\`\`\`

### پیچیدگی

-   **پیچیدگی زمانی:** O(log n) در بدترین حالت، که فوق‌العاده سریع است.
-   **پیچیدگی فضایی:** O(1) برای رویکرد تکراری.

جستجوی دودویی گواهی بر قدرت استراتژی‌های "تقسیم و غلبه" در الگوریتم‌ها است.`,
    },
  },
  {
    slug: 'understanding-quicksort',
    date: '2024-07-25',
    title: {
      en: 'Understanding Quicksort',
      fa: 'درک الگوریتم مرتب‌سازی سریع',
    },
    category: {
      en: 'Sorting',
      fa: 'مرتب‌سازی',
    },
    excerpt: {
      en: 'An exploration of Quicksort, one of the most efficient and widely used sorting algorithms based on the "divide and conquer" paradigm.',
      fa: 'بررسی مرتب‌سازی سریع، یکی از کارآمدترین و پرکاربردترین الگوریتم‌های مرتب‌سازی مبتنی بر پارادایم "تقسیم و غلبه".',
    },
    tags: {
      en: ['sorting', 'algorithms', 'divide and conquer', 'recursion'],
      fa: ['مرتب‌سازی', 'الگوریتم‌ها', 'تقسیم و غلبه', 'بازگشت'],
    },
    content: {
      en: `Quicksort is an elegant sorting algorithm that, on average, makes O(n log n) comparisons to sort n items. In the worst case, it makes O(n²) comparisons, though this behavior is rare. It's a "divide and conquer" algorithm.

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
      fa: `مرتب‌سازی سریع یک الگوریتم مرتب‌سازی زیبا است که به طور متوسط O(n log n) مقایسه برای مرتب‌سازی n آیتم انجام می‌دهد. در بدترین حالت، O(n²) مقایسه انجام می‌دهد، اگرچه این رفتار نادر است. این یک الگوریتم "تقسیم و غلبه" است.

### طرح پارتیشن‌بندی

کلید مرتب‌سازی سریع، تابع \`partition()\` است. با داشتن یک آرایه و یک عنصر \`x\` از آرایه به عنوان "محور"، \`x\` را در موقعیت صحیح خود در یک آرایه مرتب شده قرار دهید و تمام عناصر کوچکتر (کوچکتر از \`x\`) را قبل از \`x\` و تمام عناصر بزرگتر (بزرگتر از \`x\`) را بعد از \`x\` قرار دهید. همه اینها باید در زمان خطی انجام شود.

### مراحل الگوریتم

1.  **یک محور انتخاب کنید.** این می‌تواند اولین عنصر، آخرین، یک عنصر تصادفی یا میانه باشد.
2.  **پارتیشن.** آرایه را دوباره ترتیب دهید تا تمام عناصری که مقادیرشان کمتر از محور است قبل از محور قرار گیرند، در حالی که تمام عناصری که مقادیرشان بیشتر از محور است بعد از آن قرار گیرند. پس از این پارتیشن‌بندی، محور در موقعیت نهایی مرتب شده خود قرار دارد.
3.  **بازگشت.** مراحل بالا را به طور بازگشتی بر روی زیرآرایه عناصر با مقادیر کوچکتر و به طور جداگانه بر روی زیرآرایه عناصر با مقادیر بزرگتر اعمال کنید.

### مثال کد (JavaScript)

\`\`\`javascript
function quickSort(arr, low, high) {
  if (low < high) {
    // pi شاخص پارتیشن‌بندی است، arr[pi] اکنون در جای مناسب خود قرار دارد
    let pi = partition(arr, low, high);

    // به طور جداگانه عناصر قبل و بعد از پارتیشن را مرتب کنید
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

// این تابع آخرین عنصر را به عنوان محور در نظر می‌گیرد، عنصر محور را در
// موقعیت صحیح خود در آرایه مرتب شده قرار می‌دهد و همه عناصر کوچکتر (کوچکتر از محور)
// را در سمت چپ محور و همه عناصر بزرگتر را در سمت راست محور قرار می‌دهد
function partition(arr, low, high) {
  let pivot = arr[high];
  let i = (low - 1); // شاخص عنصر کوچکتر

  for (let j = low; j < high; j++) {
    // اگر عنصر فعلی کوچکتر یا مساوی محور باشد
    if (arr[j] <= pivot) {
      i++;
      // arr[i] و arr[j] را جابجا کنید
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // arr[i+1] و arr[high] (یا محور) را جابجا کنید
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return i + 1;
}

let arr = [10, 7, 8, 9, 1, 5];
quickSort(arr, 0, arr.length - 1);
console.log("آرایه مرتب شده: ", arr); // [1, 5, 7, 8, 9, 10]
\`\`\`
عملکرد مرتب‌سازی سریع به انتخاب محور حساس است. انتخاب یک محور خوب می‌تواند به جلوگیری از سناریوی بدترین حالت کمک کند.`,
    },
  },
  {
    slug: 'dijkstras-shortest-path',
    date: '2024-07-22',
    title: {
      en: "Dijkstra's Shortest Path Algorithm",
      fa: 'الگوریتم کوتاه‌ترین مسیر دایکسترا',
    },
    category: {
      en: 'Graphs',
      fa: 'گراف‌ها',
    },
    excerpt: {
      en: "A guide to Dijkstra's algorithm, which finds the shortest paths between nodes in a weighted graph.",
      fa: 'راهنمای الگوریتم دایکسترا که کوتاه‌ترین مسیرها را بین گره‌ها در یک گراف وزن‌دار پیدا می‌کند.',
    },
    tags: {
      en: ['graphs', 'algorithms', 'shortest path', 'data structures'],
      fa: ['گراف‌ها', 'الگوریتم‌ها', 'کوتاه‌ترین مسیر', 'ساختمان داده'],
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
