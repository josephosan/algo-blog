import type { Post } from "@/types";

export const post: Post = {
  slug: "binary-search-explained",
  date: "2024-07-28",
  title: {
    en: "Binary Search Explained",
    fa: "توضیح جستجوی دودویی",
  },
  category: {
    en: "Algorithms",
    fa: "الگوریتم‌ها",
  },
  excerpt: {
    en: "A deep dive into the binary search algorithm, a fundamental concept in computer science for efficient searching in sorted arrays.",
    fa: "یک بررسی عمیق در مورد الگوریتم جستجوی دودویی، یک مفهوم اساسی در علوم کامپیوتر برای جستجوی کارآمد در آرایه‌های مرتب.",
  },
  tags: {
    en: ["searching", "algorithms", "data structures", "logarithmic time"],
    fa: ["جستجو", "الگوریتم‌ها", "ساختمان داده", "زمان لگاریتمی"],
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
};
