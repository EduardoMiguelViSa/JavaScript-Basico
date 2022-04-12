let hasta = 10;

bucle:
    for (i = 0; i <= hasta; i++) {
        if (i <= 1 || i === 4) {
            console.log(" Esta es la iteración número " + i + ".");
            continue bucle;
        }
        for (x = 2; x < i/2; x++) {
            if (i%x === 0) {
                console.log(" Esta es la iteración número " + i + ".");
                continue bucle;
            }
        }
        console.log(" Número primo "+ i + ".")
    }