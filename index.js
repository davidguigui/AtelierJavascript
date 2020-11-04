function play () {
  let choice = ['Pierre', 'Feuille', 'Ciseaux']
  let index = Math.floor(Math.random() * choice.length)
  console.log(choice[index])
}

console.log('Une petite partie?')
play()

console.log('Une autre?')
play()

console.log('Une dernière!')
play()
