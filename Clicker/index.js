money = 0;
moneyup = 1;
msec = 0;
upcost = 15;
smallhyenascost = 25;
bighyenascost = 250;
upown = 0;
smallhyenasown = 0;
bighyenasown = 0;
smallhyenasadd = 1;
bighyenasadd = 15;
cboost = 1;
wboost = 1;
smallhyenasmax = 0;
bighyenasmax = 0;

//save before exiting
function closingCode() {
  if (confirm("You have closed the window, would you like to save?") === true) {
    save();
    return null;
  }
}

function addcomma(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
//updates all values
function reloadall() {
  document.getElementById("click").innerHTML =
    "Hyenas/click: " + addcomma(moneyup) + " | Hyenas/sec: " + addcomma(msec);
  document.getElementById("total").innerHTML = "Hyenas: " + addcomma(money);
  document.getElementById("smallhyenas").innerHTML =
    smallhyenasown + "-Small Hyenas: " + addcomma(smallhyenascost) + " | +" + addcomma(smallhyenasadd) + "/sec";
  document.getElementById("bighyenas").innerHTML =
    bighyenasown + "-Big Hyenas: " + addcomma(bighyenascost) + " | +" + addcomma(bighyenasadd) + "/sec";
  document.getElementById("upgrade").innerHTML =
    addcomma(upown) + "-main upgrade: " + addcomma(upcost);
}
//overwrites save file
function save() {
  localStorage.setItem("money", money);
  localStorage.setItem("moneyup", moneyup);
  localStorage.setItem("msec", msec);
  localStorage.setItem("upcost", upcost);
  localStorage.setItem("smallhyenascost", smallhyenascost);
  localStorage.setItem("smallhyenasadd", smallhyenasadd);
  localStorage.setItem("bighyenascost", bighyenascost);
  localStorage.setItem("bighyenasadd", bighyenasadd);
  localStorage.setItem("smallhyenasown", smallhyenasown);
  localStorage.setItem("bighyenasown", bighyenasown);
  localStorage.setItem("upown", upown);
  localStorage.setItem("smallhyenasadd", smallhyenasadd);
  localStorage.setItem("bighyenasadd", bighyenasadd);
  localStorage.setItem("cboost", cboost);
  localStorage.setItem("wboost", wboost);
  localStorage.setItem("smallhyenasmax", smallhyenasmax);
  localStorage.setItem("bighyenasmax", bighyenasmax);
}
//loads save file
function load() {
  money = parseInt(localStorage.getItem("money"));
  moneyup = parseInt(localStorage.getItem("moneyup"));
  msec = parseInt(localStorage.getItem("msec"));
  upcost = parseInt(localStorage.getItem("upcost"));
  smallhyenascost = parseInt(localStorage.getItem("smallhyenascost"));
  upown = parseInt(localStorage.getItem("smallhyenasadd"));
  bighyenascost = parseInt(localStorage.getItem("bighyenascost"));
  upown = parseInt(localStorage.getItem("bighyenasadd"));
  smallhyenasown = parseInt(localStorage.getItem("smallhyenasown"));
  bighyenasown = parseInt(localStorage.getItem("bighyenasown"));
  upown = parseInt(localStorage.getItem("upown"));
  smallhyenasadd = parseInt(localStorage.getItem("smallhyenasadd"));
  bighyenasadd = parseInt(localStorage.getItem("bighyenasadd"));
  cboost = parseInt(localStorage.getItem("cboost"));
  wboost = parseInt(localStorage.getItem("wboost"));
  smallhyenasmax = parseInt(localStorage.getItem("smallhyenasmax"));
  bighyenasmax = parseInt(localStorage.getItem("bighyenasmax"));

  reloadall();
}
//resets all values
function reset() {
  if (confirm("Are you sure you want to reset?") === true) {
    money = 0;
    moneyup = 1;
    msec = 0;
    upcost = 15;
    smallhyenascost = 25;
    bighyenascost = 250;
    smallhyenasown = 0;
    bighyenasown = 0;
    upown = 0;
    smallhyenasadd = 1;
    bighyenasadd = 15;
    reloadall();
  }
}
//timer
function myTimer() {
    money += msec;
  document.getElementById("total").innerHTML = "Hyenas: " + addcomma(money);
}
setInterval(myTimer, 1000);

//what happens when button is clicked
function clicked() {
  money += moneyup;
  document.getElementById("total").innerHTML = "Hyenas: " + addcomma(money);
}
//upgrade function
function upgrade(name) {
  if (name == "Small Hyenas") {
    if (money >= smallhyenascost && smallhyenasown < 50) {
      
      if (smallhyenasown <= 13) {
        msec += smallhyenasadd;
        smallhyenasadd++;
        cboost = 1;
      } else if (smallhyenasown == 14) {
        msec += smallhyenasadd;
        smallhyenasadd++;
        cboost = 200;
      } else if (smallhyenasown <= 23) {
        msec += 200 * smallhyenasadd;
        smallhyenasadd++;
        cboost = 200;
      } else if (smallhyenasown == 24) {
        msec += 200 * smallhyenasadd;
        smallhyenasadd++;
        cboost = 5000;
      } else if (smallhyenasown <= 48) {
        msec += 5000 * smallhyenasadd;
        smallhyenasadd++;
        cboost = 5000;
      } else if (smallhyenasown == 49) {
        msec += 5000 * smallhyenasadd;
        smallhyenasadd++;
        cboost = 15000;
      } else {
        msec += 15000 * smallhyenasadd;
        smallhyenasadd++;
        cboost = 15000;
      }
      smallhyenasown += 1;
      money -= smallhyenascost;
      smallhyenascost = smallhyenascost * 2;
      document.getElementById("smallhyenas").innerHTML =
        smallhyenasown + "-Small Hyenas: " + addcomma(smallhyenascost) + " | +" + addcomma(smallhyenasadd * cboost) + "/sec";
    } else if (smallhyenasown == 50) {
      document.getElementById("smallhyenas").innerHTML =
        smallhyenasown + "-Small Hyenas: MAX | +15% click/sec";
    }
  }

  if (name == "Big Hyenas") {
    if (money >= bighyenascost && bighyenasown < 50) {
      
      if (bighyenasown <= 13) {
        msec += bighyenasadd;
        bighyenasadd++;
        wboost = 1;
      } else if (bighyenasown == 14) {
        msec += bighyenasadd;
        bighyenasadd++;
        wboost = 200;
      } else if (bighyenasown <= 23) {
        msec += 200 * bighyenasadd;
        bighyenasadd++;
        wboost = 200;
      } else if (bighyenasown == 24) {
        msec += 200 * bighyenasadd;
        bighyenasadd++;
        wboost = 5000;
      } else if (bighyenasown <= 48) {
        msec += 5000 * bighyenasadd;
        bighyenasadd++;
        wboost = 5000;
      } else if (bighyenasown == 49) {
        msec += 5000 * bighyenasadd;
        bighyenasadd++;
        wboost = 15000;
      } else {
        msec += 15000 * bighyenasadd;
        bighyenasadd++;
        wboost = 15000;
      }
      bighyenasown += 1;
      money -= bighyenascost;
      bighyenascost = bighyenascost * 3;
      document.getElementById("bighyenas").innerHTML = 
        bighyenasown + "-Big Hyenas: " + addcomma(bighyenascost) + " | +" + addcomma(bighyenasadd * wboost) + "/sec";
    } else if (bighyenasown == 50) {
      document.getElementById("bighyenas").innerHTML =
        bighyenasown + "-Big Hyenas: MAX | +35% click/sec";
    }
  }

  if (name == "upgrade") {
    if (money >= upcost) {
      moneyup += upcost / 15;
      money -= upcost;
      upown += 1;
      upcost = upcost * 5;
      document.getElementById("upgrade").innerHTML =
        addcomma(upown) + "-main upgrade: " + addcomma(upcost);
      if (smallhyenasown == 50) {
        msec -= smallhyenasmax;
        smallhyenasmax = Math.floor(moneyup * 0.15);
        msec += smallhyenasmax;
      }
      if (bighyenasown == 50) {
        msec -= bighyenasmax;
        bighyenasmax = Math.floor(moneyup * 0.35);
        msec += bighyenasmax;
      }
    }
  }

  document.getElementById("click").innerHTML =
    "Hyenas/click: " + addcomma(moneyup) + " | Hyenas/sec: " + addcomma(msec);
  document.getElementById("total").innerHTML = "Hyenas: " + addcomma(money);
}
