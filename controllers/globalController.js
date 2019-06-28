import { videos } from "../db";
import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // To Do: Register User
    // To Do: Log user in
    res.redirect(routes.home);
  }
};

export const home = (req, res) => res.render("home",{pageTitle:"main page", videos});
export const search = (req, res) => {
  const {query: {term:searchingBy} } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};
export const login = (req, res) => res.render("login",{pageTitle:"login page"});
export const logout = (req, res) => res.render("logout",{pageTitle:"logout page"});