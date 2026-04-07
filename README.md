

# CATATAN


---

## Tabel HTTP Status Code

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
