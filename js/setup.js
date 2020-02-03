'use strict';
// var userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var MIN_NAME_LENGTH = 2;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Лолита', 'Вашингтон'];
var WIZARD_SURNAMES = ['де Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALLCOLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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

// userDialog.querySelector('.setup-similar').classList.remove('hidden');

// ---------- Открытие окна настройки персонажа ------------
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

userNameInput.addEventListener('keydown', function (evt) {
  if (evt.key === ESC_KEY) {
    document.removeEventListener('keydown', onPopupEscPress);
  }
});

// ----------- Перевод ошибок валидации форм ----------
userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < MIN_NAME_LENGTH) {
    target.setCustomValidity(
        'Имя должно состоять минимум из ' +
        MIN_NAME_LENGTH +
        '-х символов'
    );
  } else {
    target.setCustomValidity('');
  }
});

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
