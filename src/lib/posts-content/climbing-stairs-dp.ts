import type { Post } from "@/types";

export const post: Post = {
  slug: "climbing-stairs-dp",
  date: "2024-07-10",
  title: {
    en: "Climbing Stairs (Fibonacci)",
    fa: "بالا رفتن از پله‌ها (فیبوناچی)",
  },
  category: {
    en: "Dynamic Programming",
    fa: "برنامه‌نویسی پویا",
  },
  excerpt: {
    en: "A perfect introduction to Dynamic Programming using the Fibonacci sequence logic.",
    fa: "مقدمه‌ای عالی برای برنامه‌نویسی پویا با استفاده از منطق دنباله فیبوناچی.",
  },
  tags: {
    en: ["dynamic programming", "recursion", "fibonacci", "algorithms"],
    fa: ["برنامه‌نویسی پویا", "بازگشت", "فیبوناچی", "الگوریتم‌ها"],
  },
  content: {
    en: `You are climbing a staircase. It takes \`n\` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

### Analysis

This problem is identical to finding the n-th Fibonacci number.
*   To reach step \`n\`, you could have come from step \`n-1\` (1 step jump) or step \`n-2\` (2 step jump).
*   Therefore, \`ways(n) = ways(n-1) + ways(n-2)\`.

### Code Example (TypeScript)

\`\`\`typescript
function climbStairs(n: number): number {
  if (n <= 2) return n;

  let oneStepBefore = 2;
  let twoStepsBefore = 1;
  let allWays = 0;

  for (let i = 3; i <= n; i++) {
    allWays = oneStepBefore + twoStepsBefore;
    twoStepsBefore = oneStepBefore;
    oneStepBefore = allWays;
  }

  return allWays;
}

console.log(climbStairs(5)); // 8
\`\`\``,
    fa: `شما در حال بالا رفتن از یک پلکان هستید. رسیدن به بالا \`n\` پله طول می‌کشد. هر بار می‌توانید ۱ یا ۲ پله بالا بروید. به چند روش متمایز می‌توانید به بالا برسید؟

### تحلیل

این مسئله دقیقاً مشابه یافتن n-امین عدد فیبوناچی است.
*   برای رسیدن به پله \`n\`، شما می‌توانستید از پله \`n-1\` (پرش ۱ پله‌ای) یا پله \`n-2\` (پرش ۲ پله‌ای) آمده باشید.
*   بنابراین، \`ways(n) = ways(n-1) + ways(n-2)\`.

### مثال کد (TypeScript)

\`\`\`typescript
function climbStairs(n: number): number {
  if (n <= 2) return n;

  let oneStepBefore = 2;
  let twoStepsBefore = 1;
  let allWays = 0;

  for (let i = 3; i <= n; i++) {
    allWays = oneStepBefore + twoStepsBefore;
    twoStepsBefore = oneStepBefore;
    oneStepBefore = allWays;
  }

  return allWays;
}

console.log(climbStairs(5)); // 8
\`\`\``,
  },
};
