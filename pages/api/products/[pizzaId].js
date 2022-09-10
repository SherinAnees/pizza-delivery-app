import { getSingleProduct } from "../../../db/controller/pizzaController";
import connectMongo from "../../../db/dbConnect";

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the Connection" })
  );
  // type of request
  const { method } = req;

  switch (method) {
    case "GET":
      getSingleProduct(req, res);
      break;
    case "PUT":
      break;
    case "DELETE":
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowd`);
      break;
  }
}
