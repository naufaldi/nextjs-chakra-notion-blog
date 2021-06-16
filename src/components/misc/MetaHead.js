import Head from 'next/head';
import { useEffect, useState } from 'react';
export default function MetaHead({ title, description, heroImage }) {
  const [canonLink, setcanonLink] = useState('');
  const [hostLink, sethostLink] = useState('');

  useEffect(() => {
    if (window) {
      setcanonLink(window.location.href);
      sethostLink(window.location.host);
    }
  }, []);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonLink} />
      <meta property="og:url" content={canonLink} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={heroImage} />
      <meta name="twitter:card" content={description} />
      <meta name="twitter:site" content={hostLink} />
    </Head>
  );
}
