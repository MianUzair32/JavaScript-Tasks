
function showTime(){
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";
    let d = date.getDate();
    let mo = date.getMonth() ;
    let y = date.getFullYear();
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
//   if(h >= 12){
//     session = "PM";
//   }
//   else{
//     session = "AM";
//   }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
   
    // document.getElementById('date')=d.value;
    // let time = h + ":" + m + ":" + s + " " + session ;
    let time = `${h} ${':'} ${m} ${":"} ${s} ${':'} ${session } ${d} ${':'} ${mo} ${':'} ${y}`;
    // let getDate = d + ":" + mo + ":" + y;
    // document.getElementById('date').textContent=getDate; 
    document.getElementById("myClockDisplay").innerHTML = time;
    const timeColor = document.getElementById('myClockDisplay');
    timeColor.style.color='skyblue';
    document.getElementById("myClockDisplay").textContent = time;
    if (m % 2 === 0) {
        // document.body.style.backgroundColor = "red";
        timeColor.style.color='purple';
    } else {
        // document.body.style.backgroundColor = "green";
    }
    setTimeout(showTime, 1000);
}

showTime();
