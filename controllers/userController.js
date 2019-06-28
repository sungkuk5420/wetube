export const users = (req, res) => res.send("Users");
export const userDetail = (req, res) => res.send("User Detail");
export const editProfile = (req, res) => {
  console.log("start");
  res.render("editProfile");
};
export const changePassword = (req, res) => res.send("Change Password");