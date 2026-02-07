import type { Post } from "@/types";

export const post: Post = {
  slug: "two-sum-problem",
  date: "2024-07-12",
  title: {
    en: "Two Sum Problem",
    fa: "مسئله مجموع دو عدد (Two Sum)",
  },
  category: {
    en: "Algorithms",
    fa: "الگوریتم‌ها",
  },
  excerpt: {
    en: "The most popular interview question involving hash maps and array processing.",
    fa: "محبوب‌ترین سوال مصاحبه شامل هش مپ‌ها و پردازش آرایه.",
  },
  tags: {
    en: ["hash map", "arrays", "interview", "algorithms"],
    fa: ["هش مپ", "آرایه‌ها", "مصاحبه", "الگوریتم‌ها"],
  },
  content: {
    en: `The Two Sum problem asks: Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`. You may assume that each input would have exactly one solution, and you may not use the same element twice.

### Approach

The naive approach checks every pair, taking O(n²) time. A better approach uses a Hash Map (or Object in JS/TS) to store the complement of the current number (target - current) as we iterate. This reduces the time complexity to O(n).

### Code Example (TypeScript)

\`\`\`typescript
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }

    map.set(nums[i], i);
  }

  throw new Error("No solution found");
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
\`\`\``,
    fa: `مسئله مجموع دو عدد (Two Sum) می‌پرسد: با داشتن یک آرایه از اعداد صحیح \`nums\` و یک عدد صحیح \`target\`، اندیس‌های دو عدد را برگردانید به طوری که مجموع آن‌ها برابر با \`target\` شود. فرض بر این است که هر ورودی دقیقاً یک راه حل دارد و نمی‌توانید از یک عنصر دو بار استفاده کنید.

### رویکرد

رویکرد ساده هر جفت را بررسی می‌کند که زمان O(n²) می‌برد. یک رویکرد بهتر استفاده از یک جدول هش (یا Object در JS/TS) برای ذخیره مکمل عدد فعلی (هدف - فعلی) در حین تکرار است. این پیچیدگی زمانی را به O(n) کاهش می‌دهد.

### مثال کد (TypeScript)

\`\`\`typescript
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }

    map.set(nums[i], i);
  }

  throw new Error("No solution found");
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
\`\`\``,
  },
};
