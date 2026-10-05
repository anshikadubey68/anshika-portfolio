import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * High-performance, Awwwards-grade 3D Hero Scene using Three.js.
 * Enhanced Cyber-Luxe Theme:
 * - Fluid full-viewport WebGL canvas (zero fitting / overflow issues)
 * - Iridescent multi-chromatic metallic icosahedron with glowing geometric cage
 * - Multi-colored dynamic orbital rings (Cyan & Hyper-Violet)
 * - 850+ particle celestial constellation reacting dynamically to cursor
 * - Damped inertia dragging and scroll camera parallax
 */
export default function HeroScene3D() {
  const containerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const prevPointerRef = useRef({ x: 0, y: 0 });
  const rotationVelocityRef = useRef({ x: 0, y: 0 });
  const [hintVisible, setHintVisible] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050609, 0.045);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 8.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // --- Multi-Color Atmospheric Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const lightCyan = new THREE.PointLight(0x00f0ff, 5.5, 25);
    lightCyan.position.set(5, 4, 4);
    scene.add(lightCyan);

    const lightViolet = new THREE.PointLight(0xa855f7, 5.0, 25);
    lightViolet.position.set(-5, -4, 3);
    scene.add(lightViolet);

    const lightEmerald = new THREE.PointLight(0x10b981, 3.0, 20);
    lightEmerald.position.set(0, 6, 2);
    scene.add(lightEmerald);

    const lightRose = new THREE.PointLight(0xf43f5e, 2.5, 18);
    lightRose.position.set(3, -5, -2);
    scene.add(lightRose);

    // --- Central 3D Artifact Group ---
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Inner Faceted Crystalline Core
    const innerGeometry = new THREE.IcosahedronGeometry(1.65, 1);
    const innerMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0c1122,
      emissive: 0x060c18,
      roughness: 0.12,
      metalness: 0.88,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 0.95,
      wireframe: false,
      flatShading: true,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    coreGroup.add(innerMesh);

    // 2. Outer Luminous Wireframe Cage
    const outerGeometry = new THREE.IcosahedronGeometry(2.15, 1);
    const outerWireframe = new THREE.WireframeGeometry(outerGeometry);
    const outerLine = new THREE.LineSegments(
      outerWireframe,
      new THREE.LineBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.55,
        blending: THREE.AdditiveBlending,
      })
    );
    coreGroup.add(outerLine);

    // 3. Multi-Colored Floating Orbital Torus Rings
    const ringGeometry1 = new THREE.TorusGeometry(2.85, 0.025, 16, 100);
    const ringMaterial1 = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const ringMesh1 = new THREE.Mesh(ringGeometry1, ringMaterial1);
    ringMesh1.rotation.x = Math.PI / 3;
    coreGroup.add(ringMesh1);

    const ringGeometry2 = new THREE.TorusGeometry(3.35, 0.02, 16, 100);
    const ringMaterial2 = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const ringMesh2 = new THREE.Mesh(ringGeometry2, ringMaterial2);
    ringMesh2.rotation.y = Math.PI / 4;
    ringMesh2.rotation.x = -Math.PI / 6;
    coreGroup.add(ringMesh2);

    // 4. Subtle Outer Horizon Halo
    const ringGeometry3 = new THREE.TorusGeometry(3.9, 0.012, 16, 120);
    const ringMaterial3 = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    const ringMesh3 = new THREE.Mesh(ringGeometry3, ringMaterial3);
    ringMesh3.rotation.x = Math.PI / 2;
    coreGroup.add(ringMesh3);

    // --- Interactive Constellation Particle Swarm ---
    const particleCount = 850;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorCyan = new THREE.Color(0x00f0ff);
    const colorViolet = new THREE.Color(0xa855f7);
    const colorEmerald = new THREE.Color(0x10b981);
    const colorAmber = new THREE.Color(0xfbbf24);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = 2.4 + Math.random() * 5.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i3 + 2] = radius * Math.cos(phi);

      const rand = Math.random();
      const mixedColor = rand < 0.4 ? colorCyan : (rand < 0.7 ? colorViolet : (rand < 0.9 ? colorEmerald : colorAmber));
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
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // --- Interaction States ---
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollY = 0;
    let isVisibleOnScreen = true;

    const onMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const clientX = event.clientX - rect.left;
      const clientY = event.clientY - rect.top;
      mouse.targetX = (clientX / container.clientWidth) * 2 - 1;
      mouse.targetY = -(clientY / container.clientHeight) * 2 + 1;
    };

    const onPointerDown = (e) => {
      isDraggingRef.current = true;
      prevPointerRef.current = {
        x: e.clientX || (e.touches && e.touches[0].clientX) || 0,
        y: e.clientY || (e.touches && e.touches[0].clientY) || 0,
      };
      setHintVisible(false);
    };

    const onPointerMove = (e) => {
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

      if (isDraggingRef.current) {
        const deltaX = clientX - prevPointerRef.current.x;
        const deltaY = clientY - prevPointerRef.current.y;
        rotationVelocityRef.current.x = deltaY * 0.005;
        rotationVelocityRef.current.y = deltaX * 0.005;
        coreGroup.rotation.x += rotationVelocityRef.current.x;
        coreGroup.rotation.y += rotationVelocityRef.current.y;
        prevPointerRef.current = { x: clientX, y: clientY };
      }
    };

    const onPointerUp = () => {
      isDraggingRef.current = false;
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    container.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);
    container.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleOnScreen = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // --- Animation Loop ---
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisibleOnScreen) return;

      const elapsedTime = clock.getElapsedTime();

      // Mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Inertia dynamics
      if (!isDraggingRef.current) {
        coreGroup.rotation.y += 0.004 + rotationVelocityRef.current.y;
        coreGroup.rotation.x += 0.002 + rotationVelocityRef.current.x;
        rotationVelocityRef.current.x *= 0.94;
        rotationVelocityRef.current.y *= 0.94;
      }

      // Orbital rotation
      innerMesh.rotation.y = elapsedTime * 0.22;
      innerMesh.rotation.z = elapsedTime * 0.16;
      outerLine.rotation.y = -elapsedTime * 0.16;
      ringMesh1.rotation.z = elapsedTime * 0.26;
      ringMesh2.rotation.z = -elapsedTime * 0.19;
      ringMesh3.rotation.z = elapsedTime * 0.12;

      particleSystem.rotation.y = elapsedTime * 0.045;
      particleSystem.rotation.x = mouse.y * 0.22;

      coreGroup.position.x = mouse.x * 0.55;
      coreGroup.position.y = mouse.y * 0.45 - scrollY * 0.002;

      camera.position.z = 8.2 + scrollY * 0.003;
      camera.position.y = -scrollY * 0.0015;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      container.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      container.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      innerGeometry.dispose();
      innerMaterial.dispose();
      outerGeometry.dispose();
      outerLine.material.dispose();
      ringGeometry1.dispose();
      ringMaterial1.dispose();
      ringGeometry2.dispose();
      ringMaterial2.dispose();
      ringGeometry3.dispose();
      ringMaterial3.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing select-none overflow-hidden"
      data-cursor-text="DRAG 3D"
    >
      {/* Interactive 3D Hint Badge */}
      {hintVisible && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none transition-opacity duration-500">
          <div className="px-4 py-1.5 rounded-full bg-[#0a0c16]/85 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#cbd5e1] flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />
            <span>INTERACTIVE 3D // DRAG OR HOVER TO ROTATE</span>
          </div>
        </div>
      )}

      {/* Subtle bottom gradient to blend into content */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050609] to-transparent pointer-events-none" />
    </div>
  );
}
