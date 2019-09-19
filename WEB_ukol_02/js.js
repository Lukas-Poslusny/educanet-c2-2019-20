let x = prompt ("Řady: ");
let y = prompt ("Sloupce: ");


for (let i = 0; i < y; i++) {
    document.write('<tr>');
    for (let j = 0; j < x; j++) {
        if (i%2 == j%2) {
            document.write('<td class="white"></td>');
        }
        else {
            document.write('<td class="black"></td>');
        }
    }
    document.write('</tr>')
}

