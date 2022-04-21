import express from 'express'
import logger from 'morgan'
import path from 'path'
import {fileURLToPath} from 'url'
import * as fs from 'fs'


const app = express()

export default app

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/src'));
app.use(express.json());


app.post('/data', function(request, response){
  const dataSet = JSON.stringify(request.body);
  fs.writeFileSync('./src/public/inc/dataSet.json', dataSet, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
  });
});

app.post('/time', function(request, response){
    const time = JSON.stringify(request.body);
    fs.writeFileSync('./src/public/inc/time.dat', time, (err) => {
      if (err) {
          throw err;
      }
    });
    console.log(typeof time)
  });

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/present", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/attendance.html"));
});
  
app.use(logger("tiny"))