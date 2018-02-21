import { BrowserWindow } from "electron";

class MainWindow extends BrowserWindow {
  constructor(url) {
    super();
    this.loadURL(url);
    this.show();
  }
}

export default MainWindow;
