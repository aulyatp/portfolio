import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface CameraZoomProps {
  target: THREE.Vector3;
  active: boolean;
}

export function CameraZoom({ target, active }: CameraZoomProps) {
  const { camera } = useThree();

  useFrame(() => {
    if (active) {
      camera.position.lerp(target, 0.05);
      camera.lookAt(0, 0, 0);
    }
  });

  return null;
}
