/**
 * 视频播放组件
 * 支持B站视频嵌入播放
 */
define(['data/content'], function(content) {
    'use strict';
    
    function Video(containerId) {
        this.container = document.getElementById(containerId);
        
        // 调试：检查 content 和 content.video
        console.log('Content object:', content);
        console.log('Content.video:', content ? content.video : 'content is undefined');
        
        // 添加容错处理
        if (!content || !content.video) {
            console.error('Video data not found in content, using fallback data');
            this.data = {
                title: "校园VC精彩回顾",
                subtitle: "看看我们是如何帮助大学生实现创业梦想的",
                videoTitle: "校园VC创业故事分享",
                videoDescription: "真实案例分享，感受创业的力量与激情",
                embedUrl: "https://player.bilibili.com/player.html?bvid=BV1pW4y1M7JQ&autoplay=1&muted=1&high_quality=1&danmaku=0"
            };
        } else {
            this.data = content.video;
        }
        
        this.isVisible = false;
        this.observer = null;
        this.initIntersectionObserver();
    }
    
    Video.prototype.initIntersectionObserver = function() {
        var self = this;
        
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting && !self.isVisible) {
                        self.isVisible = true;
                        self.loadVideo();
                    }
                });
            }, {
                threshold: 0.1
            });
        }
    };
    
    Video.prototype.render = function() {
        var self = this;
        
        return new Promise(function(resolve) {
            var html = `
                <div class="video-container">
                    <div class="section-header">
                        <h2 class="section-title">${self.data.title}</h2>
                        <p class="section-subtitle">${self.data.subtitle}</p>
                    </div>
                    <div class="video-wrapper">
                        <div class="video-player" id="video-player">
                            <div class="video-placeholder">
                                <div class="play-button">
                                    <div class="play-icon">▶</div>
                                </div>
                                <div class="video-info">
                                    <h3>${self.data.videoTitle}</h3>
                                    <p>${self.data.videoDescription}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            self.container.innerHTML = html;
            
            // 设置观察者
            if (self.observer) {
                self.observer.observe(self.container);
            } else {
                // 降级处理：直接加载视频
                self.loadVideo();
            }
            
            resolve();
        });
    };
    
    Video.prototype.loadVideo = function() {
        var videoPlayer = document.getElementById('video-player');
        var self = this;
        
        if (videoPlayer && !this.isLoaded) {
            this.isLoaded = true;
            
            var iframe = document.createElement('iframe');
            iframe.src = this.data.embedUrl;
            iframe.width = '100%';
            iframe.height = '100%';
            iframe.frameBorder = '0';
            iframe.allowFullscreen = true;
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            iframe.setAttribute('loading', 'lazy');
            
            // 添加加载完成事件
            iframe.onload = function() {
                videoPlayer.classList.add('loaded');
            };
            
            videoPlayer.innerHTML = '';
            videoPlayer.appendChild(iframe);
        }
    };
    
    Video.prototype.destroy = function() {
        if (this.observer) {
            this.observer.disconnect();
        }
    };
    
    return Video;
});