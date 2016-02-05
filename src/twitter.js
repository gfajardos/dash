var twitter = require('ntwitter');

var twit = new twitter({
    consumer_key: 'j8WPrKMgojK3p68pkfggQ',
    consumer_secret: 'iG2eiXtnRvwjy9AjcHcKNBn4pNzvIC5rDs9HRHskM',
    access_token_key: '194080737-XlBhnZKczbY5OxShe0BTAvY70uJ9f8atbbKjbecI',
    access_token_secret: 'ULhVIDM1q7ofD7yi3uk7Zcq6LlVA3xLj2pFi6dqo0N8'
});

twit
    .verifyCredentials(function (err, data) {
        console.log(data);
    })
    .updateStatus('Test tweet from ntwitter/' + twitter.VERSION,
        function (err, data) {
            console.log(data);
        }
    );


var Search = function() {

};

// Parses the specified text.
Search.prototype.search = function (text){
    return twit.search(text, {}, function(err, data) {
        return data;
    });
};

module.exports = Search;