import { View } from '@adobe/react-spectrum';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { DarkMode, DatePicker, Title } from '../components';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [date, setDate] = useState<string>('');

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="PoC using Adobe Spectrum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <DarkMode/>
        <Title/>

        <View marginTop='size-400'>
          <DatePicker onChange={setDate}/>
        </View>

        {date && (
          <View marginTop='size-400'>
            { date }
          </View>
        )}
      </main>
    </div>
  )
}

export default Home
