const Category = require("../Model/Category.Model");
const Product = require("../Model/Product.Model");

const createProduct = async (data) => {
  let LevelOne = await Category.findOne({ name: data.LevelOneCategory });
  if (!LevelOne) {
    LevelOne = new Category({
      name: data.LevelOneCategory,
      level: 1,
    });
  }

  let LevelSecond = await Category.findOne({
    name: data.LevelSecondCategory,
    parentCategory: LevelOne._id,
  });

  if (!LevelSecond) {
    LevelSecond = new Category({
      name: data.LevelSecondCategory,
      parentCategory: LevelOne._id,
      level: 2,
    });
  }

  let LevelThird = await Category.findOne({
    name: data.LevelThirdCategory,
    parentCategory: LevelSecond._id,
  });
  if (!LevelThird) {
    LevelThird = new Category({
      name: data.LevelThirdCategory,
      parentCategory: LevelSecond._id,
      level: 3,
    });
  }

  const product = new Product({
    title: data.title,
    color: data.color,
    details: data.details,
    discountPrice: data.discountPrice,
    discountPercent: data.discountPercent,
    image: data.image,
    brand: data.brand,
    price: data.price,
    size: data.size,
    qty: data.qty,
    category: LevelThird._id,
  });
console.log(product);
  return await product.save();
};

const DeleteProduct = async (productId) => {
  const product = await GetProduct(productId);
  await Product.findByIdAndDelete(productId);
  return "deleted", product;
};

const UpdateProduct = async (productId, data) => {
  const product = await Product.findByIdAndUpdate(productId, data);
  return "updated ", product;
};

const GetProduct = async (productId) => {
  const product = await Product.findById(productId).populate("category").exec();
  if (!product) {
    throw new Error("Not Found the Product");
  }
  console.log(product);
  return product;
};

const GetAllProduct = async (queries) => {
  let {
    category,
    color,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = queries;

  pageSize = pageSize || 10;

  let query = Product.find().populate("category");

  if (category) {
    const isExistCategory = await Category.findOne({ name: category });
    if (isExistCategory) {
      query = query.where("category").equals(isExistCategory._id);
    } else {
      return { content: [], currentPage: 1, totalPage: 0 };
    }
  }

  if (color) {
    const colorSet = new Set(
      color.split(",").map((color) => color.trim().toLowerCase())
    );

    const colorRegex =
      colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;

    query = query.where("color").regex(colorRegex);
  }                   

  if (sizes) {
    const SizeSet = new Set(sizes);
    query = query.where("sizes.name").in([...SizeSet]);
  }

  if (minPrice && maxPrice) {
    query = query.where("discountPrice").gte(minPrice).lte(maxPrice);
  }

  if (minDiscount) {
    query = query.where("discountPercent").gte(minDiscount);
  }

  if (stock) {
    if (stock == "in_stock") {
      query = query.where("qty").gte(0);
    } else if (stock == "out_of_stock") {
      query = query.where("qty").lte(1);
    }
  }

  if (sort) {
    const sortDirection = sort === "price_high" ? -1 : 1;
    query = query.sort({ discountPrice: sortDirection });
  }

  const totalProduct = await Product.countDocuments(query);
  const skip = (pageNumber - 1) * pageSize;
  query = query.skip(skip).limit(pageSize);
  const products = await query.exec();

  const totalPage = Math.ceil(totalProduct / pageSize);

  console.log(products);
  return { content: products, currentPage: pageNumber, totalPage: totalPage };
};

//Admin if there is no product than admin can add multiple products
//it only use for the first time before create db
const AddMultipleProduct = async(products)=>{

    for(let product of products){
        await createProduct(product);
    }
}


module.exports = {
  createProduct,
  DeleteProduct,
  UpdateProduct,
  GetProduct,
  GetAllProduct,
  AddMultipleProduct
};
 