import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { useState } from "react";
import { CameraZoom } from "./CameraZoom";
import { BookList } from "./BookList";
import "./BookshelfScene.css";

export function BookshelfScene() {
  const [showBookList, setActiveBookList] = useState(false);

  return (
    <div>
      <div className="center_3d_wrapper">
        <Canvas camera={{ position: [4.69, 2.69, 4.2] }}>
          <directionalLight position={[5, 10, 5]} intensity={1} />
          <ambientLight intensity={0.3} />
          <hemisphereLight intensity={0.4} />

          <mesh onClick={() => setActiveBookList((prev) => !prev)}>
            <boxGeometry />
            <meshStandardMaterial color={"red"} />
          </mesh>

          <OrbitControls enabled={!showBookList} minDistance={2.69} maxDistance={3.69} minPolarAngle={0.42} maxPolarAngle={1.83} />
          <CameraZoom target={new THREE.Vector3(2, 2, 2)} active={showBookList} />
        </Canvas>
      </div>
      <div className="book-list">{showBookList && <BookList />}</div>
    </div>
  );
}
