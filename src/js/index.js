document.getElementById('pegar-conselho').addEventListener('click', () => {
    pegarUmConselhoAleatorio()
})

async function criarUmConselho() {
    const url = 'https://api.adviceslip.com/advice'
    const resposta = await fetch(url)
    return await resposta.json()
}

async function pegarUmConselho(slip_id) {
    const url = `https://api.adviceslip.com/advice/${slip_id}`
    const resposta = await fetch(url)
    return await resposta.json()
}

async function pegarUmConselhoAleatorio(){
    const conselho = await criarUmConselho()
    document.getElementById('conselho').innerHTML = `"${conselho.slip.advice}"`
}

pegarUmConselhoAleatorio()