let nome = "Desbravador"
let xp = 10002
let nivel = ""
let errMsg = "Erro na Classificação de Nível."

if (xp <=1000) {
  nivel = "Ferro"
} else if ( 1001 <= xp && xp <= 2000) {
  nivel = "Bronze"
} else if ( 2001 <= xp && xp <= 5000) {
  nivel = "Prata"
} else if ( 5001 <= xp && xp <= 7000) {
  nivel = "Ouro"
} else if ( 7001 <= xp && xp <= 8000) {
  nivel = "Platina"
} else if ( 8001 <= xp && xp <= 9000) {
  nivel = "Ascendente"
} else if ( 9001 <= xp && xp <= 10000) {
  nivel = "Imortal"
} else if ( 10001 <= xp) {
  nivel = "Radiante"
}

let msg = `"O Herói de nome **${nome}** está no nível de **${nivel}**"`
if (nivel != "") {
  console.log(msg)
} else {
  console.log(errMsg)
}
