import React, { useEffect } from "react";
import { motion } from "framer-motion";
import hljs from "highlight.js";
import {marked} from "marked";


function highlightCode() {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
}

function Conversation({data ,response, question, date}) {
  useEffect(() => {
    highlightCode();
  }, []);
  useEffect(() => {
    highlightCode();
  }, [data]);
  const containsCodeBlock = response.includes("```");

  let htmlContent;
  if (containsCodeBlock) {
    htmlContent = marked(response, {
      gfm: true, 
      breaks: true,
      smartLists: true,
    });
  } else {
    htmlContent = response;
  }

  return (
   <>
    <motion.p
        initial={{ x: "150vh" }}
        animate={{ x: 0 }}
        transition={{ delay: 2, type: "spring", stiffness: 50 }}
        className="text-center chat-date mb-2"
      >
       {date}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring" }}
        className="chat-box  d-flex flex-row mb-2  align-items-start "
      >
        <i className="fa-solid fa-user mt-2 me-4"></i>
        <div className="px-3 py-2 sent user rounded-4  ">
          <p className="chat-text">{question}</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="chat-box  d-flex flex-row mb-2  align-items-start"
      >
        <i className="fa-solid fa-robot mt-2 me-3"></i>
        <div className="px-3 py-2 sent robot  rounded-4  ">
          <p id="copyText" className="mb-4 chat-text">
            {containsCodeBlock ? (
              <pre>
                <code className="language-javascript" dangerouslySetInnerHTML={{ __html: htmlContent }} />
              </pre>
            ) : (
              <span dangerouslySetInnerHTML={{ __html: htmlContent }} />
            )}
          </p>

          <span
            id="copyButton"
            className="no-outline copy-btn cursor-pointer"
          >
            Copier
          </span>
        </div>
      </motion.div>
      </>
  );
}

export default Conversation;
