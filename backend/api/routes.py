from flask import jsonify, request
from .models import Job
from . import db


def register_routes(app):
    @app.route('/jobs', methods=['POST'])
    def create_job():
        data = request.json
        if isinstance(data, list):
            jobs = []
            for job in data:
                new_job = Job(
                    title=job['title'],
                    location=job['location'],
                    salary=job['salary'],
                    logo_src=job['logo_src']
                )
                jobs.append(new_job)
            print(jobs)
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
