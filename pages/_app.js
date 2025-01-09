import "@/styles/globals.css";
import Header from "./header";
import Footer from "./footer";
import Trendingsection from "./trendingsection";
import Hero from "./hero";
import MagazineSection from "./magazinesection";
import RecentSection from "./recentsection";
import blog from "./blog";
import blognext from "./blognext";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Component {...pageProps} />
      <Trendingsection></Trendingsection>
      <MagazineSection></MagazineSection>
      <RecentSection></RecentSection>
      <blog></blog>
      <blognext></blognext>
      <Footer/>
    </>
  );
}
