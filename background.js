let color = "blue"
chrome.runtime.onInstalled.addListener(() => {
  console.log(`"color= " + ${color}`)
  chrome.storage.sync.set({ color })
})