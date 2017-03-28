/**
 * Created by fabio on 26/02/15.
 */
var Twit = require('twit');
var client = new Twit({
  consumer_key: '3Rl61VPHEiY9rRyLKVQkBwGEW',
  consumer_secret: 'tC5UjYUMG506FcQivaojcpG3O3r05KO3O9wEGt6Z1KH3DA9vwq',
  access_token: '2462253177-QPr4kBkIhH3ZGOOeg0DFjg4LfdLaZkLtgSt7eLo',
  access_token_secret: 'bPyj6sY3ok2aGnfTTwH3FsNExRUfnVlOkWjIHNXNHZmEj'
});


//  search twitter for all tweets containing the word 'banana'
// since Nov. 11, 2011
client.get('search/tweets', { q: 'banana since:2011-11-11', count: 100 },
            function(err, data, response) {
                for (var indx in data.statuses) {
                    var tweet= data.statuses[indx];
                    console.log('on: ' + tweet.created_at + ' : @' + tweet.user.screen_name + ' : ' + tweet.text+'\n\n');
                }

            })
