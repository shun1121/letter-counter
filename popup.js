let addColor = document.getElementById('title')
console.log(addColor)
document.getElementById('btn').addEventListener("click", () => {
  chrome.storage.sync.get("color", ({ color }) => {
    addColor.style.color = color
  })
  let time = new Date().toTimeString()
  document.getElementById('timearea').innerHTML = time
})
