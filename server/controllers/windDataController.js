
const WindData = require('../models/winddata');


exports.createWindData = async (req, res) => {
  const { awning_id, speed } = req.body;

  try {
    const newWindData = await WindData.create({

      awning_id,
      speed,
      
    });

    res.json(newWindData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getWindData = async (req, res) => {
  try {
    const windData = await WindData.findAll({ where: { awning_id: req.params.awning_id } });
    res.json(windData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getLastWindData = async (req, res) => {
    const awning_id = req.params.awning_id;
    const query = 'SELECT * FROM `WindData` WHERE awnind_id = $1 ';
    

    try {
      const windData = (await WindData.findAll({ where: { awning_id: req.params.awning_id } })).sort((a,b) => b.createdAt - a.createdAt);
      res.json(windData[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };

  exports.getLastFiveWindData = async (req, res) => {
    const awning_id = req.params.awning_id;
    const query = 'SELECT * FROM `WindData` WHERE awnind_id = $1 ';
    

    try {
      const windData = (await WindData.findAll({ where: { awning_id: req.params.awning_id } })).sort((a,b) => b.createdAt - a.createdAt);
      res.json([windData[0], windData[1], windData[2], windData[3], windData[4]]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };