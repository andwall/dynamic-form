const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({
  v_number:    String,
  status:      String,
  report_type: String,
  impact_case: Boolean
});

const caseModel = mongoose.model("cases", caseSchema);
module.exports = caseModel;