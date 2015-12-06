// Settings for Instagram plugin
$(function() {

    // Checks to see if a users handle has been set or not and updates variable is so.
    chrome.storage.sync.get('user', function(handleName) {
        var handle = "samjage";

        if(handleName.user) {
            var handle = (handleName.user);
        }

        $('.my-instashow').instaShow({
            accessToken: '47389409.745c638.11ecb4d9ac2f4a63ad1ff32d3ab2e34f',
            source: '@' + handle,
            width: '100%',
            height: 'auto',
            direction: 'vertical',
            columns: '6',
            rows: '10',
            limit: '80',
            arrowsControl: false,
            scrollControl: false,
            dragControl: false,
            scrollbar: false,
            lang: 'en',
            popupInfo: 'username, instagramLink, likesCounter, commentsCounter, location, passedTime, description, comments'
        });
    });

    // Set handle and clears field.
    $('.user-info__submit').click(function() {
        var newHandle = $('.user-info__handle').val();

        chrome.storage.sync.set({'user' : newHandle}, function() {
            $('.user-info__handle').val('');
        });
    });
});
























/*
function saveOptions() {
    chrome.storage.sync.set("handleName", function (obj) {
        var handle = obj.handleName; 
    });
}

$(function() {
    $('.info__submit').click(function(handleName){
        chrome.storage.sync.get('user', function(handleName)) {
            var newTotal = 0;

            if(handleName.total) {
                newTotal += (handleName.total);
            }

            var amount = $('#amount').val();
            if(amount) {
                newTotal += (amount);
            }

            chrome.storage.sync.set({'user' : handleName});
            $('#total').text(newTotal);
            $('#amount').val('');
        }
    });
});

function eraseOptions() {
    chrome.storage.sync.remove("handleName", function (obj) {
        message('Settings saved');
    });
}
*/