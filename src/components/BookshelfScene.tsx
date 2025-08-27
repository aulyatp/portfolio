import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useState } from "react";
import { CameraZoom } from "./CameraZoom";
import { BookList } from "./BookList";
import "./BookshelfScene.css";

function Bookshelf() {
  const { scene } = useGLTF(`${import.meta.env.BASE_URL}models/bookshelf.glb`);
  return <primitive object={scene} position={[0, -1, 0]} scale={[0.42, 0.42, 0.42]} />;
}

export function BookshelfScene() {
  const [showBookList, setActiveBookList] = useState(false);
  const [cameraFinished, setCameraFinished] = useState(false);

  // useEffect(() => {
  //   const handleClick = (e: MouseEvent) => {
  //     if ((e.target as HTMLElement).closest(".book-card")) return;
  //     if ((e.target as HTMLElement).closest(".book-list")) return;
  //     setActiveBookList(false);
  //     setCameraFinished(false);
  //   };
  //   if (showBookList) {
  //     window.addEventListener("click", handleClick);
  //   }
  //   return () => window.removeEventListener("click", handleClick);
  // }, [showBookList]);

  return (
    <>
      <div className="center_3d_wrapper">
        <Canvas camera={{ position: [2.69, 2.69, 4.2] }}>
          <directionalLight position={[5, 10, 5]} intensity={2} />
          <ambientLight intensity={2.69} />
          <hemisphereLight intensity={1.4} />

          <mesh onClick={() => setActiveBookList(true)}>
            <Bookshelf />
          </mesh>

          <OrbitControls enabled={!showBookList} minDistance={2.69} maxDistance={3.69} minPolarAngle={0.42} maxPolarAngle={1.83} />
          <CameraZoom target={new THREE.Vector3(2, 2, 2)} active={showBookList} onArrive={() => setCameraFinished(true)} />
        </Canvas>
      </div>
      <div className="book-list">{showBookList && cameraFinished && <BookList />}</div>
    </>
  );
}
