/* hour rotation
    12hr - 360
  1hr - 360/12 = 30 (calculation of angle)

  minute rotation
  60min - 360
  1min - 360/60 = 6 (calculation of angle)

  second rotation
  60sec - 360
  1sec - 360/60 = 6 (calculation of angle)
*/

setInterval(() => {
    let d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();
    let hrotation = 30 * htime + mtime / 2;
    let mrotation = 6 * mtime;
    let srotation = 6 * stime;

    document.getElementById('hour').style.transform = `rotate(${hrotation}deg)`;
    document.getElementById('minute').style.transform = `rotate(${mrotation}deg)`;
    document.getElementById('second').style.transform = `rotate(${srotation}deg)`;
}, 1000);
