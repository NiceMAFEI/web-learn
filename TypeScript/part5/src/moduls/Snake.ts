/**
 * π
 */
class Snake {
  // πε€΄ηεη΄ 
  head: HTMLElement;
  // πθΊ«
  bodies: HTMLCollection;
  //   π
  element: HTMLElement;
  private _isLive: boolean = true;
  constructor() {
    //   θ·επε€΄
    this.head = document.querySelector("#snake>div") as HTMLElement;
    // θ·επθΊ«δ½
    this.bodies = document.getElementById("snake")!.getElementsByTagName("div");
    // θ·επ
    this.element = document.getElementById("snake")!;
  }

  // θ·επε€΄εζ 
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }
  /**
   * θ·επζ―ε¦θΏζ΄»η
   */
  get isLive(): boolean {
    return this._isLive;
  }
  /**
   * ε»Ίη«πηεζ οΌ εΉΆδΈε€ζ­ζ―ε¦η»ζζΈΈζ
   */
  set X(value: number) {
    if (this.X === value) return;
    if (value < 0 || value > 290) {
      throw new Error("ε°πζ­»ε»δΊ");
    }
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
        if(value > this.X) { // εε³θ΅°
          value = this.X - 10; // ει
        }else { // εε·¦θ΅°
          value = this.X + 10; // ει
        }
    } 
      this.moveBody();
      this.head.style.left = value + "px";
      this.checkHeadBody()
    
  }
  set Y(value: number) {
    if (this.Y === value) return;
    if (value < 0 || value > 290) {
      throw new Error("ε°πζ­»ε»δΊ");
    }else if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      if(value > this.Y) { // εδΈθ΅°
        value = this.Y - 10
      } else {
        value = this.Y + 10
      }
      
    }
      this.moveBody();
      this.head.style.top = value + "px";
      this.checkHeadBody()
    
  }
  set isLive(boolean: boolean) {
    this._isLive = boolean;
  }
  //   ζ·»ε θΊ«δ½
  addBody() {
    // ε°divζ·»ε ε°elementηζε
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }
  // πθΊ«δ½η§»ε¨
  moveBody() {
    // ιεθ·εζζηθΊ«δ½
    for (let i = this.bodies.length - 1; i > 0; i--) {
      // θ·εεθΎΉθΊ«δ½ηδ½η½?
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      // θ?Ύη½?
      (this.bodies[i] as HTMLElement).style.left = X + "px";
      (this.bodies[i] as HTMLElement).style.top = Y + "px";
    }
  }
  /**
   * ζ£ζ₯πε€΄ζ―ε¦ζε°θΊ«δ½ηζΉζ³
   */
  checkHeadBody() {
    // θ·εζζηθΊ«δ½οΌζ£ζ₯εΆζ―ε¦εθε€΄ηεζ εηιε 
    for(let i = 1; i < this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLElement
      if(this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        throw new Error('δ½ εδΊδ½ θͺε·±οΌ')
      }
    }
  }
}

export default Snake;