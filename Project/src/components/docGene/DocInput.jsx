import React from 'react'
import { motion } from "framer-motion";
function DocInput() {
  return (
    <motion.div
      initial={{ y: 60 }}
      animate={{ y: 0 }}
      transition={{ delay: .5}}
      className="mt-2 mb-2 px-3 px-lg-5  d-flex h-10 align-items-center"
    >
      <input
        rows="5"
        id="textSpeech"
        className="form-control no-outline rounded-start-4 rounded-end-0"
        placeholder="Type here .. "
        required
      />

      <div className="input-group-append">
        <button
          id="sendQuestionButton"
          className="btn btn-blue chatinput no-outline rounded-start-0 rounded-end-4"
        >
          <span>Generate</span>
        </button>
      </div>
    </motion.div>
  )
}

export default DocInput