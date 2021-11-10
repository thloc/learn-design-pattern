
export default class Singleton {
  private static instance: Singleton;
  private index: number;

  private constructor(index: number) { 
    this.index = index;
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
        Singleton.instance = new Singleton(Math.random() * 10);
    }

    return Singleton.instance;
  }

  public saysHi(): void {
      console.log("Hello everyone, I am number " + this.index);
  }
}
