from .model import User
from . import db

from werkzeug.security import generate_password_hash, check_password_hash

from flask import request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

def register_routes(app):

    jwt = JWTManager(app)

    @app.route('/auth/v1/register', methods=['POST'])
    def register():
        data = request.get_json()

        user = User.query.filter_by(email=data['email']).first()

        if user:
            return jsonify({'message': 'User already exists'}), 400

        new_user = User(name=data['name'], email=data['email'], password=generate_password_hash(data['password']))

        db.session.add(new_user)
        db.session.commit()

        return jsonify({'message': 'User created successfully'}), 201
    
    @app.route('/auth/v1/login', methods=['POST'])
    def login():
        data = request.get_json()

        user = User.query.filter_by(email=data['email']).first()

        if not user or not check_password_hash(user.password, data['password']):
            return jsonify({'message': 'Invalid credentials'}), 401

        access_token = create_access_token(identity=user.id)

        return jsonify(access_token=access_token), 200
    
    @app.route('/auth/v1/profile', methods=['GET'])
    @jwt_required()
    def profile():
        current_user = get_jwt_identity()

        user = User.query.get(current_user)

        return jsonify(user.to_dict()), 200
