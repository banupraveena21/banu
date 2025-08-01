from flask import Flask, render_template, request, redirect, flash, url_for

app = Flask(__name__)
app.secret_key = "secretKey"

users ={}

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/submit_ticket', methods=['GET', 'POST'])
def submit_ticket():
    if request.method == 'POST':
        # handle form data here
        requester = request.form['requester']
        subject = request.form['subject']
        description = request.form['description']
        attachment = request.files.get('attachment')
        # process/save the data
        return redirect(url_for('thank_you'))
    return render_template('contact.html')

@app.route('/thank_you')
def thank_you():
    return "Thank you for submitting your ticket!"

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        user = users.get(email)

        if user and user['password'] == password:
            flash("Login successful!", "success")
            return redirect(url_for('home'))
        else:
            flash("Invalid email or password.", "error")

    return render_template('login.html')

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        password = request.form.get('password')
        mobile = request.form.get('mobile')

        if email in users:
            flash("Email already registered. Please login.", "error")
            return redirect(url_for('login'))

        users[email] = {
            "name": name,
            "password": password,
            "mobile": mobile
        }
        flash("Signup successful! Please login.", "success")
        return redirect(url_for('login'))

    return render_template('signup.html')

@app.route('/program1')
def program1():
    return render_template('program1.html')

@app.route('/program2')
def program2():
    return render_template('program2.html')

@app.route('/course1')
def course1():
    return render_template('courses.html')

@app.route('/course2')
def course2():
    return render_template('courses.html')

@app.route('/course3')
def course3():
    return render_template('courses.html')

@app.route('/courses')
def courses():
    return render_template('courses.html')

@app.route('/enroll')
def enroll():
    return render_template('enroll.html')

@app.route('/enroll_success')
def enroll_success():
    return render_template('enroll_success.html')

@app.route('/message')
def message():
    return render_template('message.html')


if __name__=='__main__':
    app.run(debug=True)