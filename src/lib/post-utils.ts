export type PostLike = {
  data: {
    title: string;
    description: string;
    publishDate: Date;
    tags: string[];
    draft?: boolean;
  };
};

export function toPublishedPosts<T extends PostLike>(posts: T[]): T[] {
  return posts
    .filter((post) => !post.data.draft)
    .sort(
      (current, next) =>
        next.data.publishDate.getTime() - current.data.publishDate.getTime(),
    );
}

export function formatPostDate(date: Date): string {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
