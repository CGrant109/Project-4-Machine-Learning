from flask import Flask, render_template, request
from pickle import load
import numpy as np
import random
# Import our pymongo library, which lets us connect our Flask app to our Mongo database.
import pymongo

# Create an instance of our Flask app.
app = Flask(__name__)

# Create connection variable
conn = 'mongodb://localhost:27017'

# Pass connection to the pymongo instance.
client = pymongo.MongoClient(conn)

# Connect to a database. Will create one if not already available.
db = client.airlinesDB


# Set route
@app.route('/')
def index():
    # Store the entire team collection in a list
    airlines = list(db.airlines.find())
    print(airlines)
    airports = list(db.airports.find())
    print(airports)
    # Return the template with the teams list passed in
    return render_template('index.html', airlines=airlines, airports=airports)


@app.route("/send", methods=["POST"])
def send():

    airlines = list(db.airlines.find())
    print(airlines)
    airports = list(db.airports.find())
    print(airports)
    # create html content - either single variable, dictionary, or string
    x = random.randint(0, 40)
    prediction_text = f"The Flight Delay from Airport to destation airport based on the inputs is {x} Minutes."

    # send prediction to html page
    return render_template("index.html", airports=airports, airlines=airlines, result=prediction_text)


if __name__ == "__main__":
    app.run(debug=True)
