from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy


def register_app():
    app = Flask(__name__)

    CORS(app)

    return app
