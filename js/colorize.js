'use strict';
(function () {
  var WIZARD_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALLCOLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var getRandElement = function (arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  };

  // ---------- Изменение цвета персонажа --------------
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEye = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  var changeCoatColor = function () {
    wizardCoat.style.fill = getRandElement(WIZARD_COATCOLORS);
  };

  var changeEyesColor = function () {
    wizardEye.style.fill = getRandElement(WIZARD_EYESCOLORS);
  };

  var changeFireballColor = function () {
    wizardFireball.style.background = getRandElement(WIZARD_FIREBALLCOLORS);
  };

  wizardCoat.addEventListener('click', function () {
    changeCoatColor();
  });

  wizardEye.addEventListener('click', function () {
    changeEyesColor();
  });

  wizardFireball.addEventListener('click', function () {
    changeFireballColor();
  });
})();
