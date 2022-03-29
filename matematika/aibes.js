/* ----------Mygtukai----------*/
document.getElementById("menuBtn").hidden = true;
document.getElementById("potemeNelygybesBtn").hidden = true;
document.getElementById("potemeAibesBtn").hidden = true;
document.getElementById("potemeRealusBtn").hidden = true;

/* ----------Temos----------*/

document.getElementById("nelygybes").hidden = true;
document.getElementById("aibes").hidden = true;
document.getElementById("realus").hidden = true;

/* ----------Potemes----------*/

document.getElementById("aibiuTipai").hidden = true;
document.getElementById("iracionalumoIrodymas").hidden = true;
document.getElementById("kelimasLaipsniu").hidden = true;
document.getElementById("kelimasLaipsniuSK").hidden = true;
document.getElementById("trupmenosVertimas").hidden = true;
document.getElementById("sakniesTraukimasBlokas").hidden = true;
document.getElementById("sakniesTraukimasTrupmenojeBlokas").hidden = true;
document.getElementById("nelygybesSuModuliu").hidden = true;

/* ----------Paveiksleliai----------*/

document.getElementById("aibiuRatasImg").hidden = true;
document.getElementById("aibesImg").hidden = true;

/* ----------Nelygybes----------*/

function nelygybes() {
  showOrHide(["hideMenu", "name"], true);
  showOrHide(["menuBtn", "nelygybes"], false);
}

function nelygybesPotemeTrupmena() {
  showOrHide(["nelygybes"], true);
  showOrHide(["potemeNelygybesBtn"], false);
}

function nelygybesPotemeKvadratas() {
  showOrHide(["nelygybes"], true);
  showOrHide(["potemeNelygybesBtn"], false);
}

function nelygybesPotemeModulis() {
  showOrHide(["nelygybes"], true);
  showOrHide(["potemeNelygybesBtn", "nelygybesSuModuliu"], false);
}

function nelygybesPotemeSistema() {
  showOrHide(["nelygybes"], true);
  showOrHide(["potemeNelygybesBtn"], false);
}

function griztiINelygybesPoteme() {
  showOrHide(["nelygybes"], false);
  showOrHide(["potemeNelygybesBtn", "nelygybesSuModuliu"], true);
}

/* ----------Aibes----------*/

function aibes() {
  showOrHide(["hideMenu", "name"], true);
  showOrHide(["menuBtn", "aibes"], false);
}

function aibesPotemeRatas() {
  showOrHide(["aibes"], true);
  showOrHide(["potemeAibesBtn", "aibiuRatasImg", "aibiuTipai"], false);
}

function aibesPotemeSSS() {
  showOrHide(["aibes"], true);
  showOrHide(["potemeAibesBtn", "aibesImg"], false);
}

function aibesPotemeReiskimas() {
  showOrHide(["aibes"], true);
  showOrHide(["potemeAibesBtn"], false);
}

function aibesPotemeReiskimas() {
  showOrHide(["aibes"], true);
  showOrHide(["potemeAibesBtn", "trupmenosVertimas"], false);
}

function griztiIAibesPoteme() {
  showOrHide(["aibes"], false);
  showOrHide(
    [
      "potemeAibesBtn",
      "aibiuRatasImg",
      "aibiuTipai",
      "aibesImg",
      "trupmenosVertimas",
    ],
    true
  );
}

/* ----------Realieji skaiciai----------*/

function realus() {
  showOrHide(["hideMenu", "name"], true);
  showOrHide(["menuBtn", "realus"], false);
}

function realusPotemeIracionalus() {
  showOrHide(["realus"], true);
  showOrHide(["potemeRealusBtn", "iracionalumoIrodymas"], false);
}

function realusPotemeLaipsnis() {
  showOrHide(["realus"], true);
  showOrHide(["potemeRealusBtn", "kelimasLaipsniu"], false);
}

function realusPotemeSaknis() {
  showOrHide(["realus"], true);
  showOrHide(["potemeRealusBtn", "sakniesTraukimasBlokas"], false);
}

function realusPotemeSaknisTrupmena() {
  showOrHide(["realus"], true);
  showOrHide(["potemeRealusBtn", "sakniesTraukimasTrupmenojeBlokas"], false);
}

function griztiIRealusPoteme() {
  showOrHide(["realus"], false);
  showOrHide(
    [
      "potemeRealusBtn",
      "iracionalumoIrodymas",
      "kelimasLaipsniu",
      "kelimasLaipsniuSK",
      "sakniesTraukimasBlokas",
      "sakniesTraukimasTrupmenojeBlokas",
    ],
    true
  );
}

function skaiciuoti() {
  showOrHide(["kelimasLaipsniupagrindas2"], true);
  showOrHide(
    [
      "kelimasLaipsniuSK",
      "kelimasLaipsniupagrindas1",
      "kelimasLaipsniurodiklis1.1",
      "kelimasLaipsniurodiklis1.2",
    ],
    false
  );
  var pag = document.getElementById("kelimasLaipsniupagrindas1").value;
  var rod1 = document.getElementById("kelimasLaipsniurodiklis1.1").value;
  var rod2 = document.getElementById("kelimasLaipsniurodiklis1.2").value;
  document.getElementById("rez1").innerHTML = pag + "^" + rod1 * rod2;
  document.getElementById("rez2").innerHTML = math.round(
    pag ** (rod1 * rod2),
    3
  );
}

function skaiciuoti1() {
  showOrHide(["kelimasLaipsniupagrindas2"], true);
  showOrHide(
    [
      "kelimasLaipsniuSK",
      "kelimasLaipsniupagrindas1",
      "kelimasLaipsniurodiklis1.1",
      "kelimasLaipsniurodiklis1.2",
    ],
    false
  );
  var pag = document.getElementById("kelimasLaipsniupagrindas1").value;
  var rod1 = document.getElementById("kelimasLaipsniurodiklis1.1").value;
  var rod2 = document.getElementById("kelimasLaipsniurodiklis1.2").value;
  document.getElementById("rez1").innerHTML =
    pag + "^" + (Number(rod1) + Number(rod2));
  document.getElementById("rez2").innerHTML = math.round(
    pag ** (Number(rod1) + Number(rod2)),
    3
  );
}

function skaiciuoti2() {
  showOrHide(["kelimasLaipsniupagrindas2"], true);
  showOrHide(
    [
      "kelimasLaipsniuSK",
      "kelimasLaipsniupagrindas1",
      "kelimasLaipsniurodiklis1.1",
      "kelimasLaipsniurodiklis1.2",
    ],
    false
  );
  var pag = document.getElementById("kelimasLaipsniupagrindas1").value;
  var rod1 = document.getElementById("kelimasLaipsniurodiklis1.1").value;
  var rod2 = document.getElementById("kelimasLaipsniurodiklis1.2").value;
  document.getElementById("rez1").innerHTML = pag + "^" + (rod1 - rod2);
  document.getElementById("rez2").innerHTML = math.round(
    pag ** (rod1 - rod2),
    3
  );
}

function skaiciuoti3() {
  showOrHide(["kelimasLaipsniupagrindas2", "kelimasLaipsniurodiklis1.2"], true);
  showOrHide(["kelimasLaipsniuSK"], false);
  var pag = document.getElementById("kelimasLaipsniupagrindas1").value;
  var rod1 = document.getElementById("kelimasLaipsniurodiklis1.1").value;
  var rod2 = document.getElementById("kelimasLaipsniurodiklis1.2").value;
  document.getElementById("rez1").innerHTML = pag + "^" + -rod1;
  document.getElementById("rez2").innerHTML = pag ** -rod1;
}

function skaiciuoti4() {
  showOrHide(
    ["kelimasLaipsniurodiklis1.2", "kelimasLaipsniurodiklis1.2"],
    true
  );
  showOrHide(["kelimasLaipsniuSK", "kelimasLaipsniupagrindas2"], false);
  var pag = document.getElementById("kelimasLaipsniupagrindas1").value;
  var pag1 = document.getElementById("kelimasLaipsniupagrindas2").value;
  var rod1 = document.getElementById("kelimasLaipsniurodiklis1.1").value;
  document.getElementById("rez1").innerHTML = pag1 + "/" + pag + "^" + -rod1;
  document.getElementById("rez2").innerHTML = (pag1 / pag) ** -rod1;
}

function uzdarytiLaukelius() {
  showOrHide(["kelimasLaipsniuSK"], true);
}

/* ----------Slepimo funkcija----------*/

function showOrHide(element1, element2) {
  for (i = 0; i < element1.length; i++) {
    document.getElementById(element1[i]).hidden = element2;
  }
}

/* ----------Kelimas laipsniu----------*/

function isvalytiRez() {
  document.getElementById("kelimasLaipsniupagrindas1").value = "";
  document.getElementById("kelimasLaipsniupagrindas2").value = "";
  document.getElementById("kelimasLaipsniurodiklis1.1").value = "";
  document.getElementById("kelimasLaipsniurodiklis1.2").value = "";
  document.getElementById("rez1").innerHTML = "";
  document.getElementById("rez2").innerHTML = "";
}

//pavertimas i paprastaja trupmena

function trupmenosVertimas() {
  document.getElementById("zenklas").style = "";

  var trup = document.getElementById("periodinetrupmena").value;

  var data = {
    input: trup,
    sveikoji: 0,
    skaitiklioSk: 0,
    devynetai: 0,
  };

  // 5
  var sveikojiDalis = data.input.split(".")[0];
  sveikojiDalis = parseInt(sveikojiDalis);

  // 235
  var skaitiklioSkaitmuo = data.input.substring(
    data.input.lastIndexOf(".") + 1,
    data.input.lastIndexOf(")")
  );
  skaitiklioSkaitmuo = skaitiklioSkaitmuo.replace("(", "");
  skaitiklioSkaitmuo = parseInt(skaitiklioSkaitmuo);

  // 2
  var atimtis = data.input.substring(
    data.input.lastIndexOf(".") + 1,
    data.input.lastIndexOf("(")
  );
  atimtis = atimtis.replace("(", "");
  atimtis = parseInt(atimtis);

  // 35
  var periodas = data.input.substring(
    data.input.lastIndexOf("(") + 1,
    data.input.lastIndexOf(")")
  );
  periodas = parseInt(periodas);

  // skaiciavimas
  if (!isNaN(atimtis)) {
    skaitiklioSkaitmuo -= atimtis;
  }

  var periodoSkaitmenys = skaiciuojamSkaitmenis(periodas);
  var devynetai = gaminamSkaiciu(9, periodoSkaitmenys);
  var nuliai = gaminamSkaiciu(0, skaiciuojamSkaitmenis(atimtis));
  devynetai += nuliai;

  dbd = dbdSk(skaitiklioSkaitmuo, devynetai);
  skaitiklioSkaitmuo /= dbd;
  devynetai /= dbd;

  // rezultatas
  data.sveikoji = sveikojiDalis;
  data.skaitiklioSk = skaitiklioSkaitmuo;
  data.devynetai = devynetai;

  // rezultato spausdinimas
  if (data.sveikoji > 0) {
    $("#sveikasSk").html(data.sveikoji);
  } else {
    $("#sveikasSk").html((data.sveikoji = ""));
  }
  $("#skaitiklis").html(data.skaitiklioSk);
  $("#vardiklis").html(data.devynetai);

  // --------------------
  function skaiciuojamSkaitmenis(periodas) {
    var skaicius = periodas;
    var ats = 0;

    while (skaicius > 0) {
      skaicius = parseInt(skaicius / 10);
      ats++;
    }

    return parseInt(ats);
  }

  function gaminamSkaiciu(skaicius, kiek) {
    var sk = skaicius.toString();
    var ats = "";

    for (var i = 0; i < kiek; i++) {
      ats += sk;
    }

    return ats;
  }

  function dbdSk(a, b) {
    var dbd = 0;
    while (a > 0 && b > 0)
      if (a > b) {
        a %= b;
      } else {
        b %= a;
      }
    dbd = parseInt(a) + parseInt(b);
    return dbd;
  }
}

function isvalytiRezTrupmenos() {
  document.getElementById("periodinetrupmena").value = "";
  document.getElementById("sveikasSk").innerHTML = "";
  document.getElementById("skaitiklis").innerHTML = "";
  document.getElementById("vardiklis").innerHTML = "";
  document.getElementById("zenklas").style = "display: none";
}

// Saknies traukimas

function vienaKvadSaknis() {
  var sk = document.getElementById("vienaKvSaknis").value;

  if (arTraukiasiSaknis(sk)) {
    var ats = Math.sqrt(sk);
    document.getElementById("sakniesRez").innerHTML = ats;
  } else if (sk % 2 == 0) {
    document.getElementById("sakniesRez").innerHTML = sakniesSkaidymas(sk);
  } else {
    document.getElementById("sakniesRez").innerHTML = "&#8730;" + sk;
  }
}

function isvalytiRezVienaKvSaknis() {
  document.getElementById("vienaKvSaknis").value = "";
  document.getElementById("sakniesRez").innerHTML = "Rezultatas";
}

// Saknies traukimas saknyje

function irasytiSimboli() {
  var zenklai = document.getElementById("zenklai");
  var simb1 = document.getElementById("simb1");
  var simb2 = document.getElementById("simb2");
  var simb3 = document.getElementById("simb3");
}

function skaiciuojaSaknisSaknyje() {
  var sk1 = document.getElementById("sk1").value;
  var sk2 = document.getElementById("sk2").value;
  var simb1 = document.getElementById("simb1").value;
  var simb2 = document.getElementById("simb2").value;
  var simb3 = document.getElementById("simb3").value;
  var sakn1 = document.getElementById("sakn1").value;
  var sakn2 = document.getElementById("sakn2").value;

  var simbolis1 = koksSimbolis(simb1);
  var simbolis2 = koksSimbolis(simb2);
  var simbolis3 = koksSimbolis(simb3);

  var saknZenklas = sakniesTraukimas(sakn1);
  var saknZenklas = sakniesTraukimas(sakn2);

  pirmasVeiksmas = skaiciuojaSuSimboliu(simbolis3, sk2, saknZenklas, sakn2);
  antrasVeiksmas = skaiciuojuSuSimboliu2(
    simbolis2,
    sakn1,
    pirmasVeiksmas,
    sk2,
    sakn2,
    simbolis3
  );

  treciasVeiksmas = Math.sqrt(antrasVeiksmas);
  ketvirtasVeiskmas = skaiciuojuSuSimboliu3(simbolis1, sk1, treciasVeiksmas);
  atsakymas = Math.round(ketvirtasVeiskmas * 100) / 100;

  document.getElementById("sakniesRez").innerHTML = atsakymas;
}

function isvalytiRezDviKvSaknys() {
  document.getElementById("sk1").value = "";
  document.getElementById("sk2").value = "";
  document.getElementById("simb1").value = "";
  document.getElementById("simb2").value = "";
  document.getElementById("simb3").value = "";
  document.getElementById("sakn1").value = "";
  document.getElementById("sakn2").value = "";
  document.getElementById("sakniesRez").innerHTML = "Rezultatas";
}

//Trigubos kvadratines saknies traukimas

function trigubosSakniesTraukimas() {
  var sk1 = document.getElementById("saknTri1").value;
  var sk2 = document.getElementById("saknTri2").value;
  var sk3 = document.getElementById("saknTri3").value;

  var ats = Math.sqrt(sk1 * Math.sqrt(sk2 * Math.sqrt(sk3)));
  ats = Math.round(ats * 100) / 100;

  document.getElementById("sakniesRez").innerHTML = ats;
}

function isvalytiRezTrysKvSaknys() {
  document.getElementById("saknTri1").value = "";
  document.getElementById("saknTri2").value = "";
  document.getElementById("saknTri3").value = "";
  document.getElementById("sakniesRez").innerHTML = "Rezultatas";
}

// Saknies traukimas trupmenoje (Viena saknis)

function sakniesTraukimasTrupmenoje() {
  var skait = document.getElementById("skait").value;
  var vard = document.getElementById("vard").value;
  var zenklas1 = document.getElementById("zenklas1");

  zenklas1.style = "";

  var koksSkaicius = Math.sqrt(skait);

  if (arTraukiasiSaknis(skait)) {
    var ats = Math.sqrt(skait);
    document.getElementById("trupRez").innerHTML = ats;
  } else if (skait % 4 == 0) {
    document.getElementById("trupRez").innerHTML = sakniesSkaidymas(skait);
  } else if (koksSkaicius % 1 != 0) {
    document.getElementById("trupRez").innerHTML = "&#8730;" + skait;
  }

  if (arTraukiasiSaknis(vard)) {
    var ats = Math.sqrt(vard);

    document.getElementById("trupRez1").innerHTML = ats;
  } else if (vard % 4 == 0) {
    document.getElementById("trupRez1").innerHTML = sakniesSkaidymas(vard);
  } else {
    if (arTraukiasiSaknis(skait)) {
      var skaicius1 = Math.sqrt(skait);
      document.getElementById("trupRez").innerHTML =
        skaicius1 + "&#8730;" + vard;
      document.getElementById("trupRez1").innerHTML = vard;
      if (skaicius1 == vard) {
        document.getElementById("trupRez").innerHTML = "&#8730;" + vard;
        document.getElementById("trupRez1").innerHTML = "";
        zenklas1.style = "";
      }
      return;
    } else if (skait % 4 == 0) {
      var skaicius = skaiciusPrekyjeSaknies(skait);

      var skk = sakniesSkaidymasBeSakniesZenklo(skait);
      var kiekSkaiciuSkait = kiekSkaitmenu(skk);

      var simtaiDesimtys = 1;
      for (var i = 1; i < kiekSkaiciuSkait; i++) {
        simtaiDesimtys = simtaiDesimtys * 10;
      }

      var skait25 = skaicius * simtaiDesimtys;
      var saliaSaknies = skk - skait25;

      saliaSaknies = saliaSaknies * vard;

      document.getElementById("trupRez").innerHTML =
        skaicius + "&#8730;" + saliaSaknies;
      document.getElementById("trupRez1").innerHTML = vard;
      return;
    } else {
      document.getElementById("trupRez").innerHTML = "&#8730;" + vard * skait;
      document.getElementById("trupRez1").innerHTML = vard;
      return;
    }
  }

  if (skait == vard) {
    document.getElementById("trupRez").innerHTML = "1";
    document.getElementById("trupRez1").innerHTML = "";
  }
}

function isvalytisakniesTraukimasTrupmenoje() {
  document.getElementById("skait").value = "";
  document.getElementById("vard").value = "";
  document.getElementById("trupRez").innerHTML = "";
  document.getElementById("trupRez1").innerHTML = "";
  zenklas1.style = "";
}

// Saknies traukimas trupmenos eiluteje (Dvi saknys)

function sakniesTraukimasTrupmenosEiluteje() {
  var skait = document.getElementById("trup1").value;
  var vard = document.getElementById("trup2").value;
  var sim1 = document.getElementById("sim1").value;
  var skaiciusPap = document.getElementById("skaicius1").value;
  var sim2 = document.getElementById("sim2").value;
  var saknis1 = document.getElementById("saknis1").value;
  var zenklas1 = document.getElementById("zenklas1");

  zenklas1.style = "";

  var koksSkaicius = Math.sqrt(skait);

  if (arTraukiasiSaknis(skait)) {
    var ats = Math.sqrt(skait);
    document.getElementById("trupRez").innerHTML = ats;
  } else if (skait % 4 == 0) {
    document.getElementById("trupRez").innerHTML =
      sakniesSkaidymas(skait) + sim1;
  } else if (koksSkaicius % 1 != 0) {
    document.getElementById("trupRez").innerHTML = "&#8730;" + skait;
  }

  if (arTraukiasiSaknis(vard)) {
    var ats = Math.sqrt(vard);

    document.getElementById("trupRez1").innerHTML = ats;
  } else if (vard % 4 == 0) {
    document.getElementById("trupRez1").innerHTML = sakniesSkaidymas(vard);
  } else {
    if (arTraukiasiSaknis(skait)) {
      var skaicius1 = Math.sqrt(skait);
      document.getElementById("trupRez").innerHTML =
        skaicius1 +
        "&#8730;" +
        vard +
        sim1 +
        skaiciusPap +
        "+" +
        "&#8730;" +
        saknis1;
      document.getElementById("trupRez1").innerHTML = vard;
      if (skaicius1 == vard) {
        document.getElementById("trupRez").innerHTML =
          "&#8730;" + vard + sim1 + skaiciusPap + "+" + "&#8730;" + saknis1;
        document.getElementById("trupRez1").innerHTML = "";
        zenklas1.style = "";
      }
      return;
    } else if (skait % 4 == 0) {
      var skaicius = skaiciusPrekyjeSaknies(skait);

      var skk = sakniesSkaidymasBeSakniesZenklo(skait);
      var kiekSkaiciuSkait = kiekSkaitmenu(skk);

      var simtaiDesimtys = 1;
      for (var i = 1; i < kiekSkaiciuSkait; i++) {
        simtaiDesimtys = simtaiDesimtys * 10;
      }

      var skait25 = skaicius * simtaiDesimtys;
      var saliaSaknies = skk - skait25;

      saliaSaknies = saliaSaknies * vard;

      document.getElementById("trupRez").innerHTML =
        skaicius +
        "&#8730;" +
        saliaSaknies +
        sim1 +
        skaiciusPap +
        sim2 +
        "&#8730;" +
        saknis1;
      document.getElementById("trupRez1").innerHTML = vard;
      return;
    } else {
      document.getElementById("trupRez").innerHTML =
        "&#8730;" +
        vard * skait +
        sim1 +
        skaiciusPap +
        sim2 +
        "&#8730;" +
        saknis1;
      document.getElementById("trupRez1").innerHTML = vard;
      return;
    }
  }

  if (skait == vard) {
    document.getElementById("trupRez").innerHTML =
      "1" + sim1 + skaiciusPap + sim2 + "&#8730;" + saknis1;
    document.getElementById("trupRez1").innerHTML = "";
  }
}

function isvalytisakniesTraukimasTrupmenosEiluteje() {
  document.getElementById("trup1").value = "";
  document.getElementById("trup2").value = "";
  document.getElementById("sim1").value = "";
  document.getElementById("sim2").value = "";
  document.getElementById("skaicius1").value = "";
  document.getElementById("saknis1").value = "";
  document.getElementById("trupRez").innerHTML = "";
  document.getElementById("trupRez1").innerHTML = "";
  zenklas1.style = "";
}

// Nelygybes su moduliu

function nelygybesSuModuliu() {
  var zinomasis = document.getElementById("zinomasis").value;
  var zenklas = document.getElementById("modulioZenklas").value;
  var nezinomasis = document.getElementById("nezinomasis").value;

  var nezinomasisAts = eilutesSkaidymasSkaiciais(nezinomasis);
  var skaiciusPriekyje = nezinomasisAts[0];
  var daugiklis1 = nezinomasisAts[nezinomasisAts.length - 1];

  if (zenklas == "=") {
    if (zinomasis > 0) {
      var x1 = x1Radimas(zinomasis, daugiklis1, skaiciusPriekyje);
      var x2 = x2Radimas(zinomasis, daugiklis1, skaiciusPriekyje);

      document.getElementById("modulisRez").innerHTML = `x=${x1}; x=${x2}`;
    } else if (zinomasis < 0) {
      document.getElementById("modulisRez").innerHTML = "&empty;";
    }
  }

  if (zenklas == "<") {
    if (zinomasis > 0) {
      var x3 = x1Radimas(zinomasis, daugiklis1, skaiciusPriekyje).toString();
      var x4 = x2Radimas(zinomasis, daugiklis1, skaiciusPriekyje).toString();

      document.getElementById("modulisRez").innerHTML = `${x3}&#60;x&#60;${x4}`;
    } else if (zinomasis < 0) {
      document.getElementById("modulisRez").innerHTML = "&empty;";
    }
  }

  if (zenklas == ">") {
    if (zinomasis > 0) {
      var x5 = x1Radimas(zinomasis, daugiklis1, skaiciusPriekyje);
      var x6 = x2Radimas(zinomasis, daugiklis1, skaiciusPriekyje);

      document.getElementById("modulisRez").innerHTML = `x&#60;${x5}; x&#62;${x6}`;
    } else if (zinomasis < 0) {
      document.getElementById("modulisRez").innerHTML =
        `x&#8714;R`;
    }
  }
}

function isvalytiNelygybesSuModuliu() {
  document.getElementById("zinomasis").value = "";
  document.getElementById("nezinomasis").value = "";
  document.getElementById("modulioZenklas").value = "";
  document.getElementById("modulisRez").innerHTML = "";
}

// Trupmenines nelygybes Pvz1

function trupNelygybesPvz1() {
  var skaitiklis = document.getElementById("nelygSkaitiklis").value.toString();
  var vardiklis = document.getElementById("nelygVardiklis").value.toString();
  var zenklas = document.getElementById("nelygZenklas").value.toString();
  var zinomasis = document.getElementById("nelygZinomasis").value;

  var skaitiklisAts = eilutesSkaidymasSkaiciais(skaitiklis);
  var skaitiklisXSk = skaitiklisAts[0];
  var skaitiklisSk = skaitiklisAts[skaitiklisAts.length - 1];

  var vardiklisAts = eilutesSkaidymasSkaiciais(vardiklis);
  var vardiklisXSk = vardiklisAts[0];
  var vardiklisSk = vardiklisAts[vardiklisAts.length - 1];

  var pirmasVeiksmas = zinomasis * vardiklisXSk; // x
  var antrasVeiksmas = zinomasis * vardiklisSk
  var treciasVeiksmas = skaitiklisXSk - pirmasVeiksmas;
  var ketvirtasVeiskmas = skaitiklisSk - antrasVeiksmas;
  var ketvirtasVeiskmas = ketvirtasVeiskmas * -1;
  var x1 = ketvirtasVeiskmas / treciasVeiksmas;
  if (Number.isInteger(x1) == false) {
    x1 = x1.toFixed(3);
  }

  var penktasVeiksmas = vardiklisSk * -1;
  var x2 = penktasVeiksmas / vardiklisXSk;
  if (Number.isInteger(x2) == false) {
    x2 = x2.toFixed(3);
  }

  if (zenklas == "<") {
    if (skaitiklisXSk < 0 && vardiklisXSk < 0) {
      if (x1 > x2) {
        document.getElementById("trupNelygRez").innerHTML = `x&#8714;{${x2};${x1}}`;
      } else {
        document.getElementById("trupNelygRez").innerHTML = `x&#8714;{${x1};${x2}}`;
      }
    } else if (skaitiklisXSk > 0 && vardiklisXSk < 0) {
      if (x1 > x2) {
        document.getElementById("trupNelygRez").innerHTML = `x&#8714;{-&#8734;;${x2}}&#8746;{&#8734;;${x1}}`;
      } else {
        document.getElementById("trupNelygRez").innerHTML = `x&#8714;{-&#8734;;${x1}}&#8746;{&#8734;;${x2}}`;
      }
    } else if (skaitiklisXSk < 0 && vardiklisXSk > 0) {
      if (x1 > x2) {
        document.getElementById("trupNelygRez").innerHTML = `x&#8714;{-&#8734;;${x1}}&#8746;{&#8734;;${x2}}`;
      } else {
        document.getElementById("trupNelygRez").innerHTML = `x&#8714;{-&#8734;;${x1}}&#8746;{&#8734;;${x2}}`;
      }
    } else if (skaitiklisXSk > 0 && vardiklisXSk > 0) {
      if (x1 > x2) {
        document.getElementById("trupNelygRez").innerHTML = `x&#8714;{${x2};${x1}}`;
      } else {
        document.getElementById("trupNelygRez").innerHTML = `x&#8714;{${x1};${x2}}`;
      }
    }
  }
  if (zenklas == ">") {
    if (skaitiklisXSk < 0 && vardiklisXSk < 0) {
      if (x1 > x2) {
        document.getElementById("trupNelygRez").innerHTML = `x&#8714;{-&#8734;;${x2}}&#8746;{&#8734;;${x1}}`;
      } else {
        document.getElementById("trupNelygRez").innerHTML = `x&#8714;{-&#8734;;${x1}}&#8746;{&#8734;;${x2}}`;
      }
    } else if (skaitiklisXSk > 0 && vardiklisXSk < 0) {
      if (x1 > x2) {
        document.getElementById("trupNelygRez").innerHTML = `x&#8714;{${x2};${x1}}`;
      } else {
        document.getElementById("trupNelygRez").innerHTML = `x&#8714;{${x1};${x2}}`;
      }
    } else if (skaitiklisXSk < 0 && vardiklisXSk > 0) {
      if (x1 > x2) {
        document.getElementById("trupNelygRez").innerHTML = `x&#8714;{${x2};${x1}}`;
      } else {
        document.getElementById("trupNelygRez").innerHTML = `x&#8714;{${x1};${x2}}`;
      }
    } else if (skaitiklisXSk > 0 && vardiklisXSk > 0) {
      if (x1 > x2) {
        document.getElementById("trupNelygRez").innerHTML = `x&#8714;{-&#8734;;${x2}}&#8746;{&#8734;;${x1}}`;
      } else {
        document.getElementById("trupNelygRez").innerHTML = `x&#8714;{-&#8734;;${x1}}&#8746;{&#8734;;${x2}}`;
      }
    }
  }
}

function isvalytiTrupmeninesNelygybesPvz1() {
  document.getElementById("nelygSkaitiklis").value = "";
  document.getElementById("nelygVardiklis").value = "";
  document.getElementById("nelygZenklas").value = "";
  document.getElementById("nelygZinomasis").value = "";
  document.getElementById("trupNelygRez").innerHTML = "";
}

// Trupmenines nelygybes Pvz2

function trupNelygybesPvz2() {
  var skaitiklis1 = document.getElementById("skaitiklisPirmaDalis").value.toString();
  var skaitiklis2 = document.getElementById("skaitiklisAntraDalis").value.toString();
  var vardiklis = document.getElementById("vardiklis1").value.toString();
  var zenklas = document.getElementById("zenklas2").value.toString();
  var zinomasis = document.getElementById("zinomasis1").value;


  var skaitiklis1Ats = eilutesSkaidymasSkaiciais(skaitiklis1);
  var skaitiklis1XSk = skaitiklis1Ats[0];
  var skaitiklis1Sk = skaitiklis1Ats[skaitiklis1Ats.length - 1];

  var skaitiklis2Ats = eilutesSkaidymasSkaiciais(skaitiklis2);
  var skaitiklis2XSk = skaitiklis2Ats[0];
  var skaitiklis2Sk = skaitiklis2Ats[skaitiklis2Ats.length - 1];

  var vardiklisAts = eilutesSkaidymasSkaiciais(vardiklis);
  var vardiklisXSk = vardiklisAts[0];
  var vardiklisSk = vardiklisAts[vardiklisAts.length - 1];

  var ats = [math.intersect([0, 3], [2, 4])];
  for (var i = 0; i <= ats.length; i++) {
    var sk = ats[i];
    document.getElementById("trupNelygRez").innerHTML = sk;
  }
}

function isvalytiTrupmeninesNelygybesPvz2() {
  document.getElementById("skaitiklisPirmaDalis").value = "";
  document.getElementById("skaitiklisAntraDalis").value = "";
  document.getElementById("vardiklis1").value = "";
  document.getElementById("zenklas2").value = "";
  document.getElementById("zinomasis1").value = "";
  document.getElementById("trupNelygRez").innerHTML = "";
}

// Globalios funkcijos

function eilutesSkaidymasSkaiciais(eilute) {
  var data = {
    input: eilute,
    sk1: 0,
    sk2: 0,
  };

  // 3
  var XSk = data.input.split("x")[0];

  if (XSk == "-") {
    XSk = -1;
  }

  XSk = parseInt(XSk);

  if (isNaN(XSk)) {
    XSk = 1;
  }

  // -2
  var Sk = data.input.substring(data.input.lastIndexOf("x") + 1);
  Sk = parseInt(Sk);

  var ats = [XSk, Sk];

  return ats;
}

function x1Radimas(zinomasis, daugiklis1, skaiciusPriekyje) {
  var zinomasis1 = zinomasis * -1;
  var atimtis1 = zinomasis1 - daugiklis1;
  var x1 = atimtis1 / skaiciusPriekyje;
  if (Number.isInteger(x1) == false) {
    x1 = x1.toFixed(3);
  }
  return x1;
}

function x2Radimas(zinomasis, daugiklis1, skaiciusPriekyje) {
  var zinomasis2 = zinomasis;
  var atimtis2 = zinomasis2 - daugiklis1;
  var x2 = atimtis2 / skaiciusPriekyje;
  if (Number.isInteger(x2) == false) {
    x2 = x2.toFixed(3);
  }
  return x2;
}

function skaiciusPrekyjeSaknies(sk) {
  var sk = sakniesSkaidymasBeSakniesZenklo(sk);
  var kiekSkaiciu = kiekSkaitmenu(sk);

  for (var i = 1; i < kiekSkaiciu; i++) {
    sk = sk / 10;
    sk = parseInt(sk);
  }
  return sk;
}

function kiekSkaitmenu(number) {
  return number.toString().length;
}

function arTraukiasiSaknis(skaicius) {
  if (Math.sqrt(skaicius) % 1 == 0) {
    return true;
  }

  return false;
}

function sakniesSkaidymas(skaicius) {
  for (var i = 2; i <= 9; i++) {
    var sk1 = i * i;
    if (skaicius % sk1 == 0) {
      return i + "&#8730;" + skaicius / sk1;
    }
  }
}

function sakniesSkaidymasBeSakniesZenklo(skaicius) {
  for (var i = 2; i <= 9; i++) {
    var sk1 = i * i;
    if (skaicius % sk1 == 0) {
      a = skaicius / sk1;
      return String(i) + String(a);
    }
  }
}

function sakniesSkaidymasSuapvalintas(skaicius) {
  for (var i = 2; i <= 9; i++) {
    var sk1 = i * i;
    if (skaicius % sk1 == 0) {
      var sk = skaicius / sk1;
      var suapvalintas = i * Math.sqrt(sk);
      return suapvalintas;
    }
  }
}

function koksSimbolis(simbolis) {
  if (simbolis == "+") {
    var s = "+";
    return s;
  } else if (simbolis == "-") {
    var s = "-";
    return s;
  } else if (simbolis == "*") {
    var s = "*";
    return s;
  } else if (simbolis == "/") {
    var s = "/";
    return s;
  }
}

function skaiciuojaSuSimboliu(simbolis, skk1, skZenklas, skk2) {
  if (simbolis == "+") {
    if (skZenklas == "//") {
      var pirmasVeiksmas = skk1 + simbolis + "kv" + skk2;
    } else if (skZenklas == "/s/") {
      var skk2 = sakniesSkaidymas(skk2);
      var pirmasVeiksmas = skk1 + simbolis + skk2;
    } else {
      var pirmasVeiksmas = parseInt(skk1) + parseInt(Math.sqrt(skk2));
    }
    return pirmasVeiksmas;
  } else if (simbolis == "-") {
    if (skZenklas == "//") {
      var pirmasVeiksmas = skk1 + simbolis + "kv" + skk2;
    } else if (skZenklas == "/s/") {
      var skk2 = sakniesSkaidymas(skk2);
      var pirmasVeiksmas = skk1 + simbolis + skk2;
    } else {
      var pirmasVeiksmas = parseInt(skk1) - parseInt(Math.sqrt(skk2));
    }
    return pirmasVeiksmas;
  } else if (simbolis == "/") {
    if (skZenklas == "//") {
      var pirmasVeiksmas = skk1 / Math.sqrt(skk2);
    } else if (skZenklas == "/s/") {
      var skk2 = sakniesSkaidymasSuapvalintas(skk2);
      var pirmasVeiksmas = skk1 / skk2;
    } else {
      var pirmasVeiksmas = parseInt(skk1) / parseInt(Math.sqrt(skk2));
    }
    return pirmasVeiksmas;
  } else if (simbolis == "*") {
    if (skZenklas == "//") {
      var pirmasVeiksmas = skk1 * Math.sqrt(skk2);
    } else if (skZenklas == "/s/") {
      var skk2 = sakniesSkaidymasSuapvalintas(skk2);
      var pirmasVeiksmas = skk1 * skk2;
    } else {
      var pirmasVeiksmas = parseInt(skk1) * parseInt(Math.sqrt(skk2));
    }
    return pirmasVeiksmas;
  }
}

function sakniesTraukimas(saknis) {
  if (arTraukiasiSaknis(saknis)) {
    var ats = Math.sqrt(saknis);
    return ats;
  } else if (saknis % 2 == 0) {
    var ats = "/s/";
    return ats;
  } else {
    var ats = saknis;
    return "//";
  }
}

function skaiciuojuSuSimboliu2(simbolis, sk, ats, sk1, sakn, simbolis1) {
  if (simbolis == "+") {
    return parseFloat(sk) + parseFloat(ats);
  } else if (simbolis == "-") {
    return sk - ats;
  } else if (simbolis == "*") {
    return sk * ats;
  } else if (simbolis == "/") {
    if (simbolis1 == "+") {
      return sk / sk1 + Math.sqrt(sakn);
    }
    if (simbolis1 == "-") {
      return sk / sk1 - Math.sqrt(sakn);
    }
    if (simbolis1 == "*") {
      return (sk / sk1) * Math.sqrt(sakn);
    }
    if (simbolis1 == "/") {
      return sk / sk1 / Math.sqrt(sakn);
    }
  }
}

function skaiciuojuSuSimboliu3(simbolis, sk, ats) {
  if (simbolis == "+") {
    return parseInt(sk) + parseInt(ats);
  } else if (simbolis == "-") {
    return sk - ats;
  } else if (simbolis == "*") {
    return sk * ats;
  } else if (simbolis == "/") {
    return sk / ats;
  }
}
