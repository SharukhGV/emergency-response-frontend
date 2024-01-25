// import { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// // import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import northern from "./northern.jpg"
// import fireball from "./fireball.jpg"
// import starrysky from "./starrysky.jpg"
// import cherrysprings from "./cherrysprings.jpg"
// import hiveheavenLOGO from "../pages/hiveheavenLOGO.png"
import beeinsect from "../pages/beeinsect.png"
// import socialmediacommunity from "./socialmediacommunity.png"
// import sunmoonpic from "./sunmoonpic.png"
// import communitycircle from "./communitycircle.png"
import solarsystem from "./solarsystem.png"
import earthglobe from "./earthglobe.png"
import lightpollution from "./lightpollution.jpg"
import shootingstar from "./shootingstar.jpg"
import aurora from "./aurora.jpg"
// function ControlledCarousel() {
//   const [index, setIndex] = useState(0);
import { Container, Row, Col, Image } from 'react-bootstrap';

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//         <img style={{maxWidth:"550px", maxHeight:"350px"}} src={northern} alt="First slide" />
//         <Carousel.Caption>
//           <h3>Hive of Heaven</h3>
//           <p >A Bee Hive is full of bees as the Night should be filled with Stars </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img style={{maxWidth:"550px", maxHeight:"350px"}} src={fireball} alt="First slide" />
//         <Carousel.Caption>
//           <h3>Our Purpose</h3>
//           <p> Get to a better view of the Night Sky according to research and user input.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img style={{maxWidth:"550px", maxHeight:"350px"}} src={starrysky} alt="First slide" />
//         <Carousel.Caption>
//           <h3>We Thrive on Community</h3>
//           <p>
// Report dark skies near you, or astronomical anomalies.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default ControlledCarousel;


import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function ControlledCarousel() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
    <Image fluid src={lightpollution} alt="First slide" />
        <Carousel.Caption>
        <h3 style={{backgroundColor:"rgba(0,0,0,0.5)"}}>Starry Nights are Rare</h3>
        <p style={{backgroundColor:"rgba(0,0,0,0.5)"}}>A Bee Hive is full of bees as the Night should be filled with Stars </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
               <Image fluid src={shootingstar} alt="First slide" />
        <Carousel.Caption>
        <h3 style={{backgroundColor:"rgba(0,0,0,0.5)"}}>Gaze at Other Worlds</h3>
           <p style={{backgroundColor:"rgba(0,0,0,0.5)"}}>Report Dark Skies for Others to Enjoy</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
                <Image fluid  src={aurora} alt="First slide" />
        <Carousel.Caption>
        <h3 style={{backgroundColor:"rgba(0,0,0,0.5)"}}>Auroras & Meteors</h3>
           <p style={{backgroundColor:"rgba(0,0,0,0.5)"}}>
 Report dark skies near you, or astronomical anomalies.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;