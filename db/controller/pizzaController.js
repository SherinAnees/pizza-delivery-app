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
