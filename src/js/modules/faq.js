/**
 * FAQ 模块
 * 常见问题展示
 */
define(['data/content'], function(content) {
    'use strict';
    
    function FAQ(containerId) {
        this.container = document.getElementById(containerId);
        this.data = content.faq;
    }
    
    FAQ.prototype.render = function() {
        return new Promise((resolve, reject) => {
            try {
                var faqHtml = this.data.items.map((item, index) => `
                    <div class="faq-item" data-index="${index}">
                        <div class="faq-question">
                            <h3>${item.question}</h3>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">
                            <p>${item.answer}</p>
                        </div>
                    </div>
                `).join('');
                
                var html = `
                    <div class="faq-wrapper">
                        <div class="section-header">
                            <h2 class="section-title">${this.data.title}</h2>
                            <p class="section-subtitle">${this.data.subtitle}</p>
                        </div>
                        <div class="faq-list">
                            ${faqHtml}
                        </div>
                    </div>
                `;
                
                this.container.innerHTML = html;
                this.initAccordion();
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };
    
    FAQ.prototype.initAccordion = function() {
        var items = this.container.querySelectorAll('.faq-item');
        
        items.forEach(item => {
            var question = item.querySelector('.faq-question');
            var answer = item.querySelector('.faq-answer');
            var toggle = item.querySelector('.faq-toggle');
            
            question.addEventListener('click', function() {
                var isOpen = item.classList.contains('open');
                
                // 关闭其他所有项
                items.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('open');
                        otherItem.querySelector('.faq-toggle').textContent = '+';
                    }
                });
                
                // 切换当前项
                if (isOpen) {
                    item.classList.remove('open');
                    toggle.textContent = '+';
                } else {
                    item.classList.add('open');
                    toggle.textContent = '−';
                }
            });
        });
        
        // 默认打开第一个
        if (items.length > 0) {
            items[0].classList.add('open');
            items[0].querySelector('.faq-toggle').textContent = '−';
        }
    };
    
    return FAQ;
});