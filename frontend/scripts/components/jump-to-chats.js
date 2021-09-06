// временное решение, пока оставлю в «компонентах»
export function jumpToChats() {
    const button = document.getElementById('button-chat')

    if(button) {
        button.addEventListener('click', () => {
            window.location.href = '/views/pages/chats.html'
        })
    }
}
