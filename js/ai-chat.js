document.addEventListener('DOMContentLoaded', () => {
    const sendBtn = document.getElementById('sendBtn');
    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');
    const chatWidget = document.getElementById('chatWidget');
    const chatHeader = document.getElementById('chatHeader');
    const toggleBtn = document.getElementById('toggleChatBtn');

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

    const inputArea = document.querySelector('.chat-input-area');
    if (inputArea) {
        inputArea.addEventListener('click', (e) => { e.stopPropagation(); });
    }

    function sendMessage() {
        const text = userInput.value.trim();
        if (!text) return;

        appendMessage(text, 'user-msg');
        userInput.value = '';

        setTimeout(() => {
            handleAIResponse(text);
        }, 600);
    }

    // دالة محسنة تدعم إضافة أزرار وروابط HTML جوه الشات بسلاسة
    function appendMessage(text, className, isHTML = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', className);
        if (isHTML) {
            messageDiv.innerHTML = text;
        } else {
            messageDiv.innerText = text;
        }
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // إدارة الردود وإرسال أزرار تفاعلية للمشاريع لتفادي الحظر تماماً
    function handleAIResponse(input) {
        const text = input.toLowerCase();

        if (text.includes('سعر') || text.includes('تكلفة') || text.includes('بكم')) {
            appendMessage("أسعار المواقع بتعتمد على حجم الشغل والمميزات يا فندم. المواقع التعريفية البسيطة بتبدأ من تكلفة مناسبة جداً، تحب نناقش فكرتك؟", 'ai-msg');
        }
        else if (text.includes('3d') || text.includes('تفاعلي') || text.includes('ثلاثي')) {
            appendMessage("يوسف محترف جداً في الـ Three.js والـ 3D! اتفضل اضغط على الزرار ده وهيفتحلك المشروع فوراً وبأمان:", 'ai-msg');

            // حقن زرار رائع وقابل للضغط جوه الشات مباشرة!
            const buttonHTML = `<a href="https://ye4017644-hash.github.io/3D-Configurator/" target="_blank" style="display: block; background: #5450FF; color: white; text-align: center; padding: 10px; border-radius: 10px; margin-top: 8px; text-decoration: none; font-weight: bold; box-shadow: 0 4px 10px rgba(84,80,255,0.4);">🚀 افتح مشروع الـ 3D هنا</a>`;
            appendMessage(buttonHTML, 'ai-msg', true);
        }
        else if (text.includes('لغات') || text.includes('تبرمج') || text.includes('تشتغل')) {
            appendMessage("يوسف مبرمج Full-Stack متمكن، شغال بـ JavaScript, Node.js, Three.js, Python, وأنظمة الـ IoT مع Arduino.", 'ai-msg');
        }
        else if (text.includes('تواصل') || text.includes('رقم') || text.includes('اتفق')) {
            appendMessage("يسعدنا جداً العمل معك! سيب اسمك ورقم تليجرام أو وسيلة تواصل هنا، ويوسف هيكلمك فوراً لبدء المشروع.", 'ai-msg');
        }
        else {
            appendMessage("أنا Joe AI المساعد الذكي ليوسف. تقدر تسألني عن مهاراته، أسعار البرمجة، أو اكتب لي 'مشروع 3D' وهطلعلك زرار تشغيله فوراً!", 'ai-msg');
        }
    }

    if (sendBtn && userInput) {
        sendBtn.addEventListener('click', sendMessage);
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }
});