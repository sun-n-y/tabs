const btns = document.querySelectorAll('.tab-btn');
const tabsContent = document.querySelectorAll('.tab-content');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const value = e.currentTarget.dataset.id;

    tabsContent.forEach((tab) => {
      if (tab.classList.contains(value)) {
        tab.classList.add('active-tab');
      } else {
        tab.classList.remove('active-tab');
      }
    });

    btn.classList.add('active-btn');
    btns.forEach((item) => {
      if (item != btn) {
        item.classList.remove('active-btn');
      }
    });
  });
});
