
const menuToggle = document.getElementById('menuToggle');
const navigation = document.getElementById('navigation');

menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('active'); // Toggles 'active' class for display
});