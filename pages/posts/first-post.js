import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <>
        <Layout>
          <div className="w-80 bg-white shadow rounded">
            <h1 className='text-lg font-medium'>First Post</h1>
          </div>
            
            <Image
                src="/images/profile.jpg" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="Your Name"
            />
            <h2>
            <Link href="/">Back to home</Link>
            </h2>
        </Layout>
    </>
  );
}