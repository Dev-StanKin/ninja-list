import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Navbar from '../comps/navbar';
import Footer from '../comps/footer';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          voluptatum odio rerum obcaecati iste pariatur distinctio atque harum
          omnis? Quae hic voluptatem asperiores at autem ab possimus? Veritatis,
          fugiat a?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          voluptatum odio rerum obcaecati iste pariatur distinctio atque harum
          omnis? Quae hic voluptatem asperiores at autem ab possimus? Veritatis,
          fugiat a?
        </p>

        <Link href='ninjas' className={styles.btn}>
          See ninja listing
        </Link>
      </div>
    </>
  );
}
