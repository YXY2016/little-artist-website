// 图片查看器功能
const imageViewer = document.getElementById('imageViewer');
const viewerImage = document.querySelector('.viewer-image');
const closeBtn = document.querySelector('.close');

// 打开图片查看器
const galleryItems = document.querySelectorAll('.gallery-item img');
galleryItems.forEach(img => {
    img.addEventListener('click', function() {
        imageViewer.style.display = 'block';
        viewerImage.src = this.src;
    });
});

// 关闭图片查看器
closeBtn.addEventListener('click', function() {
    imageViewer.style.display = 'none';
});

// 点击查看器外部关闭
window.addEventListener('click', function(event) {
    if (event.target === imageViewer) {
        imageViewer.style.display = 'none';
    }
});

// 画作数据
const artworksData = [
    { name: '不怒自威', age: '8岁', description: '威风凛凛的形象，展现力量与尊严', category: '想象', image: 'artworks/不怒自威.jpg' },
    { name: '兔鸟传说', age: '7岁', description: '兔子和鸟儿的奇妙故事', category: '想象', image: 'artworks/兔鸟传说.jpg' },
    { name: '兰香香', age: '7岁', description: '兰花的幽香在画面中弥漫', category: '自然', image: 'artworks/兰香香.jpg' },
    { name: '列队', age: '8岁', description: '整齐的队伍，展现秩序之美', category: '动物', image: 'artworks/列队.jpg' },
    { name: '小可爱', age: '8岁', description: '小巧玲珑的可爱形象', category: '动物', image: 'artworks/小可爱.jpg' },
    { name: '小猫绒绒', age: '8岁', description: '毛茸茸的小猫，温顺可爱', category: '动物', image: 'artworks/小猫绒绒.jpg' },
    { name: '小荷仙', age: '7岁', description: '荷花中的仙子，优雅动人', category: '自然', image: 'artworks/小荷仙.jpg' },
    { name: '小鱼烧烤', age: '8岁', description: '创意十足的小鱼烧烤场景', category: '想象', image: 'artworks/小鱼烧烤.jpg' },
    { name: '怪鱼奇谭', age: '8岁', description: '奇特的鱼儿，充满想象力', category: '想象', image: 'artworks/怪鱼奇谭.jpg' },
    { name: '枝头俏', age: '8岁', description: '枝头的美丽景象', category: '自然', image: 'artworks/枝头俏.jpg' },
    { name: '海上动物园', age: '8岁', description: '海上的动物们和谐相处', category: '动物', image: 'artworks/海上动物园.jpg' },
    { name: '海底小镇', age: '7岁', description: '神秘的海底小镇，充满奇幻色彩', category: '想象', image: 'artworks/海底小镇.jpg' },
    { name: '秀外慧中', age: '7岁', description: '外在美丽，内在聪慧', category: '想象', image: 'artworks/秀外慧中.jpg' },
    { name: '精灵小屋', age: '8岁', description: '精灵们的温馨小屋', category: '想象', image: 'artworks/精灵小屋.jpg' },
    { name: '翩翩-联合国儿童画展作品', age: '7岁', description: '轻盈飞舞的姿态，展现自由之美', category: '想象', image: 'artworks/翩翩-联合国儿童画展作品.jpg' },
    { name: '芭蕉正绿', age: '8岁', description: '翠绿的芭蕉叶，充满生机', category: '自然', image: 'artworks/芭蕉正绿.jpg' },
    { name: '荷花派对', age: '7岁', description: '荷花们的欢乐聚会', category: '自然', image: 'artworks/荷花派对.jpg' },
    { name: '鱼干叠叠乐', age: '8岁', description: '有趣的鱼干堆叠游戏', category: '想象', image: 'artworks/鱼干叠叠乐.jpg' },
    { name: '鱼干守卫者-希望颂一等奖作品', age: '8岁', description: '守护鱼干的勇士，充满正义感', category: '想象', image: 'artworks/鱼干守卫者-希望颂一等奖作品.jpg' },
    { name: '鱼干守卫者', age: '8岁', description: '忠实的鱼干守护者', category: '想象', image: 'artworks/鱼干守卫者.jpg' },
    { name: '鲜香汇', age: '8岁', description: '各种美味汇聚一堂', category: '想象', image: 'artworks/鲜香汇.jpg' },
    { name: '鲸上之城', age: '8岁', description: '鲸鱼背上的城市，充满奇幻', category: '想象', image: 'artworks/鲸上之城.jpg' },
    { name: '鳜鱼肥', age: '8岁', description: '肥美的鳜鱼，充满活力', category: '动物', image: 'artworks/鳜鱼肥.jpg' }
];

// 成长历程数据
const timelineData = [
    {
        year: '2018年',
        title: '艺术启蒙',
        content: '开启艺术启蒙，在苏州诚品・云门舞集舞蹈教室参与幼儿亲子舞动课程，感受东方身体美学与自由表达，建立身体与艺术的最初联结。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20dance%20art%20class%20hand-drawn%20style&image_size=landscape_4_3'
    },
    {
        year: '2019年',
        title: '创意美术',
        content: '走进创意美术世界，在颜料的碰撞中尽情创作，感受色彩与线条的魅力。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20creative%20art%20painting%20hand-drawn%20style&image_size=landscape_4_3'
    },
    {
        year: '2021年',
        title: '系统学习',
        content: '正式跟随艺术系教授系统学习绘画，同步开启书法、国画学习之路，打下扎实的艺术基础。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20learning%20painting%20with%20teacher%20hand-drawn%20style&image_size=landscape_4_3'
    },
    {
        year: '2023年',
        title: '多元发展',
        content: '丰富艺术表达形式，在书法、国画基础上，系统学习色彩与线条理论，并开启丙烯画创作，解锁多元艺术风格。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20acrylic%20painting%20art%20hand-drawn%20style&image_size=landscape_4_3'
    },
    {
        year: '2024年',
        title: '全面提升',
        content: '深耕艺术学习，加入速写练习，同步兼顾书法、国画、丙烯画与速写，全面提升造型能力与画面表现力。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20sketch%20drawing%20art%20hand-drawn%20style&image_size=landscape_4_3'
    },
    {
        year: '2025年 上半年',
        title: '联合画展',
        content: '聚焦联合画展筹备，精心打磨每一幅参展作品，6月圆满完成首次联合画展。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20art%20exhibition%20gallery%20hand-drawn%20style&image_size=landscape_4_3'
    },
    {
        year: '2025年 下半年',
        title: '文创制作',
        content: '画展结束后，着手制作个人文创，将原创画作融入生活设计；同时加强速写与书法练习，夯实基本功。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20art%20creative%20products%20hand-drawn%20style&image_size=landscape_4_3'
    },
    {
        year: '2026年',
        title: '个人画展',
        content: '稳步前行，持续精进书法、国画、丙烯画、速写四大方向，打磨创作技巧，筹备个人专场画展，奔赴更广阔的艺术天地。',
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20personal%20art%20exhibition%20gallery%20hand-drawn%20style&image_size=landscape_4_3'
    }
];

// 动态加载画作
function loadArtworks() {
    const container = document.getElementById('artworks-container');
    container.innerHTML = '';
    
    artworksData.forEach(artwork => {
        const artworkElement = document.createElement('div');
        artworkElement.className = 'gallery-item';
        artworkElement.dataset.category = artwork.category;
        
        artworkElement.innerHTML = `
            <img data-src="${artwork.image}" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='250' viewBox='0 0 300 250'%3E%3Crect width='300' height='250' fill='%23E1F0E1'/%3E%3Ctext x='50%25' y='50%25' font-size='14' text-anchor='middle' fill='%2399C899' dominant-baseline='middle'%3E加载中...%3C/text%3E%3C/svg%3E" alt="${artwork.name}" class="lazy-load">
            <div class="gallery-info">
                <h3>${artwork.name}</h3>
                <p>年龄：${artwork.age}</p>
                <p>解说：${artwork.description}</p>
            </div>
        `;
        
        container.appendChild(artworkElement);
    });
    
    // 初始化懒加载
    initLazyLoad();
    
    // 重新绑定图片点击事件
    bindImageClickEvents();
}

// 图片懒加载
function initLazyLoad() {
    const lazyImages = document.querySelectorAll('.lazy-load');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy-load');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
}

// 动态加载成长历程
function loadTimeline() {
    const container = document.getElementById('timeline-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        // 根据索引的奇偶性设置不同的类名，实现左右交替布局
        timelineItem.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
        
        timelineItem.innerHTML = `
            <div class="timeline-date">${item.year}</div>
            <div class="timeline-content">
                <h3>${item.title}</h3>
                <p>${item.content}</p>
                <img src="${item.image}" alt="${item.title}">
            </div>
        `;
        
        container.appendChild(timelineItem);
    });
}

// 绑定图片点击事件
function bindImageClickEvents() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach(img => {
        img.addEventListener('click', function() {
            imageViewer.style.display = 'block';
            // 使用实际的图片地址
            viewerImage.src = this.dataset.src || this.src;
        });
    });
}

// 作品展厅分类筛选
const categoryButtons = document.querySelectorAll('.gallery-categories button');

categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
        // 移除所有按钮的active类
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // 添加当前按钮的active类
        this.classList.add('active');
        
        const category = this.textContent;
        
        // 筛选作品
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            if (category === '全部') {
                item.style.display = 'block';
            } else {
                if (item.dataset.category === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }
        });
    });
});

// 初始化加载画作
loadArtworks();

// 初始化加载成长历程
loadTimeline();

// 留言板提交功能
const guestbookForm = document.querySelector('.guestbook-form');
const guestbookMessages = document.querySelector('.guestbook-messages');

guestbookForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input').value;
    const message = this.querySelector('textarea').value;
    
    if (name && message) {
        // 创建新留言
        const newMessage = document.createElement('div');
        newMessage.className = 'message';
        
        const today = new Date();
        const dateString = today.toISOString().split('T')[0];
        
        newMessage.innerHTML = `
            <h4>${name}</h4>
            <p>${message}</p>
            <span>${dateString}</span>
        `;
        
        // 添加到留言列表
        guestbookMessages.appendChild(newMessage);
        
        // 清空表单
        this.reset();
        
        // 显示成功提示
        alert('留言提交成功！');
    }
});

// 平滑滚动
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(225, 240, 225, 0.95)';
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.backgroundColor = '#E1F0E1';
        nav.style.boxShadow = 'none';
    }
});

// 初始化页面
window.addEventListener('DOMContentLoaded', function() {
    // 淡入效果
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    // 检测元素是否在视口中
    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            if (rect.top <= windowHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // 初始检查
    checkVisibility();
    
    // 滚动时检查
    window.addEventListener('scroll', checkVisibility);
});