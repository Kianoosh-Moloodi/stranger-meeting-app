import * as constants from './constants.js';
import * as elements from './elements.js';

export const updatePersonalCode = (personalCode) => {
  const personalCodeParagraph = document.getElementById(
    'personal_code_paragrapth'
  );
  personalCodeParagraph.innerHTML = personalCode;
};

export const updateLocalVideo = (stream) => {
  const localVideo = document.getElementById('local_video');
  localVideo.srcObject = stream;
  localVideo.addEventListener('loadedmetadata', () => {
    localVideo.play();
  });
};

export const updateRemoteVideo = (stream) => {
  const remoteVideo = document.getElementById('remote_video');
  remoteVideo.srcObject = stream;
};

export const showIncomingCallDialog = (
  callType,
  acceptCallHandler,
  rejectCallHandler
) => {
  const callTypeInfo =
    callType === constants.callType.VIDEO_PERSONAL_CODE
      ? 'Sizgallo'
      : 'Unknown';

  const incomingCallDialog = elements.getIncomingCallDialog(
    callTypeInfo,
    acceptCallHandler,
    rejectCallHandler
  );

  const dialog = document.getElementById('dialog');
  dialog.querySelectorAll('*').forEach((dialog) => dialog.remove());

  dialog.appendChild(incomingCallDialog);
};

export const showCallingDialog = (rejectCallHandler) => {
  const callingDialog = elements.getCallingDialog(rejectCallHandler);
  const dialog = document.getElementById('dialog');
  dialog.querySelectorAll('*').forEach((dialog) => dialog.remove());

  dialog.appendChild(callingDialog);
};

export const showInfoDialog = (preOfferAnswer) => {
  let infoDialog = null;
  if (preOfferAnswer === constants.preOfferAnswer.CALL_REJECTED) {
    infoDialog = elements.getInfoDialog(
      'Call has been Rejected',
      'Callee Rejected your Call'
    );
  }
  if (preOfferAnswer === constants.preOfferAnswer.CALLEE_NOT_FOUND) {
    infoDialog = elements.getInfoDialog(
      'Callee not Found',
      'Please Check Personal Code'
    );
  }
  if (preOfferAnswer === constants.preOfferAnswer.CALL_UNAVAILABLE) {
    infoDialog = elements.getInfoDialog(
      'Call is not Possible',
      'Busy Line, Try Again Later'
    );
  }
  if (infoDialog) {
    const dialog = document.getElementById('dialog');
    dialog.appendChild(infoDialog);
    setTimeout(() => {
      removeAllDialogs();
    }, [3000]);
  }
};

export const removeAllDialogs = () => {
  const dialog = document.getElementById('dialog');
  dialog.querySelectorAll('*').forEach((dialog) => dialog.remove());
};

export const showCallElements = (callType) => {
  if (callType === constants.callType.VIDEO_PERSONAL_CODE) {
    showVideoCallElements();
  }
};

const showVideoCallElements = () => {
  const callButtons = document.getElementById('call_buttons');
  showElement(callButtons);
  const placeHolder = document.getElementById('videos_placeholder');
  hideElement(placeHolder);
  const remoteVideo = document.getElementById('remote_video');
  showElement(remoteVideo);
  const newMessageInput = document.getElementById('new_message');
  showElement(newMessageInput);
  disableDashboard();
};

const micOnImgClass = 'fa-solid , fa-microphone';
const micOffImgClass = 'fa-solid , fa-microphone-slash';

export const updateMicButton = (micActive) => {
  const micButtonImage = document.getElementById('mic_button_image');
  micButtonImage.classList = micActive ? micOffImgClass : micOnImgClass;
};

const cameraOnImgClass = 'fa-solid , fa-video';
const cameraOffImgClass = 'fa-solid , fa-video-slash';

export const updateCameraButton = (cameraActive) => {
  const cameraButtonImage = document.getElementById('camera_button_image');
  cameraButtonImage.classList = cameraActive
    ? cameraOffImgClass
    : cameraOnImgClass;
};

export const appendMessage = (message, right = false) => {
  const messagesContainer = document.getElementById('messages_container');
  const messageElement = right
    ? elements.gerRightMessage(message)
    : elements.getLeftMessage(message);
  messagesContainer.appendChild(messageElement);
};

export const clearMessenger = () => {
  const messagesContainer = document.getElementById('messages_container');
  messagesContainer.querySelectorAll('*').forEach((n) => n.remove());
};

const enableDashboard = () => {
  const dashboardBlocker = document.getElementById('dashboard_blur');
  if (dashboardBlocker.classList.contains('display_none')) {
    dashboardBlocker.classList.remove('display_none');
  }
};

const disableDashboard = () => {
  const dashboardBlocker = document.getElementById('dashboard_blur');
  if (!dashboardBlocker.classList.contains('display_none')) {
    dashboardBlocker.classList.add('display_none');
  }
};

const hideElement = (element) => {
  if (!element.classList.contains('display_none')) {
    element.classList.add('display_none');
  }
};
const showElement = (element) => {
  if (element.classList.contains('display_none')) {
    element.classList.remove('display_none');
  }
};

export const unlockChatSection = () => {
  const chatSection = document.getElementById('chatsection_container');
  if (chatSection.classList.contains('display_none')) {
    chatSection.classList.remove('display_none');
  }
};
