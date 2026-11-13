import { getCollection, type CollectionEntry } from 'astro:content';
import { toPublishedPosts } from './post-utils';
export { formatPostDate, toPublishedPosts, type PostLike } from './post-utils';

export type Post = CollectionEntry<'posts'>;

export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('posts');
  return toPublishedPosts(posts);
}

export function getPostSlug(post: Post): string {
  return post.id.replace(/\.md$/, '');
}
