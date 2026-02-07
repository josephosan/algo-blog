import type { Post } from "@/types";

export const post: Post = {
  slug: "intro-to-data-structures",
  date: "2024-07-30",
  title: {
    en: "Introduction to Data Structures",
    fa: "مقدمه‌ای بر ساختمان داده‌ها",
  },
  category: {
    en: "Data Structures",
    fa: "ساختمان داده",
  },
  excerpt: {
    en: "Learn about the fundamental building blocks of computer science: data structures. This post introduces what they are and why they are important.",
    fa: "با بلوک‌های سازنده بنیادین علوم کامپیوتر آشنا شوید: ساختمان داده‌ها. این پست به معرفی آن‌ها و اهمیتشان می‌پردازد.",
  },
  tags: {
    en: ["data structures", "computer science", "basics", "programming"],
    fa: ["ساختمان داده", "علوم کامپیوتر", "مبانی", "برنامه‌نویسی"],
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
};
