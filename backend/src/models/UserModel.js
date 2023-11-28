const db = require("./db");

// 绑定DID到学号
const bindStudentId = async (DID, studentID) => {
  try {
    const [result] = await db.query(
      "UPDATE Users SET DID = ? WHERE StudentID = ?",
      [DID, studentID]
    );
    // console.log("result", result);
    // console.log("result.affectedRows", result.affectedRows > 0);
    return result.affectedRows > 0; // 绑定成功返回true，否则返回false
  } catch (error) {
    console.error("Error in UserModel.bindStudentId:", error);
    throw error;
  }
};

module.exports = {
  bindStudentId,
};
