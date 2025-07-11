/**
 * Process 模块
 * 学习流程展示
 */
define(['data/content'], function(content) {
    'use strict';
    
    function Process(containerId) {
        this.container = document.getElementById(containerId);
        this.data = content.process;
    }
    
    Process.prototype.render = function() {
        return new Promise((resolve, reject) => {
            try {
                var stepsHtml = this.data.steps.map((step, index) => `
                    <div class="process-step" data-step="${index + 1}">
                        <div class="step-number">${step.number}</div>
                        <div class="step-content">
                            <h3 class="step-title">${step.title}</h3>
                            <p class="step-description">${step.description}</p>
                            <span class="step-duration">${step.duration}</span>
                        </div>
                        ${index < this.data.steps.length - 1 ? '<div class="step-connector"></div>' : ''}
                    </div>
                `).join('');
                
                var html = `
                    <div class="process-wrapper">
                        <div class="section-header">
                            <h2 class="section-title">${this.data.title}</h2>
                            <p class="section-subtitle">${this.data.subtitle}</p>
                        </div>
                        <div class="process-timeline">
                            ${stepsHtml}
                        </div>
                    </div>
                `;
                
                this.container.innerHTML = html;
                this.initTimeline();
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };
    
    Process.prototype.initTimeline = function() {
        var steps = this.container.querySelectorAll('.process-step');
        var container = this.container;
        
        // 创建时间线进度追踪
        var observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };
        
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // 激活连接线动画
                    var connector = entry.target.querySelector('.step-connector');
                    if (connector) {
                        setTimeout(function() {
                            connector.classList.add('active');
                        }, 300);
                    }
                }
            });
        }, observerOptions);
        
        steps.forEach(function(step) {
            observer.observe(step);
        });
    };
    
    return Process;
});