// module.exports = (app) => {
//   app.get('/api', (req, res) => {
//     res.send({ hi: 'there' });
//   });
// };

const DriversController = require('../controllers/drivers_controller');

module.exports = (app) => {
  app.post('/api/drivers', DriversController.create);
  app.put('/api/drivers/:id', DriversController.edit);
  app.delete('/api/drivers/:id', DriversController.delete);
  app.get('/api/drivers', DriversController.index);
};
