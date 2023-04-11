export const getIncomingCallDialog = (
  callTypeInfo,
  acceptCallHandler,
  rejectCallHandler
) => {
  console.log('Getting Incoming Call Dialog');

  const dialog = document.createElement('div');
  dialog.classList.add('dialog_wrapper');

  const dialogContent = document.createElement('div');
  dialogContent.classList.add('dialog_content');

  dialog.appendChild(dialogContent);

  const title = document.createElement('p');
  title.classList.add('dialog_title');
  title.innerHTML = `<p>Incoming Call</p>`;

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('dialog_button_container');

  const acceptCallButton = document.createElement('button');
  acceptCallButton.classList.add('dialog_accept_call_button');
  acceptCallButton.innerHTML =
    '<div class="fa-solid fa-phone"></div> <div>Accept</div>';
  buttonContainer.appendChild(acceptCallButton);

  const rejectCallButton = document.createElement('button');
  rejectCallButton.classList.add('dialog_reject_call_button');
  rejectCallButton.innerHTML =
    '<div class="fa-solid fa-phone-slash"></div> <div>Reject</div>';
  buttonContainer.appendChild(rejectCallButton);
  dialogContent.appendChild(title);
  dialogContent.appendChild(buttonContainer);

  acceptCallButton.addEventListener('click', () => {
    acceptCallHandler();
  });
  rejectCallButton.addEventListener('click', () => {
    rejectCallHandler();
  });

  return dialog;
};

export const getCallingDialog = (rejectCallHandler) => {
  const dialog = document.createElement('div');
  dialog.classList.add('dialog_wrapper');

  const dialogContent = document.createElement('div');
  dialogContent.classList.add('dialog_content');

  dialog.appendChild(dialogContent);

  const title = document.createElement('p');
  title.classList.add('dialog_title');
  title.innerHTML = `<p>Calling ...</p>`;

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('dialog_button_container');

  const hangUpCallButton = document.createElement('button');
  hangUpCallButton.classList.add('dialog_reject_call_button');
  hangUpCallButton.innerHTML =
    '<div class="fa-solid fa-phone-slash"></div> <div>Cancel</div>';

  buttonContainer.appendChild(hangUpCallButton);

  dialogContent.appendChild(title);
  dialogContent.appendChild(buttonContainer);
  hangUpCallButton.addEventListener('click', () => {
    rejectCallHandler();
  });
  return dialog;
};

export const getInfoDialog = (dialogtitle, descriptionText) => {
  const dialog = document.createElement('div');
  dialog.classList.add('dialog_wrapper');

  const dialogContent = document.createElement('div');
  dialogContent.classList.add('dialog_content');

  dialog.appendChild(dialogContent);

  const title = document.createElement('p');
  title.classList.add('dialog_title');
  title.innerHTML = ` <div> <p>${dialogtitle}</p> <p>${descriptionText}<p/> <div/>`;
  dialogContent.appendChild(title);

  return dialog;
};

export const getLeftMessage = (message) => {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message_left_container');
  const messageParagraph = document.createElement('p');
  messageParagraph.classList.add('message_left_paragraph');
  messageParagraph.innerHTML = message;
  messageContainer.appendChild(messageParagraph);
  return messageContainer;
};

export const gerRightMessage = (message) => {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message_right_container');
  const messageParagraph = document.createElement('p');
  messageParagraph.classList.add('message_right_paragraph');
  messageParagraph.innerHTML = message;
  messageContainer.appendChild(messageParagraph);
  return messageContainer;
};
