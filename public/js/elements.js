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
  title.innerHTML = `<div class='text-center'><p class='fs-3 text-white'>Incoming Call From</p> <p class='text-white'>${callTypeInfo}</p><div/>`;

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('d-flex', 'gap-5');

  const acceptCallButton = document.createElement('button');
  acceptCallButton.classList.add(
    'btn',
    'btn-success',
    'd-flex',
    'align-items-center',
    'justify-content-center',
    'px-5'
  );
  acceptCallButton.innerHTML =
    '<div class="fa-solid fa-phone me-2"></div> <div class="fs-4">Accept</div>';
  buttonContainer.appendChild(acceptCallButton);

  const rejectCallButton = document.createElement('button');
  rejectCallButton.classList.add(
    'btn',
    'btn-danger',
    'd-flex',
    'align-items-center',
    'justify-content-center',
    'px-5'
  );
  rejectCallButton.innerHTML =
    '<div class="fa-solid fa-phone-slash me-2"></div> <div class="fs-4">Reject</div>';
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
  title.innerHTML = `<p class='fs-3 text-white'>Calling ...</p>`;

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('d-flex', 'gap-5');

  const hangUpCallButton = document.createElement('button');
  hangUpCallButton.classList.add(
    'btn',
    'btn-danger',
    'd-flex',
    'align-items-center',
    'justify-content-center',
    'px-5'
  );
  hangUpCallButton.innerHTML =
    '<div class="fa-solid fa-phone-slash me-2"></div> <div class="fs-4">Cancel</div>';

  buttonContainer.appendChild(hangUpCallButton);

  dialogContent.appendChild(title);
  dialogContent.appendChild(buttonContainer);

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
  title.innerHTML = ` <div class='text-center'> <p class='fs-3 text-white'>${dialogtitle}</p> <p class='fs-4 text-warning'>${descriptionText}<p/> <div/>`;
  dialogContent.appendChild(title);

  return dialog;
};
