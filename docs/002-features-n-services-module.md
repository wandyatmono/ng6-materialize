# Features and Services Module

`ng6-seed` menyusun module-modulenya dalam directory bernama `features/` dan untuk semua services dijadikan satu di `services/`

```bash
$ ng generate module features
CREATE src/app/features/features.module.spec.ts (291 bytes)
CREATE src/app/features/features.module.ts (192 bytes)

$ mkdir src/app/services/
```

Untuk keperluan terkait dengan pemanfaatan `ngx-material`, `ng6-seed` menyediakan 'collection' module khusus untuk invoking anggota `ngx-material` yang akan digunakan di aplikasi.

```bash
$ ng generate module mz
```

