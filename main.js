document.addEventListener("DOMContentLoaded", function () {
    // Galeri resimlerinin başlıkları
    const imageTitles = [
        "Araç Filomuz",
        "Depolama Alanı",
        "Yükleme İşlemi"
    ];

    const images = Array.from(document.querySelectorAll('.gallery img'));
    if (images.length === 0) return;

    // Her resmi ve başlığı bir kapsayıcıya al
    images.forEach((img, i) => {
        // Kapsayıcı oluştur
        const wrapper = document.createElement('div');
        wrapper.className = 'gallery-item';
        wrapper.style.display = 'inline-block';
        wrapper.style.verticalAlign = 'top';

        // Başlık etiketi oluştur
        const caption = document.createElement('div');
        caption.className = 'gallery-caption';
        caption.textContent = imageTitles[i] || img.alt || '';

        // Resmi ve başlığı kapsayıcıya ekle
        img.parentNode.insertBefore(wrapper, img);
        wrapper.appendChild(img);
        wrapper.appendChild(caption);
    });

    // Kapsayıcıları seç
    const items = Array.from(document.querySelectorAll('.gallery-item'));
    let current = 0;

    // Başlangıçta sadece ilk kapsayıcıyı göster
    items.forEach((item, i) => {
        item.style.display = i === 0 ? 'inline-block' : 'none';
    });

    // Ok butonlarını oluştur
    const leftBtn = document.createElement('button');
    leftBtn.textContent = '◀';
    leftBtn.className = 'gallery-arrow';
    const rightBtn = document.createElement('button');
    rightBtn.textContent = '▶';
    rightBtn.className = 'gallery-arrow';

    const galleryDiv = document.querySelector('.gallery');
    galleryDiv.insertBefore(leftBtn, items[0]);
    galleryDiv.appendChild(rightBtn);

    function showItem(idx) {
        items.forEach((item, i) => {
            item.style.display = i === idx ? 'inline-block' : 'none';
        });
    }

    leftBtn.addEventListener('click', function () {
        current = (current - 1 + items.length) % items.length;
        showItem(current);
    });

    rightBtn.addEventListener('click', function () {
        current = (current + 1) % items.length;
        showItem(current);
    });
});
