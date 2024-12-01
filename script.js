function toggleMenu() {
    var menu = document.getElementById("sideMenu");
    menu.classList.toggle("show");
    if (menu.classList.contains("show")) {
        document.getElementById("sideMenushut").style.display = "block"; // 显示关闭按钮
    } else {
        document.getElementById("sideMenushut").style.display = "none"; // 隐藏关闭按钮
    }
}

function toggleMenuShut() {
    var menu = document.getElementById("sideMenu");
    menu.classList.remove("show"); // 直接移除菜单显示类
    document.getElementById("sideMenushut").style.display = "none"; // 隐藏关闭按钮
}

window.onclick = function (event) {
    var menu = document.getElementById("sideMenu");
    var button = document.querySelector(".menu-button");

    // 检查点击的目标是否是菜单按钮或菜单内部元素
    if (
        !menu.contains(event.target) &&
        !button.contains(event.target) &&
        menu.classList.contains("show")
    ) {
        toggleMenuShut(); // 关闭菜单
    }
};

document.addEventListener("DOMContentLoaded", () => {
    let count = 0; // 点赞数
    let hasLiked = false; // 点赞状态标记

    const likeButton = document.getElementById("likeButton");
    const likeCountDisplay = document.getElementById("likeCount");
    const likeIcon = document.getElementById("likeIcon");

    // 确保 likeIcon 存在
    if (!likeIcon) {
        console.error("没有找到 id 为 'likeIcon' 的元素");
        return; // 中止执行
    }

    likeButton.addEventListener("click", () => {
        if (hasLiked) {
            // 如果已经点赞，取消点赞
            count--;
            hasLiked = false; // 更新状态为未点赞
            likeIcon.src = "./photos/like.png"; // 修改按钮图标为未点赞图标
            likeButton.style.backgroundColor = ""; 
        } else {
            // 如果没有点赞，进行点赞
            count++;
            hasLiked = true; // 更新状态为已点赞
            likeIcon.src = "./photos/likefill.png"; // 修改按钮图标为已点赞图标
            likeButton.style.backgroundColor = "lightblue"; 
        }
        
        likeCountDisplay.textContent = count; // 更新点赞数
    });
});
