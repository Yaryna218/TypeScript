type TriangleType = "leg" | "hypotenuse" | "adjacent angle" | "opposite angle" | "angle";

function triangle(element1: number, type1: TriangleType, element2: number, type2: TriangleType): string {
    // Список допустимих типів
    const validTypes: TriangleType[] = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];

    // Перевірка правильності типів
    if (validTypes.indexOf(type1) === -1 || validTypes.indexOf(type2) === -1) {
        console.log("Неправильно введений тип.");
        return "failed";
    }

    // Перевірка, що типи не однакові для гіпотенузи
    if (type1 === "hypotenuse" && type2 === "hypotenuse") {
        console.log("Типи не можуть бути однаковими для гіпотенузи.");
        return "failed";
    }

    // Оголошуємо змінні для сторін і кутів
    let sideA = 0, sideB = 0, hypotenuse = 0, angleA = 0, angleB = 0;

    // Перевірка на від'ємні або нульові значення
    if ((type1 === "hypotenuse" && element1 <= 0) || (type2 === "hypotenuse" && element2 <= 0)) {
        return "Error: Гіпотенуза повинна бути більше нуля";
    }
    if ((type1 === "leg" && element1 <= 0) || (type2 === "leg" && element2 <= 0)) {
        return "Error: Катет повинен бути більше нуля";
    }
    if ((type1 === "angle" && (element1 <= 0 || element1 >= 90)) || 
        (type2 === "angle" && (element2 <= 0 || element2 >= 90))) {
        return "Error: Кут повинен бути в діапазоні (0, 90) градусів";
    }

    // Обчислення для різних комбінацій типів
    if (type1 === "leg" && type2 === "leg") {
        // Обидва елементи - катети
        sideA = element1;
        sideB = element2;
        hypotenuse = Math.sqrt(sideA ** 2 + sideB ** 2);
        angleA = Math.atan(sideA / sideB) * (180 / Math.PI);
        angleB = 90 - angleA;
    } else if (type1 === "leg" && type2 === "hypotenuse") {
        // Перший елемент - катет, а другий - гіпотенуза
        sideA = element1;
        hypotenuse = element2;
        if (sideA >= hypotenuse) return "Error: Катет повинен бути меншим за гіпотенузу";
        sideB = Math.sqrt(hypotenuse ** 2 - sideA ** 2);
        angleA = Math.atan(sideA / sideB) * (180 / Math.PI);
        angleB = 90 - angleA;
    } else if (type1 === "hypotenuse" && type2 === "leg") {
        // Перший елемент - гіпотенуза, а другий - катет
        hypotenuse = element1;
        sideA = element2;
        if (sideA >= hypotenuse) return "Error: Катет повинен бути меншим за гіпотенузу";
        sideB = Math.sqrt(hypotenuse ** 2 - sideA ** 2);
        angleA = Math.atan(sideA / sideB) * (180 / Math.PI);
        angleB = 90 - angleA;
    } else if (type1 === "opposite angle" && type2 === "leg") {
        // Протилежний кут і катет
        let oppositeAngle = element1 * (Math.PI / 180); // перетворення в радіани
        let leg = element2;
        hypotenuse = leg / Math.sin(oppositeAngle);
        angleB = 90 - element1;
        angleA = element1;
        sideB = Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(leg, 2));
        sideA = leg;
    } else if (type1 === "leg" && type2 === "opposite angle") {
        // Катет і протилежний кут
        let oppositeAngle = element2 * (Math.PI / 180); // перетворення в радіани
        let leg = element1;
        hypotenuse = leg / Math.sin(oppositeAngle);
        angleB = 90 - element2;
        angleA = element2;
        sideB = Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(leg, 2));
        sideA = leg;
    } else if (type1 === "angle" && type2 === "hypotenuse") {
        // Гострий кут і гіпотенуза
        hypotenuse = element2;
        let givenAngle = element1;
        angleA = givenAngle;
        angleB = 90 - angleA;
        sideA = hypotenuse * Math.sin(angleA * (Math.PI / 180));
        sideB = hypotenuse * Math.cos(angleA * (Math.PI / 180));
    } else if (type1 === "hypotenuse" && type2 === "angle") {
        // Гіпотенуза і гострий кут
        hypotenuse = element1;
        angleA = element2;
        angleB = 90 - angleA;
        sideA = hypotenuse * Math.sin(angleA * (Math.PI / 180));
        sideB = hypotenuse * Math.cos(angleA * (Math.PI / 180));
    } else if (type1 === "adjacent angle" && type2 === "leg") {
        // Прилеглий кут і катет
        const adjacentAngle = element1;
        sideB = element2;
        sideA = sideB * Math.tan(adjacentAngle * (Math.PI / 180));
        hypotenuse = Math.sqrt(sideA ** 2 + sideB ** 2);
        angleA = adjacentAngle;
        angleB = 90 - adjacentAngle;
    } else if (type1 === "leg" && type2 === "adjacent angle") {
        // Катет і прилеглий кут
        const adjacentAngle = element2;
        sideB = element1;
        sideA = sideB * Math.tan(adjacentAngle * (Math.PI / 180));
        hypotenuse = Math.sqrt(sideA ** 2 + sideB ** 2);
        angleA = adjacentAngle;
        angleB = 90 - adjacentAngle;
    } else {
        console.log("Введено невірні типи.");
        return "failed";
    }

    // Перевірка на некоректні значення
    if (hypotenuse <= 0 || sideA <= 0 || sideB <= 0 || angleA <= 0 || angleB <= 0 || angleA >= 90 || angleB >= 90) {
        return "Error: Значення сторін або кутів повинні бути більшими за нуль і меншими за 90 градусів";
    }

    // Виведення результатів
    console.log("Сторони трикутника:");
    console.log(`a = ${sideA.toFixed(2)}`);
    console.log(`b = ${sideB.toFixed(2)}`);
    console.log(`c = ${hypotenuse.toFixed(2)}`);
    console.log(`alpha = ${angleA.toFixed(2)} градусів`);
    console.log(`beta = ${angleB.toFixed(2)} градусів`);
return "success";
}
triangle(3, "leg", 4, "leg");
triangle(3, "leg", 5, "hypotenuse");
triangle(5, "hypotenuse", 3, "leg");
triangle(30, "opposite angle", 3, "leg");
triangle(3, "leg", 30, "opposite angle");
triangle(30, "angle", 5, "hypotenuse");
triangle(5, "hypotenuse", 30, "angle");
triangle(30, "adjacent angle", 3, "leg");
triangle(3, "leg", 30, "adjacent angle");