from flask import jsonify, request, abort
from functools import wraps

from .models import Job
from . import db

import dotenv
import os
import datetime

dotenv.load_dotenv()

API_KEY = os.getenv('API_KEY')


def register_routes(app):

    def require_api_key(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            if request.headers.get('x-api-key') == API_KEY:
                return func(*args, **kwargs)
            else:
                # abort(401, description="Unauthorized. Invalid or missing API key.")
                return jsonify({'error': 'Unauthorized. Invalid or missing API key.'}), 401
        return wrapper

    @app.route('/jobs', methods=['POST'])
    @require_api_key
    def create_job():
        data = request.json
        if isinstance(data, list):
            jobs = []
            for job in data:
                new_job = Job(
                    title=job['title'],
                    type=job['type'],
                    location=job['location'],
                    salary=job['salary'],
                    logo_src=job['logo_src'],
                )
                jobs.append(new_job)
            try:
                db.session.add_all(jobs)
                db.session.commit()
                return {'message': 'Jobs created successfully'}, 201
            except Exception as e:
                db.session.rollback()
                return jsonify({'error': str(e)}), 500 
        else:
            new_job = Job(
                title=data['title'],
                type=data['type'],
                location=data['location'],
                salary=data['salary'],
                logo_src=data['logo_src']
            )
            try:
                db.session.add(new_job)
                db.session.commit()
                return {'message': 'Job created successfully'}, 201
            except Exception as e:
                db.session.rollback()
                return jsonify({'error': str(e)}), 500
    
    @app.route('/jobs', methods=['GET'])
    @require_api_key
    def get_jobs():
        jobs = Job.query.all()
        return jsonify([job.to_dict() for job in jobs])
    
    @app.route('/jobs/<int:job_id>', methods=['GET'])
    @require_api_key
    def get_job(job_id):
        job = Job.query.get(job_id)
        if job:
            return jsonify(job.to_dict())
        return {'error': 'Job not found'}, 404
    
    @app.route('/jobs/<int:job_id>', methods=['PUT'])
    @require_api_key
    def update_job(job_id):
        job = Job.query.get(job_id)
        if job:
            data = request.json
            job.title = data['title']
            job.type = data['type']
            job.location = data['location']
            job.salary = data['salary']
            job.logo_src = data['logo_src']
            try:
                db.session.commit()
                return {'message': 'Job updated successfully'}, 200
            except Exception as e:
                db.session.rollback()
                return jsonify({'error': str(e)}), 500
        return {'error': 'Job not found'}, 404
    
    @app.route('/jobs/<int:job_id>', methods=['DELETE'])
    @require_api_key
    def delete_job(job_id):
        job = Job.query.get(job_id)
        if job:
            try:
                db.session.delete(job)
                db.session.commit()
                return {'message': 'Job deleted successfully'}, 200
            except Exception as e:
                db.session.rollback()
                return jsonify({'error': str(e)}), 500
        return {'error': 'Job not found'}, 404
