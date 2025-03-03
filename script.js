// script.js
function moveToGroup(name, type) {
    const coffeeGroup = document.getElementById('coffee-group-items');
    const milkTeaGroup = document.getElementById('milk-tea-group-items');

    // 创建新的列表项
    const li = document.createElement('li');
    li.textContent = name;

    // 根据类型分配到不同的组
    if (type === '咖啡') {
        coffeeGroup.appendChild(li);
    } else if (type === '奶茶') {
        milkTeaGroup.appendChild(li);
    }
}
