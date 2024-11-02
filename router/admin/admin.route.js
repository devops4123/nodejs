const express = require('express');
const {
  signup,
  login,
  getAllAdmins,
  getAdminById,
  updateAdmin
} = require('../../controller/admin/admin.controller.js');
const authMiddleware = require('../../middleware/auth.js');

const router = express.Router();

router.post('/signup', signup);               
router.post('/login', login);                 
router.get('/', authMiddleware, getAllAdmins); 
router.get('/:id', authMiddleware, getAdminById); 
router.put('/:id', authMiddleware, updateAdmin); 
module.exports = router;
