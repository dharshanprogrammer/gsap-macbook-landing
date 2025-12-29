import { PresentationControls } from "@react-three/drei";
import MacBookModel16 from "../components/models/Macbook-16";
import MacBookModel14 from "../components/models/Macbook-14";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
const OFFSET_DISTANCE = 5;
const ANIMATION_DURATION = 1;

const fadeMeshes = (group, opacity) => {
  if (!group) return;
  group.traverse((child) => {
    if (child.isMesh) {
      child.material.transparent = true;
      gsap.to(child.material, { opacity,duration: ANIMATION_DURATION });
    }
  });
};

const moveGroup = (group, x) => {
  if (!group) return;
  gsap.to(group.position, {x,duration:ANIMATION_DURATION});
};

const ModelSwitcher = ({ scale, isMobile }) => {
  const smallMacBookRef = useRef();
  const largeMacBookRef = useRef();

  const LARGEMODEL = 0.08;
  const SMALLMODEL = 0.05;
  const showLargeMacBook =scale==LARGEMODEL || scale==SMALLMODEL;
  useGSAP(() => {
    console.log("scale:", scale, "showLarge:", showLargeMacBook);

    if (showLargeMacBook) {
      moveGroup(smallMacBookRef.current, -OFFSET_DISTANCE);
      moveGroup(largeMacBookRef.current, 0);

      fadeMeshes(largeMacBookRef.current,1);
      fadeMeshes(smallMacBookRef.current,0);
    }
    else{
        moveGroup(smallMacBookRef.current,0);
        moveGroup(largeMacBookRef.current,OFFSET_DISTANCE);
        fadeMeshes(largeMacBookRef.current,0);
        fadeMeshes(smallMacBookRef.current,1);
    }
  }, [scale]);
  const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    polar: [-Math.PI, Math.PI],
    azimuth: [-Infinity, Infinity],
    config: { mass: 1, tension: 0, friction: 26 },
  };
  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacBookRef}>
          <MacBookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>

      <PresentationControls>
        <group ref={smallMacBookRef}>
          <MacBookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelSwitcher;
