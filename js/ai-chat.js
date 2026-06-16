document.addEventListener('DOMContentLoaded', () => {
    // حركة تصغير وتكبير الشات بذكاء
    const chatWidget = document.getElementById('chatWidget');
    const chatHeader = document.getElementById('chatHeader');
    const toggleBtn = document.getElementById('toggleChatBtn');

    chatHeader.addEventListener('click', () => {
        chatWidget.classList.toggle('minimized');
        // تغيير العلامة من (−) إلى (+) بناءً على حالة الشات
        if (chatWidget.classList.contains('minimized')) {
            toggleBtn.innerText = '+';
        } else {
            toggleBtn.innerText = '−';
        }
    });

    const sendBtn = document.getElementById('sendBtn');
    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');

    // دالة إرسال الرسائل
    function sendMessage() {
        const text = userInput.value.trim();
        if (!text) return;

        // 1. إضافة رسالة المستخدم للشات
        appendMessage(text, 'user-msg');
        userInput.value = '';

        // 2. محاكاة التفكير والرد من Joe AI
        setTimeout(() => {
            const reply = getAIResponse(text);
            appendMessage(reply, 'ai-msg');
        }, 600);
    }

    // دالة إضافة الرسالة لعنصر الـ HTML
    function appendMessage(text, className) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', className);
        messageDiv.innerText = text;
        chatMessages.appendChild(messageDiv);
        // التمرير التلقائي لأسفل الشات
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // منطق الردود الذكية بناءً على الكلمات المفتاحية
    function getAIResponse(input) {
        const text = input.toLowerCase();

        if (text.includes('سعر') || text.includes('تكلفة') || text.includes('بكم')) {
            return "أسعارنا بتعتمد على حجم المشروع ومميزاته يا فندم. المواقع التعريفية البسيطة بتبدأ من تكلفة مناسبة جداً، والمشاريع الكبيرة المعقدة بنحدد سعرها بعد مناقشة التفاصيل. تحب نتفق على ميزانية محددة؟";
        }
        if (text.includes('3d') || text.includes('تفاعلي') || text.includes('ثلاثي')) {
            return "يوسف متمكن جداً من تقنيات الـ 3D والـ Three.js! تقدر تشوف مشروع الـ 3D Configurator Tool المعروض في شبكة المشاريع قدامك، وده بيوضح طفرة تفاعلية حقيقية للمواقع.";
        }
        if (text.includes('لغات') || text.includes('تبرمج') || text.includes('تشتغل')) {
            return "يوسف مبرمج Full-Stack شاطر، بيشتغل بـ JavaScript, Node.js, Three.js, Python, وكمان ميزات الـ IoT مع Arduino.";
        }
        if (text.includes('تواصل') || text.includes('رقم') || text.includes('اتفق')) {
            return "يسعدنا جداً التعامل معاك! تقدر تسيب اسمك ورقم تليجرام أو فيسبوك هنا، ويوسف هيتواصل معاك فوراً لبدء العمل.";
        }

        // الرد الافتراضي الذكي
        return "سؤال رائع! أنا مبرمج هنا ومخصص للإجابة عن مهارات يوسف إيهاب وماريعه السبعة المحترفة. حابب تستفسر عن برمجة موقع خاص بيك أو تشوف كود معين؟";
    }

    // تشغيل الإرسال عند الضغط على الزرار أو زر Enter
    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
});