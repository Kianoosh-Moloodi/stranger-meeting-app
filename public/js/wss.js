import * as store from './store.js';
import * as ui from './ui.js';
import * as WebRTCHandler from './webRTC.js';
import * as constants from './constants.js';

let socketIO = null;

export const registerSocketEvents = (socket) => {
  socketIO = socket;
  socket.on('connect', () => {
    console.log('Succesfully Connected to the Socket.io Server!');
    store.setSocketId(socket.id);
    ui.updatePersonalCode(socket.id);
  });
  socket.on('pre-offer', (data) => {
    WebRTCHandler.handlePreOffer(data);
  });

  socket.on('pre-offer-answer', (data) => {
    WebRTCHandler.handlePreOfferAnswer(data);
  });

  socket.on('webRTC-signals', (data) => {
    switch (data.type) {
      case constants.webRTCSignals.OFFER:
        WebRTCHandler.handleWebRTCOffer(data);
        break;
      case constants.webRTCSignals.ANSWER:
        WebRTCHandler.handleWebRTCAnswer(data);
        break;
      case constants.webRTCSignals.ICE_CANDIDATE:
        WebRTCHandler.handleWebRTCCandidate(data);
      default:
        return;
    }
  });
};

export const sendPreOffer = (data) => {
  socketIO.emit('pre-offer', data);
};

export const sendPreOfferAnswer = (data) => {
  socketIO.emit('pre-offer-answer', data);
};

export const sendDataUsingWebRTCSignals = (data) => {
  socketIO.emit('webRTC-signals', data);
};
