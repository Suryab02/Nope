import React, { useEffect } from 'react';
import './HeroSection.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function HeroSection() {

    useGSAP(
        () => {
            const boxes = gsap.utils.toArray('.box');
            const screenWidth = window.innerWidth;
            gsap.fromTo(
                ".card1",
                { x: screenWidth + 100, y: 0 },
                {
                  x: 0,
                  y: 0,
                  duration: 1,
                  scrollTrigger: {
                    trigger: ".TextCard",
                    start: "top 90%",
                    scrub: true
                  },
                }
              );
          
              gsap.fromTo(
                ".card2",
                { x: screenWidth, y: 0 },
                {
                  x: 0,
                  y: 0,
                  duration: 1,
                  scrollTrigger: {
                    trigger: ".card1",
                    start: "top 80%", 
                    endTrigger: ".card3", 
                    scrub: true,
                    markers: true,
                  }
                }
              );
        
              gsap.fromTo(
                ".card3",
                { x: screenWidth, y: 0 },
                {
                  x: 0,
                  y: 0,
                  duration: 1,
                  scrollTrigger: {
                    trigger: ".card2", 
                    start: "top 90%",
                    scrub: true
                  },
                }
              );
              gsap.fromTo(
                ".card4",
                { x: screenWidth, y: 0 },
                {
                  x: 0,
                  y: 0,
                  duration: 1,
                  scrollTrigger: {
                    trigger: ".card3",
                    start: "top 90%", 
                    scrub: true
                  },
                }
              );
              
        },);


    return (
        <div>
            <div className="text">
                <h1 className="TextCard">NewsCard</h1>
                <div className="cards">
                    <div className="box card1">card1</div>
                    <div className="box card2">card2</div>
                    <div className="box card3">card3</div>
                    <div className="box card4">card4</div>
                    <h1 className="TextCard">NewsCard</h1>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
