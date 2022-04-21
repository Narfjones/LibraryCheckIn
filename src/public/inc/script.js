import data from './dataSet.json' assert {type: 'json'};

var btnLogin = document.getElementById('checkIn');
var current = new Date();

async function sendRequest(data){
  var xhr = new XMLHttpRequest();
  xhr.open('POST','http://localhost:4000/data')
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(data));
}

async function sendTime(){
  var time = String(current.toLocaleString());
  
  var xhr = new XMLHttpRequest();
  xhr.open('POST','http://localhost:4000/time')
  xhr.setRequestHeader("Content-Type", "text/html");
  xhr.send(JSON.stringify(time));
}

btnLogin.onclick = function(){
  var sId = parseInt(studentid.value)
  for (var i=0; i<data.data.length; i++){
    if (data.data[i].id == sId && data.data[i].checked_in == 'FALSE'){
      data.data[i].checked_in = 'TRUE';
      console.log(data.data[i].first_name + data.data[i].last_name + " has checked in.");
    }
    else if (data.data[i].id == sId && data.data[i].checked_in == 'TRUE'){
      data.data[i].checked_in = 'FALSE';
      console.log(data.data[i].first_name + data.data[i].last_name + " has checked out.")
    }
  }
  sendRequest(data);
  sendTime();
  message.innerHTML = '<p>You\'ve now checked into the Library, </p><h1>' + 
                      studentid.value + 
                      '</h1><p>Please make sure to check out when you leave.';
}
