const express = require('express')
const router = express.Router()
const userAuthController = require('../App/controller/UserAuthController/userAuthController')
const authMiddleWare = require('../App/middlewares/AuthMiddleWare/AuthMiddleWare')
const categoriesController = require('../App/controller/CategoryController/categoriesController')
const expenseController = require('../App/controller/ExpenseController/expenseController')
const budgetController = require('../App/controller/BudgetController/budgetController')

router.post('/reegister',authMiddleWare.PreRegister,userAuthController.register)
router.post('/login',userAuthController.login)
router.get('/about',authMiddleWare.authenticate,userAuthController.show)

router.post('/expense',authMiddleWare.authenticate,expenseController.add)
router.get('/expense/all',authMiddleWare.authenticate,expenseController.list)
router.get('/expense/listOne/:id',authMiddleWare.authenticate,expenseController.show)
router.put('/expense/update',authMiddleWare.authenticate,expenseController.update)
router.delete('/expense/delete',authMiddleWare.authenticate,expenseController.delete)

router.post('/category/create',authMiddleWare.authenticate,categoriesController.create)
router.get('/category/show',authMiddleWare.authenticate,categoriesController.list)
router.get('/category/listOne/:id',authMiddleWare.authenticate,categoriesController.show)
router.put('/category/update/:id',authMiddleWare.authenticate,categoriesController.update)
router.delete('/category/delete/:id',authMiddleWare.authenticate,categoriesController.delete)

router.post('/budget/create',authMiddleWare.authenticate,budgetController.add)
router.get('/budget/list',authMiddleWare.authenticate,budgetController.list)
router.get('/budget/listOne/:id',authMiddleWare.authenticate,budgetController.show)
router.put('/budget/update/:id',authMiddleWare.authenticate,budgetController.update)
router.delete('/budget/delete/:id',authMiddleWare.authenticate,budgetController.delete)

module.exports = router