var _gV = void 0,
  _gW = window,
  _gN = navigator,
  _gD = document,
  s = "";

function p(e) {
  return e.reduce(function (e, t) {
    return e + (t ? 1 : 0);
  }, 0);
}
function R() {
  return (
    p([
      "webkitPersistentStorage" in _gN,
      "webkitTemporaryStorage" in _gN,
      0 === _gN.vendor.indexOf("Google"),
      "webkitResolveLocalFileSystemURL" in _gW,
      "BatteryManager" in _gW,
      "webkitMediaStream" in _gW,
      "webkitSpeechGrammar" in _gW,
    ]) >= 5
  );
}
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
var _fpTZO = function () {
  var e = new Date().getFullYear();
  return Math.max(
    pF(new Date(e, 0, 1).getTimezoneOffset()),
    pF(new Date(e, 6, 1).getTimezoneOffset())
  );
};
var _fpTZ = function () {
  var e;
  if (null === (e = _gW.Intl) || void 0 === e ? void 0 : e.DateTimeFormat)
    return new _gW.Intl.DateTimeFormat().resolvedOptions().timeZone;
};
var _fplanguages = function () {
  var e = [],
    t =
      _gN.language ||
      _gN.userLanguage ||
      _gN.browserLanguage ||
      _gN.systemLanguage;
  if ((void 0 !== t && e.push([t]), Array.isArray(_gN.languages)))
    (R() &&
      p([
        !("MediaSettingsRange" in _gW),
        "RTCEncodedAudioFrame" in _gW,
        "" + _gW.Intl == "[object Intl]",
        "" + _gW.Reflect == "[object Reflect]",
      ]) >= 3) ||
      e.push(_gN.languages);
  else if ("string" == typeof _gN.languages) {
    var n = _gN.languages;
    n && e.push(n.split(","));
  }
  return e;
};
var _fpcanvas = function () {
  var e = (function () {
      var e = document.createElement("canvas");
      return (
        (e.width = 240),
        (e.height = 140),
        (e.style.display = "inline"),
        [e, e.getContext("2d")]
      );
    })(),
    t = e[0],
    n = e[1];
  if (
    !(function (e, t) {
      return !(!t || !e.toDataURL);
    })(t, n)
  )
    return {
      winding: !1,
      data: "",
    };
  n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6);
  var r = !n.isPointInPath(5, 5, "evenodd");
  (n.textBaseline = "alphabetic"),
    (n.fillStyle = "#f60"),
    n.fillRect(125, 1, 62, 20),
    (n.fillStyle = "#069"),
    (n.font = "11pt no-real-font-123");
  var i = "Cwm fjordbank 😃 gly";
  return (
    n.fillText(i, 2, 15),
    (n.fillStyle = "rgba(102, 204, 0, 0.2)"),
    (n.font = "18pt Arial"),
    n.fillText(i, 4, 45),
    (n.globalCompositeOperation = "multiply"),
    (n.fillStyle = "rgb(255,0,255)"),
    n.beginPath(),
    n.arc(50, 50, 50, 0, 2 * Math.PI, !0),
    n.closePath(),
    n.fill(),
    (n.fillStyle = "rgb(0,255,255)"),
    n.beginPath(),
    n.arc(100, 50, 50, 0, 2 * Math.PI, !0),
    n.closePath(),
    n.fill(),
    (n.fillStyle = "rgb(255,255,0)"),
    n.beginPath(),
    n.arc(75, 100, 50, 0, 2 * Math.PI, !0),
    n.closePath(),
    n.fill(),
    (n.fillStyle = "rgb(255,0,255)"),
    n.arc(75, 75, 75, 0, 2 * Math.PI, !0),
    n.arc(75, 75, 25, 0, 2 * Math.PI, !0),
    n.fill("evenodd"),
    t.toDataURL()
    /*{
      //winding: r,
      data: t.toDataURL(),
    }*/
  );
};

var _fpTSP = function () {
  var e,
    t = 0;
  void 0 !== _gN.maxTouchPoints
    ? (t = pI(_gN.maxTouchPoints))
    : void 0 !== _gN.msMaxTouchPoints && (t = _gN.msMaxTouchPoints);
  try {
    document.createEvent("TouchEvent"), (e = !0);
  } catch (n) {
    e = !1;
  }
  res = {
    maxTouchPoints: t,
    touchEvent: e,
    touchStart: "ontouchstart" in _gW,
  };
  return JSON.stringify(res);
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
    case "fpTZO":
      return _fpTZO();
      break;
    case "fpTZ":
      return _fpTZ();
      break;
    case "fplanguages":
      return _fplanguages();
      break;
    case "cpcanvas":
      return _fpcanvas();
      break;
    case "fpTSP":
      return _fpTSP();
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
  "fpTZO",
  "fpTZ",
  "cpcanvas",
  "fplanguages",
  "fpTSP",
];
for (var i = 0; i < fp.length; i++) {
  s = s + G(fp[i]) + "|";
}

console.log(s);
