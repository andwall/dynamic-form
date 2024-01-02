/* Responsible for handling http requests */
const router = require('express').Router();
let CaseModel = require('../models/case.model');

/* Gets all cases */
router.route('/').get((req, res) => {
  CaseModel.find()
    .then(cases => {
      res.send(cases);
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

/* Gets specific cases */
router.route('/search').post((req, res) => {
  const { vNumber, status, reportType, impactCase } = req.body;

  CaseModel.findOne({v_number: vNumber})
  .then((result) =>{
    console.log(result)
    if(result === null) res.status(404).send('Sorry could not find any cases');
    else res.send(result);
  })
  .catch((err) => res.status(400).json('Error: ' + err)); 
})

module.exports = router;