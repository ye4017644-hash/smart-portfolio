let scene, camera, renderer, starGeo, stars;

// دالة ذكية ترسم جزيئات الدائرة برمجياً لمنع إيرور الـ CORS تماماً
function createCircleTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 16, 16);
    return new THREE.CanvasTexture(canvas);
}

function init3D() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 1;
    camera.rotation.x = Math.PI / 2;

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    starGeo = new THREE.BufferGeometry();
    const starCount = 600;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 600;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // استخدام التكستشر البرمجي الآمن هنا
    let starMaterial = new THREE.PointsMaterial({
        color: 0x5450FF,
        size: 3,
        map: createCircleTexture(),
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    stars = new THREE.Points(starGeo, starMaterial);
    scene.add(stars);

    animate();
}

function animate() {
    if (!starGeo || !stars) return;
    const positions = starGeo.attributes.position.array;

    for (let i = 1; i < positions.length; i += 3) {
        positions[i] -= 0.4;
        if (positions[i] < -300) {
            positions[i] = 300;
        }
    }

    starGeo.attributes.position.needsUpdate = true;
    stars.rotation.y += 0.001;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

// إضافة شرط أمان (Guard Clause) لمنع إيرور الـ aspect
window.addEventListener('resize', () => {
    if (!camera || !renderer) return;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

document.addEventListener('DOMContentLoaded', init3D);