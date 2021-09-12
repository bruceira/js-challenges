const newYear = "1 jan 2022"

const daysElement = document.getElementById("days")
const hoursElement = document.getElementById("hours")
const minElement = document.getElementById("mins")
const secElement = document.getElementById("seconds")


function countDown() {
  const newYearsDate = new Date(newYear)
  const currentDate = new Date()

  const totalSecond = (newYearsDate - currentDate) / 1000
  const days = Math.floor(totalSecond / 3600 / 24)
  const hours = Math.floor(totalSecond / 3600) % 24
  const mins = Math.floor(totalSecond / 60) % 60
  const seconds = Math.floor(totalSecond) % 60

  daysElement.innerHTML = formatTime(days)
  hoursElement.innerHTML = formatTime(hours)
  minElement.innerHTML = formatTime(mins)
  secElement.innerHTML = formatTime(seconds)
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time
}

setInterval(countDown, 1000)
countDown()

