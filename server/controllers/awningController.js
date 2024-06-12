// controllers/awningController.js
const Awning = require('../models/awning');
const mqtt = require('mqtt')

const host = 'public.mqtthq.com'
const port = '1883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`

const connectUrl = `mqtt://${host}:${port}`

const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: 'emqx',
  password: 'public',
  reconnectPeriod: 1000,
})

const topic = 'open/123456567328/Wind Sensor MQTT';

client.on('connect', () => {
    console.log('Connected')
  
    client.subscribe([topic], () => {
      console.log(`Subscribe to topic '${topic}'`) }) } );


exports.createAwning = async (req, res) => {
  const { name, location, is_folded } = req.body;

  try {
    const newAwning = await Awning.create({
      owner: req.params.email,
      name,
      location,
      is_folded,
    });

    res.json(newAwning);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getAwnings = async (req, res) => {
  try {
    const awnings = await Awning.findAll({ where: { owner: req.params.email } });
    res.json(awnings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getAwningById = async (req, res) => {
  try {
    const awning = await Awning.findByPk(req.params.id);
    if (!awning) {
      return res.status(404).json({ msg: 'Awning not found' });
    }

    if (awning.owner !== req.params.email) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    res.json(awning);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateAwning = async (req, res) => {


  try {
    const awning = await Awning.findByPk(req.params.id);
    if (!awning) {
      return res.status(404).json({ msg: 'Awning not found' });
    }

    if (awning.owner !== req.params.email) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    var awning_folded_new;
    if(awning.is_folded==1) {
        awning_folded_new = 0;
    } else {
        awning_folded_new = 1;
    }

    awning.is_folded = awning_folded_new;

    await awning.save();

     
          if(awning_folded_new == 0) {
            client.publish(topic, '{"openAwn": "0"}', { qos: 0, retain: false }, (error) => {
                if (error) {
                  console.error(error)
                }
              })
          } else {
            client.publish(topic, '{"openAwn": "1"}', { qos: 0, retain: false }, (error) => {
                if (error) {
                  console.error(error)
                }
              })
          }
          
        

    res.json(awning);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteAwning = async (req, res) => {
  try {
    const awning = await Awning.findByPk(req.params.id);
    if (!awning) {
      return res.status(404).json({ msg: 'Awning not found' });
    }

    if (awning.owner !== req.params.email) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await awning.destroy();
    res.json({ msg: 'Awning removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};