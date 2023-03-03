function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    if (minutos == 0){
        msg.innerHTML = `Agora são <strong>${hora} horas</strong>.`
    } else if (minutos == 1) {
        msg.innerHTML = `Agora são <strong>${hora} horas</strong> e <strong>${minutos} minuto</strong>.`
    } else {
        msg.innerHTML = `Agora são <strong>${hora} horas</strong> e <strong>${minutos} minutos</strong>.`
    }
    if (hora >= 0 && hora < 6) {
        // BOA MADRUGADA!
        img.src = 'madrugada.png'
        document.body.style.background = '#020420'
    } else if (hora >= 6 && hora < 12) {
        // BOM DIA!
        img.src = 'manha.png'
        document.body.style.background = '#ECDDBA'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#F69960'
    } else {
        // BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#4D3B61'
    }
}