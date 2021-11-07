import React from 'react'
import MemberCard from './memberCard'
import ArrayCont from './Contact'
import Carousel from 'react-elastic-carousel';

const carasolbreak = [
  {"width": 280, "itemsToShow": 1 , "itemsToScroll": 1, pagination: false },
  {"width": 500, "itemsToShow": 2 , "itemsToScroll": 2 , pagination: false },
  {"width": 815, "itemsToShow": 3 , "itemsToScroll": 3},
  {"width": 1200, "itemsToShow": 4 , "itemsToScroll": 4},
  {"width": 1400, "itemsToShow": 5 , "itemsToScroll": 3},

]



function App() {
  return (
    <div className="container">
      <Carousel breakPoints={carasolbreak}
      easing="cubic-bezier(0, 0, 0.2, 1)"
      tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
      transitionMs={1300}
      >
        {ArrayCont.map((contacts)=>(

            <MemberCard 
              contacts={contacts}
            />
        ))}
      </Carousel>
    </div>
  )
}

export default App
