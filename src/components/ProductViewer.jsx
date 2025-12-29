import React from "react";
import UseMacBookStore from "..";
import { clsx } from "clsx";
import { Canvas } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import { positionGeometry } from "three/tsl";
import { OrbitControls } from "@react-three/drei";
import MacBookModel16 from "./models/Macbook-16";
import MacBookModel14 from "./models/Macbook-14";
import StudioLights from "../three/StudioLights";
import ModelSwitcher from "../three/ModelSwitcher"
import { useMediaQuery } from "react-responsive";
{
  console.log("Dharshan Programmer");
}
const ProductViewer = () => {
  const { SetScale, SetColor, color, scale } = UseMacBookStore();
  const isMobile = useMediaQuery({query:'(max-width:1024px)'});
  return (
    <section id="product-viewer">
      <h2>Take A Closer Look</h2>

      <div className="controls">
        
        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              onClick={() => SetColor("#adb5b2")}
              className={clsx(
                "bg-neutral-300",
                color === "#adb5b2" && "active"
              )}
            />
            <div
              onClick={() => SetColor("#2e2c2e")}
              className={clsx("bg-neutral-900", color == "#2e2c2e" && "active")}
            />
          </div>
          <div className="size-control">
            <div
              onClick={() => SetScale(0.06)}
              className={clsx(
                scale === 0.06
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>14"</p>
            </div>
            <div
              onClick={() => SetScale(0.08)}
              className={clsx(
                scale === 0.08
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-white text-4xl">Render Canvas</p>
      <Canvas
        id="canvas"
        camera={{ position: [0, 3, 5], fov: 50, near: 0.1, far: 100 }}
      >
        {/* <AmbientLight intensity={1}/> */}
        <StudioLights />
        
        <ModelSwitcher scale={isMobile?scale-0.03:scale} isMobile={isMobile}/>
      </Canvas>
    </section>
  );
};
export default ProductViewer;
