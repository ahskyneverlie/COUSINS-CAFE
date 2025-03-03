/* styles.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #333;
    color: #fff;
    padding: 10px 0;
    text-align: center;
}

main {
    padding: 20px;
}

#menu, #cart {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
}

button {
    background-color: #28a745;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}

#cart-items li {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#total-price {
    font-weight: bold;
}
