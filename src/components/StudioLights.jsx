import React from "react";
import { Group } from "three/examples/jsm/libs/tween.module.js";
import { Environment } from "@react-three/drei";
import { Lightformer } from "@react-three/drei";

const StudioLights = () => {
  return (
    <group name="lights">
      <Environment resolution={256}>
        <group>
            <Lightformer 
            form="rect"
            intensity={10}
            position={[-10,5,-5]}
            scale={10}
            rotation-y={Math.PI/2}
            />
            <Lightformer 
            form="rect"
            intensity={10}
            position={[10,5,-5]}
            rotation-y={Math.PI/2}
            />
        </group>
      </Environment>
    </group>
  );
};

export default StudioLights;
