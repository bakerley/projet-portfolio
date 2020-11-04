const sHand = document.querySelector('.s')
const mHand = document.querySelector('.m')
const hHand = document.querySelector('.h')

let setDate = () => {
  const now = new Date()

  const s = now.getSeconds()
  const m = now.getMinutes()
  const h = now.getHours()

  var degreeSecond = (s * 6);
  var degreeMinute = (m * 6 + s * 0.1);
  var degreeHour = (h * 30 + m * 0.5);
  
  sHand.style.setProperty('--d', degreeSecond + 90)
  mHand.style.setProperty('--d', degreeMinute + 90)
  hHand.style.setProperty('--d', degreeHour + 90)
  
  numeric.innerHTML = formatTime(h) + ":" + formatTime(m) + ":" + formatTime(s);
  
  setTimeout(setDate, 1000)
}

function formatTime(time) {
  return time < 10 ? (`0${time}`) : time;
}

setDate()