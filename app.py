from flask import Flask, render_template

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

# Drops collection if available to remove duplicates


# Creates a collection in the database and inserts two documents


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


if __name__ == "__main__":
    app.run(debug=True)
