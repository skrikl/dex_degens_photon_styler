// Check if we're on the desired page
if (window.location.href.toLowerCase().includes("photon-sol.tinyastro.io/en/discover")) {
    // Function to apply styles
    function applyCustomStyles() {
        // Style table rows without pump/raydium elements
          const allRows = document.querySelectorAll('a.c-grid-table__tr.c-trades-table__tr');
          
          allRows.forEach(row => {
              // Check if the row contains a pump/raydium element
              const hasPump = row.querySelector('.c-pump--md');
              const hasRaydium = row.querySelector('.c-icon--raydium');
              
              if (!hasPump && !hasRaydium) {
                  Object.assign(row.style, {
                      opacity: '0.3',
                      boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.1)',
                      background: 'rgba(0, 0, 0, 0.02)'
                  });
              } else {
                  // Reset styles for rows with pump/raydium
                  Object.assign(row.style, {
                      opacity: '1',
                      boxShadow: 'none',
                      background: 'none'
                  });
              }
          });
    }
  
    // Run initially
    applyCustomStyles();
  
    // Create an observer to handle dynamically loaded elements
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                applyCustomStyles();
            }
        });
    });
  
    // Start observing the document with the configured parameters
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
  }