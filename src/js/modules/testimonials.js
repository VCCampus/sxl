/**
 * Testimonials 模块
 * 学员反馈展示
 */
define(['data/content'], function(content) {
    'use strict';
    
    function Testimonials(containerId) {
        this.container = document.getElementById(containerId);
        this.data = content.testimonials;
    }
    
    Testimonials.prototype.render = function() {
        return new Promise((resolve, reject) => {
            try {
                var testimonialsHtml = this.data.items.map((item, index) => `
                    <div class="testimonial-item" data-index="${index}">
                        <div class="testimonial-card">
                            <div class="testimonial-header">
                                <img class="testimonial-avatar" src="${item.avatar || 'assets/default-avatar.jpg'}" alt="${item.name}">
                                <div class="testimonial-author">
                                    <h4 class="author-name">${item.name}</h4>
                                    <p class="author-position">${item.position}</p>
                                    <p class="author-company">${item.company}</p>
                                </div>
                            </div>
                            <div class="testimonial-content">
                                <p>"${item.content}"</p>
                            </div>
                            <div class="testimonial-rating">
                                ${this.generateStars(item.rating)}
                            </div>
                        </div>
                    </div>
                `).join('');
                
                var imagesHtml = this.data.images.map((image, index) => `
                    <div class="activity-image" data-index="${index}">
                        <img src="${image}" alt="学员活动 ${index + 1}">
                    </div>
                `).join('');
                
                var html = `
                    <div class="testimonials-wrapper">
                        <div class="section-header">
                            <h2 class="section-title">${this.data.title}</h2>
                            <p class="section-subtitle">${this.data.subtitle}</p>
                        </div>
                        <div class="testimonials-carousel">
                            ${testimonialsHtml}
                        </div>
                        <div class="testimonials-nav">
                            <button class="nav-prev">‹</button>
                            <div class="nav-dots"></div>
                            <button class="nav-next">›</button>
                        </div>
                        <div class="activity-gallery">
                            <h3>学员风采</h3>
                            <div class="activity-images">
                                ${imagesHtml}
                            </div>
                        </div>
                    </div>
                `;
                
                this.container.innerHTML = html;
                this.initCarousel();
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };
    
    Testimonials.prototype.generateStars = function(rating) {
        var stars = '';
        for (var i = 0; i < 5; i++) {
            stars += `<span class="star ${i < rating ? 'filled' : ''}">★</span>`;
        }
        return stars;
    };
    
    Testimonials.prototype.initCarousel = function() {
        var carousel = this.container.querySelector('.testimonials-carousel');
        var items = this.container.querySelectorAll('.testimonial-item');
        var prevBtn = this.container.querySelector('.nav-prev');
        var nextBtn = this.container.querySelector('.nav-next');
        var dotsContainer = this.container.querySelector('.nav-dots');
        var currentIndex = 0;
        
        // 创建导航点
        items.forEach((_, index) => {
            var dot = document.createElement('span');
            dot.className = 'nav-dot';
            dot.addEventListener('click', () => this.goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        
        var dots = dotsContainer.querySelectorAll('.nav-dot');
        
        // 显示指定索引的幻灯片
        this.goToSlide = function(index) {
            items.forEach((item, i) => {
                item.classList.toggle('active', i === index);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            currentIndex = index;
        };
        
        // 初始显示第一个
        this.goToSlide(0);
        
        // 导航按钮事件
        prevBtn.addEventListener('click', () => {
            var newIndex = (currentIndex - 1 + items.length) % items.length;
            this.goToSlide(newIndex);
        });
        
        nextBtn.addEventListener('click', () => {
            var newIndex = (currentIndex + 1) % items.length;
            this.goToSlide(newIndex);
        });
        
        // 自动播放
        setInterval(() => {
            var newIndex = (currentIndex + 1) % items.length;
            this.goToSlide(newIndex);
        }, 5000);
    };
    
    return Testimonials;
});