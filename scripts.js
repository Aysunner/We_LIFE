const envelope = document.querySelector('.envelope');
const snowContainer = document.createElement("div");
snowContainer.style.position = "absolute";
snowContainer.style.top = "0";
snowContainer.style.left = "0";
snowContainer.style.width = "100%";
snowContainer.style.height = "100%";
snowContainer.style.pointerEvents = "none";
snowContainer.style.opacity = "1"; // 初始雪花透明度
document.body.appendChild(snowContainer);
// 音乐文件
const defaultMusic = new Audio('defaultMusic.mp3'); // 默认音乐
const openMusic = new Audio('http://music.163.com/song/media/outer/url?id=1945895726.mp3'); // 信封打开时的音乐
defaultMusic.loop = true;
openMusic.loop = true;
defaultMusic.play(); // 默认播放

function toggleEnvelope() {
    envelope.classList.toggle('open');

    // 打开信封时降低雪花透明度并切换音乐
    if (envelope.classList.contains('open')) {
        snowContainer.style.opacity = "0.3"; // 降低雪花透明度
        defaultMusic.pause(); // 暂停默认音乐
        openMusic.play(); // 播放打开信封的音乐
    } else {
        snowContainer.style.opacity = "0.5"; // 恢复雪花透明度
        openMusic.pause(); // 暂停打开信封的音乐
        defaultMusic.play(); // 恢复默认音乐
    }
}
// 雪花效果设置
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "❄";
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snowflake.style.opacity = Math.random();
    snowContainer.appendChild(snowflake);
    snowflake.addEventListener("animationend", () => snowflake.remove());
}

// 设置雪花生成间隔
setInterval(createSnowflake, 1000);

        // 设置开始时间（格式：年, 月-1, 日, 小时, 分钟, 秒）
        const startTime = new Date(2024, 10 - 1, 28, 9, 0, 0); // 2024年10月28日 9:00:00

        function updateTimer() {
            const currentTime = new Date();
            const elapsedTime = currentTime - startTime; // 计算已经过去的毫秒数

            const hrs = Math.floor(elapsedTime / (1000 * 60 * 60));
            const mins = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((elapsedTime % (1000 * 60)) / 1000);

            document.getElementById('timer').textContent = `${hrs}:${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
        }

        setInterval(updateTimer, 1000); // 每秒更新一次