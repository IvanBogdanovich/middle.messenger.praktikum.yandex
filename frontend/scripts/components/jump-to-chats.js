// временное решение, пока оставлю в «компонентах»
export const jumpToChats = (function() {
    const button = document.getElementById('button-chat') || null

    if(button) {
        button.addEventListener('click', () => {
            window.location.href = '/views/pages/chats.html'
        })
    }
})
