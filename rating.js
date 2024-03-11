    const container = document.getElementsByClassName ('BTN_container');
    let star1 = document.getElementById ('btn1');
    let star2 = document.getElementById ('btn2');
    let star3 = document.getElementById ('btn3');
    let star4 = document.getElementById ('btn4');
    let star5 = document.getElementById ('btn5');
    const ratingBox = document.getElementsByClassName ('rating_box');
    const response = document.getElementsByClassName ('response_box');
    const rating = document.getElementById ('star_rated');


function changeColor1() {

    let isClicked = true;

    if (star1.value !== 'true') {
        console.log(star1.value);
        console.log('clicked');
        star1.style.backgroundColor = ('hsl(217, 12%, 63%)');
        star1.style.Color = ('white');
    } else {
        console.log('not clicked');
        isClicked = 'false';
    }
}

function changeColor2() {

    let isClicked = true;

    if (star2.value !== 'true') {
        console.log(star2.value);
        console.log('clicked');
        star2.style.backgroundColor = ('hsl(217, 12%, 63%)');
        star2.style.Color = ('white');
    } else {
        console.log('not clicked');
        isClicked = 'false';
    }
}

function changeColor3() {

    let isClicked = true;

    if (star3.value !== 'true') {
        console.log(star3.value);
        console.log('clicked');
        star3.style.backgroundColor = ('hsl(217, 12%, 63%)');
        star3.style.Color = ('white');
    } else {
        console.log('not clicked');
        isClicked = 'false';
    }
}

function changeColor4() {

    let isClicked = true;

    if (star4.value !== 'true') {
        console.log(star4.value);
        console.log('clicked');
        star4.style.backgroundColor = ('hsl(217, 12%, 63%)');
        star4.style.Color = ('white');
    } else {
        console.log('not clicked');
        isClicked = 'false';
    }
}

function changeColor5() {

    let isClicked = true;

    if (star5.value !== 'true') {
        console.log(star5.value);
        console.log('clicked');
        star5.style.backgroundColor = ('hsl(217, 12%, 63%)');
        star5.style.Color = ('white');
    } else {
        console.log('not clicked');
        isClicked = 'false';
    }
}

function submitResponse() {

    let isClicked = false;

    if (container.value !== 'false') {
        console.log('approved');
        ratingBox.style.display = "none";
        response.style.display = "block";
        rating.innerHTML = '4';
    } else {
        console.log('not approved');
        isClicked = 'true';
    }
}

    // if (star1.value !== 'undefined') {
    //     console.log(star1.value);
    //     console.log('clicked');
    //     star1.style.backgroundColor = ('white');
    // } else if (star2.value !== 'undefined') {
    //     console.log('clicked');
    //     star2.style.backgroundColor = ('white');
    // } else if (star3.value !== 'undefined') {
    //     console.log('clicked');
    //     star3.style.backgroundColor = ('white');
    // } else if (star4.value !== 'undefined') {
    //     console.log('clicked');
    //     star4.style.backgroundColor = ('white');
    // } else if (star5.value !== 'undefined') {
    //     console.log('clicked');
    //     star5.style.backgroundColor = ('white');
    // } else {
    //     console.log('not clicked');
    //     isClicked = 'defined';
    // }

// function submitResponse() {
//     let isSelected = false;


// }

// const btn1 = document.getElementById ('btn1');

// btn1.addEventListener ('click',function() {
//     btn1.style.backgroundColor = "red";
// });