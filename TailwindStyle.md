# 🎯 Mapping TAILWIND

| Tailwind | CSS                         |
| -------- | --------------------------- |
| `sm:`    | `@media (min-width:640px)`  |
| `md:`    | `@media (min-width:768px)`  |
| `lg:`    | `@media (min-width:1024px)` |
| `xl:`    | `@media (min-width:1280px)` |
| `2xl:`   | `@media (min-width:1536px)` |

---

# 🚀 PENJELASAN

---

# ✅ `sm:`

```txt id="m7"
640px ke atas
```

Alias:

```css id="m8"
@media (min-width: 640px)
```

Biasanya:
👉 HP besar / tablet kecil.

---

# Contoh:

```jsx id="m9"
text-sm sm:text-lg
```

Artinya:

| Screen       | Ukuran |
| ------------ | ------ |
| mobile kecil | kecil  |
| ≥ 640px      | besar  |

---

# ✅ `md:`

```txt id="m10"
768px ke atas
```

Alias:

```css id="m11"
@media (min-width: 768px)
```

Biasanya:
👉 tablet.

---

# Contoh:

```jsx id="m12"
flex-col md:flex-row
```

mobile:

```txt id="m13"
vertical
```

tablet+:

```txt id="m14"
horizontal
```

---

# ✅ `lg:`

```txt id="m15"
1024px ke atas
```

Alias:

```css id="m16"
@media (min-width: 1024px)
```

Biasanya:
👉 laptop.

---

# Contoh:

```jsx id="m17"
hidden lg:block
```

Artinya:

* mobile = hilang
* laptop = muncul

---

# ✅ `xl:`

```txt id="m18"
1280px ke atas
```

Biasanya:
👉 desktop besar.

---

# Contoh:

```jsx id="m19"
px-4 xl:px-20
```

desktop gede:
👉 padding lebih lebar.

---

# ✅ `2xl:`

```txt id="m20"
1536px ke atas
```

Biasanya:
👉 monitor ultrawide / monitor gede.

---

Berikut cheat sheet satuan Tailwind CSS yang paling sering dipakai 😭🔥

# 🚀 SPACING SCALE TAILWIND → PIXEL

| Tailwind | Pixel |
| -------- | ----- |
| `0`      | 0px   |
| `0.5`    | 2px   |
| `1`      | 4px   |
| `1.5`    | 6px   |
| `2`      | 8px   |
| `2.5`    | 10px  |
| `3`      | 12px  |
| `3.5`    | 14px  |
| `4`      | 16px  |
| `5`      | 20px  |
| `6`      | 24px  |
| `7`      | 28px  |
| `8`      | 32px  |
| `9`      | 36px  |
| `10`     | 40px  |
| `11`     | 44px  |
| `12`     | 48px  |
| `14`     | 56px  |
| `16`     | 64px  |
| `20`     | 80px  |
| `24`     | 96px  |
| `28`     | 112px |
| `32`     | 128px |
| `36`     | 144px |
| `40`     | 160px |
| `44`     | 176px |
| `48`     | 192px |
| `52`     | 208px |
| `56`     | 224px |
| `60`     | 240px |
| `64`     | 256px |
| `72`     | 288px |
| `80`     | 320px |
| `96`     | 384px |

---

# 🚀 Bisa dipakai untuk:

| Property       | Contoh  |
| -------------- | ------- |
| padding        | `p-4`   |
| margin         | `m-4`   |
| gap            | `gap-4` |
| width          | `w-4`   |
| height         | `h-4`   |
| top/right/left | `top-4` |

---

# 🎯 Contoh nyata

```jsx id="m1"
<div className="
p-6
gap-4
rounded-xl
">
```

Artinya:

| Class        | Hasil |
| ------------ | ----- |
| `p-6`        | 24px  |
| `gap-4`      | 16px  |
| `rounded-xl` | 12px  |

---

# 🚀 FONT SIZE SCALE

| Tailwind    | Pixel |
| ----------- | ----- |
| `text-xs`   | 12px  |
| `text-sm`   | 14px  |
| `text-base` | 16px  |
| `text-lg`   | 18px  |
| `text-xl`   | 20px  |
| `text-2xl`  | 24px  |
| `text-3xl`  | 30px  |
| `text-4xl`  | 36px  |
| `text-5xl`  | 48px  |
| `text-6xl`  | 60px  |
| `text-7xl`  | 72px  |
| `text-8xl`  | 96px  |
| `text-9xl`  | 128px |

---

# 🚀 BORDER RADIUS SCALE

| Tailwind       | Pixel       |
| -------------- | ----------- |
| `rounded-sm`   | 2px         |
| `rounded`      | 4px         |
| `rounded-md`   | 6px         |
| `rounded-lg`   | 8px         |
| `rounded-xl`   | 12px        |
| `rounded-2xl`  | 16px        |
| `rounded-3xl`  | 24px        |
| `rounded-full` | bulat penuh |

---

# 🚀 LINE HEIGHT (`leading-`)

| Tailwind     | Pixel |
| ------------ | ----- |
| `leading-3`  | 12px  |
| `leading-4`  | 16px  |
| `leading-5`  | 20px  |
| `leading-6`  | 24px  |
| `leading-7`  | 28px  |
| `leading-8`  | 32px  |
| `leading-9`  | 36px  |
| `leading-10` | 40px  |

---

# 🚀 BREAKPOINT RESPONSIVE

| Prefix | Ukuran   |
| ------ | -------- |
| `sm:`  | ≥ 640px  |
| `md:`  | ≥ 768px  |
| `lg:`  | ≥ 1024px |
| `xl:`  | ≥ 1280px |
| `2xl:` | ≥ 1536px |

---

# 🎯 Contoh responsive

```jsx id="m2"
text-base lg:text-4xl
```

| Screen  | Size |
| ------- | ---- |
| mobile  | 16px |
| desktop | 36px |

---

# 🚀 Yang paling sering dipakai professional

## Spacing:

```txt id="m3"
4
6
8
10
12
16
20
24
```

---

## Radius:

```txt id="m4"
rounded-lg
rounded-xl
rounded-2xl
```

---

## Font:

```txt id="m5"
text-sm
text-base
text-lg
text-xl
text-2xl
```
