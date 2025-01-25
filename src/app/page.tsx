import Hero from "./component/hero"
import Section from "./component/homeSection/section"
import NewArrival from "./component/newarrival"
import TopSelling from "./component/topSelling"
export default function Home(){
  return(
    <>
    
      <Hero/>
      <Section/> 
      {/* <NewArrival/> //just for checking */}
      {/* <TopSelling/> */}
      
    </>
  )
}