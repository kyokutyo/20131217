from datetime import date
from flask import Flask, jsonify, render_template

app = Flask(__name__)
app.config['DEBUG'] = True

# Note: We don't need to call run() since our application is embedded within
# the App Engine WSGI application server.


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/data.json')
def json():
    birthday = date(2013, 12, 17)
    time_after_birth = abs(date.today() - birthday)
    return jsonify(
        days=str(time_after_birth.days),
    )


@app.errorhandler(404)
def page_not_found(e):
    """Return a custom 404 error."""
    return 'Sorry, nothing at this URL.', 404
