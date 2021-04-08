let actualDate = new Date();
let year  = actualDate.getFullYear()
let month = actualDate.getMonth()
let day = actualDate.getDate()
let weekDay  = actualDate.getDay()
let hour  = actualDate.getHours()
let min   = actualDate.getMinutes()

function parseGreeting(hour){
    if (hour >= 5 && hour < 12)
        return "Bom dia!";
    else if (hour >= 12 && hour <= 18)
        return "Boa tarde!";
    else return  "Boa noite!";
}
console.log(parseGreeting(hour))

daysArray = ["domingo","segunda-feira","terça-feira",
             "quarta-feira","quinta-feira","sexta-feira","sábado"]

monthsArray = ["janeiro","fevereiro","março","abril","maio","junho",
               "julho","agosto","setembro","outubro","novembro","dezembro"]

let finalString = `${parseGreeting(hour)} Hoje é ${daysArray[weekDay]}, ${day} de ${monthsArray[month]} de ${year} – ${hour}:${min}hs.`
console.log(finalString)

let div = document.createElement('p');
div.textContent = finalString;
document.body.appendChild(div);