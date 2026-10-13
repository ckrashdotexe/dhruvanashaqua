import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

// Precise bottle interior contour path for SVG liquid masking (viewBox: 0 0 360 760)
const BOTTLE_CONTOUR_PATH = `M 98,140 L 262,140 L 266,160 L 271,170 L 274,180 L 276,190 L 277,200 L 278,210 L 278,220 L 275,230 L 278,240 L 278,250 L 278,260 L 274,270 L 274,280 L 274,290 L 274,300 L 274,310 L 274,320 L 274,330 L 274,340 L 274,350 L 274,360 L 274,370 L 274,380 L 275,390 L 278,400 L 278,410 L 278,420 L 276,430 L 277,440 L 278,450 L 278,460 L 278,470 L 277,480 L 273,490 L 278,500 L 278,510 L 278,520 L 277,530 L 273,540 L 277,550 L 280,560 L 277,570 L 277,580 L 273,590 L 277,600 L 277,610 L 277,620 L 276,630 L 296,640 L 296,650 L 296,660 L 296,670 L 296,680 L 64,680 L 64,670 L 64,660 L 64,650 L 64,640 L 69,630 L 82,620 L 82,610 L 82,600 L 86,590 L 82,580 L 81,570 L 82,560 L 82,550 L 86,540 L 81,530 L 82,520 L 81,510 L 81,500 L 84,490 L 82,480 L 81,470 L 81,460 L 81,450 L 85,440 L 82,430 L 81,420 L 81,410 L 81,400 L 83,390 L 85,380 L 85,370 L 85,360 L 85,350 L 85,340 L 85,330 L 85,320 L 85,310 L 85,300 L 84,290 L 85,280 L 85,270 L 81,260 L 81,250 L 81,240 L 85,230 L 81,220 L 81,210 L 82,200 L 84,190 L 85,180 L 88,170 L 93,160 L 98,150 L 98,140 Z`;

/**
 * Render the HTML structure for the cinematic scroll-driven hero section
 */
export function renderHero() {
  return `
    <section class="hero-scroll-container" id="hero" aria-label="Dhruvansh Aqua Product Experience">
      <!-- Pinned Viewport (100vh) -->
      <div class="hero-pin-viewport" id="hero-pin-viewport">
        <!-- 1. Real-time Three.js WebGL Canvas (Studio Lighting & Atmospheric 3D Particles) -->
        <canvas class="hero-three-canvas" id="hero-three-canvas"></canvas>

        <!-- 2. Studio Lighting & Environmental Atmosphere Layers -->
        <div class="hero-lighting-stage" aria-hidden="true">
          <div class="hero-key-spotlight" id="hero-spotlight"></div>
          <div class="hero-ground-reflection" id="hero-reflection"></div>
          <div class="hero-phase-d-backdrop" id="hero-phase-d-bg"></div>
        </div>

        <!-- 3. Central Product Hero Anchor (2.5D Layered Compositor & Replaceable 3D Mesh Slot) -->
        <div class="hero-bottle-anchor" id="hero-bottle-anchor">
          <div class="hero-bottle-stage" id="hero-bottle-stage">
            
            <!-- Ground Contact Shadow -->
            <div class="bottle-contact-shadow" id="bottle-contact-shadow">
              <img src="/images/dhruvansh-bottle-shadow.png" alt="" loading="eager" />
            </div>

            <!-- Rim Glow / Caustic Edge Filter -->
            <div class="bottle-rim-glow" id="bottle-rim-glow" aria-hidden="true">
              <img src="/images/dhruvansh-bottle-cutout.png" alt="" />
            </div>

            <!-- Bottle Frame (3D Perspective Container) -->
            <div class="bottle-frame" id="bottle-frame">
              
              <!-- Realistic Liquid Chamber (Clipped with SVG contour & scroll-rising meniscus) -->
              <div class="bottle-liquid-chamber" id="bottle-liquid-chamber" aria-hidden="true">
                <svg viewBox="0 0 360 760" class="bottle-liquid-svg" preserveAspectRatio="none">
                  <defs>
                    <clipPath id="dhruvansh-liquid-mask">
                      <path d="${BOTTLE_CONTOUR_PATH}" />
                    </clipPath>
                    
                    <linearGradient id="dhruvansh-water-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.55" />
                      <stop offset="35%" stop-color="#0ea5e9" stop-opacity="0.65" />
                      <stop offset="70%" stop-color="#0284c7" stop-opacity="0.78" />
                      <stop offset="100%" stop-color="#0369a1" stop-opacity="0.88" />
                    </linearGradient>

                    <linearGradient id="dhruvansh-meniscus-grad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stop-color="#7dd3fc" stop-opacity="0.85" />
                      <stop offset="50%" stop-color="#ffffff" stop-opacity="0.95" />
                      <stop offset="100%" stop-color="#7dd3fc" stop-opacity="0.85" />
                    </linearGradient>
                  </defs>

                  <g clip-path="url(#dhruvansh-liquid-mask)">
                    <!-- Liquid Column Rectangle (Y animates from 700 to 180 on scroll) -->
                    <rect id="liquid-volume" x="0" y="700" width="360" height="760" fill="url(#dhruvansh-water-grad)" />
                    
                    <!-- Dynamic Curved Meniscus Wave at the liquid surface -->
                    <path id="liquid-meniscus" class="liquid-wave-surface" d="M 50,700 Q 180,693 310,700 L 310,706 Q 180,701 50,706 Z" fill="url(#dhruvansh-meniscus-grad)" />
                    
                    <!-- Micro-bubbles group inside liquid -->
                    <g id="liquid-bubbles-group"></g>
                  </g>
                </svg>
              </div>

              <!-- High-Resolution Cutout of the Actual Dhruvansh Aqua Bottle -->
              <img 
                src="/images/dhruvansh-bottle-cutout.png" 
                class="bottle-image-layer" 
                id="bottle-image-layer" 
                alt="Dhruvansh Aqua Packaged Drinking Water Bottle" 
                loading="eager"
                fetchpriority="high"
              />

              <!-- Specular Gloss Highlight Sweep -->
              <div class="bottle-specular-sweep" id="bottle-specular-sweep" aria-hidden="true"></div>

              <!-- Replaceable GLTF/GLB Real-time 3D Model Viewport (activates if .glb is present) -->
              <div class="bottle-3d-model-wrapper" id="bottle-3d-model-wrapper" aria-hidden="true"></div>
            </div>
          </div>
        </div>

        <!-- 4. Editorial Typography & Action CTAs (Progressively Revealed in Phase C & D) -->
        <div class="hero-editorial-viewport">
          <div class="hero-editorial-container">
            <div class="hero-editorial-card">
              
              <!-- Eyebrow Technical Badge -->
              <div class="hero-eyebrow-wrapper">
                <div class="hero-eyebrow-badge" id="hero-eyebrow">
                  <span class="hero-eyebrow-dot" aria-hidden="true"></span>
                  <span>DHRUVANSH AQUA | BEVERAGE MANUFACTURING</span>
                </div>
              </div>

              <!-- Single H1: Engineered for Every Drop. -->
              <h1 class="hero-main-heading" id="hero-main-heading">
                <span class="hero-line-mask">
                  <span class="hero-headline-line" id="hero-headline-1">Engineered for</span>
                </span>
                <span class="hero-line-mask">
                  <span class="hero-headline-line accent-line" id="hero-headline-2">Every Drop.</span>
                </span>
              </h1>

              <!-- Supporting Headline -->
              <div class="hero-line-mask">
                <p class="hero-subheadline-text" id="hero-subheadline">
                  Your Partner in Bottled Water &amp; Beverage Manufacturing.
                </p>
              </div>

              <!-- Manufacturing Solutions Description -->
              <p class="hero-paragraph-copy" id="hero-description">
                Manufacturing solutions for bottled water, beverages and soft drinks.
              </p>

              <!-- Primary & Secondary CTAs -->
              <div class="hero-actions-row" id="hero-actions">
                <a href="#manufacturing" class="btn-hero-primary" id="hero-primary-cta">
                  <span>Explore Our Capabilities</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>

                <a href="#enquiry" class="btn-hero-secondary" id="hero-secondary-cta">
                  <span>Partner With Us</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </a>
              </div>

              <!-- Industrial Quality & Compliance Meta Rail -->
              <div class="hero-industrial-specs" id="hero-specs">
                <div class="hero-spec-item">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Cleanroom Automated Bottling</span>
                </div>
                <div class="hero-spec-item">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Multi-Barrier RO + UV + O3</span>
                </div>
                <div class="hero-spec-item">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>B2B Commercial Readiness</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- 5. Opening Shot Scroll Indicator (Fades out smoothly in Phase A) -->
        <div class="hero-scroll-prompt" id="hero-scroll-prompt" aria-hidden="true">
          <span class="hero-scroll-prompt-label">Scroll to Explore</span>
          <div class="hero-scroll-prompt-line"></div>
        </div>

        <!-- 6. Phase D Smooth Transition into Next Section (#overview) -->
        <div class="hero-section-exit-blend" id="hero-exit-blend" aria-hidden="true"></div>
      </div>
    </section>
  `;
}

/**
 * Initialize the cinematic 3D scroll-driven product presentation
 */
export function initHeroScrollAnimation() {
  const container = document.getElementById('hero');
  const pinViewport = document.getElementById('hero-pin-viewport');
  const canvas = document.getElementById('hero-three-canvas');
  const bottleStage = document.getElementById('hero-bottle-stage');
  const bottleFrame = document.getElementById('bottle-frame');
  const bottleShadow = document.getElementById('bottle-contact-shadow');
  const specularSweep = document.getElementById('bottle-specular-sweep');
  const liquidVolume = document.getElementById('liquid-volume');
  const liquidMeniscus = document.getElementById('liquid-meniscus');
  const bubblesGroup = document.getElementById('liquid-bubbles-group');
  const spotlight = document.getElementById('hero-spotlight');
  const groundReflection = document.getElementById('hero-reflection');
  const phaseDBackdrop = document.getElementById('hero-phase-d-bg');
  const exitBlend = document.getElementById('hero-exit-blend');
  const scrollPrompt = document.getElementById('hero-scroll-prompt');

  // Typography elements
  const eyebrow = document.getElementById('hero-eyebrow');
  const headline1 = document.getElementById('hero-headline-1');
  const headline2 = document.getElementById('hero-headline-2');
  const subheadline = document.getElementById('hero-subheadline');
  const description = document.getElementById('hero-description');
  const actions = document.getElementById('hero-actions');
  const specs = document.getElementById('hero-specs');

  if (!container || !pinViewport) return () => {};

  // Check prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    if (liquidVolume) liquidVolume.setAttribute('y', '180');
    if (liquidMeniscus) liquidMeniscus.setAttribute('d', 'M 50,180 Q 180,174 310,180 L 310,186 Q 180,181 50,186 Z');
    return () => {};
  }

  // --- Dynamic SVG Micro-Bubbles Setup ---
  const bubbleCount = 10;
  const bubbles = [];
  if (bubblesGroup) {
    bubblesGroup.innerHTML = '';
    for (let i = 0; i < bubbleCount; i++) {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      const r = 1.5 + Math.random() * 2.5;
      const baseX = 95 + Math.random() * 170;
      const baseY = 300 + Math.random() * 360;
      circle.setAttribute('r', r.toFixed(1));
      circle.setAttribute('cx', baseX.toFixed(1));
      circle.setAttribute('cy', baseY.toFixed(1));
      circle.setAttribute('fill', 'rgba(255, 255, 255, 0.45)');
      circle.setAttribute('stroke', 'rgba(125, 211, 252, 0.8)');
      circle.setAttribute('stroke-width', '0.6');
      bubblesGroup.appendChild(circle);
      bubbles.push({ el: circle, baseX, baseY, speed: 0.6 + Math.random() * 0.8, offset: Math.random() * Math.PI * 2 });
    }
  }

  // --- 1. Three.js WebGL Scene (Studio Lighting & 3D Atmospheric Particles) ---
  let renderer, scene, camera, particleSystem, animFrameId;
  let has3dModel = false;
  let modelMesh = null;

  try {
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 18);

    // Studio Lights
    const ambientLight = new THREE.AmbientLight(0x0c1a2e, 1.4);
    scene.add(ambientLight);

    const keyDirectional = new THREE.DirectionalLight(0x7dd3fc, 2.8);
    keyDirectional.position.set(5, 8, 8);
    scene.add(keyDirectional);

    const rimSpot = new THREE.SpotLight(0x38bdf8, 3.5, 30, Math.PI / 4, 0.6);
    rimSpot.position.set(-8, 5, -2);
    scene.add(rimSpot);

    const softFloorLight = new THREE.PointLight(0x0369a1, 1.5, 20);
    softFloorLight.position.set(0, -6, 2);
    scene.add(softFloorLight);

    // 3D Atmospheric Water Droplets Particle Cloud
    const isMobile = window.innerWidth <= 768;
    const particleCount = isMobile ? 35 : 90;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleSpeeds = [];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 22;     // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 14; // z
      particleSpeeds.push({
        yVel: 0.003 + Math.random() * 0.007,
        xDrift: (Math.random() - 0.5) * 0.002,
        phase: Math.random() * Math.PI * 2
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Particle texture
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 64;
    pCanvas.height = 64;
    const pCtx = pCanvas.getContext('2d');
    const pGrad = pCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
    pGrad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
    pGrad.addColorStop(0.3, 'rgba(125, 211, 252, 0.6)');
    pGrad.addColorStop(0.7, 'rgba(56, 189, 248, 0.2)');
    pGrad.addColorStop(1, 'rgba(56, 189, 248, 0.0)');
    pCtx.fillStyle = pGrad;
    pCtx.beginPath();
    pCtx.arc(32, 32, 32, 0, Math.PI * 2);
    pCtx.fill();

    const particleTexture = new THREE.CanvasTexture(pCanvas);
    const particleMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.35 : 0.5,
      map: particleTexture,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    particleSystem = new THREE.Points(geometry, particleMaterial);
    scene.add(particleSystem);

    // Continuous 3D animation loop
    const startTime = performance.now();
    const renderLoop = () => {
      animFrameId = requestAnimationFrame(renderLoop);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Atmospheric particle drift
      const posAttr = particleSystem.geometry.attributes.position;
      for (let i = 0; i < particleCount; i++) {
        let py = posAttr.getY(i) + particleSpeeds[i].yVel;
        let px = posAttr.getX(i) + Math.sin(elapsedTime + particleSpeeds[i].phase) * 0.002;
        if (py > 9) py = -9;
        posAttr.setY(i, py);
        posAttr.setX(i, px);
      }
      posAttr.needsUpdate = true;

      // Subtle bubble oscillation in SVG
      bubbles.forEach(b => {
        const floatY = b.baseY - (elapsedTime * b.speed * 20) % 220;
        const driftX = b.baseX + Math.sin(elapsedTime * 2 + b.offset) * 4;
        b.el.setAttribute('cy', floatY.toFixed(1));
        b.el.setAttribute('cx', driftX.toFixed(1));
      });

      // If a real 3D GLB model was loaded, update its subtle orientation
      if (has3dModel && modelMesh) {
        modelMesh.rotation.y += 0.002;
      }

      renderer.render(scene, camera);
    };
    renderLoop();

  } catch (err) {
    console.warn('Three.js initialization failed gracefully, falling back to 2.5D compositor:', err);
  }

  // --- 2. Replaceable 3D Asset Loader Hook ---
  async function checkFor3DModel() {
    try {
      const res = await fetch('/models/dhruvansh-bottle.glb', { method: 'HEAD' });
      const contentType = res.headers.get('content-type') || '';
      // Only parse if server responded with an actual binary glb file, not the SPA index.html fallback
      if (res.ok && !contentType.includes('text/html') && (contentType.includes('gltf') || contentType.includes('octet-stream'))) {
        const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
        const loader = new GLTFLoader();
        loader.load('/models/dhruvansh-bottle.glb', (gltf) => {
          modelMesh = gltf.scene;
          modelMesh.scale.set(4, 4, 4);
          modelMesh.position.set(0, -1, 0);
          scene.add(modelMesh);
          has3dModel = true;

          const imgLayer = document.getElementById('bottle-image-layer');
          const liquidChamber = document.getElementById('bottle-liquid-chamber');
          if (imgLayer) imgLayer.style.opacity = '0';
          if (liquidChamber) liquidChamber.style.opacity = '0';
          console.info('Loaded genuine 3D bottle model from /models/dhruvansh-bottle.glb');
        });
      }
    } catch {
      // 2.5D layered compositor remains active
    }
  }
  checkFor3DModel();

  // --- 3. Header Theme Synchronization ---
  const siteHeader = document.getElementById('site-header');
  const topBar = document.getElementById('top-bar');

  function updateHeaderTheme(progress) {
    // Keep header in hero dark mode until progress reaches 0.90
    if (progress < 0.90) {
      siteHeader?.classList.add('hero-theme-dark');
      topBar?.classList.add('hero-theme-dark');
    } else {
      siteHeader?.classList.remove('hero-theme-dark');
      topBar?.classList.remove('hero-theme-dark');
    }
  }

  updateHeaderTheme(0);

  // --- 4. Master GSAP ScrollTrigger Timeline ---
  const isMobile = () => window.innerWidth <= 768;

  // Phase A: The Opening Shot (0% initial state)
  // Real bottle is prominent, crisp, sharp and centered
  gsap.set(bottleStage, {
    scale: 1.0,
    x: 0,
    y: 0,
    opacity: 1.0,
    filter: 'none'
  });

  gsap.set(bottleFrame, {
    rotateY: 0,
    rotateX: 0
  });

  gsap.set(bottleShadow, {
    scale: 1.0,
    opacity: 0.9
  });

  gsap.set(spotlight, {
    scale: 1.0,
    opacity: 1.0,
    x: '0%'
  });

  gsap.set(specularSweep, {
    xPercent: -120,
    opacity: 0.2
  });

  // Initial hidden states for typography (emerge in Phase C)
  gsap.set(eyebrow, {
    y: 35,
    opacity: 0
  });

  gsap.set([headline1, headline2], {
    y: 70,
    opacity: 0
  });

  gsap.set(subheadline, {
    y: 35,
    opacity: 0
  });

  gsap.set([description, actions, specs], {
    y: 30,
    opacity: 0
  });

  // Master Timeline
  const masterTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      pin: pinViewport,
      pinSpacing: false,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        updateHeaderTheme(self.progress);

        // Three.js Camera Dolly & Lateral Pan
        if (camera) {
          const camZ = 18 - self.progress * 4.0;
          const camX = self.progress > 0.45 ? (self.progress - 0.45) * 3.5 : 0;
          camera.position.z = camZ;
          camera.position.x = isMobile() ? 0 : -camX;
        }

        // Liquid Level Progress (0.20 to 0.45)
        if (liquidVolume && liquidMeniscus) {
          let liquidY;
          if (self.progress < 0.20) {
            liquidY = 700; // Empty at opening
          } else if (self.progress <= 0.45) {
            const fillRatio = (self.progress - 0.20) / 0.25;
            liquidY = 700 - fillRatio * (700 - 180);
          } else {
            liquidY = 180; // Filled
          }
          liquidVolume.setAttribute('y', liquidY.toFixed(1));

          const waveCurvature = Math.sin(self.progress * 24) * 3;
          liquidMeniscus.setAttribute(
            'd',
            `M 50,${liquidY.toFixed(1)} Q 180,${(liquidY - 7 + waveCurvature).toFixed(1)} 310,${liquidY.toFixed(1)} L 310,${(liquidY + 6).toFixed(1)} Q 180,${(liquidY + 1).toFixed(1)} 50,${(liquidY + 6).toFixed(1)} Z`
          );
        }
      }
    }
  });

  // =========================================================================
  // PHASE A: The Opening Shot (0.00 -> 0.20)
  // Product is centered and clear; scroll indicator prompts subtle start
  // =========================================================================
  masterTimeline
    .to(scrollPrompt, {
      opacity: 0,
      duration: 0.10,
      ease: 'power2.out'
    }, 0.0)

    .to(bottleStage, {
      scale: 1.02,
      duration: 0.20,
      ease: 'sine.out'
    }, 0.0);

  // =========================================================================
  // PHASE B: Product Motion & Liquid Fill (0.20 -> 0.45)
  // Virtual camera dollies closer, subtle 2.5D perspective tilt, liquid rises
  // Realistic specular sheen sweeps across PET plastic ridges
  // =========================================================================
  masterTimeline
    .to(bottleStage, {
      scale: isMobile() ? 1.04 : 1.09,
      duration: 0.25,
      ease: 'sine.inOut'
    }, 0.20)

    .to(bottleFrame, {
      rotateY: 4.0,
      rotateX: -1.5,
      duration: 0.13,
      ease: 'sine.inOut'
    }, 0.20)

    .to(bottleFrame, {
      rotateY: -3.0,
      rotateX: 1.0,
      duration: 0.12,
      ease: 'sine.inOut'
    }, 0.33)

    .to(specularSweep, {
      xPercent: 130,
      opacity: 0.8,
      duration: 0.25,
      ease: 'power2.inOut'
    }, 0.20)

    .to(groundReflection, {
      opacity: 1.15,
      duration: 0.25,
      ease: 'sine.inOut'
    }, 0.20);

  // =========================================================================
  // PHASE C: The Headline Reveal (0.45 -> 0.75)
  // Bottle shifts smoothly to balanced right position; typography reveals progressively
  // =========================================================================
  masterTimeline
    .to(bottleStage, {
      x: isMobile() ? '0vw' : '23vw',
      y: isMobile() ? '-15vh' : '0vh',
      scale: isMobile() ? 0.72 : 0.86,
      duration: 0.25,
      ease: 'power2.inOut'
    }, 0.45)

    .to(bottleFrame, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.20,
      ease: 'power2.out'
    }, 0.45)

    .to(spotlight, {
      x: isMobile() ? '0%' : '18%',
      duration: 0.25,
      ease: 'power2.inOut'
    }, 0.45)

    // Staggered Progressive Headline & Copy Reveal
    .to(eyebrow, {
      y: 0,
      opacity: 1,
      duration: 0.08,
      ease: 'power3.out'
    }, 0.46)

    .to(headline1, {
      y: 0,
      opacity: 1,
      duration: 0.09,
      ease: 'power3.out'
    }, 0.49)

    .to(headline2, {
      y: 0,
      opacity: 1,
      duration: 0.09,
      ease: 'power3.out'
    }, 0.52)

    .to(subheadline, {
      y: 0,
      opacity: 1,
      duration: 0.09,
      ease: 'power3.out'
    }, 0.55)

    .to(description, {
      y: 0,
      opacity: 1,
      duration: 0.09,
      ease: 'power3.out'
    }, 0.58)

    .to(actions, {
      y: 0,
      opacity: 1,
      duration: 0.09,
      ease: 'power3.out'
    }, 0.61)

    .to(specs, {
      y: 0,
      opacity: 1,
      duration: 0.08,
      ease: 'power3.out'
    }, 0.64);

  // =========================================================================
  // PHASE D: Settled Composition & Smooth Transition (0.75 -> 1.00)
  // Soft ambient industrial illumination, smooth blend into #overview
  // =========================================================================
  masterTimeline
    .to(phaseDBackdrop, {
      opacity: 1,
      duration: 0.20,
      ease: 'sine.inOut'
    }, 0.75)

    .to(exitBlend, {
      opacity: 1,
      duration: 0.10,
      ease: 'power2.out'
    }, 0.88);

  // --- Resize Handler ---
  const handleResize = () => {
    if (renderer && camera) {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    ScrollTrigger.refresh();
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
    cancelAnimationFrame(animFrameId);
    masterTimeline.kill();
    ScrollTrigger.getAll().forEach(t => {
      if (t.trigger === container) t.kill();
    });
    if (renderer) renderer.dispose();
  };
}
