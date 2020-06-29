const routes = require('express').Router()
const multer = require('multer')
const multConfig = require('./config/multer')

const Post = require('./models/Post')

routes.post('/posts', multer(multConfig).single('file'), async(req, res) => {

    const { originalname: name, size, filename: key } = req.file

    const post = await Post.create({
        name,
        size,
        key,
        url: '',
    })

    return res.json(post)
})

module.exports = routes