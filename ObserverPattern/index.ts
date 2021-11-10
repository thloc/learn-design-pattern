import VideoData from "./VideoData";

import EmailNotifier from "./dp/EmailNotifier";
import PhoneNotifier from "./dp/PhoneNotifier";
import YoutubeNotifier from "./dp/YoutubeNotifier";
import FacebookNotifier from "./dp/FacebookNotifier";

function main(): void {
  var videoData = new VideoData();

  new EmailNotifier(videoData);
  new PhoneNotifier(videoData);
  var youtubeNotifier = new YoutubeNotifier(videoData);

  videoData.setTitle("Observer Design Pattern");
  videoData.DetachObserver(youtubeNotifier);

  console.log("-------------------------------");
  videoData.setDesc("This is a new video");

  new FacebookNotifier(videoData);
  console.log("-------------------------------");
  videoData.setFileName("A very good tutorial");

  console.log();
}

main();