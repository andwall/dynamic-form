const router = require('express').Router();
let CaseModel = require('../models/case.model');

//get all cases
router.route('/').get((req, res) => {
  CaseModel.find()
    .then(cases => {
      res.send(cases);
      // console.log(cases)
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/search').post((req, res) => {
  const { vNumber, status, reportType, impactCase } = req.body;

  const answer = CaseModel.findOne({v_number: vNumber})
  .then((result) =>{
    if(result === null) res.send({});
    else res.send(result);
  })
  .catch((err) => res.status(400).json('Error: ' + err)); 
})

module.exports = router;