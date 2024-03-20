wsgi_app = "backend.wsgi:application"
bind = "0.0.0.0:8000"  # Set the IP and port for your Django application
workers = 4  # Adjust the number of workers based on your server's resources
timeout = 120
daemon = True
