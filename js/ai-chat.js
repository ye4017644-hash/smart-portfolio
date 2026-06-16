document.addEventListener('DOMContentLoaded', () => {
    const sendBtn = document.getElementById('sendBtn');
    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');
    const chatWidget = document.getElementById('chatWidget');
    const chatHeader = document.getElementById('chatHeader');
    const toggleBtn = document.getElementById('toggleChatBtn');

    // 1. منطق فتح وغلق الشات بسلاسة من الهيدر فقط
    if (chatHeader && chatWidget && toggleBtn) {
        chatHeader.addEventListener('click', () => {
            chatWidget.classList.toggle('minimized');
            if (chatWidget.classList.contains('minimized')) {
                toggleBtn.innerText = '+';
            } else {
                toggleBtn.innerText = '−';
            }
        });
    }

    // لمنع انكماش الشات بالخطأ عند الضغط داخل منطقة الكتابة
    const inputArea = document.querySelector('.chat-input-area');
    if (inputArea) {
        inputArea.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // 2. دالة إرسال الرسائل
    function sendMessage() {
        const text = userInput.value.trim();
        if (!text) return;

        appendMessage(text, 'user-msg');
        userInput.value = '';

        setTimeout(() => {
            const reply = getAIResponse(text);
            appendMessage(reply, 'ai-msg');
        }, 600);
    }

    function appendMessage(text, className) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', className);
        messageDiv.innerText = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // 3. ذكاء الردود والتوجيه التلقائي للمشاريع
    function getAIResponse(input) {
        const text = input.toLowerCase();

        if (text.includes('سعر') || text.includes('تكلفة') || text.includes('بكم')) {
            return "أسعار المواقع بتعتمد على حجم الشغل والمميزات يا فندم. المواقع التعريفية البسيطة بتبدأ من تكلفة مناسبة جداً، تحب نناقش فكرتك؟";
        }
        if (text.includes('3d') || text.includes('تفاعلي') || text.includes('ثلاثي')) {
            // التوجيه الذكي: فتح ريبو الـ 3D تلقائياً بعد ثانية ونصف
            setTimeout(() => {
                window.open('https://ye4017644-hash.github.io/3D-Configurator/', '_blank');
            }, 1500);
            return "يوسف محترف في الـ Three.js والـ 3D! هفتحلك حالاً مشروع الـ 3D Configurator في لسان تبويب جديد عشان تجرّبه بنفسك..";
        }
        if (text.includes('لغات') || text.includes('تبرمج') || text.includes('تشتغل')) {
            return "يوسف مبرمج Full-Stack متمكن، شغال بـ JavaScript, Node.js, Three.js, Python, وأنظمة الـ IoT مع Arduino.";
        }
        if (text.includes('تواصل') || text.includes('رقم') || text.includes('اتفق')) {
            return "يسعدنا جداً العمل معك! سيب اسمك ورقم تليجرام أو وسيلة تواصل هنا، ويوسف هيكلمك فوراً لبدء المشروع.";
        }

        return "أنا Joe AI المساعد الذكي ليوسف. تقدر تسألني عن مهاراته، أسعار البرمجة، أو تطلب مني أفتحلك أي مشروع من مشاريعنا السبعة حالاً!";
    }

    // ربط أزرار الإرسال والـ Enter
    if (sendBtn && userInput) {
        sendBtn.addEventListener('click', sendMessage);
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }
});