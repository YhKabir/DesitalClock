function desitalClock(){
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");
  const amPm = document.getElementById("amPm");
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  if(h < 10){
    h = "0" + h
  }
  if(m < 10){
    m = "0" + m
  }
  if(s < 10){
    s = "0" + s
  }
  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
}
setInterval(desitalClock,1000);
desitalClock();