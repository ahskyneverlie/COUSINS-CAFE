// script.js
let cart = [];
let totalPrice = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // 清空购物车列表
    cartItems.innerHTML = '';

    // 添加新的购物车项
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}元`;
        cartItems.appendChild(li);
    });

    // 更新总价
    totalPriceElement.textContent = totalPrice;
}

function checkout() {
    if (cart.length === 0) {
        alert('购物车为空，请先添加商品！');
    } else {
        alert(`结算成功！总价: ${totalPrice}元`);
        cart = [];
        totalPrice = 0;
        updateCart();
    }
}
