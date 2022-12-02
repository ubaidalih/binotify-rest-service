# Binotify REST Service
# Deskripsi
Binotify REST Service merupakan web service yang bersifat REST. Web Service ini berguna untuk menyediakan data untuk binotify-app dan binotify-premium-app. Service ini diimplementasikan menggunakan Node.js dengan framework express. Service akan menerima dan mengirim response melalui HTTP protocol.

# Skema Basis Data
![image.png](./screenshot/image.png)

# Requirement
* Node.js (Express)

# Cara Menjalankan Server
1. Clone repository
2. Jalankan `npm install` pada folder utama, untuk install dependencies
3. Masuk ke folder src dengan `cd src`, lalu run service dengan `node index.js`
4. Service berjalan pada http://localhost:3000 dan dapat digunakan

# Endpoint
1. Endpoint List Penyanyi (http://localhost:3000/api/listpenyanyi/)
* Method : GET
* Payload : -
* Response : user_id, name
2. Endpoint Detail Penyanyi (http://localhost:3000/api/listpenyanyi/id?user_id={user_id})
* Method : GET
* Payload : user_id
* Response : name
3. Endpoint Login (http://localhost:3000/api/user/login)
* Method : POST
* Payload : email, password, JWT_TOKEN (header)
* Response : message
4. Endpoint Register (http://localhost:3000/api/user/register)
* Method : POST
* Payload : username, name, email, password, JWT_TOKEN (header)
* Response : message
5. Endpoint List Subscription (http://localhost:3000/api/subscription/)
* Method : GET
* Payload : API_KEY
* Response : creator_id, subscriber_id, status
6. Endpoint Approve Subscription (http://localhost:3000/api/subscription/approval)
* Method : POST
* Payload : creator_id, subscriber_id, API_KEY
* Response : message
7. Endpoint Reject Subscription (http://localhost:3000/api/subscription/reject)
* Method : POST
* Payload : creator_id, subscriber_id, API_KEY
* Response : message
8. Endpoint Create Lagu (http://localhost:3000/api/song/create)
* Method : POST
* Payload : judul, audio, JWT_TOKEN (header)
* Response : message
9. Enpoint List Lagu (http://localhost:3000/api/song/read)
* Method : POST
* Payload : creator_id, subscriber_id
* Response : song_id, judul, audio_path
10. Endpoint Detail Lagu (http://localhost:3000/api/song/songdetail?song_id={song_id})
* Method : GET
* Payload : song_id
* Response : judul, penyanyi_id, audio_path
11. Endpoint Edit Lagu (http://localhost:3000/api/song/update)
* Method : POST
* Payload : song_id, judul, audio_path, JWT_TOKEN (header)
* Response : message
12. Endpoint Delete Lagu (http://localhost:3000/api/song/delete)
* Method : POST
* Payload : song_id, JWT_TOKEN (header)
* Response : message


# Pembagian Tugas
1. Endpoint List Penyanyi :13520061
2. Endpoint Detail Penyanyi : 13520061
3. Endpoint Login : 13520061 & 13520085
4. Endpoint Register : 13520061 & 13520085
5. Endpoint List Subscription : 13520148
6. Endpoint Approve Subscription : 13520148
7. Endpoint Reject Subscription : 13520148
8. Endpoint Create Lagu : 13520085
9. Enpoint List Lagu : 13520085
10. Endpoint Detail Lagu : 13520085
11. Endpoint Edit Lagu : 13520085
12. Endpoint Delete Lagu  : 13520085

