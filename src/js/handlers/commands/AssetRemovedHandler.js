class AssetRemovedHandler {
  static get ID() {
    return 30862;
  }

  constructor() {
    this._handler = function (e, a) {
      let parsedCmd = JSON.parse(e.detail);
      console.log(parsedCmd);
      if (parsedCmd.hash == a.targetBoxHash) {
        a.resetTarget("box");
      }

      if (a.boxes.hasOwnProperty(parsedCmd.hash)) {
        delete a.boxes[parsedCmd.hash];
      }
    }
  }

  get handler() {
    return this._handler;
  }
}