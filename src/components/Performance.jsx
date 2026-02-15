import { useMediaQuery } from "react-responsive";
import { performanceImages,performanceImgPositions } from "../constants/index";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Performance = () => {
  const isMoblie  = useMediaQuery({query:'(max-width:1024px)'});
  const sectionRef = useRef(null);
  useGSAP(
    ()=>{
      const sectionRef1 = sectionRef.current;
      if(!sectionRef1) return;
      gsap.fromTo(
        ".content p",
        {opacity:0,y:10},
        {
          opacity:1,
          y:0,
          ease:"power2.out",
          scrollTrigger:{
            trigger:".content p",
            start:"top bottom",
            end:"top center",
            scrub:true,
            invalidateOnRefresh:true,

          }

        }


      );
      if(isMoblie) return;
      
      const tl = gsap.timeline({
        defaults:{duration:2,ease:"power1.inOut",overwrite:true},
        scrollTrigger:{
          trigger:sectionRef1,
          start:"top bottom",
          end:"bottom top",
          scrub:1,
          invalidateOnRefresh:true,

        }
      })
      performanceImgPositions.forEach((item)=>{
        if(item.id=="p5") return;
        const selector = `.${item.id}`;


        const varargs = {};
        if(typeof item.left ==="number") varargs.left = `${item.left}%`;
        if(typeof item.bottom ==="number") varargs.bottom = `${item.bottom}%`;
        if(typeof item.right ==="number") varargs.right = `${item.right}%`;

        if(item.transform) varargs.transform = item.transform;
        tl.to(selector,varargs,0)
      })
    },{scope:sectionRef,dependencies:[isMoblie]}
  );
  return (
    <section id="performance" ref={sectionRef}>
      <h2>Next level graphics Performance. Game On.</h2>
      <div className="wrapper">
        {performanceImages.map((item,index)=>(
          <img key={index} src={item.src} alt={item.alt} className={item.id}/>
        ))};

      </div>
      <div className="content">
        <p >
          Run graphics-intensive workflows with a responsiveness that keeps up
          with your imagination .The M4 family of chips features a GPU with a
          second-generation hardware-accelerated ray tracing engine that renders
          images faster ,
          {' '}<span className="text-white">
            so gaming feels more immersive and realistic than ever.
          </span>{' '}
          And Dynamic Caching optimized fast on chip memory to dramatically
          increase average GPU utillization-driving a huge performance boost for
          the most demanding pro apps and games
        </p>
      </div>
    </section>
  );
};

export default Performance;
