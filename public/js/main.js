import * as store from './store.js';
import * as wss from './wss.js';
import * as WebRTCHandler from './webRTC.js';
import * as constants from './constants.js';
import * as ui from './ui.js';
import * as recordingUtils from './recordingUtils.js';

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

const micButton = document.getElementById('mic_button');
micButton.addEventListener('click', () => {
  const localStream = store.getState().localStream;
  const micEnabled = localStream.getAudioTracks()[0].enabled;
  localStream.getAudioTracks()[0].enabled = !micEnabled;
  ui.updateMicButton(micEnabled);
});

const cameraButton = document.getElementById('camera_button');
cameraButton.addEventListener('click', () => {
  const localStream = store.getState().localStream;
  const cameraEnabled = localStream.getVideoTracks()[0].enabled;
  localStream.getVideoTracks()[0].enabled = !cameraEnabled;
  ui.updateCameraButton(cameraEnabled);
});

const switchForScreenSharingButton = document.getElementById(
  'screen_sharing_button'
);
switchForScreenSharingButton.addEventListener('click', () => {
  const screenSharingActive = store.getState().screenSharingActive;
  WebRTCHandler.switchBetweenCameraAndScreenSharing(screenSharingActive);
});

const newMessageInput = document.getElementById('new_message_input');
newMessageInput.addEventListener('keydown', (e) => {
  console.log('change occured');
  const key = e.key;
  if (key === 'Enter') {
    WebRTCHandler.sendMessageUsingDataChannel(e.target.value);
    ui.appendMessage(e.target.value, true);
    newMessageInput.value = '';
  }
});

const sendMessageButton = document.getElementById('send_message_button');
sendMessageButton.addEventListener('click', () => {
  const message = newMessageInput.value;
  WebRTCHandler.sendMessageUsingDataChannel(message);
  ui.appendMessage(message, true);
  newMessageInput.value = '';
});

const startRecordingButton = document.getElementById('start_recording_button');
startRecordingButton.addEventListener('click', () => {
  recordingUtils.startRecording();
  ui.showRecordingPanel();
});

const stopRecordingButton = document.getElementById('stop_recording_button');
stopRecordingButton.addEventListener('click', () => {
  recordingUtils.stopRecording();
  ui.resetRecordingButtons();
});

const pauseRecordingButton = document.getElementById('pause_recording_button');
pauseRecordingButton.addEventListener('click', () => {
  recordingUtils.pauseRecording();
  ui.switchRecordingsButtons(true);
});

const resumeRecordingButton = document.getElementById(
  'resume_recording_button'
);
resumeRecordingButton.addEventListener('click', () => {
  recordingUtils.resumeRecording();
  ui.switchRecordingsButtons();
});

const hangUpButton = document.getElementById('hang_up_button');
hangUpButton.addEventListener('click', () => {
  WebRTCHandler.handleHangUp();
});
