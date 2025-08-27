import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface CameraZoomProps {
  target: THREE.Vector3;
  active: boolean;
  onArrive?: () => void;
}

export function CameraZoom({ target, active, onArrive }: CameraZoomProps) {
  const { camera } = useThree();

  useFrame(() => {
    if (active) {
      camera.position.lerp(target, 0.05);
      camera.lookAt(0, 0, 0);

      if (camera.position.distanceTo(target) < 0.05) {
        onArrive?.();
      }
    }
  });

  return null;
}
