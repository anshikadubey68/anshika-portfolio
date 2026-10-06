import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Global 3D WebGL Canvas spanning the entire website.
 * Provides real-time 3D depth everywhere:
 * - 1,200+ particle stardust constellation
 * - Floating procedural geometric crystals positioned down the scroll path
 * - Camera glides through 3D space as user scrolls down the page
 * - Global cursor parallax depth
 */
export default function Global3DCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!container || prefersReducedMotion) return undefined;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050609, 0.025);

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 15);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // --- Ambient & Point Lights ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const lightCyan = new THREE.PointLight(0x00f0ff, 4, 35);
    lightCyan.position.set(10, 10, 10);
    scene.add(lightCyan);

    const lightViolet = new THREE.PointLight(0x8b5cf6, 4, 35);
    lightViolet.position.set(-10, -15, 8);
    scene.add(lightViolet);

    const lightEmerald = new THREE.PointLight(0x10b981, 2.5, 30);
    lightEmerald.position.set(8, -35, 6);
    scene.add(lightEmerald);

    // --- 1,200+ Particle Celestial Constellation ---
    const particleCount = 1200;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorCyan = new THREE.Color(0x00f0ff);
    const colorViolet = new THREE.Color(0x8b5cf6);
    const colorEmerald = new THREE.Color(0x10b981);
    const colorWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      particlePositions[i3] = (Math.random() - 0.5) * 45;
      // Stretched vertically to cover long scroll journey
      particlePositions[i3 + 1] = (Math.random() - 0.5) * 110;
      particlePositions[i3 + 2] = (Math.random() - 0.5) * 35;

      const rand = Math.random();
      const mixedColor = rand < 0.45 ? colorCyan : (rand < 0.75 ? colorViolet : (rand < 0.9 ? colorEmerald : colorWhite));
      particleColors[i3] = mixedColor.r;
      particleColors[i3 + 1] = mixedColor.g;
      particleColors[i3 + 2] = mixedColor.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // --- Floating 3D Geometric Artifacts along Scroll Strata ---
    const artifactsGroup = new THREE.Group();
    scene.add(artifactsGroup);

    // Crystal 1: Near Skills Section (Y: -18)
    const crystalGeo1 = new THREE.OctahedronGeometry(1.6, 0);
    const crystalWire1 = new THREE.WireframeGeometry(crystalGeo1);
    const crystalMesh1 = new THREE.LineSegments(
      crystalWire1,
      new THREE.LineBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.35 })
    );
    crystalMesh1.position.set(-12, -18, -4);
    artifactsGroup.add(crystalMesh1);

    // Crystal 2: Near Projects Section (Y: -36)
    const crystalGeo2 = new THREE.IcosahedronGeometry(2.0, 1);
    const crystalWire2 = new THREE.WireframeGeometry(crystalGeo2);
    const crystalMesh2 = new THREE.LineSegments(
      crystalWire2,
      new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.3 })
    );
    crystalMesh2.position.set(13, -36, -6);
    artifactsGroup.add(crystalMesh2);

    // Crystal 3: Near Education/Experience (Y: -56)
    const crystalGeo3 = new THREE.TorusGeometry(2.2, 0.03, 16, 80);
    const crystalMesh3 = new THREE.Mesh(
      crystalGeo3,
      new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.3, wireframe: true })
    );
    crystalMesh3.position.set(-11, -56, -5);
    crystalMesh3.rotation.x = Math.PI / 4;
    artifactsGroup.add(crystalMesh3);

    // Crystal 4: Near Contact Section (Y: -76)
    const crystalGeo4 = new THREE.DodecahedronGeometry(1.8, 0);
    const crystalWire4 = new THREE.WireframeGeometry(crystalGeo4);
    const crystalMesh4 = new THREE.LineSegments(
      crystalWire4,
      new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.38 })
    );
    crystalMesh4.position.set(10, -76, -4);
    artifactsGroup.add(crystalMesh4);

    // --- Interaction States ---
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollY = 0;
    let targetScrollY = 0;
    let pageVisible = !document.hidden;

    const onMouseMove = (event) => {
      mouse.targetX = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScrollY = maxScroll > 0 ? (window.scrollY / maxScroll) : 0;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    const onVisibilityChange = () => {
      pageVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // --- Animation Loop ---
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!pageVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Smooth scroll lerp (travel down Y: 0 to -80)
      scrollY += (targetScrollY - scrollY) * 0.06;
      const cameraY = -scrollY * 80;

      camera.position.y = cameraY;
      camera.position.x = mouse.x * 1.5;
      camera.rotation.y = mouse.x * 0.08;
      camera.rotation.x = mouse.y * 0.05;

      // Rotate geometric crystals
      crystalMesh1.rotation.x = elapsedTime * 0.2;
      crystalMesh1.rotation.y = elapsedTime * 0.25;

      crystalMesh2.rotation.y = elapsedTime * 0.15;
      crystalMesh2.rotation.z = elapsedTime * 0.18;

      crystalMesh3.rotation.z = elapsedTime * 0.3;
      crystalMesh3.rotation.y = elapsedTime * 0.2;

      crystalMesh4.rotation.x = elapsedTime * 0.22;
      crystalMesh4.rotation.y = elapsedTime * 0.18;

      // Gentle drift for particles
      particleSystem.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', onVisibilityChange);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      particleGeometry.dispose();
      particleMaterial.dispose();
      crystalGeo1.dispose();
      crystalGeo2.dispose();
      crystalGeo3.dispose();
      crystalGeo4.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
}

