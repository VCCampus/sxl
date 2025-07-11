/**
 * Founder 模块
 * 创始人介绍
 */
define(['data/content'], function(content) {
    'use strict';
    
    function Founder(containerId) {
        this.container = document.getElementById(containerId);
        this.data = content.founder;
    }
    
    Founder.prototype.render = function() {
        return new Promise((resolve, reject) => {
            try {
                var achievementsHtml = this.data.achievements.map(achievement => 
                    `<li>${achievement}</li>`
                ).join('');
                
                var booksHtml = this.data.books.map(book => `
                    <div class="book-item">
                        <h4 class="book-title">${book.title}</h4>
                        <p class="book-description">${book.description}</p>
                    </div>
                `).join('');
                
                var backgroundHtml = this.data.background.map(item => 
                    `<li>${item}</li>`
                ).join('');
                
                var html = `
                    <div class="founder-wrapper">
                        <div class="section-header">
                            <h2 class="section-title">创始人介绍</h2>
                        </div>
                        <div class="founder-content">
                            <div class="founder-profile">
                                <div class="founder-avatar">
                                    <img src="${this.data.avatar || 'assets/default-avatar.jpg'}" alt="${this.data.name}">
                                </div>
                                <div class="founder-info">
                                    <h3 class="founder-name">${this.data.name}</h3>
                                    <p class="founder-title">${this.data.title}</p>
                                    <p class="founder-bio">${this.data.bio}</p>
                                </div>
                            </div>
                            <div class="founder-details">
                                <div class="detail-section">
                                    <h4>主要成就</h4>
                                    <ul class="achievements-list">
                                        ${achievementsHtml}
                                    </ul>
                                </div>
                                <div class="detail-section">
                                    <h4>出版著作</h4>
                                    <div class="books-list">
                                        ${booksHtml}
                                    </div>
                                </div>
                                <div class="detail-section">
                                    <h4>背景经历</h4>
                                    <ul class="background-list">
                                        ${backgroundHtml}
                                    </ul>
                                </div>
                            </div>
                            <blockquote class="founder-quote">
                                "${this.data.quote}"
                            </blockquote>
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
    
    Founder.prototype.initAnimations = function() {
        var detailSections = this.container.querySelectorAll('.detail-section');
        
        detailSections.forEach((section, index) => {
            section.style.animationDelay = (index * 0.2) + 's';
        });
    };
    
    return Founder;
});