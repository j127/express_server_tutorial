const express = require("express");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));

// This is the optional logging middleware mentioned at the bottom of
// the tutorial.
function loggingMiddleware(request, response, next) {
    console.log(`received a ${request.method} request to ${request.url}`);
    next();
}

// This mounts the middleware on the app.
app.use(loggingMiddleware);

function homePage(request, response) {
    // This data object could come from a database or anywhere you want.
    const pageData = {
        title: "Home Page",
        body: "content coming soon",
    };
    response.render("page.hbs", pageData);
}

function aboutPage(request, response) {
    const pageData = {
        title: "About Page",
        body: "lorem ipsum",
    };
    response.render("page.hbs", pageData);
}

// mount the pages at the desired paths
app.get("/", homePage);
app.get("/about", aboutPage);

// Bonus: if you want to send JSON to the browser, just use `res.json()`
function apiRoute(request, response) {
    response.json({ message: "here is some JSON" });
}

// Don't forget to mount the JSON route.
app.get("/api", apiRoute);

app.listen(3333, () =>
    console.log("server is running at http://localhost:3333/")
);
