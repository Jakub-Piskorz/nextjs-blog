import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import getSortedPostsData from '../lib/posts';

export async function getStaticProps() {
  const postsList = getSortedPostsData();
  return {
    props: {
      postsList,
    },
  };
}

export default function Home({ postsList }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Yo, my name is Jakub and I have no idea what I'm doing ;-;</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
        </p>
        <Link href="/posts/first-post">
          <a className="some-class">show me da post</a>
        </Link>
        <h3>Posts:</h3>
        {postsList.map((post, i) => (
          <div key={i}>
            <p>{post.title}</p>
            <p>{post.date}</p>
            <p>{post.slug}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
}
