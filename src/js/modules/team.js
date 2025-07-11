/**
 * Team 模块
 * 核心团队展示
 */
define(['data/content'], function(content) {
    'use strict';
    
    function Team(containerId) {
        this.container = document.getElementById(containerId);
        this.data = content.team;
    }
    
    Team.prototype.render = function() {
        return new Promise((resolve, reject) => {
            try {
                var membersHtml = this.data.members.map((member, index) => `
                    <div class="team-member" data-index="${index}">
                        <div class="member-card">
                            <div class="member-avatar">
                                <img src="${member.avatar || 'assets/default-avatar.jpg'}" alt="${member.name}">
                            </div>
                            <div class="member-info">
                                <h3 class="member-name">${member.name}</h3>
                                <p class="member-position">${member.position}</p>
                                <p class="member-bio">${member.bio}</p>
                                <div class="member-expertise">
                                    ${member.expertise.map(skill => 
                                        `<span class="expertise-tag">${skill}</span>`
                                    ).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('');
                
                var html = `
                    <div class="team-wrapper">
                        <div class="section-header">
                            <h2 class="section-title">${this.data.title}</h2>
                            <p class="section-subtitle">${this.data.subtitle}</p>
                        </div>
                        <div class="team-grid">
                            ${membersHtml}
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
    
    Team.prototype.initInteractions = function() {
        var members = this.container.querySelectorAll('.team-member');
        
        members.forEach((member, index) => {
            // 添加进入动画延迟
            member.style.animationDelay = (index * 0.1) + 's';
            
            // 悬停效果
            member.addEventListener('mouseenter', function() {
                this.classList.add('hover');
            });
            
            member.addEventListener('mouseleave', function() {
                this.classList.remove('hover');
            });
        });
    };
    
    return Team;
});