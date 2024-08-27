var dataProduct = {
    imgClass: "img-fluid",
    products: [
        {
            "id": "429",
            "name": "Strawberry Mineral Water",
            "description": "An 8-ounce serving of our refreshing H+ Sport strawberry mineral water fulfills a day’s nutritional requirements for over 12 vitamins and minerals.",
            "price": "2.80",
            "image_title": "mineral-water-strawberry_600x",
            "image": "https://hplussport.com/wp-content/uploads/2015/12/mineral-water-strawberry_600px.png"
        }
    ]
}
var app = new Vue({
    el: '#app',
    data: dataProduct
})