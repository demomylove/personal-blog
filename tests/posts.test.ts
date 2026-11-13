import { describe, expect, it } from 'vitest';
import {
  formatPostDate,
  toPublishedPosts,
  type PostLike,
} from '../src/lib/post-utils';

const makePost = (
  title: string,
  publishDate: string,
  draft = false,
): PostLike => ({
  data: {
    title,
    description: `${title} description`,
    publishDate: new Date(publishDate),
    tags: ['Test'],
    draft,
  },
});

describe('post helpers', () => {
  it('filters drafts and sorts published posts by newest publish date first', () => {
    const posts = [
      makePost('older', '2026-01-01'),
      makePost('draft', '2026-12-01', true),
      makePost('newer', '2026-11-13'),
    ];

    expect(toPublishedPosts(posts).map((post) => post.data.title)).toEqual([
      'newer',
      'older',
    ]);
  });

  it('keeps required metadata available for list and detail pages', () => {
    const [post] = toPublishedPosts([makePost('metadata', '2026-11-13')]);

    expect(post.data.title).toBeTruthy();
    expect(post.data.description).toContain('metadata');
    expect(post.data.tags.length).toBeGreaterThan(0);
    expect(post.data.publishDate).toBeInstanceOf(Date);
  });

  it('formats dates for Chinese readers', () => {
    expect(formatPostDate(new Date('2026-11-13T00:00:00.000Z'))).toContain(
      '2026年',
    );
  });
});
