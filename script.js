// 咖啡菜单数据
const coffeeMenu = [
    { name: "美式咖啡", price: 2 },
    { name: "拿铁", price: 2 },
    { name: "卡布奇诺", price: 2 },
    { name: "摩卡", price: 2 },
    { name: "焦糖玛奇朵", price: 2 }
];

// 获取咖啡列表的ul元素
const coffeeList = document.getElementById("coffee-list");

// 动态生成咖啡菜单项
coffeeMenu.forEach(coffee => {
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${coffee.name}</span>
        <span>$${coffee.price}</span>
    `;
    coffeeList.appendChild(li);
});