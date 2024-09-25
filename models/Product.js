const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    quantity: { type: Number, required: true },
    image: { type: String, required: true }, // Đường dẫn đến hình ảnh
});

module.exports = mongoose.model("Product", ProductSchema);
