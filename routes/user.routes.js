const router =require('express').Router();
const authController =require('../controllers/auth.controller');
const userController =require('../controllers/user.Controller')
//auth
router.post('/register',authController.signUp);
router.post('/login',authController.signIn);
router.get('/logout',authController.logOut);
//user display :block
router.get('/one/:id',userController.getone)
router.get('/allpatients',userController.getAllpatients);
router.get('/alldoctors',userController.getAlldoctors);
router.put('/update/:id',userController.updateUser);
router.delete('/delete/:id',userController.deleteUser)

module.exports=router;