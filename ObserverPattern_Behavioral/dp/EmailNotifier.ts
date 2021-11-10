import Observer from "../core/Observer";
import Subject from "../core/Subject";
import VideoData from "../VideoData";

export default class EmailNotifier extends Observer  {
  constructor(subject: Subject) {
    super();
    this.subject = subject;
    this.subject.AttachObserver(this);
  }

  Notify(arg: object): void {
    if (this.subject instanceof VideoData) {
      console.log(`Notify all subscribers via EMAIL with new data"
        \n\tName: ${this.subject.getTitle()}
        \n\tDescription: ${this.subject.getDesc()}
        \n\tFile name: ${this.subject.getFileName()}`);
    }
  }
}
