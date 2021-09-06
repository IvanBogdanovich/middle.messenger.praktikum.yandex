export function fileUpload() {
    const fileInput  = document.getElementById('file-input')
    const trigger = document.getElementById('file-trigger')
    const result = document.getElementById('file-result')
  
    trigger.addEventListener('click', function( event ) {
        fileInput.focus()

        return false
    })

    fileInput.addEventListener('change', function( event ) {

        result.innerHTML = this.value
    })
}