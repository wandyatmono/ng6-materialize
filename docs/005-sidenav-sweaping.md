# Sidenav Sweaping

Membersihkan file-file yang tidak diperlukan. Termasuk `.spec.ts`.

Menghilangkan `node_modules/` dari `.gitignore` agar tidak terjadi misversions dan bertambahnya lubang vulnerabilities.

```bash
$ git add .
$ git commit -m "Debugging and Sweaping Unnecessary Files"
$ git push -u origin master
```