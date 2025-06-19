document.addEventListener("DOMContentLoaded", function () {
  // Handle tab activation via URL hash (e.g. toys-games.html#v-pills-home)
  const hash = window.location.hash;
  if (hash) {
    activateTab(hash);
  }

  // Handle clicks on any tab navigation link (header, footer, dropdown, etc.)
  document.querySelectorAll('a[href^="#v-pills-"]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const tabId = el.getAttribute("href");
      activateTab(tabId);
    });
  });

  function activateTab(tabId) {
    const tabPane = document.querySelector(tabId);
    const tabButton = document.querySelector(`[data-bs-target="${tabId}"]`);

    // Remove current active/show from all tabs and panes
    document.querySelectorAll('.tab-pane').forEach(pane => {
      pane.classList.remove('active', 'show');
    });
    document.querySelectorAll('.nav-link').forEach(btn => {
      btn.classList.remove('active');
    });

    // Activate new tab
    if (tabPane) tabPane.classList.add('active', 'show');
    if (tabButton) tabButton.classList.add('active');

    // Optional: scroll to tab content
    tabPane?.scrollIntoView({ behavior: "smooth" });
  }
});