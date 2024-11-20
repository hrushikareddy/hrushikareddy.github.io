db.products.insertOne(
    {
        "name": "Product 2",
        "desc": "This is the description of product 2",
        "price": 90,
        "url": "https://picsum.photos/id/1/200/200"
    }
);

db.products.insertMany(
    [
    {
        "name": "Product 3",
        "desc": "This is the description of product 3",
        "price": 70,
        "url": "https://picsum.photos/id/2/200/200"
    },
    {
         "name": "Product 4",
        "desc": "This is the description of product 4",
         "price": 95,
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


