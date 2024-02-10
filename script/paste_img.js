document.addEventListener('paste', async (e) => {
    e.preventDefault();
    const cm = simplemde.codemirror;

    for (const clipboardItem of e.clipboardData.files) {
        if (clipboardItem.type.startsWith('image/')) {
            let img_url = URL.createObjectURL(clipboardItem);
            console.log(img_url);

            let cursor = cm.getCursor()
            cm.replaceRange('![](' + img_url + ')', cursor)
        }
    }
});