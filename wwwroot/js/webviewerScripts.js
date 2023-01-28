window.webviewerFunctions = {
    initWebViewer: function (pdfFilePath) {
        const viewerElement = document.getElementById('viewer');
        WebViewer({
            path: 'lib',
            initialDoc: pdfFilePath, 
        }, viewerElement).then((instance) => {
            // call apis here
        })
    }
};
