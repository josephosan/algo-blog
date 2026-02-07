import type { Post } from "@/types";

export const post: Post = {
  slug: "knapsack-problem-dp",
  date: "2024-07-14",
  title: {
    en: "0/1 Knapsack Problem",
    fa: "مسئله کوله پشتی ۰/۱",
  },
  category: {
    en: "Dynamic Programming",
    fa: "برنامه‌نویسی پویا",
  },
  excerpt: {
    en: "A classic optimization problem: maximize the value of items in a knapsack without exceeding its weight capacity.",
    fa: "یک مسئله بهینه‌سازی کلاسیک: حداکثر کردن ارزش آیتم‌ها در یک کوله پشتی بدون تجاوز از ظرفیت وزن آن.",
  },
  tags: {
    en: ["dynamic programming", "optimization", "algorithms"],
    fa: ["برنامه‌نویسی پویا", "بهینه‌سازی", "الگوریتم‌ها"],
  },
  content: {
    en: `The 0/1 Knapsack problem is a classic problem in combinatorial optimization. Given a set of items, each with a weight and a value, determine the number of each item to include in a collection so that the total weight is less than or equal to a given limit and the total value is as large as possible. In the 0/1 version, you can either take an item or leave it (binary choice).

### Approach (Dynamic Programming)

We build a table \`dp[i][w]\` where:
*   \`i\` represents that we are considering the first \`i\` items.
*   \`w\` represents the current weight capacity.
*   \`dp[i][w]\` stores the maximum value achievable with the first \`i\` items and capacity \`w\`.

### Code Example (TypeScript)

\`\`\`typescript
function knapsack(capacity: number, weights: number[], values: number[]): number {
  const n = weights.length;
  const dp: number[][] = Array(n + 1).fill(0).map(() => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        // Option 1: Include the item
        const valWithItem = values[i - 1] + dp[i - 1][w - weights[i - 1]];
        // Option 2: Exclude the item
        const valWithoutItem = dp[i - 1][w];
        dp[i][w] = Math.max(valWithItem, valWithoutItem);
      } else {
        // Cannot include item because it's too heavy
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];
}

const values = [60, 100, 120];
const weights = [10, 20, 30];
const capacity = 50;
console.log(knapsack(capacity, weights, values)); // 220
\`\`\``,
    fa: `مسئله کوله پشتی ۰/۱ یک مسئله کلاسیک در بهینه‌سازی ترکیبی است. با داشتن مجموعه‌ای از آیتم‌ها، که هر کدام وزن و ارزشی دارند، تعیین کنید که چه تعداد از هر آیتم را در یک مجموعه قرار دهید تا وزن کل کمتر یا مساوی یک حد معین باشد و ارزش کل تا حد ممکن بزرگ باشد. در نسخه ۰/۱، شما می‌توانید یا یک آیتم را بردارید یا آن را رها کنید (انتخاب دودویی).

### رویکرد (برنامه‌نویسی پویا)

ما یک جدول \`dp[i][w]\` می‌سازیم که در آن:
*   \`i\` نشان می‌دهد که ما \`i\` آیتم اول را در نظر می‌گیریم.
*   \`w\` نشان‌دهنده ظرفیت وزن فعلی است.
*   \`dp[i][w]\` حداکثر ارزشی را که می‌توان با \`i\` آیتم اول و ظرفیت \`w\` به دست آورد، ذخیره می‌کند.

### مثال کد (TypeScript)

\`\`\`typescript
function knapsack(capacity: number, weights: number[], values: number[]): number {
  const n = weights.length;
  const dp: number[][] = Array(n + 1).fill(0).map(() => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        // گزینه ۱: شامل کردن آیتم
        const valWithItem = values[i - 1] + dp[i - 1][w - weights[i - 1]];
        // گزینه ۲: حذف کردن آیتم
        const valWithoutItem = dp[i - 1][w];
        dp[i][w] = Math.max(valWithItem, valWithoutItem);
      } else {
        // نمی‌توان آیتم را شامل کرد زیرا خیلی سنگین است
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];
}

const values = [60, 100, 120];
const weights = [10, 20, 30];
const capacity = 50;
console.log(knapsack(capacity, weights, values)); // 220
\`\`\``,
  },
};
