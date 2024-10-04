from . import db

import datetime


class Job(db.Model):

    __tablename__ = 'jobs'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(100), nullable=False)
    location = db.Column(db.String(100), nullable=False)
    salary = db.Column(db.String(100), nullable=False)
    date_posted = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    logo_src = db.Column(db.String(200), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'location': self.location,
            'salary': self.salary,
            'date_posted': self.date_posted,
            'logo_src': self.logo_src
        }
    
    @staticmethod
    def save_all(jobs):
        try:
            db.session.bulk_save_objects(jobs)
            db.session.commit()
        except Exception as e:
            db.session.rollback()
            raise e
