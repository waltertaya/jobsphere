from auth import create_app
from auth.routes import register_routes

app = create_app()
register_routes(app)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)
