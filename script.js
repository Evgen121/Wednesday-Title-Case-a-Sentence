function titleCase(str) {
    let newArray = [];
    let arr = str.split(' '); //  КАЖДОЕ СЛОВО МАСИВА ДЕЛАЕМ  ОТДЕЛЬНО МАСИВОМ 
    for (let i = 0; i < arr.lenght; i++) {
        let firstLetter = arr[i][0].toUpperCase() //ВСЕ БУКВЫ В ТЕКСТЕ МАЛЕНЬКИЕ 
        let TheRest = arr[i].slice(1).toLowerCase() // пЕРВЫЕ БУКВЫ БОЛЬШИЕ 
        let newWord = firstLetter + TheRest; // обьеденять заглавные буквы с словом 
        newArray.push(newWord);


    }
    let joinNew = newArray.join(' ')
    console.log(joinNew)

}
titleCase("sHoRt AnD sToUt")