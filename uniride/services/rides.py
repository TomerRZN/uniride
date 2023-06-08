def enrich_ride(ride):
    # TODO: add passangers and also decrease seats
    # TODO: add get_profile to get image and name of profile_id
    ride.name = ''
    ride.image = ''
    ride.passengers = []

    if ride.location == 'Herzliya':
        ride.distance = 5.6
    elif ride.location == 'Tel Aviv':
        ride.distance = 0.8

    return ride
