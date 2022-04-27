import db from "../models/index"
import CRUDService from "../services/CRUDService"

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll()
        console.log(data);
        return res.render("homepage.ejs", {
            data: JSON.stringify(data)
        })
    } catch (error) {
        console.log(error);
    }

}
let getCRUD = (req, res) => {
    return res.render("crud.ejs")
}

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body)
    console.log(message);
    // console.log(req.body);
    // return res.send("done")
}

let displayCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser()
    return res.render('display-crud.ejs', {
        dataTable: data
    })
}

let editCRUD = async (req, res) => {
    let userID = req.query.id;
    let userData = CRUDService.getUserInfoById(userID)
    return res.send('hichic')
}

module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayCRUD: displayCRUD,
    editCRUD: editCRUD
}