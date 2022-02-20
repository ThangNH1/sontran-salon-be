import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine"
import initWebRouters from "./route/web"
import connectDB from "./config/connectDB"
require("dotenv").config()

let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app)
initWebRouters(app)

connectDB()

let port = process.env.PORT || 1234

app.listen(port, () => {
    console.log("Server is running at http://localhost:" + port);
})

// _
//                         ooOoo
//                        o8888888o
//                        88" . "88
//                        (| 😑 |)
//                        O\  =  /O
//                     ___/`---'\___
//                   .'  \\|     |//  `.
//                  /  \\|||  :  |||//  \
//                 /  ||||| -:- |||||  \
//                 |   | \\\  -  /'| |   |
//                 | \_|  `\`---'//  |_/ |
//                 \  .-\__ `-. -'__/-.  /
//               ___. .'  /--.--\  . .'___
//            ."" '<  `.___\_<|>_/___.' _> \"".
//           | | :  - \. ;`. _/; .'/ /  .' ; |
//           \  \ -.   \_\_. _.'_/_/  -' _.' /
// ===========`-.`___`-.__\ \___  /__.-'.'.-'================
//                         `=--=-'