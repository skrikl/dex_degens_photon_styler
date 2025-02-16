// Set initial state when extension is installed
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ enabled: true });
  });