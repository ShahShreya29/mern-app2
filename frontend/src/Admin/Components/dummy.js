const dummyProducts = {
  products: {
    content: [
      {
        name: "Product 1",
        title: "Title 1",
        price: 10,
        minDiscount: 5,
        brand: "Brand 1",
        color: "Red",
        size: "Small",
        category: "dress"
      },
      {
        name: "Product 2",
        title: "Title 2",
        price: 20,
        minDiscount: 10,
        brand: "Brand 2",
        color: "Blue",
        size: "Medium",
        category: "dress"
      },
      // Add more dummy products here if needed
    ]
  }
};

// Replace the useSelector hook with this dummy data for testing
const { products } = dummyProducts;
