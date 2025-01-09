import "@/styles/globals.css";
import Header from "./header";
import Footer from "./footer";
// import Hero from "./hero";
// import MagazineSection from "./magazinesection";
// import RecentSection from "./recentsection";
// import TrendingSection from "./trending";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      {/* <Hero></Hero> */}
      {/* <TrendingSection></TrendingSection> */}
      <Component {...pageProps} />
      {/* <MagazineSection></MagazineSection>
      <RecentSection></RecentSection> */}
      <Footer/>
    </>
  );
}
