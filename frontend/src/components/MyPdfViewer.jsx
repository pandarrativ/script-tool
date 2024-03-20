import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs  } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


function MyPdfViewer(props) {
    const [numPages, setNumPages] = useState(1);
    const [pageNumber, setPageNumber] = useState(1);

  
    return (
      <div> 

        

        <Document file="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6111347" >
          <Page pageNumber={1} />
        </Document>
      </div>
    );
}

export default MyPdfViewer;