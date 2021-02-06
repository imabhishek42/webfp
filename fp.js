var _gV = void 0,
  _gW = window,
  _gN = navigator,
  _gD = document,
  s = "";

function pF(e) {
  return parseFloat(e);
}
function pI(e) {
  return parseInt(e);
}
var _fpR = function (e) {
  return isNaN(e) && "number" == typeof e ? _gV : e;
};
var _fpT = function (f, v) {
  var vl = v ? f : !!f;
  try {
    return vl;
  } catch (e) {
    return !!0;
  }
};

var _fpDM = function () {
  return _fpR(pI(_gN.deviceMemory));
};
var _fpHC = function () {
  return _fpR(pI(_gN.hardwareConcurrency));
};
var _fpCD = function () {
  return _fpR(pI(_gW.screen.colorDepth));
};
var _fpSR = function () {
  return _fpR([pI(_gW.screen.width), pI(_gW.screen.height)]).toString();
};
var _fpASR = function () {
  return _fpR([pI(_gW.screen.availWidth), pI(_gW.screen.height)]).toString();
};

var _fpLS = function () {
  return _fpT(_gW.localStorage, false);
};
var _fpID = function () {
  return _fpT(_gW.indexedDB, false);
};
var _fpCC = function () {
  return _fpT(_gN.cpuClass, true);
};
var _fpPl = function () {
  return _fpT(_gN.platform, true);
};
var _fpPls = function () {
  return _fpT(_gN.plugins, false);
};
var _fpPRs = function () {
  return _fpT(_gN.productSub, true);
};
var _fpEVL = function () {
  return _fpT(eval.toString().length, true);
};
var _fpVn = function () {
  return _fpT(_gN.vendor, true);
};
var _fpCr = function () {
  return _fpT(_gW.chrome, false);
};
var _fpCoo = function () {
  try {
    _gD.cookie = "a=1; b=c;";
    var e = -1 !== _gD.cookie.indexOf("a=");
    return (V.cookie = "a=1; b=c; expires=Thu, 01-Jan-1970 00:00:01 GMT"), e;
  } catch (t) {
    return !1;
  }
};
var G = function (e) {
  switch (e) {
    case "dm":
      return _fpDM();
      break;
    case "hc":
      return _fpHC();
      break;
    case "cd":
      return _fpCD();
      break;
    case "fpSR":
      return _fpSR();
      break;
    case "fpASR":
      return _fpASR();
      break;
    case "fpLS":
      return _fpLS();
      break;
    case "fpID":
      return _fpID();
      break;
    case "fpCC":
      return _fpCC();
      break;
    case "fpPl":
      return _fpPl();
      break;
    case "fpPls":
      return _fpPls();
      break;
    case "fpPRs":
      return _fpPRs();
      break;
    case "fpEVL":
      return _fpEVL();
      break;
    case "fpVn":
      return _fpVn();
      break;
    case "fpCr":
      return _fpCr();
      break;
    case "fpCoo":
      return _fpCoo();
      break;
    default:
      text = "";
  }
};
var fp = [
  "dm",
  "hc",
  "cd",
  "fpSR",
  "fpASR",
  "fpLS",
  "fpID",
  "fpCC",
  "fpPl",
  "fpPls",
  "fpPRs",
  "fpEVL",
  "fpVn",
  "fpCr",
  "fpCoo",
];
for (var i = 0; i < fp.length; i++) {
  s = s + G(fp[i]) + "|";
  console.log(fp[i] + " : " + G(fp[i]));
}

console.log(s);
//console.log(navigator.productSub);
