import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) 
{
  return (
    <div>
      <Head>
        <title>Week12 Next.js App</title>
      </Head>
      <header>
        <nav>
          <h5>Week12</h5>
        </nav>
      </header>
      <main>
        {children}
      </main>
      {!home && (
          <Link href="/" className="btn btn-secondary mt-3 w-50">
            Back To Generals
          </Link>
        )
      }
      <footer>
        <p className="mt-2">This Is Week Twelves Assignment</p>
      </footer>
    </div>
  );
}