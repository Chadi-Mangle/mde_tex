var simplemde = new SimpleMDE({
    autosave: {
    enabled: true,
    uniqueId: "autoSaveID",
    delay: 1000,
},
    toolbar: ["side-by-side",
    "|",
    {
            name: "custom", 
            
            action: function ImportMD(){
                let input = Object.assign(document.createElement("input"), 
                {
                    type: 'file',
                    accept: ".md",
                    style: "display:none",
                    
                })

                document.body.appendChild(input)

                input.click()

                input.addEventListener('change', ()=>{
                    let filereader = new FileReader()
                    filereader.readAsText(input.files[0])
                    filereader.onload = function(){
                        let filedata = filereader.result   
                        simplemde.value(filedata)
                    }
                })
                URL.revokeObjectURL(input)
                input.remove()
            },
            
            className: "fa fa-cloud-upload",
            title: "Import Markdown"
    },
    {
            name: "custom", 
            
            action: function ExportMD(){
                let text = simplemde.value()
                let blob = new Blob([text], {type:"octet-stream"})
                let href = URL.createObjectURL(blob)

                let a = Object.assign(document.createElement("a"), 
                {
                    href,
                    style: "display:none", 
                    download: "export.MD"
                })

                document.body.appendChild(a)

                a.click()
                URL.revokeObjectURL(href)
                a.remove()
            },
            
            className: "fa fa-cloud-download",
            title: "Export Markdown"
    },
    {
            name: "custom",

            action: function customFunction(editor){
                
            },
            
            className: "fa fa-file-pdf-o",
            title: "Download PDF",
        },
    
    ],
});

simplemde.toggleSideBySide()
simplemde.toggleFullScreen()