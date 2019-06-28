export const home = (req, res) => res.render("home",{pageTitle:"main page"});
export const search = (req, res) => res.send("Search",{pageTitle:"search page"});
export const join = (req, res) => res.send("Join",{pageTitle:"join page"});
export const login = (req, res) => res.send("Login",{pageTitle:"login page"});
export const logout = (req, res) => res.send("Logout",{pageTitle:"logout page"});