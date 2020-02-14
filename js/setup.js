'use strict';
(function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var MIN_NAME_LENGTH = 2;
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Лолита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['де Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var getRandElement = function (arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  };

  var wizards = [
    {
      name: getRandElement(WIZARD_NAMES) + ' ' + getRandElement(WIZARD_SURNAMES),
      coatColor: getRandElement(WIZARD_COATCOLORS),
      eyesColor: getRandElement(WIZARD_EYESCOLORS)
    },
    {
      name: getRandElement(WIZARD_NAMES) + ' ' + getRandElement(WIZARD_SURNAMES),
      coatColor: getRandElement(WIZARD_COATCOLORS),
      eyesColor: getRandElement(WIZARD_EYESCOLORS)
    },
    {
      name: getRandElement(WIZARD_NAMES) + ' ' + getRandElement(WIZARD_SURNAMES),
      coatColor: getRandElement(WIZARD_COATCOLORS),
      eyesColor: getRandElement(WIZARD_EYESCOLORS)
    },
    {
      name: getRandElement(WIZARD_NAMES) + ' ' + getRandElement(WIZARD_SURNAMES),
      coatColor: getRandElement(WIZARD_COATCOLORS),
      eyesColor: getRandElement(WIZARD_EYESCOLORS)
    }
  ];

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
})();
