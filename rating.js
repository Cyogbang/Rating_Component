function submitResponse() {
    const response = document.getElementsByClassName ('response_box');
    const rating_box = document.getElementsByClassName ('rating_box');
    const rating = document.getElementById ('star_rated');
    const star1 = document.getElementById ('oneStar');
    const star2 = document.getElementById ('twoStar');
    const star3 = document.getElementById ('threeStar');
    const star4 = document.getElementById ('fourStar');
    const star5 = document.getElementById ('fiveStar');

    let isActive = true;

    if (star1.value === true) {
        rating_box.style.display = 'none';
        response.style.display = 'block';
        // rating.innerHTML = '1';
        isActive = false;
    // } else if (gh) {
        
    // } else if (gh) {
        
    // } else if (gh) {
        
    } else {
        rating_box.style.display = 'block';
        response.style.display = 'none';
        // rating.innerHTML = '';
    }
}