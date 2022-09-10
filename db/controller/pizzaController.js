import Product from "../../modals/Product";
//To display Pizza
//get:/api/products
export async function getProducts(req, res) {
  try {
    const products = await Product.find();
    if (!products) return res.status(404).json({ error: "No product found" });
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data" });
  }
}
//To add pizza
//post:/api/products
export async function addProduct(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Data is not provided" });
    const product = await Product.create(formData);
    return res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ error: "Error while creating data" });
  }
}

// to get single pizza
//get:/api/products/id
export async function getSingleProduct(req, res) {
  try {
    const { pizzaId } = req.query;

    const product = await Product.findById(pizzaId);
    if (!product) return res.status(404).json({ error: "No pizza found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data" });
  }
}
//put:/api/users/id
export async function putUser(req, res) {
  try {
    const { userId } = req.query;
    const formData = req.body;
    if (userId && formData) {
      const updateUser = await Users.findByIdAndUpdate(userId, formData);
      res.status(200).json(updateUser);
    }
    res.status(404).json({ error: "User not selected" });
  } catch (error) {
    res.status(404).json({ error: "Error while updating data" });
  }
}
//delete:/api/user/id
export async function deleteUser(req, res) {
  try {
    const { userId } = req.query;

    if (userId) {
      await Users.findByIdAndDelete(userId);
      res.status(200).json({ Deleted: userId });
    }
    res.status(404).json({ error: "User not selected" });
  } catch (error) {
    res.status(404).json({ error: "Error while delete data" });
  }
}
