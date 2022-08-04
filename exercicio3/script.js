let nacionalidade = prompt(`Escreva aqui sua nacionalidade entre as seguintes opções:
brasileira;
argentina;
uruguaia;
chilena;
colombiana;
Outra.`).toLowerCase() //= adicione o prompt aqui

if (nacionalidade === 'brasileira') {
    alert(`Sua nacionalidade é: ${nacionalidade[0].toUpperCase()}${nacionalidade.substring(1)}`)
    
} else if (nacionalidade === 'argentina') {
    alert(`Sua nacionalidade é: ${nacionalidade[0].toUpperCase()}${nacionalidade.substring(1)}`)
} else if (nacionalidade === 'uruguaia') {
    alert(`Sua nacionalidade é: ${nacionalidade[0].toUpperCase()}${nacionalidade.substring(1)}`)

} else if (nacionalidade === 'chilena') {
    alert(`Sua nacionalidade é: ${nacionalidade[0].toUpperCase()}${nacionalidade.substring(1)}`)

} else if (nacionalidade === 'colombiana') {
    alert(`Sua nacionalidade é: ${nacionalidade[0].toUpperCase()}${nacionalidade.substring(1)}`)

} else {
    alert('Você não é de nenhuma das nacionalidades listadas.')
};