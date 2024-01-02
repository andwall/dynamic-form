const router = require('express').Router();
let Case = require('../models/case.model');

//get all cases
router.route('/').get((req, res) => {
  Case.find()
    .then(cases => {
      res.send(cases);
      // console.log(cases)
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/search').get((req, res) => {
  const caseSearch = req.body;
  console.log(caseSearch);
})

module.exports = router;