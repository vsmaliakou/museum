const radioGroup = document.getElementsByName('type');
const basicTicketInputs = document.getElementsByClassName('basic-tickets-count');
const seniorTicketInputs = document.getElementsByClassName('senior-tickets-count');
const basicDecrementBtns = document.getElementsByClassName('basic_decrement');
const basicIncrementBtns = document.getElementsByClassName('basic_increment');
const seniorDecrementBtns = document.getElementsByClassName('senior_decrement');
const seniorIncrementBtns = document.getElementsByClassName('senior_increment');
const popupSelect = document.getElementById('popup-ticket-type');
const popupBasicTicketInput = document.getElementById('basic-tickets-count');
const popupSeniorTicketInput = document.getElementById('senior-tickets-count');
const basicOneTicketPrice = document.getElementsByClassName('basic-one-ticket-price');
const seniorOneTicketPrice = document.getElementsByClassName('senior-one-ticket-price');
const basicTotal = document.getElementById('basic-total');
const seniorTotal = document.getElementById('senior-total');

const setTotalCount = (ticketType, basicTicketCount, seniorTicketCount) => {
  const total = document.getElementsByClassName('tickets__amount_total');

  switch (ticketType) {
    case 'permanent': {
      Array.from(total).forEach((item) => item.innerText = `${basicTicketCount * 20 + seniorTicketCount * 10}`);
      Array.from(basicOneTicketPrice).forEach((item) => item.innerText = '20');
      Array.from(seniorOneTicketPrice).forEach((item) => item.innerText = '10');
      basicTotal.innerText = `${basicTicketCount * 20}`;
      seniorTotal.innerText = `${seniorTicketCount * 10}`;
      break;
    }
    case 'temporary': {
      Array.from(total).forEach((item) => item.innerText = `${basicTicketCount * 25 + seniorTicketCount * 12.5}`);
      Array.from(basicOneTicketPrice).forEach((item) => item.innerText = '25');
      Array.from(seniorOneTicketPrice).forEach((item) => item.innerText = '12.5');
      basicTotal.innerText = `${basicTicketCount * 25}`;
      seniorTotal.innerText = `${seniorTicketCount * 12.5}`;
      break;
    }
    case 'combined': {
      Array.from(total).forEach((item) => item.innerText = `${basicTicketCount * 40 + seniorTicketCount * 20}`);
      Array.from(basicOneTicketPrice).forEach((item) => item.innerText = '40');
      Array.from(seniorOneTicketPrice).forEach((item) => item.innerText = '20');
      basicTotal.innerText = `${basicTicketCount * 40}`;
      seniorTotal.innerText = `${seniorTicketCount * 20}`;
      break;
    }
  }
};

const decrement = (input, newBasicTicketValue, newSeniorTicketValue) => {
  if (Number(input[0].value) <= 0) {
    return;
  }

  radioGroup.forEach((radio) => {
    if (radio.checked) {
      setTotalCount(radio.id, newBasicTicketValue, newSeniorTicketValue);
    }
  });

  Array.from(input).forEach((item) => {
    item.value = input[0].id === 'basic-tickets-count' ? newBasicTicketValue : newSeniorTicketValue;
  });
};

const increment = (input, newBasicTicketValue, newSeniorTicketValue) => {
  if (Number(input[0].value) >= 20) {
    return;
  }

  radioGroup.forEach((radio) => {
    if (radio.checked) {
      setTotalCount(radio.id, newBasicTicketValue, newSeniorTicketValue);
    }
  });

  Array.from(input).forEach((item) => {
    item.value = input[0].id === 'basic-tickets-count' ? newBasicTicketValue : newSeniorTicketValue;
  });
};

radioGroup.forEach((radio) => {
  radio.addEventListener('change', (e) => {
    setTotalCount(e.target.id, basicTicketInputs[0].value, seniorTicketInputs[0].value);
    popupSelect.value = e.target.id;
  })
});

popupSelect.addEventListener('change', (e) => {
  setTotalCount(e.target.value, basicTicketInputs[0].value, seniorTicketInputs[0].value);
  radioGroup.forEach((radio) => {
    if (radio.id === e.target.value) {
      radio.checked = true;
    }
  });
});

Array.from(basicDecrementBtns).forEach((btn) => {
  btn.addEventListener(
    'click',
    () => decrement(basicTicketInputs, Number(basicTicketInputs[0].value) - 1, seniorTicketInputs[0].value)
  );
});

Array.from(basicIncrementBtns).forEach((btn) => {
  btn.addEventListener(
    'click',
    () => increment(basicTicketInputs, Number(basicTicketInputs[0].value) + 1, seniorTicketInputs[0].value)
  );
});

Array.from(seniorDecrementBtns).forEach((btn) => {
  btn.addEventListener(
    'click',
    () => decrement(seniorTicketInputs, basicTicketInputs[0].value, Number(seniorTicketInputs[0].value) - 1)
  );
});

Array.from(seniorIncrementBtns).forEach((btn) => {
  btn.addEventListener(
    'click',
    () => increment(seniorTicketInputs, basicTicketInputs[0].value, Number(seniorTicketInputs[0].value) + 1)
  );
});
