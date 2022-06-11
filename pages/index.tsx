import type { NextPage } from 'next'
import MetaHeader from "../components/metaHeader";
import Footer from "../components/footer";
import Header from "../components/header";

const Home: NextPage = (props) => {
  return (
    <div>
      <MetaHeader />
      <Header />
      <main>
        <div className="bg-gray-200 h-full">
          <h1>
            top
          </h1>
          <div className="bg-red-500">
            subtitle
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
