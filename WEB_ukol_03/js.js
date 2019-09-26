let x = prompt ("X souřadnice: ");
let y = prompt ("Y souřadnice: ");

let distance = Math.sqrt(x*x + y*y);

if (distance > 5)
    document.write("<span style=\"background-color:green\">Bod [" + x + "," + y + "] není v dostřelu dělové věže</span>");
else if (distance <= 5)
    document.write("<span style=\"background-color:red\">Bod [" + x + "," + y + "] je v dostřelu dělové věže</span>");