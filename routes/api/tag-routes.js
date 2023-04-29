const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock']
    }
  })
  .then(dbTagData => res.json(dbTagData))
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
    Tag.findOne({
      where: {
        id: req.params.id
      },
      include: {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock']
      }
    })
    .then(dbTagData => res.json(dbTagData))
});

router.post('/', (req, res) => {
  // create a new tag
    Tag.create({
      tag_name: req.body.tag_name
    })
    .then(dbTagData => res.json(dbTagData))
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
    Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
    Tag.delete({
      where: {
        id: req.params.id
      }
    })
    .then(dbTagData => res.json(dbTagData))
});

module.exports = router;
