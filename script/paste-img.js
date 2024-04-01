import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage();

document.addEventListener('paste', async (e) => {
    e.preventDefault();
    const cm = simplemde.codemirror;

    for (const clipboardItem of e.clipboardData.files) {
        if (clipboardItem.type.startsWith('image/')) {
            const storageRef = ref(storage, 'img/'+ new Date().getTime())
            uploadBytes(storageRef, clipboardItem).then((snapshot) => {
                getDownloadURL(storageRef)
                .then((url) => {
                    let cursor = cm.getCursor()
                    cm.replaceRange('![](' + url + ')', cursor)
                }) 
            })
        }
    }
})