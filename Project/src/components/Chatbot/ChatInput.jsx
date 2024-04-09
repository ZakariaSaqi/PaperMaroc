import React from "react";
import { motion } from "framer-motion"
function ChatInput() {
  return (
    <motion.div 
    initial={{  y: 60 }}
    animate={{  y: 0 }}
    transition={{ delay: 3 }}
    className="fixed-bottom pt-5 pb-1 px-3 px-lg-5  d-flex align-items-center">
      <i
        className="fa-solid fa-microphone pe-2"
        id="MicroButton"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#actionModel"
      ></i>
      <input
      rows="5"
        id="textSpeech"
        className="form-control no-outline rounded-start-4 rounded-end-0"
        placeholder="Entrez votre question"
        required
      />

      <div className="input-group-append">
        <button
          id="sendQuestionButton"
          className="btn btn-blue chatinput no-outline rounded-start-0 rounded-end-4"
        >
          <span>Envoyer</span>
        </button>
      </div>
    </motion.div>
  );
}

export default ChatInput;
