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
