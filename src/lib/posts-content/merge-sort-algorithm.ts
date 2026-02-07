import type { Post } from "@/types";

export const post: Post = {
  slug: "merge-sort-algorithm",
  date: "2024-07-20",
  title: {
    en: "Merge Sort Algorithm",
    fa: "الگوریتم مرتب‌سازی ادغامی",
  },
  category: {
    en: "Sorting",
    fa: "مرتب‌سازی",
  },
  excerpt: {
    en: "A stable, efficient, divide-and-conquer sorting algorithm that guarantees O(n log n) performance.",
    fa: "یک الگوریتم مرتب‌سازی پایدار، کارآمد و مبتنی بر تقسیم و غلبه که عملکرد O(n log n) را تضمین می‌کند.",
  },
  tags: {
    en: ["sorting", "divide and conquer", "recursion", "algorithms"],
    fa: ["مرتب‌سازی", "تقسیم و غلبه", "بازگشت", "الگوریتم‌ها"],
  },
  content: {
    en: `Merge Sort is one of the most popular sorting algorithms and a great example of the "divide and conquer" strategy. It works by recursively dividing the input array into two halves, sorting them, and then merging the sorted halves.

### How it Works

1.  **Divide:** Divide the unsorted list into $n$ sublists, each containing one element (a list of one element is considered sorted).
2.  **Conquer:** Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.

### Code Example (TypeScript)

\`\`\`typescript
function merge(left: number[], right: number[]): number[] {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}

function mergeSort(unsortedArray: number[]): number[] {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return merge(
    mergeSort(left), mergeSort(right)
  );
}

const arr = [12, 11, 13, 5, 6, 7];
console.log(mergeSort(arr)); // [5, 6, 7, 11, 12, 13]
\`\`\`

### Complexity

*   **Time Complexity:** O(n log n) in all cases (worst, average, and best).
*   **Space Complexity:** O(n) because of the temporary arrays used for merging.`,
    fa: `مرتب‌سازی ادغامی یکی از محبوب‌ترین الگوریتم‌های مرتب‌سازی و نمونه‌ای عالی از استراتژی "تقسیم و غلبه" است. این الگوریتم با تقسیم بازگشتی آرایه ورودی به دو نیمه، مرتب‌سازی آن‌ها و سپس ادغام نیمه‌های مرتب‌شده کار می‌کند.

### چگونه کار می‌کند

1.  **تقسیم:** لیست نامرتب را به $n$ زیرلیست تقسیم کنید که هر کدام شامل یک عنصر باشد (لیست یک عنصری مرتب شده در نظر گرفته می‌شود).
2.  **غلبه:** زیرلیست‌ها را به طور مکرر ادغام کنید تا زیرلیست‌های مرتب شده جدیدی ایجاد شوند تا زمانی که تنها یک زیرلیست باقی بماند. این لیست مرتب شده خواهد بود.

### مثال کد (TypeScript)

\`\`\`typescript
function merge(left: number[], right: number[]): number[] {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // مقادیر را به ترتیب در resultArray قرار می‌دهیم
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // باید اینجا الحاق کنیم زیرا یک عنصر باقی خواهد ماند
  // یا از چپ یا از راست
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}

function mergeSort(unsortedArray: number[]): number[] {
  // اگر آرایه تنها یک عنصر داشته باشد یا خالی باشد، نیازی به مرتب‌سازی نیست
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  // برای تقسیم آرایه به دو نیم، باید وسط را پیدا کنیم
  const middle = Math.floor(unsortedArray.length / 2);

  // اینجا جایی است که آرایه را به چپ و راست تقسیم می‌کنیم
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // استفاده از بازگشت برای ترکیب چپ و راست
  return merge(
    mergeSort(left), mergeSort(right)
  );
}

const arr = [12, 11, 13, 5, 6, 7];
console.log(mergeSort(arr)); // [5, 6, 7, 11, 12, 13]
\`\`\`

### پیچیدگی

*   **پیچیدگی زمانی:** O(n log n) در تمام موارد (بدترین، متوسط و بهترین).
*   **پیچیدگی فضایی:** O(n) به دلیل آرایه‌های موقتی که برای ادغام استفاده می‌شوند.`,
  },
};
