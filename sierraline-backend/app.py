#!/usr/bin/env python3

from flask import Flask, request, jsonify render_template redirect, url_for, session
import mysql.connector
from flask_bcrypt import Bcrypt
import secrets

app = Flask(__name__)
# Generating a random secret key with 32 bytes (256 bits)
app.secret_key = secrets.token_hex(32)

# Initializing Bcrypt for password hashing
bcrypt = Bcrypt(app)

# Replace these values with your MySQL database configuration
db_config = {
    "host": "localhost",
    "user": "sierraline_1",
    "password": "16@Kehinde123",
    "database": "sierraline_1db",
}

# Establish a connection to the MySQL database
db = mysql.connector.connect(**db_config)
cursor = db.cursor()

# Endpoint for user registration
@app.route('/register', methods=['POST'])
def register_user():
    data = request.get_json()

    # Extract user data
    first_name = data.get('firstName')
    last_name = data.get('lastName')
    email = data.get('email')
    password_hash = data.get('password_hash')

    # Insert user data into the database
    try:
        query = "INSERT INTO users (firstName, lastName, email, password_hash) VALUES (%s, %s, %s, %s)"
        cursor.execute(query, (first_name, last_name, email, password_hash))
        db.commit()
        return jsonify({"message": "User registered successfully"}), 201
    except Exception as e:
        print(f"Error: {e}")
        db.rollback()
        return jsonify({"error": "Failed to register the user"}), 500

    @app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        # Fetch user data from the database
        cursor = db.cursor(dictionary=True)
        cursor.execute('SELECT * FROM users WHERE email = %s', (email,))
        user = cursor.fetchone()

        if user and bcrypt.check_password_hash(user['password_hash'], password):
            # Set user session
            session['user_id'] = user['user_id']
            return redirect(url_for('dashboard'))

    return render_template('login.html')

@app.route('/dashboard')
def dashboard():
    # Add code to retrieve user data from the database
    return render_template('dashboard.html')

@app.route('/place_order', methods=['POST'])
def place_order():
    # Add code to generate a unique tracking number and store order in the database
    return jsonify({'success': True, 'message': 'Order placed successfully'})

@app.route('/dashboard')
def dashboard():
    #  To retrieve user data and order history from the database
    cursor = db.cursor(dictionary=True)
    cursor.execute('SELECT * FROM orders WHERE user_id = %s', (session.get('user_id'),))
    orders = cursor.fetchall()

    return render_template('dashboard.html', orders=orders)

@app.route('/place_order', methods=['POST'])
def place_order():
    item_name = request.form['itemName']
    delivery_address = request.form['deliveryAddress']
    user_id = session.get('user_id')

     # Generating a random tracking number
    tracking_number = generate_tracking_number()

    cursor = db.cursor()
    cursor.execute('INSERT INTO orders (user_id, itemName, deliveryAddress) VALUES (%s, %s, %s)',
                   (user_id, item_name, delivery_address))
    db.commit()

    return jsonify({'success': True, 'message': 'Order placed successfully'})


def generate_tracking_number():
    # Generate a random alphanumeric tracking number
    length = 10
    characters = string.ascii_letters + string.digits
    tracking_number = ''.join(random.choice(characters) for i in range(length))
    return tracking_number

if __name__ == '__main__':
    app.run(debug=True)

