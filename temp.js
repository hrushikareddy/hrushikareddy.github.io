db.products.insertOne(
    {
        "name": "Product 7",
        "desc": "This is the description of product 7",
        "price": 900,
        "url": "https://picsum.photos/id/1/200/200"
    }
);

db.products.insertMany(
    [
    {
        "name": "Product 8",
        "desc": "This is the description of product 8",
        "price": 750,
        "url": "https://picsum.photos/id/2/200/200"
    },
    {
         "name": "Product 9",
        "desc": "This is the description of product 9",
         "price": 915,
         "url": "https://picsum.photos/id/4/200/200"
    }
]
);

db.products.insertMany(
    [
    {
        "name": "Product 5",
        "desc": "This is the description of product 5",
        "price": 700,
        "url": "https://picsum.photos/id/5/200/200"
    },
    {
         "name": "Product 6",
        "desc": "This is the description of product 6",
         "price": 950,
         "url": "https://picsum.photos/id/7/200/200"
    }
]
);


