import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./BookshelfScene.css";

export function BookshelfScene() {
  return (
    <div className="center_3d_wrapper">
      <Canvas camera={{ position: [4.69, 2.69, 4.2] }}>
        <directionalLight position={[0.8, 0.96, 1.2]} />
        <ambientLight position={[-0.36, -0.3, -0.2]} />
        <mesh>
          <torusGeometry />
          <meshStandardMaterial color={"orange"} />
        </mesh>
        <OrbitControls minDistance={2.69} maxDistance={3.69} minPolarAngle={0.42} maxPolarAngle={1.83} />
      </Canvas>
    </div>
  );
}
