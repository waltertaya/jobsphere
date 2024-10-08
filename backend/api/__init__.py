from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

from config import Config


db = SQLAlchemy()


def create_app():
    app = Flask(__name__)

    CORS(app)

    app.config.from_object(Config)
    db.init_app(app)

    with app.app_context():
        from api import routes, models
        db.create_all()

    return app
