/** @jsx React.DOM */

(function() {
    'use strict';

    var api_key = '17570926bf4df161849251ae5cdfaa1b';
    var user_id = '112437165@N04';
    var date_before_one_year = '2013-11-23';
    var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + api_key + '&user_id=' + user_id + '&format=json&nojsoncallback=1';

    var App = React.createClass({
        render: function() {
            return (
                <p>{url}</p>
            );
        }
    });

    React.renderComponent(
        <App />,
        document.getElementById('contents')
    );

}());
