const productService = require("../Services/Product.Service.js");

const CreateProduct = async (req, res) => {
  try {
    const createProducts = await productService.createProduct(req.body);
    return res.status(200).send(createProducts);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const DeleteProduct = async (req, res) => {                    
  const productId = req.params.id;
  try {
    await productService.DeleteProduct(productId);
    return res.status(200).send("deleted");
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const UpdateProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const updateProduct = await productService.UpdateProduct(
      productId,
      req.body
    );
    return res.status(200).send(updateProduct);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const GetProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const getProduct = await productService.GetProduct(productId);
    return res.status(200).send(getProduct);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const GetAllProduct = async (req, res) => {       
  try {
    const getAllProduct = await productService.GetAllProduct(req.query);
    return res.status(200).send(getAllProduct);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const AddMultipleProducts = async (req, res) => {
  try {
    const addMultipleProducts = await productService.AddMultipleProduct(
      req.body
    );
    return res.status(200).send({ message: "Added " });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  CreateProduct,
  GetAllProduct,
  GetProduct,
  UpdateProduct,
  DeleteProduct,
  AddMultipleProducts,
};
