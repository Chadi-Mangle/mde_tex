import html2pdf from 'html2pdf.js'

async function CreateBase64Img(url) {
    const image = await fetch(url)
    const blobImage = await image.blob()
    return  URL.createObjectURL(blobImage)
}

export function CreatePDf() {
    const htmlContent = document.getElementsByClassName("editor-preview-side")[0]

    let newContent = htmlContent.cloneNode()
    newContent.innerHTML = htmlContent.innerHTML

    let images = newContent.getElementsByTagName('img')

    for (let image of images) {
        let url = image.src
        CreateBase64Img(url).then((base64img) => {
            image.src = base64img
        })
    }
    
    var opt = {
        margin:       1,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 0.2 },
        html2canvas:  { scale: 2 , useCORS: true },
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'p' },
      };
    html2pdf().set(opt).from(newContent.innerHTML).save()
}