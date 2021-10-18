import getSortedPostsData from '../lib/posts';

describe('posts', () => {
  it('getPosts', () => {
    expect(getSortedPostsData()).toEqual(['pre-rendering.md', 'ssg-ssr.md']);
  });
});
