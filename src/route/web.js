import express from "express";
import { displayCRUD, getHomePage, getCRUD, postCRUD, editCRUD } from "../controllers/homeController";

let router = express.Router()

let initWebRouters = (app) => {
    router.get("/", getHomePage)
    router.get("/crud", getCRUD)

    router.post("/post-crud", postCRUD)
    router.get("/get-crud", displayCRUD)
    router.get("/edit-crud", editCRUD)

    return app.use("/", router)
}
module.exports = initWebRouters