const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const keys = []
document.onkeydown = (e) => {
  keys.push(e.keyCode)
  if (JSON.stringify(keys) === JSON.stringify(konami)) {
    document.body.style.backgroundImage = 'url("images/him.png")'
    document.body.innerHTML = ""
    console.log("he is approaching")
  }
}
