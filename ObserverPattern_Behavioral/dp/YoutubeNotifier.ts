import Observer from "../core/Observer";
import Subject from "../core/Subject";
import VideoData from "../VideoData";

export default class YoutubeNotifier extends Observer  {
  constructor(subject: Subject) {
    super();
    this.subject = subject;
    this.subject.AttachObserver(this);
  }

  Notify(arg: object): void {
    if (this.subject instanceof VideoData) {
      console.log("Notify all subscribers via YOUTUBE with new data" +
        "\n\tName: {0}" +
        "\n\tDescription: {1}" +
        "\n\tFile name: {2}", this.subject.getTitle(), this.subject.getDesc(), this.subject.getFileName());
    }
  }
}
