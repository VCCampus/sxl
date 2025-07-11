/**
 * Benefits 模块
 * 核心优势展示
 */
define(['data/content'], function(content) {
    'use strict';
    
    function Benefits(containerId) {
        this.container = document.getElementById(containerId);
        this.data = content.benefits;
    }
    
    Benefits.prototype.render = function() {
        return new Promise((resolve, reject) => {
            try {
                var benefitsHtml = this.data.items.map((item, index) => `
                    <div class="benefit-item" data-index="${index}">
                        <div class="benefit-image">
                            <img src="${item.image}" alt="${item.title}">
                        </div>
                        <div class="benefit-content">
                            <div class="benefit-icon">
                                <i class="icon-${item.icon}"></i>
                            </div>
                            <h3 class="benefit-title">${item.title}</h3>
                            <p class="benefit-description">${item.description}</p>
                            <ul class="benefit-details">
                                ${item.details.map(detail => `<li>${detail}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `).join('');
                
                var html = `
                    <div class="benefits-wrapper">
                        <div class="section-header">
                            <h2 class="section-title">${this.data.title}</h2>
                            <p class="section-subtitle">${this.data.subtitle}</p>
                        </div>
                        <div class="benefits-grid">
                            ${benefitsHtml}
                        </div>
                    </div>
                `;
                
                this.container.innerHTML = html;
                this.initInteractions();
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };
    
    Benefits.prototype.initInteractions = function() {
        var items = this.container.querySelectorAll('.benefit-item');
        
        items.forEach(function(item, index) {
            // 添加悬停效果
            item.addEventListener('mouseenter', function() {
                this.classList.add('hover');
            });
            
            item.addEventListener('mouseleave', function() {
                this.classList.remove('hover');
            });
            
            // 添加延迟动画
            item.style.animationDelay = (index * 0.1) + 's';
        });
    };
    
    return Benefits;
});