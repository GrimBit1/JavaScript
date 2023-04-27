//-- Session Storage
//* session storage is just like localstorage but it only exists until one session
// it deletes after closing the tab
sessionStorage.setItem('name', 'Aditya')

//* All methods are like localStorage
// getItem
// setItem
// removeItem
// clear
// key

// Event listenser on storage
window.addEventListener('storage',(e) => {
    alert('Changed')
    console.log(e);
})
localStorage.setItem('name', 'Aditya')
