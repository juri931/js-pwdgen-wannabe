//1
const firstName = prompt('Qual è il tuo nome?');
// console.log(`Il nome è ${firstName}`);

//2
const lastName = prompt('Qual è il tuo cognome?');
// console.log(`Il cognome è ${lastName}`);

//3
const color = prompt('Qual è il tuo colore preferito?');
// console.log(`Il colore preferito è ${color}`);

//4
const pass = firstName + lastName + color + 24;
console.log(pass);

//5
document.getElementById('pass').innerHTML =
`
<p>
  La tua 
  <u style="color: red">insicurissima</u>
  password è: <b>${pass}</b><br />
  Ecco i dati inseriti:<br />
  Nome: ${firstName}<br />
  Cognome: ${lastName}<br />
  Colore Preferito: ${color}
</p>
`