import { PerspectiveCamera } from "three";

export function sumTS(a: number, b: number) {
  return a + b;
}

class THREETEST {
  camera: PerspectiveCamera;
  constructor() {
    this.camera = new PerspectiveCamera();
  }

  setCameraFar(v: number) {
    this.camera.far = v;
    return this.camera.far;
  }

  setCameraNear(v: number) {
    this.camera.near = v;
    return this.camera.near;
  }
}

export { THREETEST };
