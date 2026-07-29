// Azure App Service (unlike Static Web Apps) needs a running process to serve files —
// this is that process. Plain express.static over the `out/` directory produced by
// `next build` (output: "export"). extensions lets "/features" resolve to
// "features.html" if a route is ever added without a trailing index.html.
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

app.use(
  express.static(path.join(__dirname, "out"), {
    extensions: ["html"],
  })
);

app.listen(port, () => {
  console.log(`HearthGym site listening on port ${port}`);
});
