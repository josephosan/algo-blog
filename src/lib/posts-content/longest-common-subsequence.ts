import type { Post } from "@/types";

export const post: Post = {
  slug: "longest-common-subsequence",
  date: "2024-07-08",
  title: {
    en: "Longest Common Subsequence",
    fa: "طولانی‌ترین زیردنباله مشترک (LCS)",
  },
  category: {
    en: "Dynamic Programming",
    fa: "برنامه‌نویسی پویا",
  },
  excerpt: {
    en: "Finding the longest subsequence present in two sequences, a fundamental problem in text comparison.",
    fa: "یافتن طولانی‌ترین زیردنباله موجود در دو دنباله، یک مسئله اساسی در مقایسه متن.",
  },
  tags: {
    en: ["dynamic programming", "strings", "algorithms"],
    fa: ["برنامه‌نویسی پویا", "رشته‌ها", "الگوریتم‌ها"],
  },
  content: {
    en: `Given two strings \`text1\` and \`text2\`, return the length of their longest common subsequence. A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

### Approach (Dynamic Programming)

We use a 2D array \`dp[i][j]\` which represents the LCS length of text1[0...i] and text2[0...j].
*   If letters match: \`dp[i][j] = 1 + dp[i-1][j-1]\`
*   If not: \`dp[i][j] = max(dp[i-1][j], dp[i][j-1])\`

### Code Example (TypeScript)

\`\`\`typescript
function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length;
  const n = text2.length;
  const dp: number[][] = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

console.log(longestCommonSubsequence("abcde", "ace")); // 3 ("ace")
\`\`\``,
    fa: `با داشتن دو رشته \`text1\` و \`text2\`، طول طولانی‌ترین زیردنباله مشترک آن‌ها را برگردانید. یک زیردنباله از یک رشته، رشته جدیدی است که از رشته اصلی با حذف برخی کاراکترها (یا هیچکدام) بدون تغییر ترتیب نسبی کاراکترهای باقیمانده ایجاد شده است.

### رویکرد (برنامه‌نویسی پویا)

ما از یک آرایه دو بعدی \`dp[i][j]\` استفاده می‌کنیم که نشان‌دهنده طول LCS برای text1[0...i] و text2[0...j] است.
*   اگر حروف مطابقت داشته باشند: \`dp[i][j] = 1 + dp[i-1][j-1]\`
*   اگر نه: \`dp[i][j] = max(dp[i-1][j], dp[i][j-1])\`

### مثال کد (TypeScript)

\`\`\`typescript
function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length;
  const n = text2.length;
  const dp: number[][] = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

console.log(longestCommonSubsequence("abcde", "ace")); // 3 ("ace")
\`\`\``,
  },
};
