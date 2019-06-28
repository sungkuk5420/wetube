export const home = (req, res) => res.render("home",{pageTitle:"main page"});
export const search = (req, res) => {
  const {query: {term:searchingBy} } = req;
  res.render("search",{pageTitle:"search page",searchingBy});
};
export const join = (req, res) => res.render("join",{pageTitle:"join page"});
export const login = (req, res) => res.render("login",{pageTitle:"login page"});
export const logout = (req, res) => res.render("logout",{pageTitle:"logout page"});