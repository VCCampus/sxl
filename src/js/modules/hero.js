/**
 * Hero 模块
 * 主标题区域展示
 */
define(['data/content'], function(content) {
    'use strict';
    
    function Hero(containerId) {
        this.container = document.getElementById(containerId);
        this.data = content.hero;
    }
    
    Hero.prototype.render = function() {
        return new Promise((resolve, reject) => {
            try {
                var html = `
                    <div class="hero-content">
                        <div class="hero-bg" style="background-image: url('${this.data.backgroundImage}')"></div>
                        <div class="hero-overlay"></div>
                        <div class="hero-inner">
                            <h1 class="hero-title">${this.data.title}</h1>
                            <h2 class="hero-subtitle">${this.data.subtitle}</h2>
                            <p class="hero-description">${this.data.description}</p>
                            <p class="hero-tagline">${this.data.tagline}</p>
                            <div class="hero-cta">
                                <a href="${this.data.cta.primary.link}" class="btn btn-primary">
                                    ${this.data.cta.primary.text}
                                </a>
                                <a href="${this.data.cta.secondary.link}" class="btn btn-secondary">
                                    ${this.data.cta.secondary.text}
                                </a>
                            </div>
                        </div>
                        <div class="hero-scroll-indicator">
                            <span>向下滚动</span>
                            <div class="scroll-arrow"></div>
                        </div>
                    </div>
                `;
                
                this.container.innerHTML = html;
                this.initAnimations();
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };
    
    Hero.prototype.initAnimations = function() {
        // 添加入场动画
        setTimeout(() => {
            this.container.querySelector('.hero-content').classList.add('animated');
        }, 100);
        
        // 滚动指示器动画
        var scrollIndicator = this.container.querySelector('.hero-scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', function() {
                var nextSection = document.getElementById('loss-aversion');
                if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    };
    
    return Hero;
});