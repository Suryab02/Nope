import React, { useEffect } from 'react';
import './HeroSection.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function HeroSection() {

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray("#cards .box");
      const screenWidth = window.innerWidth;
      //  gsap.to(boxes, {
      //   xPercent: (i) => -100 * i,
      //   duration: (i) => i,
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: "#cards",
      //     start: "top top",
      //     scrub: true,
      //     pin: true,
      //     markers: true
      //   }
      // });

      gsap.to(boxes, {
        xPercent: -100 * (boxes.length - 1),
        scrollTrigger: {
          trigger: "#cards",
          start: 'top top',
          pin: true,
          scrub: 1,
          markers: true
        }
      })

    },);


  return (
    <div>
      <div className="text">
        <h1 className="TextCard">NewsCard</h1>
        <section id="cards">
          <div className="box card1">card1</div>
          <div className="box card2">card2</div>
          <div className="box card3">card3</div>
          <div className="box card4">card4</div>
        </section>
        <h1 className="TextCard">NewsCard</h1>
      </div>
    </div>
  );
}

export default HeroSection;
