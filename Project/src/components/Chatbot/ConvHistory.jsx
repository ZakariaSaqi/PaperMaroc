import React from "react";
import NewConvButton from "./NewConvButton";

function ConvHistory({conversationsHistory}) {
  return (
    <div className="conversation-history-container  mb-4 mb-lg-0 ">
        {conversationsHistory.map((item, index) => (
          <a
            key={index}
            className="sidebar-box p-2 mb-2 rounded-4 d-flex  align-items-center "
          >
            <div className="d-flex flex-column">
              <p className="sidebar-text ">
                {item.title} 
              </p>
              <p className="conv-date">
                {item.conversation}
              </p>
            </div>
          </a>
        ))}
      </div>
  );
}

export default ConvHistory;
