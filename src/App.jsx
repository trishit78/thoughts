import About from "./Components/About/About"
import Banner from "./Components/Banner/Banner"
import Bottom from "./Components/Bottom/Bottom"
import Content from "./Components/Content/Content"
import CyberGaurd from "./Components/CyberGaurd/CyberGaurd"
import Feature from "./Components/Features/Feature"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Insights from "./Components/Insights/Insights"
import Navbar from "./Components/Navbar/Navbar"
import RecentPosts from "./Components/RecentPosts/RecentPosts"
import Topics from "./Components/Topics/Topics"
import VideoCard from "./Components/VideoCard/VideoCard"

function App() {
  
  return (
    <>
      <Navbar />    
      <Hero /> 
      <VideoCard />
      <RecentPosts />
      <Feature />
      <Topics />
      <Content />
      <CyberGaurd />
      <About />
      <Banner />
      <Insights />
      <Footer />
      <Bottom />
    </>
  )
}

export default App
