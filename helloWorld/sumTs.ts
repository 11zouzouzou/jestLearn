import { PerspectiveCamera } from "three";

export function sumTS(a: number, b: number) {
  return a + b;
}

class THREETEST {
  camera: PerspectiveCamera;
  canvas: HTMLCanvasElement;
  constructor() {
    this.canvas = document.createElement("canvas");
    const context = this.canvas.getContext("webgl2");
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
