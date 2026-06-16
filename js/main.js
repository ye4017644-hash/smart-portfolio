// بيانات المشاريع السبعة الجاهزة لتُعرض بشكل ديناميكي ومبهر للعملاء
const projects = [
    {
        title: "3D Configurator Tool",
        description: "أداة تفاعلية ثلاثية الأبعاد تتيح للمستخدمين تخصيص وتعديل المنتجات في الوقت الفعلي، وتعتمد على الـ WebSockets لتزامن البيانات بدقة خيالية.",
        tags: ["Three.js", "WebSockets", "Node.js"]
    },
    {
        title: "Rafiq AI Assistant",
        description: "نظام مساعد ذكي متكامل يركز على ميزات الأمان المتقدمة وتشفير البيانات، مع واجهة مستخدم انسيابية وتصميم تجربة مستخدم (UI/UX) فريد.",
        tags: ["AI Integration", "Security", "Tailwind"]
    },
    {
        title: "Kinoportal Platform",
        description: "تطبيق ويب متطور لاستعراض ومراجعة الأفلام، تم عمل صيانة شاملة لكوده البرمجي وتحسين أدائه (Optimization) لضمان أعلى سرعة استجابة.",
        tags: ["JavaScript", "REST API", "Clean Code"]
    },
    {
        title: "EgyptTours Web App",
        description: "منصة إلكترونية متكاملة لإدارة وحجز الرحلات السياحية، مصممة بهيكل برمجى قوي يسهل تجربة التصفح وحساب التكاليف ديناميكياً.",
        tags: ["Full-Stack", "Web Development", "UI/UX"]
    },
    {
        title: "Arduino Weather Station",
        description: "مشروع إنترنت الأشياء (IoT) يعتمد على متحكم الأردوينو ومستشعرات دقيقة لجمع وتحليل بيانات الأرصاد الجوية والمناخ المحيط فورياً.",
        tags: ["Arduino", "C++", "Hardware IoT"]
    },
    {
        title: "Nuskha Ahsan Platform",
        description: "واجهة برمجية مخصصة لإدارة وتنسيق المحتوى الرقمي التفاعلي، تربط بين أتمتة العمليات وعرض الوسائط المتعددة بسلاسة.",
        tags: ["Automation", "Web Tools", "CSS3"]
    },
    {
        title: "Nature Heroes Interactive",
        description: "تطبيق ويب تفاعلي لدعم المبادرات البيئية، يركز على الرسوم المتحركة الجذابة وبناء هوية بصرية قوية (Branding) تلفت انتباه المستخدم.",
        tags: ["Front-End", "Animations", "Branding"]
    }
];

// دالة ذكية لتوليد بطاقات المشاريع وحقنها في الـ HTML تلقائياً
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    // تحويل مصفوفة المشاريع لـ HTML مدمج مع التصميم الفاخر
    grid.innerHTML = projects.map(proj => `
        <div class="project-card">
            <h3>${proj.title}</h3>
            <p>${proj.description}</p>
            <div class="project-tags">
                ${proj.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// تشغيل الدالة فور تحميل محتوى الصفحة للتأكد من السرعة
document.addEventListener('DOMContentLoaded', renderProjects);
