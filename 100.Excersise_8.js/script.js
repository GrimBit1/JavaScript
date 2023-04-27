const audio = new Audio('./audio.mp3')
function play() {
    audio.play()
}
function stop() {
    audio.pause()
}
function reload() {
    audio.load()
}