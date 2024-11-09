import User from "../models/user.mjs";

class UserController {
  static async index(req, res) {
    try {
      let q = req.query.q || "";  // Nếu không có tham số q, mặc định là chuỗi rỗng
      q = `.*${q}.*`;  // Tạo biểu thức chính quy, tìm kiếm chứa chuỗi q
      var re = new RegExp(q, "i");  // Thêm flag 'i' để tìm kiếm không phân biệt chữ hoa/chữ thường

      // Tìm kiếm người dùng trong MongoDB với biểu thức chính quy
      let users = await User.find({ name: re });

      console.log(users);  // In kết quả ra console để kiểm tra

      res.render("user", { title: "User Management", users });  // Render trang user với dữ liệu
    } catch (error) {
      console.error("An error occurred while fetching users:", error);
      res.status(500).send("Internal Server Error");  // Nếu có lỗi, trả về lỗi 500
    }
  }
}

export default UserController;
