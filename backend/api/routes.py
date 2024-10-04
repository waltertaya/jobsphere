from .models import Job
from flask import request


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
            Job.save_all(jobs)
            return {'message': 'Jobs created successfully'}, 201
        else:
            new_job = Job(
                title=data['title'],
                location=data['location'],
                salary=data['salary'],
                logo_src=data['logo_src']
            )
            new_job.save()
            return {'message': 'Job created successfully'}, 201
