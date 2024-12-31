function updateDate() {
    // 获取当前日期对象
    const now = new Date();
    // 获取年、月、日、星期
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const weekday = days[now.getDay()];
    // 将结果显示在页面上
    document.getElementById('date').innerText = `${year} 年 ${month} 月 ${day} 日 ${weekday}`;
}

function updateClock() {
    // 获取当前时间
    const now = new Date();
    // 获取小时、分钟、秒
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    // 将结果显示在页面上
    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
    // 每秒更新一次
    setTimeout(updateClock, 1000);
}

function redirectToFireworks() {
    // 设定跳转时间为 2025-01-01T00:00:08
    const targetDate = new Date('2025-01-01T00:00:00');
    // 获取当前时间
    const now = new Date();
    // 计算时间差
    const difference = targetDate - now;
    if (difference <= 0) {
        window.location.href = "Firework.html"; // 替换为你实际的烟花页面的 URL
    } else {
        setTimeout(redirectToFireworks, 1000);
    }
}

function updateText() {
    const targetDate = new Date('2025-01-01T00:00:00');
    const now = new Date();
    const difference = targetDate - now;
    const textElement = document.getElementById('text');
    if (difference <= 10000 && difference > 0) { // 当距离 2025-01-01 00:00:00 小于 10 秒且大于 0 秒时开始倒数
        let count = Math.floor(difference / 1000);
        if (count >= 3) {
            textElement.innerText = "2024 跨年倒计时";
            setTimeout(updateText, 1000);
        } else {
            textElement.innerText = `${count+1}`;
            setTimeout(updateText, 1000);
        }
    } else if (difference <= 1) {
        setTimeout(() => {
            window.location.href = "Firework.html"; // 替换为你实际的烟花页面的 URL
        }, 1000);
    } else {
        textElement.innerText = "2024 跨年倒计时";
        setTimeout(updateText, 1000);
    }
}

// 初始调用更新日期、时钟和跳转函数
updateDate();
updateClock();
updateText();
redirectToFireworks();