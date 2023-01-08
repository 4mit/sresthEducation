import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import ContentScroller from '../components/ContentScroller/ContentScroller';
import SectionBlock from '../components/SectionBlock';
import RecentArticle from '../components/RecentArticle/RecentArticle';
import Footer from '../components/Footer';
import LearningCard from '../components/Cards/LearningCard';
import Testimonial from '../components/Cards/Testimonial'
import Faq from '../components/Faq/Faq';

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shresth Education Center</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <meta name="description" content="Shresth Education Institute" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&family=Roboto+Mono&family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="main2">
        <Header />
        <Banner />
        <ContentScroller items={[{ title: 'hello' }]} />
        <SectionBlock>
          <RecentArticle />
        </SectionBlock>
        <SectionBlock>
          <LearningCard />
        </SectionBlock>

        <SectionBlock>
          <Testimonial />
        </SectionBlock>
        <SectionBlock>
          <Faq />
        </SectionBlock>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
