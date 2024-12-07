// 切换菜单的显示状态
function toggleMenu() {
    var menu = document.getElementById("sideMenu"); // 获取侧边菜单元素
    menu.classList.toggle("show"); // 切换菜单的显示状态（添加或移除“show”类）

    if (menu.classList.contains("show")) {
        document.getElementById("sideMenushut").style.display = "block"; // 显示关闭按钮
    } else {
        document.getElementById("sideMenushut").style.display = "none"; // 隐藏关闭按钮
    }
}

// 关闭菜单并隐藏关闭按钮
function toggleMenuShut() {
    var menu = document.getElementById("sideMenu"); // 获取侧边菜单元素
    menu.classList.remove("show"); // 直接移除菜单显示类
    document.getElementById("sideMenushut").style.display = "none"; // 隐藏关闭按钮
}

// 窗口点击事件处理
window.onclick = function (event) {
    var menu = document.getElementById("sideMenu"); // 获取侧边菜单元素
    var button = document.querySelector(".menu-button"); // 获取菜单按钮元素

    // 检查点击的目标是否是菜单按钮或菜单内部元素
    if (
        !menu.contains(event.target) && // 如果点击的不是菜单内部元素
        !button.contains(event.target) && // 如果点击的不是菜单按钮
        menu.classList.contains("show") // 菜单当前是显示状态
    ) {
        toggleMenuShut(); // 关闭菜单
    }
};

let count = 0; // 点赞数
let hasLiked = false; // 点赞状态标记

// 给点赞按钮添加点击事件监听
document.getElementById("likeButton").addEventListener("click", () => {
    const likeIcon = document.getElementById("likeIcon"); // 用来切换图标的元素

    if (hasLiked) {
        // 如果已经点赞，取消点赞
        count--; // 点赞数减一
        hasLiked = false; // 更新状态为未点赞
        likeIcon.src = "https://s21.ax1x.com/2024/12/06/pA7C1UJ.png"; // 修改按钮图标为未点赞图标
        document.getElementById("likeButton").style.backgroundColor = ""; // 清除点赞状态的样式
    } else {
        // 如果没有点赞，进行点赞
        count++; // 点赞数加一
        hasLiked = true; // 更新状态为已点赞
        likeIcon.src = "https://s21.ax1x.com/2024/12/06/pA7CD5d.png"; // 修改按钮图标为已点赞图标（需要提供这个图标的路径）
        document.getElementById("likeButton").style.backgroundColor = "lightblue"; // 设置点赞状态的样式
    }

    document.getElementById("likeCount").textContent = count; // 更新点赞数量显示
});
