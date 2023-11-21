// Знаходимо поле клітинок

const cells = document.querySelectorAll('.field-row');
const gameField = [];

// Нехай буде клітинок 6 в одному рядку

for (const cell of cells) {
  for (let i = 0; i < 6; i++) {
    gameField.push(cell.children[i]);
  }
}

const arrayLeftBorder = [0, 6, 12, 18, 24, 30];
const arrayRigthBorder = [5, 11, 17, 23, 29, 35];
const arrayDownBorder = [30, 31, 32, 33, 34, 35];
const arrayUpBorder = [0, 1, 2, 3, 4, 5];

// масив, куди будемо добавляти суміжні елементи

const arrayFoundElements = [];

// функція буде виділяти синім кольором суміжну клітинку

const findConnectedElement = (index) => {
  gameField[index].classList = 'field-cell field-cell--blue';

  if (!arrayLeftBorder.includes(index)) {
    if (gameField[index].textContent === gameField[index - 1].textContent && !arrayFoundElements.includes(index - 1)) {
      arrayFoundElements.push(index - 1);
    }
  }

  if (!arrayRigthBorder.includes(index)) {
    if (gameField[index].textContent === gameField[index + 1].textContent && !arrayFoundElements.includes(index + 1)) {
      arrayFoundElements.push(index + 1);
    }
  }

  if (!arrayUpBorder.includes(index)) {
    if (gameField[index].textContent === gameField[index - 6].textContent && !arrayFoundElements.includes(index - 6)) {
      arrayFoundElements.push(index - 6);
    }
  }

  if (!arrayDownBorder.includes(index)) {
    if (gameField[index].textContent === gameField[index + 6].textContent && !arrayFoundElements.includes(index + 6)) {
      arrayFoundElements.push(index + 6);
    }
  }
};


// На кожну клітинку добавляєм обработчик click 

for (let i = 0; i < gameField.length; i++) {
  gameField[i].addEventListener('click', () => {
    arrayFoundElements.push(i);

    for (const number of arrayFoundElements) {
      findConnectedElement(number);
    }
  })
};
