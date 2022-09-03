function init() {
  script.log("elm module loaded");
}

function moduleParameterChanged(param) {
}

function moduleValueChanged(value) {
}

function changeIntensity(stage, intensity) {
  local.send("/elm/stages/" + stage + "/live/intensity", intensity);
}

function changeSpeed(stage, speed) {
  local.send("/elm/stages/" + stage + "/live/speed", speed);
}

function changeColor(stage, color) {
  local.send("/elm/stages/" + stage + "/live/rgb", color[0], color[1], color[2]);
}

function changeMedia(stage, media) {
  local.send("/elm/stages/" + stage + "/live/media", media);
}