// ربط الكروت بمشاريعك الحقيقية المرفوعة على حسابك
const projects = [
    {
        title: "3D Configurator Tool",
        description: "أداة تفاعلية ثلاثية الأبعاد تتيح للمستخدمين تخصيص وتعديل المنتجات في الوقت الفعلي، وتعتمد على الـ WebSockets لتزامن البيانات بدقة خيالية.",
        tags: ["Three.js", "WebSockets", "Node.js"],
        url: "https://ye4017644-hash.github.io/3D-Configurator/"
    },
    {
        title: "Kinoportal Platform",
        description: "تطبيق ويب متطور لاستعراض ومراجعة الأفلام، تم عمل صيانة شاملة لكوده البرمجي وتحسين أدائه (Optimization) لضمان أعلى سرعة استجابة.",
        tags: ["JavaScript", "REST API", "Clean Code"],
        url: "https://ye4017644-hash.github.io/kinoportal-live-monitor/"
    },
    {
        title: "EgyptTours Web App",
        description: "منصة إلكترونية متكاملة لإدارة وحجز الرحلات السياحية، مصممة بهيكل برمجى قوي يسهل تجربة التصفح وحساب التكاليف ديناميكياً.",
        tags: ["Full-Stack", "Web Development", "UI/UX"],
        url: "https://ye4017644-hash.github.io/Egypt/"
    },
    {
        title: "Rafiq AI Assistant",
        description: "نظام مساعد ذكي متكامل يركز على ميزات الأمان المتقدمة وتشفير البيانات، مع واجهة مستخدم انسيابية وتصميم تجربة مستخدم (UI/UX) فريد.",
        tags: ["AI Integration", "Security", "Tailwind"],
        url: "https://github.com/ye4017644-hash"
    },
    {
        title: "Arduino Weather Station",
        description: "مشروع إنترنت الأشياء (IoT) يعتمد على متحكم الأردوينو ومستشعرات دقيقة لجمع وتحليل بيانات الأرصاد الجوية والمناخ المحيط فورياً.",
        tags: ["Arduino", "C++", "Hardware IoT"],
        url: "https://github.com/ye4017644-hash"
    },
    {
        title: "Nuskha Ahsan Platform",
        description: "واجهة برمجية مخصصة لإدارة وتنسيق المحتوى الرقمي التفاعلي، تربط بين أتمتة العمليات وعرض الوسائط المتعددة بسلاسة.",
        tags: ["Automation", "Web Tools", "CSS3"],
        url: "https://www.youtube.com"
    },
    {
        title: "Nature Heroes Interactive",
        description: "تطبيق ويب تفاعلي لدعم المبادرات البيئية، يركز على الرسوم المتحركة الجذابة وبناء هوية بصرية قوية (Branding) تلفت انتباه المستخدم.",
        tags: ["Front-End", "Animations", "Branding"],
        url: "https://www.youtube.com"
    }
];

function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    // إضافة خاصية onclick لفتح رابط المشروع مباشرة عند الضغط على الكارت
    grid.innerHTML = projects.map(proj => `
        <div class="project-card" onclick="window.open('${proj.url}', '_blank')" title="اضغط لفتح المشروع">
            <h3>${proj.title}</h3>
            <p>${proj.description}</p>
            <div class="project-tags">
                ${proj.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderProjects);