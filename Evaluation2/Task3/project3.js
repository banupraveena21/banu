const video = document.getElementById("eduVideo");
const progressBar = document.getElementById("progressBar");
const currentTimeDisplay = document.getElementById("currentTime");
const durationDisplay = document.getElementById("duration");

// Format time in MM:SS
function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
}

// Update progress bar and time
video.addEventListener("timeupdate", () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.value = percent;
  currentTimeDisplay.textContent = formatTime(video.currentTime);
});

// Show video duration
video.addEventListener("loadedmetadata", () => {
  durationDisplay.textContent = formatTime(video.duration);
});

// Controls
function playVideo() {
  video.play();
}

function pauseVideo() {
  video.pause();
}

function rewindVideo() {
  video.currentTime = Math.max(video.currentTime - 10, 0);
}

function fastForwardVideo() {
  video.currentTime = Math.min(video.currentTime + 10, video.duration);
}

// Toggle subtitles
function toggleSubtitles() {
  const tracks = video.textTracks;
  if (tracks.length > 0) {
    const track = tracks[0];
    track.mode = track.mode === "showing" ? "hidden" : "showing";
  }
}