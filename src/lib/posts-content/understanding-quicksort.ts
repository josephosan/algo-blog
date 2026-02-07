import type { Post } from "@/types";

export const post: Post = {
  slug: "understanding-quicksort",
  date: "2024-07-25",
  title: {
    en: "Understanding Quicksort",
    fa: "درک الگوریتم مرتب‌سازی سریع",
  },
  category: {
    en: "Sorting",
    fa: "مرتب‌سازی",
  },
  excerpt: {
    en: 'An exploration of Quicksort, one of the most efficient and widely used sorting algorithms based on the "divide and conquer" paradigm.',
    fa: 'بررسی مرتب‌سازی سریع، یکی از کارآمدترین و پرکاربردترین الگوریتم‌های مرتب‌سازی مبتنی بر پارادایم "تقسیم و غلبه".',
  },
  tags: {
    en: ["sorting", "algorithms", "divide and conquer", "recursion"],
    fa: ["مرتب‌سازی", "الگوریتم‌ها", "تقسیم و غلبه", "بازگشت"],
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
};
