import {
  addProduct,
  getProducts,
} from "../../../db/controller/pizzaController";
import connectMongo from "../../../db/dbConnect";
export default function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the Connection" })
  );

  // type of request
  const { method } = req;

  switch (method) {
    case "GET":
      getProducts(req, res);
      break;
    case "POST":
      addProduct(req, res);
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowd`);
      break;
  }
}
