/* CRIANÇA M, F
JOVEM M, F
ADULTO M , F
IDOSO M , F
*/

function verify() {
    var date = new Date()
    var year = date.getFullYear()

    let fyear = document.getElementById('txty')
    let res = document.getElementById('res')

    if (fyear.value.length == 0 || Number(fyear.value) > year) {
        res.innerHTML = 'ERRO! Verifique e preencha os dados corretamente e tente novamente!'
    } else {
        let fsex = document.getElementsByName('radsex')
        let yo = year - Number(fyear.value)
        let gender = ''

        let img = document.createElement('img')
        img.setAttribute('id', 'photo')
        
        if (fsex[0].checked) {
            gender = 'Homem'
            if (yo >= 0 && yo < 13) {
                img.src = 'images/child-m.jpg'
                img.setAttribute('src', 'images/child-m.jpg')
            } else {
                if (yo < 18)
                img.setAttribute('src', 'images/young.jpg')
            }
        }
        res.appendChild(img)
        res.innerHTML = `Detectamos ${gender} com ${yo} anos.`
    }
}
