

// THIS APP ENSURES THAT THE VALUE CAN ONLY INCLUDE HEXADECIMALS AND THAT IT CAN'T BE OVER 6 IN LENGTH 

const strOne = document.querySelector('.inputOne')
const strTwo = document.querySelector('.inputTwo')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    // assigns value to the two input elements
    str1 = strOne.value
    str2 = strTwo.value


    let strMix = [str1, str2]


    if (str1.length < 6) {
        alert('Make sure the first box is 6 characters')
        location.reload()
    }
    if (str2.length < 6) {
        alert('Make sure the second box is 6 characters')
        location.reload()
    }
    // takes the value of the two input elements and converts them into numbers using parseInt
    const color1 = parseInt(str1, 16);
    const color2 = parseInt(str2, 16);
    let avgColor = 0;

    // Verifying if the value of 
    var re = /[0-9A-Fa-f]{6}/g;

    strMix.forEach(() => {
        if (re.test(strMix)) {
        }
        else {
            alert('INCORRECT CHARACTERS, REMEMBER TO USE A-F AND 0-9')
            location.reload()

        }
    })



    for (let i = 0; i < 3; i++) {
        // I struggled a fair bit here and learned more about left shift and right shift bitewise operators
        colorOne = (color1 >> (8 * i)) & 0xff;
        colorTwo = (color2 >> (8 * i)) & 0xff;


        avgColor += parseInt((colorOne + colorTwo) / 2) << 8 * i;
    }
    // THIS WAS MY INITIAL APPROACH BUT WHILE IT CALCULATES THE AVERAGE OF THE THE LINE OF CODE BELOW,  THIS AVERAGE ISN'T THE MIDDLE SPOT BETWEEN THE TWO COLORS.
    // avgColor += Math.floor((color1 + color2) / 2)




    // takes the avgColor sum and converts it back into a string
    let sumReversed = avgColor.toString(16).toUpperCase()

    const result = document.querySelector('.result')
    result.value = `#${sumReversed}`
    const div = document.querySelector('div')

    div.style.backgroundColor = `#${sumReversed}`

    if (sumReversed.length < 6) {
        result.value = 'TRY AGAIN'
    }



}
)
