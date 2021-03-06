const express = require('express')
const passport = require('passport')

const handle = require('../../lib/error_handler')
const router = express.Router()

const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404

const Product = require('../models/product')
const requireOwnership = customErrors.requireOwnership
const requireToken = passport.authenticate('bearer', { session: false })

// Create action
// POST/products
router.post('/products', requireToken, (req, res) => {
  req.body.product.owner = req.user.id
  Product.create(req.body.product)
    .then(product => {
      res.status(201).json({ product: product.toObject() })
    })
    .catch(err => handle(err, res))
})

// INDEX
// GET /products
router.get('/products', requireToken, (req, res) => {
  Product.find()
    .then(products => {
      const productsOwner = products.filter(product => {
        if (JSON.stringify(product.owner) === JSON.stringify(req.user._id)) {
          return true
        }
      })

      // `products` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return productsOwner.map(product => product.toObject())
    })
    // respond with status 200 and JSON of the products
    .then(products => res.status(200).json({ products: products }))
    // if an error occurs, pass it to the handler
    .catch(err => handle(err, res))
})

// Show
// Get/products/4s
router.get('/products/:id', requireToken, (req, res) => {
  Product.findById(req.params.id)
    .then(handle404)
    .then(product => res.status(200).json({product: product.toObject()}))
    .catch(err => handle(err, res))
})

// Update
// PATCH/products/:id
router.patch('/products/:id', requireToken, (req, res) => {
  delete req.body.product.owner
  let id

  Product.findById(req.params.id)
    .then(handle404)
    .then(product => {
      requireOwnership(req, product)

      Object.keys(req.body.product).forEach(key => {
        if (req.body.product[key] === '') {
          delete req.body.product[key]
        }
      })
      id = req.params.id

      return product.update(req.body.product)
    })
    .then(() => Product.findById(id))
    // send the product back as JSON
    .then(product => res.status(200).json({ product: product.toObject() }))
    .catch(err => handle(err, res))
})

// Delete
// DESTROY/products/:id
router.delete('/products/:id', requireToken, (req, res) => {
  Product.findById(req.params.id)
    .then(handle404)
    .then(product => {
      requireOwnership(req, product)
      product.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(err => handle(err, res))
})

module.exports = router
