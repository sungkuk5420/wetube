import routes from  "./routes";

export const localsMiddleware = (req,res,next) => {
    res.locals.siteName = "weTube";
    res.locals.routes = routes;
    next();
}