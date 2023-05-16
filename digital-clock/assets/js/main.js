setInterval(() => {
  let hh = document.getElementById("hh"),
    mm = document.getElementById("mm"),
    ss = document.getElementById("ss");

  let sec_dot = document.querySelector(".sec_dot"),
    min_dot = document.querySelector(".min_dot"),
    hr_dot = document.querySelector(".hr_dot");

  let sc = document.getElementById("sc"),
    mn = document.getElementById("mn"),
    hr = document.getElementById("hr");

  let h = new Date().getHours(),
    m = new Date().getMinutes(),
    s = new Date().getSeconds();

  hh.style.strokeDashoffset = 510 - (510 * h) / 12;
  mm.style.strokeDashoffset = 630 - (630 * m) / 60;
  ss.style.strokeDashoffset = 760 - (760 * s) / 60;

  sec_dot.style.transform = `rotateZ(${s * 6}deg)`;
  min_dot.style.transform = `rotateZ(${m * 6}deg)`;
  hr_dot.style.transform = `rotateZ(${h * 30}deg)`;

  sc.style.transform = `rotateZ(${s * 6}deg)`;
  mn.style.transform = `rotateZ(${m * 6}deg)`;
  hr.style.transform = `rotateZ(${h * 30}deg)`;
});
