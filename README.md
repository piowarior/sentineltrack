<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
# sentineltrack
nyoba next js
>>>>>>> 37320973b1e6516170ded077422ed8da785ca05a


# CATATAN


---

## Tabel HTTP Status Code yang sering dipakai

| Status Code | Nama                   | Penyebab                                            |
| ----------- | ---------------------- | --------------------------------------------------- |
| 200         | OK                     | Request berhasil                                    |
| 201         | Created                | Data berhasil dibuat (POST)                         |
| 204         | No Content             | Berhasil tapi tidak ada data yang dikirim           |
| 301         | Moved Permanently      | URL sudah dipindahkan                               |
| 302         | Found / Redirect       | Dialihkan ke URL lain                               |
| 304         | Not Modified           | Data belum berubah (cache)                          |
| 400         | Bad Request            | Request salah / format data salah                   |
| 401         | Unauthorized           | Belum login / token salah                           |
| 403         | Forbidden              | Akses ditolak                                       |
| 404         | Not Found              | Endpoint atau data tidak ditemukan                  |
| 405         | Method Not Allowed     | Method tidak diizinkan (misal POST ke endpoint GET) |
| 408         | Request Timeout        | Request terlalu lama                                |
| 409         | Conflict               | Data konflik (misal email sudah ada)                |
| 413         | Payload Too Large      | Data yang dikirim terlalu besar                     |
| 415         | Unsupported Media Type | Format data tidak didukung                          |
| 422         | Unprocessable Entity   | Validasi gagal                                      |
| 429         | Too Many Requests      | Terlalu banyak request (rate limit)                 |
| 500         | Internal Server Error  | Error di server                                     |
| 502         | Bad Gateway            | Server perantara error                              |
| 503         | Service Unavailable    | Server sedang down / maintenance                    |
| 504         | Gateway Timeout        | Server terlalu lama merespon                        |

---

# Kelompok status code

Biasanya dibagi berdasarkan angka pertama.

| Range | Arti              |
| ----- | ----------------- |
| 1xx   | Informasi         |
| 2xx   | Berhasil          |
| 3xx   | Redirect          |
| 4xx   | Error dari client |
| 5xx   | Error dari server |

---

# Contoh nyata saat pakai API

### Berhasil ambil data

```
GET /users
200 OK
```

---

### Berhasil buat data

```
POST /users
201 Created
```

---

### Endpoint salah

```
GET /userzzz
404 Not Found
```

---

### Token salah

```
GET /profile
401 Unauthorized
```

---

### Server crash

```
500 Internal Server Error
```

---

# Catatan tentang error yang kamu tulis

Yang ini sebenarnya **bukan HTTP status code**:

```
ENOTFOUND
```

Itu **error dari DNS / network**, bukan dari server API.

Artinya domain tidak ditemukan.

---

✅ **Kesimpulan**

Error API biasanya berasal dari:

| Jenis         | Contoh             |
| ------------- | ------------------ |
| Network error | ENOTFOUND          |
| Client error  | 400, 401, 403, 404 |
| Server error  | 500, 503           |

---
