import { Canvas } from "@react-three/fiber";
import "./App.css";
import {
  ACESFilmicToneMapping,
  SRGBColorSpace,
} from "three";
import { OrbitControls, Splat } from "@react-three/drei";

const App = () => {
  return (
    <Canvas
      flat
      dpr={[1, 2]}
      gl={{
        antialias: true,
        toneMapping: ACESFilmicToneMapping,
        outputColorSpace: SRGBColorSpace,
      }}
    >
      <OrbitControls
        maxDistance={0.5}
        minDistance={0.1}

        // minAzimuthAngle={Math.PI * 1.75}
        // maxAzimuthAngle={Math.PI * 2.25}
      />
      <ambientLight />

      <Splat
        src="desk_splat.splat"
        rotation={[
          0.55 * Math.PI,
          0.65 * Math.PI,
          1.25 * Math.PI,
        ]}
        position-y={1.2}
        position-z={1.2}
      ></Splat>
    </Canvas>
  );
};

export default App;
