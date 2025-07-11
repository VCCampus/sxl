/**
 * CTA 模块
 * 行动号召区域
 */
define(['data/content'], function(content) {
    'use strict';
    
    function CTA(containerId) {
        this.container = document.getElementById(containerId);
        this.data = content.cta;
    }
    
    CTA.prototype.render = function() {
        return new Promise((resolve, reject) => {
            try {
                var benefitsHtml = this.data.benefits.map(benefit => 
                    `<li><span class="check-icon">✓</span>${benefit}</li>`
                ).join('');
                
                var formFieldsHtml = this.data.form.fields.map(field => `
                    <div class="form-group">
                        <label for="${field.name}">${field.label}${field.required ? ' *' : ''}</label>
                        ${field.type === 'textarea' 
                            ? `<textarea id="${field.name}" name="${field.name}" ${field.required ? 'required' : ''}></textarea>`
                            : `<input type="${field.type}" id="${field.name}" name="${field.name}" ${field.required ? 'required' : ''}>`
                        }
                    </div>
                `).join('');
                
                var html = `
                    <div class="cta-wrapper">
                        <div class="section-header">
                            <h2 class="section-title">${this.data.title}</h2>
                            <p class="section-subtitle">${this.data.subtitle}</p>
                        </div>
                        <div class="cta-content">
                            <div class="cta-benefits">
                                <h3>你将获得</h3>
                                <ul class="benefits-list">
                                    ${benefitsHtml}
                                </ul>
                            </div>
                            <div class="cta-form-wrapper">
                                <div class="form-container">
                                    <h3>${this.data.form.title}</h3>
                                    <form id="signup-form" class="cta-form">
                                        ${formFieldsHtml}
                                        <button type="submit" class="btn btn-primary btn-large">
                                            ${this.data.form.submitText}
                                        </button>
                                    </form>
                                </div>
                                <div class="contact-info">
                                    <div class="contact-item">
                                        <h4>${this.data.contact.wechat.title}</h4>
                                        <img src="${this.data.contact.wechat.qrcode}" alt="微信二维码" class="qrcode">
                                    </div>
                                    <div class="contact-item">
                                        <h4>${this.data.contact.phone.title}</h4>
                                        <p class="contact-number">${this.data.contact.phone.number}</p>
                                    </div>
                                    <div class="contact-item">
                                        <h4>${this.data.contact.email.title}</h4>
                                        <p><a href="mailto:${this.data.contact.email.address}">${this.data.contact.email.address}</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                
                this.container.innerHTML = html;
                this.initForm();
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };
    
    CTA.prototype.initForm = function() {
        var form = this.container.querySelector('#signup-form');
        
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // 收集表单数据
                var formData = new FormData(form);
                var data = {};
                formData.forEach((value, key) => {
                    data[key] = value;
                });
                
                // 这里可以添加实际的提交逻辑
                console.log('表单提交:', data);
                
                // 显示成功消息
                alert('报名成功！我们会尽快与您联系。');
                form.reset();
            });
            
            // 实时验证
            var inputs = form.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                input.addEventListener('blur', function() {
                    this.classList.remove('error');
                    if (this.hasAttribute('required') && !this.value.trim()) {
                        this.classList.add('error');
                    }
                });
            });
        }
    };
    
    return CTA;
});