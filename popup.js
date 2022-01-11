let addColor = document.getElementById('title')
console.log(addColor)
// btnにイベントリスナーを付与
document.getElementById('btn').addEventListener("click", () => {
  chrome.storage.sync.get("color", ({ color }) => {
    // background.jsでセットしたcolorをaddColorに適応
    addColor.style.color = color
  })
  let time = new Date().toTimeString()
  // timeareaにtimeを代入
  document.getElementById('timearea').innerHTML = time
})
