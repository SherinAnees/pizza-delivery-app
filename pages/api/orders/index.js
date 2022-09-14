import { addOrder, getOrders } from "../../../db/controller/orderControllers";
import connectMongo from "../../../db/dbConnect";
export default async function handler(req, res) {
  await connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the Connection" })
  );

  // type of request
  const { method } = req;

  switch (method) {
    case "GET":
      getOrders(req, res);
      break;
    case "POST":
      addOrder(req, res);
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowd`);
      break;
  }
}
