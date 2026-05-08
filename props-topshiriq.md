React Props — "Mahsulot Kartasi" Topshirig'i

---

Ushbu topshiriqda siz React'da **props** tushunchasini o'rganasiz:

- Komponentga tashqaridan ma'lumot qanday uzatiladi
- Bir xil komponent har xil ma'lumot bilan qayta ishlatilishi
- Props turlari: `string`, `number`, `boolean`
- Shartli render (`inStock` holatiga qarab)

---

Topshiriq

### Vazifa 1 — `ProductCard` komponentini yarating

`ProductCard` nomli komponent yarating. U quyidagi **props**larni qabul qilsin:

| Props nomi | Turi      | Tavsif                    |
| ---------- | --------- | ------------------------- |
| `name`     | `string`  | Mahsulot nomi             |
| `price`    | `number`  | Narxi (so'm)              |
| `image`    | `string`  | Rasm URL manzili          |
| `inStock`  | `boolean` | Omborda bormi yoki yo'qmi |

**Komponent ko'rinishi:**

```
┌──────────────────┐
│   [Mahsulot      │
│    rasmi]        │
│                  │
│  Nomi: ...       │
│  Narxi: ... so'm │
│                  │
│  [Mavjud] ✅     │  ← inStock: true bo'lsa
│  [Tugagan] ❌    │  ← inStock: false bo'lsa
└──────────────────┘
```

---

### Vazifa 2 — Komponentni 3 marta ishlating

`App.jsx` ichida `ProductCard` komponentini **3 xil mahsulot** uchun chaqiring:

```jsx
<ProductCard
  name="iPhone 15"
  price={12500000}
  image="https://via.placeholder.com/200"
  inStock={true}
/>

<ProductCard
  name="Samsung Galaxy S24"
  price={9800000}
  image="https://via.placeholder.com/200"
  inStock={false}
/>

<ProductCard
  name="Xiaomi 14"
  price={7600000}
  image="https://via.placeholder.com/200"
  inStock={true}
/>
```

---

### Vazifa 3 — Shartli render

`inStock` props qiymatiga qarab:

- `true` bo'lsa → yashil rangda **"✅ Mavjud"** yozuvi chiqsin
- `false` bo'lsa → qizil rangda **"❌ Tugagan"** yozuvi chiqsin

**Maslahat:** `&&` operator yoki ternary `? :` dan foydalaning.

---

## Fayl tuzilmasi

```
src/
├── components/
│   └── ProductCard.jsx   ← siz yaratasiz
├── App.jsx
└── main.jsx
```

---

- Props — bu komponentga yuborilgan **"parametr"**, tashqaridan keladi
- Komponent ichida `props.name`, `props.price` yoki destructuring bilan `{ name, price }` ko'rinishida olasiz
- **Komponent faylini o'zgartirmasdan**, faqat `App.jsx`da yangi `<ProductCard />` qo'shish orqali yangi mahsulot ko'rsatish mumkin — ana shu props'ning kuchi!

---

Quyidagilardan birini bajaring:

- `price` ni `Intl.NumberFormat` yordamida chiroyli formatda ko'rsating: `12 500 000 so'm`
- `category` props qo'shing va har xil kategoriyalar uchun har xil emoji ko'rsating (📱 Telefon, 💻 Noutbuk va h.k.)
- Default props qo'shing: agar `image` berilmasa, o'rniga placeholder ko'rsatsin

---
