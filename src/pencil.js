import FabricCanvasTool from "./fabrictool";

class Pencil extends FabricCanvasTool {
  configureCanvas(props) {
    console.log("pencil-configure");
    this._canvas.isDrawingMode = true;
    this._canvas.freeDrawingBrush.width = props.lineWidth;
    this._canvas.freeDrawingBrush.color = props.lineColor;
  }
}

export default Pencil;
