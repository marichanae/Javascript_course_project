import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Student App</title>
        <meta name="description" content="Student App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Javascript advanced ReactJs Project Student&nbsp;
            <code className={styles.code}>Specially add NextJS</code>
          </p>
          <div>
              
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.thirteen}>
            <Image
              src="/studentIcon-01.svg"
              alt="Student icon"
              width={320}
              height={320}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="/students"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Students <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              List of all student
            </p>
          </a>

          <a
            href="/creation"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Add Student <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Add a new student
            </p>
          </a>

          <span
            className={styles.card}
          >
            <h2 className={inter.className}>
              Comment
            </h2>
            <p className={inter.className}>
              We added NextJs to our project as a bonus for discovery
            </p>
          </span>
        </div>
      </main>
    </>
  )
}
