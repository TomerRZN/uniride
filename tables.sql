-- Connect to a database or create a new one
sqlite3 mydatabase.db

-- Create a table called "Ride"
CREATE TABLE Ride (
    driver_id TEXT,
    name TEXT,
    image TEXT,
    event_time TEXT,
    distance REAL,
    ride_id TEXT PRIMARY KEY,
    location TEXT,
    seats INTEGER,
    to_uni INTEGER,
    price REAL,
    description TEXT,
    request_status TEXT
);

-- Create a table called "Profile"
CREATE TABLE Profile (
    profile_id TEXT PRIMARY KEY,
    score INTEGER,
    name TEXT,
    interests TEXT,
    education TEXT,
    city TEXT,
    bio TEXT,
    gender TEXT,
    image TEXT
);

-- Create a table called "Notification"
CREATE TABLE Notification (
    message TEXT,
    ride_id TEXT
);

-- Create a table called "Pickup"
CREATE TABLE Pickup (
    profile_id TEXT,
    status TEXT,
    ride_id TEXT,
    name TEXT,
    image TEXT
);

-- Create a table called "Review"
CREATE TABLE Review (
    score INTEGER,
    ride_id TEXT,
    profile_id TEXT
);

-- Create a table called "reviews" (assuming it's a separate table from "Review")
CREATE TABLE reviews (
    score INTEGER,
    ride_id TEXT
);
