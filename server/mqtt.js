const mqtt = require('mqtt')
const Awning = require('./models/awning');
const WindData = require('./models/winddata');
const db = require('./config/db');

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
const topic2 = 'newdevice/1234567678'
const topic3 = 'app/123456789'

client.on('connect', () => {
  console.log('Connected')

  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`)
    
  })

  client.subscribe([topic2], () => {
    console.log(`Subscribe to topic '${topic2}'`)
    
  })

  client.subscribe([topic3], () => {
    console.log(`Subscribe to topic '${topic3}'`)
    client.publish(topic3, '{"deviceName": "Tenda 1", "windSpeed": "100"}', { qos: 0, retain: false }, (error) => {
        if (error) {
          console.error(error)
        }
      })
  
    
  })
})

client.on('message', async (topic, payload) => {
    if(topic == 'newdevice/1234567678') {
       console.log("Podaci: " + payload);
       console.log("email:" + payload.customer_email);
        const data = JSON.parse(payload);
        const owner = data.customer_email;
        const name = data.name;
        const location = "lokacija"
        const is_folded = 0;

        try {
            const newAwning = await Awning.create({
              owner,
              name,
              location,
              is_folded,
            });
        
            
          } catch (err) {
            console.error(err.message);
            
          }
    }

    if(topic == 'app/123456789') {
        console.log("Podaci: " + payload);
        const data = JSON.parse(payload);
        const awning_id2 = data.deviceName;
        const speed = data.windSpeed;
        

        try {
            
            const name1 = awning_id2;
            const  response  = await db.query(`SELECT * FROM "Awnings" WHERE name=$1`, [name1]);
              
            const awning_id = response.result.rows[0].id;
            const newWindData = await WindData.create({
              awning_id,
              speed
            });
        
            
          } catch (err) {
            console.error(err.message);
            
          }
          if(speed > 12 || data.percipitation >= 2.5) {
            
            
            try {
                const name1 = awning_id2;
              const response = await db.query(`SELECT * FROM "Awnings" WHERE name=$1`, [name1]);
              console.log(name1);
              let id = response.result.rows[0].id;
              const awning = await Awning.findByPk(id);
              awning.is_folded = 1;
          
              await awning.save();
          
             
            } catch (err) {
              console.error(err.message);
              
            }
         }  
          
    }
  
})


