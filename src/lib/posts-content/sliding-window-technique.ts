import type { Post } from "@/types";

export const post: Post = {
  slug: "sliding-window-technique",
  date: "2024-07-05",
  title: {
    en: "Sliding Window Technique",
    fa: "تکنیک پنجره لغزان",
  },
  category: {
    en: "Algorithms",
    fa: "الگوریتم‌ها",
  },
  excerpt: {
    en: "A powerful technique for solving array and string problems, optimizing nested loops into linear time.",
    fa: "یک تکنیک قدرتمند برای حل مسائل آرایه و رشته، بهینه‌سازی حلقه‌های تو در تو به زمان خطی.",
  },
  tags: {
    en: ["algorithms", "arrays", "optimization", "sliding window"],
    fa: ["الگوریتم‌ها", "آرایه‌ها", "بهینه‌سازی", "پنجره لغزان"],
  },
  content: {
    en: `The Sliding Window technique is used to perform a required operation on a specific window size of a given array or string as if it were a window sliding across the data. It transforms brute-force O(n²) or O(n³) algorithms into O(n).

### Example Problem

Given an array of integers and a number k, find the maximum sum of a subarray of size k.

### Code Example (TypeScript)

\`\`\`typescript
function maxSumSubarray(arr: number[], k: number): number {
  if (arr.length < k) return -1;

  let maxSum = 0;
  let windowSum = 0;

  // Calculate sum of first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  // Slide window
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(maxSumSubarray([1, 4, 2, 10, 2, 3, 1, 0, 20], 4)); // 24
\`\`\``,
    fa: `تکنیک پنجره لغزان برای انجام یک عملیات مورد نیاز بر روی اندازه پنجره خاصی از یک آرایه یا رشته داده شده استفاده می‌شود، گویی پنجره‌ای است که در سراسر داده‌ها می‌لغزد. این تکنیک الگوریتم‌های brute-force با پیچیدگی O(n²) یا O(n³) را به O(n) تبدیل می‌کند.

### مسئله نمونه

با داشتن یک آرایه از اعداد صحیح و یک عدد k، حداکثر مجموع یک زیرآرایه با اندازه k را پیدا کنید.

### مثال کد (TypeScript)

\`\`\`typescript
function maxSumSubarray(arr: number[], k: number): number {
  if (arr.length < k) return -1;

  let maxSum = 0;
  let windowSum = 0;

  // محاسبه مجموع اولین پنجره
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  // لغزاندن پنجره
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(maxSumSubarray([1, 4, 2, 10, 2, 3, 1, 0, 20], 4)); // 24
\`\`\``,
  },
};
