$(document).ready(function() {
    $('.my-instashow').instaShow({
        accessToken: '47389409.745c638.11ecb4d9ac2f4a63ad1ff32d3ab2e34f',
        source: '@delatoni',
        width: '100%',
        height: '100%',
        direction: 'vertical',
        //columns: '6',
        //rows: '6',
        arrowsControl: 'false',
        scrollControl: 'true',
        lang: 'en',
        popupInfo: 'username, instagramLink, likesCounter, commentsCounter, location, passedTime, description, comments'
    });
});