const btn = document.querySelector('button')
btn.onclick = function(){
    import('./hello.js').then(module => {
        module.hello()
    })
}