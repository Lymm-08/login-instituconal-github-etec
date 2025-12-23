// script.js

const toggleButton = document.getElementById('toggleSidebar');
const sidebarPanel = document.getElementById('sidebarPanel');

toggleButton.addEventListener('click', () => {
  sidebarPanel.classList.toggle('hidden');
});
