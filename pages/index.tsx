import type { NextPage } from 'next'
import MetaHeader from "../components/metaHeader";
import Footer from "../components/footer";
import Header from "../components/header";

const Home: NextPage = (props) => {
  console.log({ props });
  return (
    <div>
      <MetaHeader />
      <Header />
      <main>
        <h1>
          top
        </h1>
      </main>
      <Footer />
    </div>
  )
}

export default Home
