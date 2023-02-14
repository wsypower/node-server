import express from 'express'

const router = express.Router()

// 获取用户资料
router.get('/:username', async (req, res, next) => {
  try {
    res.send('get /:username')
  }
  catch (error) {
    next(error)
  }
})

// 关注用户
router.post('/:username/follow', async (req, res, next) => {
  try {
    res.send('post /:username/follow')
  }
  catch (error) {
    next(error)
  }
})

// 取消关注
router.delete('/:username/follow', async (req, res, next) => {
  try {
    res.send('delete /:username/follow')
  }
  catch (error) {
    next(error)
  }
})

export default router
