from . import db

import datetime

class Job(db.Model):

    __tablename__ = 'jobs'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(100), nullable=False)
    type = db.Column(db.String(100), nullable=False)
    location = db.Column(db.String(100), nullable=False)
    salary = db.Column(db.String(100), nullable=False)
    date_posted = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    logo_src = db.Column(db.String(200), nullable=False)
    company = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    requirements = db.Column(db.ARRAY(db.String), nullable=False)
    apply_link = db.Column(db.String(200), nullable=False)
    responsibilities = db.Column(db.ARRAY(db.String), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'type': self.type,
            'location': self.location,
            'salary': self.salary,
            'date_posted': self.date_posted,
            'logoSrc': self.logo_src,
            'postedDays': (datetime.datetime.utcnow() - self.date_posted).days,
            'company': self.company,
            'description': self.description,
            'requirements': self.requirements,
            'applyLink': self.apply_link,
            'responsibilities': self.responsibilities
        }
