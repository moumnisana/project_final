const router =require('express').Router();
const appointmentController =require('../controllers/appointment.Controller');

router.post('/postappointment',appointmentController.createAppointment);
router.get('/oneappointment/:id',appointmentController.getappointment)
router.get('/Allappointment',appointmentController.getAllAppointment)
router.put('/updateappointment/:id',appointmentController.updatAppointment);
router.delete('/deleteappointment/:id',appointmentController. deleteAppointment)
module.exports=router;
