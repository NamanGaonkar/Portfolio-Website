'use client';

import { useEffect, useRef, useState } from 'react';

export default function CyberpunkHead3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [modelStatus, setModelStatus] = useState<'loading' | 'loaded' | 'fallback'>('loading');

  useEffect(() => {
    let renderer: any;
    let controls: any;
    let composer: any;
    let frameId = 0;

    const mount = mountRef.current;
    if (!mount) return;

    const setup = async () => {
      const THREE = await import('three');
      const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js');
      const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
      const { EffectComposer } = await import('three/examples/jsm/postprocessing/EffectComposer.js');
      const { RenderPass } = await import('three/examples/jsm/postprocessing/RenderPass.js');
      const { GlitchPass } = await import('three/examples/jsm/postprocessing/GlitchPass.js');

      const scene = new THREE.Scene();
      scene.background = new THREE.Color('#050505');

      const width = mount.clientWidth;
      const height = mount.clientHeight;

      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.set(0, 0.1, 2.7);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      mount.appendChild(renderer.domElement);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.06;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.75;
      controls.minDistance = 1.7;
      controls.maxDistance = 4.5;
      controls.minPolarAngle = Math.PI * 0.2;
      controls.maxPolarAngle = Math.PI * 0.8;
      controls.addEventListener('start', () => {
        controls.autoRotate = false;
      });

      const ambient = new THREE.AmbientLight(0x2d2d2d, 0.45);
      scene.add(ambient);

      const neonCyan = new THREE.PointLight(0x00f3ff, 1.6, 10);
      neonCyan.position.set(-2.2, 1.6, 1.4);
      scene.add(neonCyan);

      const neonMagenta = new THREE.PointLight(0xff00ff, 1.6, 10);
      neonMagenta.position.set(2.2, 1.6, 1.4);
      scene.add(neonMagenta);

      const yellowKick = new THREE.PointLight(0xd9ff2f, 0.9, 8);
      yellowKick.position.set(0.2, -1.4, 1.8);
      scene.add(yellowKick);

      let modelRoot: any = null;
      const loader = new GLTFLoader();
      try {
        const gltf = await loader.loadAsync('/models/cyberpunk-head.glb');
        modelRoot = gltf.scene;
        modelRoot.traverse((child: any) => {
          if (child.isMesh && child.material) {
            child.material.metalness = 0.55;
            child.material.roughness = 0.32;
          }
        });
        modelRoot.position.set(0, -0.3, 0);
        modelRoot.scale.set(1.2, 1.2, 1.2);
        scene.add(modelRoot);
        setModelStatus('loaded');
      } catch {
        const headGeo = new THREE.IcosahedronGeometry(0.85, 2);
        const headMat = new THREE.MeshStandardMaterial({
          color: 0xcfd5ca,
          metalness: 0.72,
          roughness: 0.26,
          emissive: 0x0d0d0d,
        });
        modelRoot = new THREE.Mesh(headGeo, headMat);
        modelRoot.position.y = -0.1;
        scene.add(modelRoot);

        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(1.12, 0.05, 24, 180),
          new THREE.MeshStandardMaterial({ color: 0xd9ff2f, emissive: 0x5d680f, metalness: 0.6, roughness: 0.34 })
        );
        ring.rotation.x = Math.PI / 2;
        scene.add(ring);
        setModelStatus('fallback');
      }

      composer = new EffectComposer(renderer);
      const renderPass = new RenderPass(scene, camera);
      const glitchPass = new GlitchPass();
      glitchPass.enabled = true;
      glitchPass.goWild = false;
      composer.addPass(renderPass);
      composer.addPass(glitchPass);

      let nextGlitchAt = performance.now() + 2400;
      let glitchEndAt = 0;

      const onResize = () => {
        const w = mount.clientWidth;
        const h = mount.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
        composer.setSize(w, h);
      };

      window.addEventListener('resize', onResize);

      const animate = () => {
        frameId = requestAnimationFrame(animate);

        const now = performance.now();
        if (now >= nextGlitchAt) {
          glitchPass.goWild = true;
          glitchEndAt = now + 130;
          nextGlitchAt = now + 1800 + Math.random() * 2400;
        }
        if (glitchEndAt && now >= glitchEndAt) {
          glitchPass.goWild = false;
          glitchEndAt = 0;
        }

        if (modelRoot) {
          modelRoot.rotation.y += 0.0018;
        }

        controls.update();
        composer.render();
      };

      animate();

      return () => {
        window.removeEventListener('resize', onResize);
      };
    };

    let cleanupResize: (() => void) | undefined;

    setup().then((cleanup) => {
      cleanupResize = cleanup;
    });

    return () => {
      if (cleanupResize) cleanupResize();
      cancelAnimationFrame(frameId);
      if (controls) controls.dispose();
      if (composer) composer.dispose();
      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && renderer.domElement.parentNode === mount) {
          mount.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <div className="relative h-[360px] sm:h-[440px] lg:h-[520px] w-full rounded-2xl border border-white/10 bg-[#050505] overflow-hidden">
      <div ref={mountRef} className="h-full w-full" />
      {modelStatus !== 'loaded' && (
        <div className="absolute left-3 right-3 bottom-3 rounded-lg border border-[#d9ff2f]/30 bg-black/80 px-3 py-2 text-xs text-white/75">
          {modelStatus === 'fallback'
            ? 'Using procedural cyber-head. Add /public/models/cyberpunk-head.glb to use your custom model.'
            : 'Loading cyberpunk head...'}
        </div>
      )}
    </div>
  );
}
