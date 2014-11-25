/** @jsx React.DOM */

(function() {
    'use strict';

    var date_before_one_year = '2013-11-23';
    var api_url = 'https://api.flickr.com/services/rest/';
    var params = {
        method: 'flickr.photos.search',
        api_key: '17570926bf4df161849251ae5cdfaa1b',
        user_id: '112437165@N04',
        format: 'json',
        nojsoncallback: '1'
    };

    var App = React.createClass({
        getInitialState: function() {
            return {
                total: undefined
            };
        },
        setPhotoState: function(data) {
            this.setState({
                total: parseInt(data.photos.total, 10)
            });
        },
        componentDidMount: function() {
            var that = this;

            $.ajax(api_url, {
                dataType: 'json',
                data: params,
                success: that.setPhotoState,
                error: function() {
                }
            });
        },
        render: function() {
            var link;

            if(typeof this.state.total !== 'undefined') {
                link = (
                    <a href={api_url}>{this.state.total}</a>
                );
            }
            return (
                <p>{link}</p>
            );
        }
    });

    React.renderComponent(
        <App />,
        document.getElementById('contents')
    );

}());
