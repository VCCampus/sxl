/**
 * Loss Aversion 模块
 * 痛点阐述区域
 */
define(['data/content'], function(content) {
    'use strict';
    
    function LossAversion(containerId) {
        this.container = document.getElementById(containerId);
        this.data = content.lossAversion;
    }
    
    LossAversion.prototype.render = function() {
        return new Promise((resolve, reject) => {
            try {
                var pointsHtml = this.data.points.map((point, index) => `
                    <div class="loss-point" data-index="${index}">
                        <div class="point-icon">
                            <i class="icon-${point.icon}"></i>
                        </div>
                        <h3 class="point-title">${point.title}</h3>
                        <p class="point-description">${point.description}</p>
                    </div>
                `).join('');
                
                var html = `
                    <div class="loss-aversion-wrapper">
                        <div class="section-header">
                            <h2 class="section-title">${this.data.title}</h2>
                        </div>
                        <div class="loss-points-grid">
                            ${pointsHtml}
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
    
    LossAversion.prototype.initAnimations = function() {
        var points = this.container.querySelectorAll('.loss-point');
        
        points.forEach((point, index) => {
            point.style.animationDelay = (index * 0.2) + 's';
        });
    };
    
    return LossAversion;
});