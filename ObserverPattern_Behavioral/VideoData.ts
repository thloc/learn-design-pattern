import Subject from "./core/Subject";

export default class VideoData extends Subject {
  private _title: string;
  private _description: string;
  private _fileName: string;

  public getTitle(): string {
    return this._title;
  }

  public setTitle(title: string): void {
    this._title = title;
    this.videoDataChanged();
  }

  public getDesc(): string {
    return this._description;
  }

  public setDesc(value: string): void {
    this._description = value;
    this.videoDataChanged();
  }

  public getFileName(): string {
    return this._fileName;
  }

  public setFileName(value: string): void {
    this._fileName = value;
    this.videoDataChanged();
  }

  private videoDataChanged(): void {
    this.NotifyObservers(null);
  }
}