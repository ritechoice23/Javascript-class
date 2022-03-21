let age = 0;
let isRighteous = true

document.write('a child is born' + '<br>');

while (age <= 10) {
    if (age == 50 || age == 30 || age == 20) isRighteous = false

    document.write(`you are now ${age} years old <br>`);

    if (isRighteous) {
        document.write(`as at this point your life is safe in the Lord <br>`);
    } else {
        document.write(`DANGER! <br>`);
    }


    age++
    isRighteous = true
}

// do while loop
var count = 0;

document.write("Starting Loop" + "<br />");
do {
    document.write("Current Count : " + count + "<br />");
    count++;
}

while (count == 5);
document.write("Loop stopped!");


// for loop
for (i = 0; i < 5; i++) {
    document.write('yeyeyeyyeyeyeyeyyeyey')
}