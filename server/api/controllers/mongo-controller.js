import HealthForm from '../models/HealthForm';

module.exports = {
  create(req, res, next) {
    const healthFormProps = req.body;

    HealthForm.create(healthFormProps)
      .then(healthForm => res.send(healthForm))
      .then(() => {
        console.log('mongodb HealthForm created');
      })
      .catch(next);
  },

  edit(req, res, next) {
    const healthFormId = req.params.id;
    const healthFormProps = req.body;

    HealthForm.findByIdAndUpdate({ _id: healthFormId }, healthFormProps)
      .then(() => HealthForm.findById({ _id: healthFormId }))
      .then(healthForm => res.send(healthForm))
      .catch(next);
  },

  delete(req, res, next) {
    const healthFormId = req.params.id;

    HealthForm.findByIdAndRemove({ _id: healthFormId })
      .then(healthForm => res.status(204).send(healthForm))
      .catch(next);
  },

  getHealthForms(req, res, next) {
    HealthForm.find({})
      .then(healthForms => res.send(healthForms))
      .catch(next);
  },

  getHealthForm(req, res, next) {
    const healthFormId = req.params.id;
    HealthForm.findOne({ _id: healthFormId })
      .then(healthForm => res.send(healthForm))
      .catch(next);
  },
};
