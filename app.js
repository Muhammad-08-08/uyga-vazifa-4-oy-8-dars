const savollarQutisi = document.getElementById('savollar-qutisi');
const hammasiniKengaytirBtn = document.getElementById('hammasini-kengaytir');
const hammasiniYopBtn = document.getElementById('hammasini-yop');
const joylashuvniTopBtn = document.getElementById('joylashuvni-top');
const korinadiganSoniSpan = document.getElementById('korinadigan-soni');
const joylashuvMalumoti = document.getElementById('joylashuv-malumoti');

const korinadiganSoniniYangila = () => {
  const korinadiganJavoblar = document.querySelectorAll('.javob.korinadi').length;
  korinadiganSoniSpan.textContent = `Ko'rinadigan javoblar soni: ${korinadiganJavoblar}`;
};

savollarQutisi.addEventListener('click', (e) => {
  if (e.target.classList.contains('savol')) {
    const javob = e.target.nextElementSibling;
    const otaElement = e.target.parentElement;

    javob.classList.toggle('korinadi');
    otaElement.classList.toggle('faol'); 
    korinadiganSoniniYangila();
  }
});

savollarQutisi.addEventListener('click', (e) => {
  if (e.target.classList.contains('sevimli-btn')) {
    e.stopPropagation();
    alert('Sevimli sifatida belgilandi!');
  }
});

hammasiniKengaytirBtn.addEventListener('click', () => {
  document.querySelectorAll('.javob').forEach(javob => {
    javob.classList.add('korinadi');
    javob.parentElement.classList.add('faol');
  });
  korinadiganSoniniYangila();
});

hammasiniYopBtn.addEventListener('click', () => {
  document.querySelectorAll('.javob').forEach(javob => {
    javob.classList.remove('korinadi');
    javob.parentElement.classList.remove('faol');
  });
  korinadiganSoniniYangila();
});

joylashuvniTopBtn.addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (holat) => {
        const { latitude, longitude } = holat.coords; 
        joylashuvMalumoti.textContent = `Kenglik: ${latitude.toFixed(6)}, Uzunlik: ${longitude.toFixed(6)}`;
      },
      () => {
        joylashuvMalumoti.textContent = 'Joylashuvni aniqlab bo‘lmadi.';
      }
    );
  } else {
    joylashuvMalumoti.textContent = 'Brauzeringiz joylashuvni aniqlashni qo‘llab-quvvatlamaydi.';
  }
});

korinadiganSoniniYangila();
