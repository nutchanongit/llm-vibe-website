document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const products = [
    {
      id: 'paracetamol-500',
      name: 'พาราเซตามอล 500 มก. (แผง 10 เม็ด)',
      desc: 'ยาบรรเทาปวด ลดไข้ ยาสามัญประจำบ้าน อ่านฉลากก่อนใช้',
      price: 25,
      unit: 'แผง',
      tags: ['ปวดหัว', 'ลดไข้', 'OTC']
    },
    {
      id: 'ors',
      name: 'ผงเกลือแร่ ORS (ซอง 3 ซอง/แพ็ค)',
      desc: 'สำหรับทดแทนเกลือแร่ในร่างกาย กรณีท้องเสียหรือเสียเหงื่อมาก',
      price: 30,
      unit: 'แพ็ค',
      tags: ['ท้องเสีย', 'เกลือแร่']
    },
    {
      id: 'povidone-iodine-10',
      name: 'โพวิโดน-ไอโอดีน 10% (60 มล.)',
      desc: 'น้ำยาทำความสะอาดบาดแผลใช้ภายนอกเท่านั้น',
      price: 45,
      unit: 'ขวด',
      tags: ['แผล', 'ทำความสะอาด']
    },
    {
      id: 'alcohol-70',
      name: 'แอลกอฮอล์ 70% (100 มล.)',
      desc: 'ใช้เช็ดทำความสะอาดภายนอก หลีกเลี่ยงเปลวไฟ',
      price: 35,
      unit: 'ขวด',
      tags: ['ทำความสะอาด']
    },
    {
      id: 'plaster',
      name: 'พลาสเตอร์ปิดแผล (10 ชิ้น)',
      desc: 'สำหรับปิดบาดแผลขนาดเล็ก เปลี่ยนเมื่อเปียกชื้นหรือสกปรก',
      price: 20,
      unit: 'กล่อง',
      tags: ['แผล', 'อุปกรณ์']
    },
    {
      id: 'herbal-inhaler',
      name: 'ยาดมสมุนไพร (1 ชิ้น)',
      desc: 'กลิ่นหอมสดชื่น ใช้ภายนอกเท่านั้น',
      price: 25,
      unit: 'ชิ้น',
      tags: ['สดชื่น', 'OTC']
    }
  ];

  const grid = document.getElementById('productsGrid');
  const search = document.getElementById('searchInput');

  function render(list) {
    if (!grid) return;
    grid.innerHTML = '';
    list.forEach(p => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <h3>${p.name}</h3>
        <p class="desc">${p.desc}</p>
        <div>${(p.tags||[]).slice(0,3).map(t=>`<span class="pill">${t}</span>`).join('')}</div>
        <div class="actions">
          <span class="price">฿${p.price}</span> / ${p.unit}
          &nbsp;&nbsp;
          <a class="btn primary" href="../pages/contact.html" aria-label="สั่งซื้อ ${p.name}">สอบถาม-สั่งซื้อ</a>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function filter(text) {
    const q = (text || '').toLowerCase().trim();
    if (!q) return products;
    return products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      (p.desc||'').toLowerCase().includes(q) ||
      (p.tags||[]).some(t => String(t).toLowerCase().includes(q))
    );
  }

  render(products);
  if (search) {
    search.addEventListener('input', (e) => {
      render(filter(e.target.value));
    });
  }
});

/*
วิธีแก้ไขสินค้า:
- เปิดไฟล์ assets/script.js แล้วแก้ไขอาเรย์ products ด้านบน
- แต่ละรายการมี: id, name, desc, price, unit, tags
- ปรับราคา/ชื่อ/คำอธิบายได้ตามต้องการ และเพิ่ม/ลบรายการได้
*/

