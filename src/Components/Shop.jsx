import React from 'react';
import './Shop.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import the CSS file for styling
import { Feedback } from './Feedback';
import { Footer } from './Footer';
//  import { Perheader } from './Per_header';
// import { Header } from './Header';

export const Shop= () => {
  const outfits = [
        {
          imageSrc: 'https://media.istockphoto.com/id/1278302887/photo/mens-shirt-and-pants-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=t-RGkbhekw3v6O5GpQMfc3J4UJ6WnUDmrNG_wikMk7k=',
          description: 'Stylish Casual',
        },
        {
          imageSrc: 'https://media.istockphoto.com/id/842987514/photo/women-dress.jpg?s=612x612&w=0&k=20&c=KOdTvcvh0JpwGadgYQOx4J0jWZ_3vhIbS90HWT0Jz-I=',
          description: 'Elegant Formal',
        },
        {
          imageSrc: 'https://media.istockphoto.com/id/1314244659/photo/fashion-baby-outfit-on-beige-background-natural-linen-textil-eco-friendly-boho-style-children.jpg?s=612x612&w=0&k=20&c=M7NRzQO_NJfaOdQFGUGs4voF8iMA42SRPE-4n7LOn58=',
          description: 'Sporty Chic',
        },
        {
          imageSrc: 'https://media.istockphoto.com/id/1213233746/photo/white-striped-shorts-with-bow-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=Ewna9IjEG3bKJo0x5rbzcfgLA1nKlYoYfK12scnI80U',
          description: 'Casual Denim',
        },
        {
          imageSrc: 'https://media.istockphoto.com/id/905476552/photo/top-view-fashion-trendy-look-of-kids-clothes-on-white-wooden-background-kids-fashion-spring.jpg?s=612x612&w=0&k=20&c=qucx-Q4DdpwdXH1kU-yYb0N4fDutGNGuZiWfvkw4XJ4',
          description: 'Bohemian Vibes',
        },
        {
          imageSrc: 'https://media.istockphoto.com/id/171224469/photo/canvas-shoes.jpg?s=612x612&w=0&k=20&c=oD5A61xxgna-0WNafNcZxySSwCiEnUCs5wiDJVfb2tQ',
          description: 'Urban StreetWear',
        },
    ]

  return (
    <div>
      {/* <Header /> */}
    <div className="scan-page"><br></br>
      {/* <h1>FitAI: AR Fashion Recommender & Try-On</h1>
      <button id="scan-btn">Scan with Camera</button>  */}
      <div className="container">
        {outfits.map((outfit, index) => (
          <div key={index} className="outfit">
            <img src={outfit.imageSrc} alt={`Outfit ${index + 1}`} />
            <p>{outfit.description}</p>
          </div>
        ))}
      </div>
      {/* JavaScript for camera scan functionality can be added here */}
    </div>
    <Feedback />
    <Footer />
    </div>
  );
};

export default Shop;
