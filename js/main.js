// 聚研AI平台基本交互功能
document.addEventListener('DOMContentLoaded', function() {
  // 导航菜单响应式处理
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  }

  // 表单验证
  const loginForm = document.querySelector('.login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // 获取输入的用户名和密码
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      // 简单验证（实际应用中应使用后端验证）
      if (username === 'demo_teacher' && password === '123456') {
        // 登录成功，导航到仪表盘
        window.location.href = 'dashboard.html';
      } else {
        // 显示错误信息
        const errorElement = document.getElementById('login-error');
        if (errorElement) {
          errorElement.style.display = 'block';
        } else {
          alert('账号或密码错误，请使用测试账号：demo_teacher/123456');
        }
      }
    });
  }

  // 参数页面表单
  const paramsForm = document.querySelector('.params-form');
  if (paramsForm) {
    paramsForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // 这里应该有参数验证和提交逻辑
      console.log('参数提交');
      // 假设验证通过，跳转到确认页面
      window.location.href = 'confirm.html';
    });
  }

  // 确认页面
  const confirmForm = document.querySelector('.confirm-form');
  if (confirmForm) {
    confirmForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // 这里应该有确认提交逻辑
      console.log('任务确认提交');
      // 跳转到进度页面
      window.location.href = 'progress.html';
    });
  }

  // 进度页面模拟
  const progressIndicator = document.querySelector('.progress-indicator');
  if (progressIndicator) {
    let progress = 65;
    const interval = setInterval(function() {
      if (progress < 100) {
        progress += 5;
        progressIndicator.querySelector('.progress-value').textContent = progress + '%';
        if (progress >= 100) {
          clearInterval(interval);
          // 完成后跳转到预览页面
          setTimeout(function() {
            window.location.href = 'preview.html';
          }, 1000);
        }
      }
    }, 1500);
  }

  // 预览页面下载按钮
  const downloadBtn = document.querySelector('.download-btn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function() {
      window.location.href = 'https://gamma.app/docs/2025-68zoaswmvwi5fqz?mode=doc';
    });
  }

  // 保存资源按钮
  const saveBtn = document.querySelector('.save-btn');
  if (saveBtn) {
    saveBtn.addEventListener('click', function() {
      alert('报告已保存到您的资源库');
    });
  }

  // 分享按钮
  const shareBtn = document.querySelector('.share-btn');
  if (shareBtn) {
    shareBtn.addEventListener('click', function() {
      alert('分享功能将在实际开发中实现');
    });
  }

  // 格式选择
  const formatSelect = document.querySelectorAll('.format-select');
  formatSelect.forEach(select => {
    select.addEventListener('change', function() {
      console.log('选择的格式: ' + this.value);
    });
  });

  // 延伸功能按钮
  const extendBtns = document.querySelectorAll('.extend-btn');
  extendBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      alert('该功能将在实际开发中实现: ' + this.textContent.trim());
    });
  });

  // 创建任务按钮
  const newTaskBtn = document.querySelector('.bottom-actions .cta-btn:first-child');
  if (newTaskBtn) {
    newTaskBtn.addEventListener('click', function() {
      window.location.href = 'params.html';
    });
  }

  // 返回首页按钮
  const homeBtn = document.querySelector('.bottom-actions .cta-btn:last-child');
  if (homeBtn) {
    homeBtn.addEventListener('click', function() {
      window.location.href = '../index.html';
    });
  }

  // 移动端导航菜单切换
  const navToggle = document.querySelector('.nav-toggle');
  const navLinksMobile = document.querySelector('.nav-links');
  
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navLinksMobile.classList.toggle('active');
    });
  }

  // 案例展示页面分类切换
  const categoryTabs = document.querySelectorAll('.category-tab');
  const caseCards = document.querySelectorAll('.case-card');
  
  if (categoryTabs.length > 0) {
    categoryTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        // 移除所有选中状态
        categoryTabs.forEach(t => t.classList.remove('active'));
        // 设置当前选中状态
        this.classList.add('active');
        
        const category = this.getAttribute('data-category');
        
        // 显示或隐藏案例卡片
        caseCards.forEach(card => {
          if (category === 'all') {
            card.style.display = 'flex';
          } else {
            const cardCategories = card.getAttribute('data-categories') || '';
            if (cardCategories.includes(category)) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });
  }
  
  // 任务筛选切换
  const filterTabs = document.querySelectorAll('.filter-tab');
  if (filterTabs.length > 0) {
    filterTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        filterTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        // 这里可以添加实际的筛选逻辑
        const status = this.getAttribute('data-status');
        console.log('Filter by status:', status);
      });
    });
  }
  
  // 设置页面选项卡切换
  const settingsTabs = document.querySelectorAll('.settings-tab');
  const settingsSections = document.querySelectorAll('.settings-section');
  
  if (settingsTabs.length > 0) {
    settingsTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        settingsTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        const tabId = this.getAttribute('data-tab');
        
        settingsSections.forEach(section => {
          section.style.display = 'none';
        });
        
        document.getElementById(tabId + '-section').style.display = 'block';
      });
    });
  }
  
  // 使用趋势时间过滤器
  const timeFilterBtns = document.querySelectorAll('.time-filter-btn');
  if (timeFilterBtns.length > 0) {
    timeFilterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        timeFilterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // 可以在这里添加实际的时间过滤逻辑
        console.log('Filter by time:', this.textContent);
      });
    });
  }
  
  // 进度条动画（用于报告生成进度页面）
  const progressCircle = document.querySelector('.progress-circle');
  if (progressCircle) {
    const percent = progressCircle.getAttribute('data-percent');
    const radius = progressCircle.querySelector('circle').getAttribute('r');
    const circumference = 2 * Math.PI * radius;
    
    const offset = circumference - (percent / 100) * circumference;
    const circle = progressCircle.querySelector('.progress-circle-bar');
    
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = offset;
    
    // 模拟进度更新
    let currentPercent = parseInt(percent);
    const percentText = progressCircle.querySelector('.progress-percent');
    
    if (currentPercent < 100) {
      const interval = setInterval(() => {
        currentPercent += 1;
        percentText.textContent = `${currentPercent}%`;
        
        const newOffset = circumference - (currentPercent / 100) * circumference;
        circle.style.strokeDashoffset = newOffset;
        
        if (currentPercent >= 100) {
          clearInterval(interval);
          // 可以在这里添加进度完成的逻辑
        }
      }, 1000);
    }
  }
  
  // 资源库视图切换
  const viewSelect = document.querySelector('.view-select');
  const fileGrid = document.querySelector('.file-grid');
  
  if (viewSelect && fileGrid) {
    viewSelect.addEventListener('change', function() {
      const viewType = this.value;
      
      if (viewType === 'list') {
        fileGrid.classList.add('list-view');
        fileGrid.classList.remove('grid-view');
      } else {
        fileGrid.classList.add('grid-view');
        fileGrid.classList.remove('list-view');
      }
    });
  }
  
  // 报告预览页面的目录导航
  const tocLinks = document.querySelectorAll('.toc-link');
  if (tocLinks.length > 0) {
    tocLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // 处理密码显示/隐藏
  const togglePasswordBtn = document.querySelector('.toggle-password');
  if (togglePasswordBtn) {
    togglePasswordBtn.addEventListener('click', function() {
      const passwordInput = document.getElementById('password');
      const icon = this.querySelector('i');
      
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      }
    });
  }

  // 处理首页的"开始使用"按钮
  const ctaBtn = document.querySelector('.cta-btn');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', function() {
      window.location.href = 'pages/login.html';
    });
  }

  // 模拟进度页面自动跳转到预览页面
  const progressPage = document.querySelector('.progress-page');
  if (progressPage) {
    setTimeout(function() {
      window.location.href = 'preview.html';
    }, 10000); // 10秒后自动跳转
  }

  // 处理仪表盘侧边栏导航
  const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
  if (sidebarLinks.length > 0) {
    sidebarLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        if (!this.getAttribute('href').includes('.html')) {
          e.preventDefault();
        }
      });
    });
  }

  // 处理资源页面的视图切换
  const viewOptions = document.querySelectorAll('.view-options button');
  if (viewOptions.length > 0) {
    viewOptions.forEach(option => {
      option.addEventListener('click', function() {
        viewOptions.forEach(o => o.classList.remove('active'));
        this.classList.add('active');
        
        const fileGrid = document.querySelector('.file-grid');
        if (this.dataset.view === 'list') {
          fileGrid.classList.add('list-view');
        } else {
          fileGrid.classList.remove('list-view');
        }
      });
    });
  }
}); 