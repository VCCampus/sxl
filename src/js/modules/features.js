/**
 * Features 模块
 * 核心功能展示
 */
define(['data/content'], function(content) {
    'use strict';
    
    function Features(containerId) {
        this.container = document.getElementById(containerId);
        this.data = content.features;
    }
    
    Features.prototype.render = function() {
        return new Promise((resolve, reject) => {
            try {
                var highlightsHtml = this.data.highlights.map(highlight => `
                    <div class="feature-highlight">
                        <div class="highlight-icon">
                            <i class="icon-${highlight.icon}"></i>
                        </div>
                        <h4 class="highlight-title">${highlight.title}</h4>
                        <p class="highlight-description">${highlight.description}</p>
                    </div>
                `).join('');
                
                var imagesHtml = this.data.images.map((image, index) => `
                    <div class="feature-image" data-index="${index}">
                        <img src="${image}" alt="教学现场 ${index + 1}">
                    </div>
                `).join('');
                
                var html = `
                    <div class="features-wrapper">
                        <div class="section-header">
                            <h2 class="section-title">${this.data.title}</h2>
                            <p class="section-subtitle">${this.data.subtitle}</p>
                            <p class="section-description">${this.data.description}</p>
                        </div>
                        <div class="features-content">
                            <div class="features-highlights">
                                ${highlightsHtml}
                            </div>
                            <div class="features-gallery">
                                ${imagesHtml}
                            </div>
                        </div>
                    </div>
                `;
                
                this.container.innerHTML = html;
                this.initGallery();
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };
    
    Features.prototype.initGallery = function() {
        var images = this.container.querySelectorAll('.feature-image');
        var currentIndex = 0;
        
        // 自动轮播
        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
        }
        
        showImage(0);
        
        // 自动切换
        setInterval(function() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }, 3000);
        
        // 点击切换
        images.forEach((img, index) => {
            img.addEventListener('click', function() {
                currentIndex = index;
                showImage(currentIndex);
            });
        });
    };
    
    return Features;
});