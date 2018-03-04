     //------- SOUNDS -----------//

    //first page sound javascript
    //soundscape
    var fallingRain = new Audio();
    var forestMorning = new Audio();
    var burningLogs = new Audio();
    var whiteNoise = new Audio();
    var CatMeowing = new Audio();
    var BeautifulChillMix = new Audio();
    var Ambulance = new Audio();
    var FrogCroak = new Audio();
    var OceanWave = new Audio();
    var AirPlane = new Audio();
    var Bee = new Audio();
    var PublicSwimmingPool = new Audio();
    var Fan = new Audio();
    var LaughingAndGigglingKids = new Audio();
    var PunchesAndSlaps = new Audio();
    var ScaryFootsteps = new Audio();
    var DogBarking = new Audio();
    var JungleBattleAmbience = new Audio();
    fallingRain.src = "../sounds/fallingRain.m4a";
    forestMorning.src = "../sounds/forestMorning.m4a";
    burningLogs.src = "../sounds/burningLogs.m4a";
    whiteNoise.src = "../sounds/whiteNoise.m4a" ;
    CatMeowing.src = "../sounds/CatMeowing.m4a" ;
    BeautifulChillMix.src = "../sounds/BeautifulChillMix.m4a" ;
    Ambulance.src = "../sounds/Ambulance.m4a" ;
    FrogCroak.src = "../sounds/FrogCroak.m4a" ;
    OceanWave.src = "../sounds/OceanWave.m4a" ;
    AirPlane.src = "../sounds/AirPlane.m4a" ;
    Bee.src = "../sounds/Bee.m4a" ;
    PublicSwimmingPool.src = "../sounds/PublicSwimmingPool.m4a" ;
    Fan.src = "../sounds/Fan.m4a" ;
    LaughingAndGigglingKids.src = "../sounds/LaughingAndGigglingKids.m4a" ;
    PunchesAndSlaps.src = "../sounds/PunchesAndSlaps.m4a" ;
    ScaryFootsteps.src = "../sounds/ScaryFootsteps.m4a" ;
    DogBarking.src = "../sounds/DogBarking.m4a" ;
    JungleBattleAmbience.src = "../sounds/JungleBattleAmbience.m4a" ;

    //alert sound
    var foghorn = new Audio();
    var beeping = new Audio();
    var siren = new Audio();
    var bells = new Audio();
    var Fart = new Audio();
    var No = new Audio();
    var EvilLaugh = new Audio();
    var InceptionButton = new Audio();
    var FinishHim = new Audio();
    var Dolphin = new Audio();
    var SadTrombone = new Audio();
    var ItTimeToStop = new Audio();
    var Hallelujah = new Audio();
    var Haha = new Audio();
    var Yes = new Audio();
    var IBelieveICanFly = new Audio();
    var Crickets = new Audio();
    var YouShallNotPass = new Audio();
    foghorn.src = "../sounds/foghorn.m4a";
    beeping.src = "../sounds/beeping.m4a";
    siren.src = "../sounds/siren.m4a";
    bells.src = "../sounds/bells.m4a";
    Fart.src = "../sounds/Fart.m4a";
    No.src = "../sounds/No.m4a";
    EvilLaugh.src = "../sounds/EvilLaugh.m4a";
    InceptionButton.src = "../sounds/InceptionButton.m4a";
    FinishHim.src = "../sounds/FinishHim.m4a";
    Dolphin.src = "../sounds/Dolphin.m4a";
    SadTrombone.src = "../sounds/SadTrombone.m4a";
    ItTimeToStop.src = "../sounds/ItTimeToStop.m4a";
    Hallelujah.src = "../sounds/Hallelujah.m4a";
    Haha.src = "../sounds/Haha.m4a";
    Yes.src = "../sounds/Yes.m4a";
    IBelieveICanFly.src = "../sounds/IBelieveICanFly.m4a";
    Crickets.src = "../sounds/Crickets.m4a";
    YouShallNotPass.src = "../sounds/YouShallNotPass.m4a";

    var allSoundsList = [fallingRain, forestMorning, burningLogs, whiteNoise, CatMeowing, BeautifulChillMix,
    Ambulance, FrogCroak, OceanWave, AirPlane, Bee, PublicSwimmingPool, Fan, LaughingAndGigglingKids,
    PunchesAndSlaps, ScaryFootsteps, DogBarking, JungleBattleAmbience, foghorn, beeping, siren,
    bells, Fart, No, EvilLaugh, InceptionButton, FinishHim, Dolphin, SadTrombone, ItTimeToStop,
    Hallelujah, Haha, Yes, IBelieveICanFly, Crickets, YouShallNotPass];
    

    function playSavedSoundscape(){
      var soundscape = localStorage.getItem("soundscape");
      console.log (soundscape);
      soundEffect(soundscape);
    }
    function playSavedAlarm(){
      var alarmSound = localStorage.getItem("alarm");
      console.log (alarmSound);
      soundEffect(alarmSound);
    }
    function soundEffect(num)
    {
      // if audio is playing, pause it first
      if (!fallingRain.paused || !forestMorning.paused || !burningLogs.paused || !whiteNoise.paused || 
        !CatMeowing.paused || !BeautifulChillMix.paused || !Ambulance.paused || !FrogCroak.paused || 
        !OceanWave.paused || !AirPlane.paused || !Bee.paused || !PublicSwimmingPool.paused || !Fan.paused || 
        !LaughingAndGigglingKids.paused || !PunchesAndSlaps.paused || !ScaryFootsteps.paused || 
        !DogBarking.paused || !JungleBattleAmbience.paused || !foghorn.paused || !beeping.paused || 
        !siren.paused || !bells.paused || !Fart.paused || !No.paused || !EvilLaugh.paused || 
        !InceptionButton.paused || !FinishHim.paused || !Dolphin.paused || !SadTrombone.paused || 
        !ItTimeToStop.paused || !Hallelujah.paused || !Haha.paused || !Yes.paused || !IBelieveICanFly.paused || 
        !Crickets.paused || !YouShallNotPass.paused) {
        for (i = 0; i < allSoundsList.length; i++) { 
          var sound = allSoundsList[i];
          sound.pause();
        }
        console.log ("paused");
      }
	  // Save the soundscape or alarm selection
	  if(num >= 1 && num <= 18){
      localStorage.setItem("soundscape", num);
    }
    else{
      localStorage.setItem("alarm", num);
    }
	  // Set the volume for alerts
	  var alertVol = sessionStorage.getItem("alertVolume");
	  if(alertVol == null){
      alertVol = 1.0;
    }
      //play the song is clicked
      if (num == 1) {
        fallingRain.loop = true;
        fallingRain.play();
      }
      else if (num == 2) {
        forestMorning.loop = true;
        forestMorning.play();
      }
      else if (num == 3){
        burningLogs.loop = true;
        burningLogs.play();
      }
      else if(num == 4){
        whiteNoise.loop = true;
        whiteNoise.play();
      }
      else if(num == 5){
        CatMeowing.loop = true;
        CatMeowing.play();
      }
      else if(num == 6){
        BeautifulChillMix.loop = true;
        BeautifulChillMix.play();
      }
      else if(num == 7){
        Ambulance.loop = true;
        Ambulance.play();
      }
      else if(num == 8){
        FrogCroak.loop = true;
        FrogCroak.play();
      }
      else if(num == 9){
        OceanWave.loop = true;
        OceanWave.play();
      }
      else if(num == 10){
        AirPlane.loop = true;
        AirPlane.play();
      }
      else if(num == 11){
        Bee.loop = true;
        Bee.play();
      }
      else if(num == 12){
        PublicSwimmingPool.loop = true;
        PublicSwimmingPool.play();
      }
      else if(num == 13){
        Fan.loop = true;
        Fan.play();
      }
      else if(num == 14){
        LaughingAndGigglingKids.loop = true;
        LaughingAndGigglingKids.play();
      }
      else if(num == 15){
        PunchesAndSlaps.loop = true;
        PunchesAndSlaps.play();
      }
      else if(num == 16){
        ScaryFootsteps.loop = true;
        ScaryFootsteps.play();
      }
      else if(num == 17){
        DogBarking.loop = true;
        DogBarking.play();
      }
      else if(num == 18){
        JungleBattleAmbience.loop = true;
        JungleBattleAmbience.play();
      }
      else if(num == 19){
        foghorn.volume = alertVol;
        foghorn.play();
      }
      else if(num == 20){
        beeping.volume = alertVol;
        beeping.play();
      }
      else if(num == 21){
        siren.volume = alertVol;
        siren.play();
      }
      else if(num == 22){
        bells.volume = alertVol;
        bells.play();
      }
      else if(num == 23){
        Fart.volume = alertVol;
        Fart.play();
      }
      else if(num == 24){
        No.volume = alertVol;
        No.play();
      }
      else if(num == 25){
        EvilLaugh.volume = alertVol;
        EvilLaugh.play();
      }
      else if(num == 26){
        InceptionButton.volume = alertVol;
        InceptionButton.play();
      }
      else if(num == 27){
        FinishHim.volume = alertVol;
        FinishHim.play();
      }
      else if(num == 28){
        Dolphin.volume = alertVol;
        Dolphin.play();
      }
      else if(num == 29){
        SadTrombone.volume = alertVol;
        SadTrombone.play();
      }
      else if(num == 30){
        ItTimeToStop.volume = alertVol;
        ItTimeToStop.play();
      }
      else if(num == 31){
        Hallelujah.volume = alertVol;
        Hallelujah.play();
      }
      else if(num == 32){
        Haha.volume = alertVol;
        Haha.play();
      }
      else if(num == 33){
        Yes.volume = alertVol;
        Yes.play();
      }
      else if(num == 34){
        IBelieveICanFly.volume = alertVol;
        IBelieveICanFly.play();
      }
      else if(num == 35){
        Crickets.volume = alertVol;
        Crickets.play();
      }
      else if(num == 36){
        YouShallNotPass.volume = alertVol;
        YouShallNotPass.play();
      }

    }


// pause sounds
    $('.pause').click (function pause() {
      for (i = 0; i < allSoundsList.length; i++) { 
        var sound = allSoundsList[i];
        sound.pause();
      }
    })

    

