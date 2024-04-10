import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import samplePDF from './ChapitrePolymorphisme.pdf'; 

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function handleDownload() {
    window.open(samplePDF); 
  }

  return (
    <>
      <Document className="mb-3"
        file={samplePDF}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          pageNumber={pageNumber}
          width={500} 
          height={500}
        />
      </Document>
      <button className='btn btn-blue btn-sm rounded-5 px-5' onClick={handleDownload}>Download PDF</button>
    </>
  );
}

export default PDFViewer;
