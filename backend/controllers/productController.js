const addItem = () => {};
const getItems = async (req, res) => {
  try {
    const { sortBy, sort, filterBy, filter } = req.query;

    const products = await ProductModel.find();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const updateItem = () => {};
const removeItem = () => {};

const productController = { addItem, getItems, updateItem, removeItem };

module.exports = productController;
