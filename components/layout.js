import Head from 'next/head';

export default function Layout({ children } : any) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
