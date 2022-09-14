import Order from "../../modals/Order";
//To display orders
//get:/api/orders
export async function getOrders(req, res) {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
}
//To add new order
//post:/api/orders
export async function addOrder(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Data is not provided" });
    Orders.create(formData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    res.status(404).json({ error: "Error while creating data" });
  }
}

// to get single order
//get:/api/orders/id
export async function getSingleOrder(req, res) {
  try {
    const { orderId } = req.query;

    const order = await Order.findById(orderId);
    if (!order) return res.status(404).json({ error: "No order found" });
    res.status(200).json(order);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data" });
  }
}
// //put:/api/users/id
// export async function putUser(req, res) {
//   try {
//     const { userId } = req.query;
//     const formData = req.body;
//     if (userId && formData) {
//       const updateUser = await Users.findByIdAndUpdate(userId, formData);
//       res.status(200).json(updateUser);
//     }
//     res.status(404).json({ error: "User not selected" });
//   } catch (error) {
//     res.status(404).json({ error: "Error while updating data" });
//   }
// }
// //delete:/api/user/id
// export async function deleteUser(req, res) {
//   try {
//     const { userId } = req.query;

//     if (userId) {
//       await Users.findByIdAndDelete(userId);
//       res.status(200).json({ Deleted: userId });
//     }
//     res.status(404).json({ error: "User not selected" });
//   } catch (error) {
//     res.status(404).json({ error: "Error while delete data" });
//   }
// }
