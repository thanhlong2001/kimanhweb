const express = require('express');
const path = require('path');

const app = express();

// Thiết lập middleware để phục vụ tệp tĩnh
app.use('/images', express.static(path.join(__dirname, 'image')));

    // Đường dẫn đến tệp EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('list');
});
app.get('/ProductDetails', (req, res) => {
    res.render('ProductDetails'); // Điều này giả định rằng bạn đã tạo file ProductDetails.ejs
});
app.get('/shoppingcart', (req, res) => {
    res.render('shoppingcart'); // Điều này giả định rằng bạn đã tạo file shoppingcart.ejs
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
