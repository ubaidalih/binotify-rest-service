const { login, register, checkRegister } = require("../services/user");

const crypto = require('crypto')
const algorithm = "aes-256-cbc"
const encrypt = text => {
    const cipher = crypto.createCipheriv(algorithm, process.env.PASSWORD_SECRET_TOKEN, process.env.PASSWORD_SECRET_IV);
    let encryptedData = cipher.update(text, "utf-8", "hex");
    encryptedData += cipher.final("hex");
    return encryptedData;
  }
  
  const decrypt = hash => {
    const decipher = crypto.createDecipheriv(algorithm, process.env.PASSWORD_SECRET_TOKEN, process.env.PASSWORD_SECRET_IV);
    let decryptedData = decipher.update(hash, "hex", "utf-8");
    decryptedData += decipher.final("utf8");
    return decryptedData;
  }

const router = require("express").Router();

router.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const account = await login(email);
    if (account.length == 0) {
        return res.json({message: "Email not found"});
    }
    else{
        if (decrypt(account[0].password) == password) {
            return res.json({message: "Login success", id: account[0].user_id, name: account[0].name, isAdmin: account[0].isAdmin});
        }
        else{
            return res.json({message: "Wrong password"});
        }
    }
});

router.post("/register", async (req, res) => {
    const email = req.body.email;
    const password = encrypt(req.body.password);
    console.log(password);
    const username = req.body.username;
    const name = req.body.name;

    const exist = await checkRegister(email, username);
    if (exist){
        return res.json({message: "Email or username already exist"});
    }
    else{
        const account = await register(email, password, username, name);
        return res.json({message: "Register success", id: account[0].user_id, name: account[0].name, isAdmin: account[0].isAdmin});
    }
});

module.exports = router;