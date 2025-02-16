// Get the checkbox element
const checkbox = document.getElementById('toggleExtension');

// Load the current state
chrome.storage.sync.get('enabled', function(data) {
    checkbox.checked = data.enabled ?? true;
});

// Listen for changes
checkbox.addEventListener('change', function() {
    chrome.storage.sync.set({ enabled: checkbox.checked });
});