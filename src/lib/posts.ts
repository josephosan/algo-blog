import type { Post } from "@/types";
import { post as introPost } from "./posts-content/intro-to-data-structures";
import { post as binarySearchPost } from "./posts-content/binary-search-explained";
import { post as quicksortPost } from "./posts-content/understanding-quicksort";
import { post as dijkstraPost } from "./posts-content/dijkstras-shortest-path";
import { post as mergeSortPost } from "./posts-content/merge-sort-algorithm";
import { post as bfsPost } from "./posts-content/bfs-graph-traversal";
import { post as dfsPost } from "./posts-content/dfs-graph-traversal";
import { post as knapsackPost } from "./posts-content/knapsack-problem-dp";
import { post as twoSumPost } from "./posts-content/two-sum-problem";
import { post as climbingStairsPost } from "./posts-content/climbing-stairs-dp";
import { post as lcsPost } from "./posts-content/longest-common-subsequence";
import { post as slidingWindowPost } from "./posts-content/sliding-window-technique";
import { post as topologicalSortPost } from "./posts-content/topological-sort-graphs";
import { post as floydWarshallPost } from "./posts-content/floyd-warshall-shortest-path";

const posts: Post[] = [
  introPost,
  binarySearchPost,
  quicksortPost,
  dijkstraPost,
  mergeSortPost,
  bfsPost,
  dfsPost,
  knapsackPost,
  twoSumPost,
  climbingStairsPost,
  lcsPost,
  slidingWindowPost,
  topologicalSortPost,
  floydWarshallPost,
];

export async function getPosts(): Promise<Post[]> {
  // In a real app, you'd fetch this from a database or CMS.
  // We'll sort by date to show the newest posts first.
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  // In a real app, you'd fetch this from a database or CMS.
  return posts.find((post) => post.slug === slug);
}
