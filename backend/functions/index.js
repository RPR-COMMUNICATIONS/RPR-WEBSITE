/**
 * TS-Λ3 // OLLIE FUNCTIONS ENTRYPOINT [v1.0.0]
 * Path: backend/functions/index.js
 * Mission: Export Ollie Chat specialist for Firebase Functions runtime.
 */

const { ollieChat } = require('./olliechat.js');

exports.ollieChat = ollieChat;
