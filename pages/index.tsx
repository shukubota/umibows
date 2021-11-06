import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import MetaHeader from "../components/metaHeader";
import Footer from "../components/footer";
import Header from "../components/header";

const Home: NextPage = (props) => {
  console.log({ props });
  return (
    <div className={styles.container}>
      <MetaHeader />
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          top
        </h1>
      </main>
      <Footer />
    </div>
  )
}

export default Home
