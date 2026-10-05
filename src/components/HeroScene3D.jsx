import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * High-performance, Awwwards-grade 3D Hero Scene using Three.js.
 * Features:
 * - Floating procedural geometric core (dual-layer crystalline icosahedron with glowing wireframe)
 * - 900+ particle constellation with subtle orbital velocity
 * - Interactive mouse tilt & smooth lerping
 * - Drag-to-rotate interaction with physics inertia
 * - Scroll-based camera parallax depth
 * - IntersectionObserver to pause rendering when out of viewport for peak performance
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
    scene.fog = new THREE.FogExp2(0x070709, 0.05);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLightCyan = new THREE.PointLight(0x00f0ff, 4, 20);
    pointLightCyan.position.set(4, 3, 4);
    scene.add(pointLightCyan);

    const pointLightViolet = new THREE.PointLight(0x818cf8, 4, 20);
    pointLightViolet.position.set(-4, -3, 3);
    scene.add(pointLightViolet);

    const pointLightTop = new THREE.PointLight(0x10b981, 2, 15);
    pointLightTop.position.set(0, 5, 2);
    scene.add(pointLightTop);

    // --- Central 3D Artifact Group ---
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Inner Faceted Crystalline Core
    const innerGeometry = new THREE.IcosahedronGeometry(1.6, 1);
    const innerMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0e1322,
      emissive: 0x051020,
      roughness: 0.15,
      metalness: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
      wireframe: false,
      flatShading: true,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    coreGroup.add(innerMesh);

    // 2. Outer Luminous Wireframe Cage
    const outerGeometry = new THREE.IcosahedronGeometry(2.1, 1);
    const outerWireframe = new THREE.WireframeGeometry(outerGeometry);
    const outerLine = new THREE.LineSegments(
      outerWireframe,
      new THREE.LineBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending,
      })
    );
    coreGroup.add(outerLine);

    // 3. Floating Geometric Rings
    const ringGeometry = new THREE.TorusGeometry(2.8, 0.02, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const ringMesh1 = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh1.rotation.x = Math.PI / 3;
    coreGroup.add(ringMesh1);

    const ringMesh2 = new THREE.Mesh(
      new THREE.TorusGeometry(3.3, 0.015, 16, 100),
      new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.25,
        blending: THREE.AdditiveBlending,
      })
    );
    ringMesh2.rotation.y = Math.PI / 4;
    ringMesh2.rotation.x = -Math.PI / 6;
    coreGroup.add(ringMesh2);

    // --- Interactive Constellation Particle Swarm ---
    const particleCount = 750;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x00f0ff);
    const violetColor = new THREE.Color(0x818cf8);
    const emeraldColor = new THREE.Color(0x10b981);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      // Spherical distribution with slight spread
      const radius = 2.2 + Math.random() * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i3 + 2] = radius * Math.cos(phi);

      const mixedColor = Math.random() > 0.5 ? cyanColor : (Math.random() > 0.5 ? violetColor : emeraldColor);
      particleColors[i3] = mixedColor.r;
      particleColors[i3 + 1] = mixedColor.g;
      particleColors[i3 + 2] = mixedColor.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particleGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(particleColors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // --- Interaction States ---
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollY = 0;
    let isVisibleOnScreen = true;

    // Mouse move tracking
    const onMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const clientX = event.clientX - rect.left;
      const clientY = event.clientY - rect.top;
      mouse.targetX = (clientX / container.clientWidth) * 2 - 1;
      mouse.targetY = -(clientY / container.clientHeight) * 2 + 1;
    };

    // Drag / Touch rotation
    const onPointerDown = (e) => {
      isDraggingRef.current = true;
      prevPointerRef.current = { x: e.clientX || (e.touches && e.touches[0].clientX) || 0, y: e.clientY || (e.touches && e.touches[0].clientY) || 0 };
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

    // Scroll parallax
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

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Observer to pause when off-screen
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

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Handle inertia from dragging
      if (!isDraggingRef.current) {
        coreGroup.rotation.y += 0.004 + rotationVelocityRef.current.y;
        coreGroup.rotation.x += 0.002 + rotationVelocityRef.current.x;
        rotationVelocityRef.current.x *= 0.94;
        rotationVelocityRef.current.y *= 0.94;
      }

      // Continuous subtle breathing & orbital dynamics
      innerMesh.rotation.y = elapsedTime * 0.2;
      innerMesh.rotation.z = elapsedTime * 0.15;
      outerLine.rotation.y = -elapsedTime * 0.15;
      ringMesh1.rotation.z = elapsedTime * 0.25;
      ringMesh2.rotation.z = -elapsedTime * 0.18;

      // Particle constellation rotation
      particleSystem.rotation.y = elapsedTime * 0.04;
      particleSystem.rotation.x = mouse.y * 0.2;

      // Interactive mouse tilt offset
      coreGroup.position.x = mouse.x * 0.5;
      coreGroup.position.y = mouse.y * 0.4 - scrollY * 0.002;

      // Scroll parallax depth effect
      camera.position.z = 8.5 + scrollY * 0.003;
      camera.position.y = -scrollY * 0.0015;

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
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

      // Dispose geometries and materials
      innerGeometry.dispose();
      innerMaterial.dispose();
      outerGeometry.dispose();
      outerLine.material.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[520px] sm:h-[620px] lg:h-[720px] cursor-grab active:cursor-grabbing select-none"
      data-cursor-text="DRAG 3D"
    >
      {/* Interactive 3D Hint Badge */}
      {hintVisible && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none transition-opacity duration-500">
          <div className="px-3.5 py-1.5 rounded-full bg-[#0e1017]/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#94a3b8] flex items-center gap-2 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />
            <span>INTERACTIVE 3D // DRAG OR MOVE CURSOR</span>
          </div>
        </div>
      )}

      {/* Subtle bottom gradient to blend into content */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#070709] to-transparent pointer-events-none" />
    </div>
  );
}

