// Daily challenge : Creating Objects
class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time; // in seconds
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}

const video1 = new Video("JavaScript Classes", "Nathan", 600);
video1.watch();

const video2 = new Video("Learn Git in 10 minutes", "Sarah", 615);
video2.watch();

// Bonus: an array of objects is the best structure (each video's data has named keys)
const videosData = [
  { title: "Intro to Python", uploader: "Dan", time: 900 },
  { title: "CSS Grid", uploader: "Noa", time: 480 },
  { title: "Closures explained", uploader: "Max", time: 720 },
  { title: "Array methods", uploader: "Lea", time: 540 },
  { title: "Destructuring", uploader: "Tom", time: 300 },
];

// Bonus: loop through the array to instantiate the videos
const videos = videosData.map(({ title, uploader, time }) => new Video(title, uploader, time));
videos.forEach(video => video.watch());
