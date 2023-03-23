const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');

if (!localStorage.getItem('popupShown')) {
    popup.style.display = 'flex';
}
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    localStorage.setItem('popupShown', true);
});