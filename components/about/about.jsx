"use client"
import React, {useState,useEffect} from 'react';
import "./about.css"
const about = () => {
    const[styles,setStyles] = useState({
        hovercircle:{
            backgroundColor: "rgb(46, 165, 153)",
            height:"10px",
            zIndex: "1",
            width: "10px",
            borderRadius: "50%",
            /* mix-blend-mode: rgb(15, 39, 41); */
            mixBlendMode:"difference",
            position: "absolute",
        }
      });
    const [mousepos, setMousepos] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMousemove = (event) => {
            setMousepos({
            x: event.clientX,
            y: event.clientY,
          });
          console.log(mousepos.x,mousepos.y);
          const elementa = document.querySelector(".hovercircle");
          const activeHover = document.querySelector(".intro").getBoundingClientRect();
          const rect = document.querySelector(".about-container").getBoundingClientRect();
          
          if(mousepos.x>=activeHover.left && mousepos.x <=activeHover.right && mousepos.y>=activeHover.top && mousepos.y<=activeHover.bottom){
            // elementa.css({"background-color":"yellow","height":"300px","width":"300px"});
            setStyles(
                {hovercircle:{
                backgroundColor: "rgb(46, 165, 153)",
                height:"400px",
                zIndex: "1",
                width: "400px",
                borderRadius: "50%",
                /* mix-blend-mode: rgb(15, 39, 41); */
                mixBlendMode:"difference",
                position: "absolute",
                }});
            console.log("inside");
            elementa.animate(
            {
             transform: `translateX(${mousepos.x - 200}px) translateY(${mousepos.y - 200 - rect.top}px)`,
                
            },
             { duration: 50, fill: "forwards" }
          );
          
          }
          else{
            elementa.animate(
                {
                 transform: `translateX(${mousepos.x-5 }px) translateY(${mousepos.y-5  - rect.top}px)`,
                },
                 { duration: 50, fill: "forwards" }
              );
              setStyles(
                {hovercircle:{
                    backgroundColor: "rgb(46, 165, 153)",
                height:"10px",
                zIndex: "1",
                width: "10px",
                borderRadius: "50%",
                /* mix-blend-mode: rgb(15, 39, 41); */
                mixBlendMode:"difference",
                position: "absolute",
                }});
          }
        };
        window.addEventListener("mousemove", handleMousemove);
    
        return () => {
          window.removeEventListener("mousemove", handleMousemove);
        };
      }, [mousepos.x, mousepos.y]);
  return (
    <>
    <div className="hovercircle" style={styles.hovercircle}></div>
    <div className='about-container'>
        <div className="intro">
            I build Web apps & solve problems on different coding websites
            <br/>
            <br/>
            I will ♥ to work along you. You can contact me by the links provided
        </div>
        
    </div>
    </>
  )
}
export default about;
