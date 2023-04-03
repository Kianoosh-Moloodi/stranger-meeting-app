import * as store from './store.js';
import * as wss from './wss.js';
import * as WebRTCHandler from './webRTC.js';
import * as constants from './constants.js';

const socket = io('/');
wss.registerSocketEvents(socket);

WebRTCHandler.getLocalPreview();

const personalCodeCopyButton = document.getElementById(
  'personal_code_copy_button'
);

personalCodeCopyButton.addEventListener('click', () => {
  const personalCode = store.getState().socketId;
  navigator.clipboard && navigator.clipboard.writeText(personalCode);
  personalCodeCopyButton.classList.toggle('copy_button_click_effect');
});

const personalCodeVideoButton = document.getElementById(
  'personal_code_video_button'
);

personalCodeVideoButton.addEventListener('click', () => {
  const calleePersonalCode = document.getElementById(
    'personal_code_input'
  ).value;
  const callType = constants.callType.VIDEO_PERSONAL_CODE;
  WebRTCHandler.sendPreOffer(callType, calleePersonalCode);
});
