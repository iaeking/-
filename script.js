// 复制微信号功能
function copyWechatId() {
    const wechatId = document.getElementById('wechatId').innerText;
    navigator.clipboard.writeText(wechatId)
        .then(() => alert("微信号已复制！"))
        .catch(() => alert("自动复制失败，请手动复制"));
}