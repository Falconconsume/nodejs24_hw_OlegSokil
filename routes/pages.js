const pageRouter = require('express').Router();
const userService = require('../services/user_services')

pageRouter.get('/', (_req,res) => {
  const userList = userService.getAllUserList()
  res.render('index', { userList })
})

module.exports = {
  pageRouter
}