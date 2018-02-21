import path from "path";
import url from "url";
import { app } from "electron";

import MainWindow from "./app/main_window";

let win = null;

app.on("ready", () => {
  win = new MainWindow(
    url.format({
      pathname: path.join(__dirname, "./index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  win.on("closed", () => {
    win = null;
  });
});
