import React from 'react';

function PDFViewer({pdfUrl}) {
  return (
    <div>
      <iframe
        title="PDF Viewer"
        src={pdfUrl}
       className='pdf'
      />
    </div>
  );
}

export default PDFViewer;
