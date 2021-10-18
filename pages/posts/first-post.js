import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>My first post</title>
      </Head>
      <h1>
        Your first post-traumatic stress disorder.{' '}
        <Link href="/">
          <a>Return to homepage</a>
        </Link>
      </h1>
    </Layout>
  );
}
