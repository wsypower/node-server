import express from 'express'
import user from './user'
import profile from './profile'

const router = express.Router()

// 用户相关的
router.use('/user', user)

// 个人信息相关的
router.use('/profile', profile)

export default router
