interface Size {
  width: number;
  height: number;
}
interface Rect {
  readonly id: string;
  color?: string;
  size: Size;
}
const rect1: Rect = {
  id: "1234",
  size: {
    width: 233,
    height: 54,
  },
  color: "#ffff",
};
const rect2: Rect = {
  id: "1237",
  size: {
    width: 54,
    height: 7,
  },
};
rect2.color = "black";

const rect3 = {} as Rect;
const rect4 = <Rect>{};
rect3.color = "white";

///=====

interface RectWithArea extends Rect {
  getArea: () => number;
}
const rect5: RectWithArea = {
  id: "12fd7",
  size: {
    width: 5,
    height: 75,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};
///========
interface IClock {
  time: Date;
  setTime(date: Date): void;
}
class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}
// ======
interface Styles {
  [key: string]: string;
}
const css: Styles = {
  border: "1px solid black",
  marginTop: "2px",
  borderRadius: "5px",
};
