# Userstory

- User can signup 
- User can login 

- User can create trips 
    - User can add cities (auto complete g-places) with start and end dates for each city 

- User can view trip details 
    - User can view full itinerary 
    - User can add reservations with links 
    - User can invite friends to view / edit a trip

- User can explore cities they added in their itinerary 
    - User can add things to do from suggested list 
    - User can create new things to do by searching (places autocomplete) or by dropping new pins

User can view all reservations 

# Routes Front end

  ## User

  ### Authentication 

  Method    |Routes                           |What does it do?                                               |
  |:--------|:--------------------------------|:--------------------------------------------------------------|
  |fe     |/signup                   |creates new user                                              |
  |fe     |/login                    |creates new user-session                                      |
  |fe     |/logout                   |deletes current session                                       |                        |

  ### Dashboard 

  Method    |Routes                           |What does it do?                                               |
  |:--------|:--------------------------------|:--------------------------------------------------------------|
  |fe     |home                              |shows user dashboard                                        
  |
  |fe     |trip/create             |opens the create new trip form                              
  |

  ### Trip details

  Method    |Routes                           |What does it do?                                               |
  |:--------|:--------------------------------|:--------------------------------------------------------------|
  |fe      |trip/:tripid                   |opens trip details page                             
  |
  |fe      |trip/:tripid/itinerary         |opens the itinerary page which displays added cities |
  |fe      |trip/:tripid/invite            |user can invite friends to trip                       
  |
  |fe      |trip/:tripid/destinations      |user can see explore destinations view with added cities 
  |
  |fe      |trip/:tripid/destinations/experiences |see things to do for that city             
  |
  |fe      |trip/:tripid/reservations       |view all reservations and add reservation form 
  |

------------------------------------------------------------------------------
## 1. Views 
  ### 1.1 General
  - SignUp 
  - Login
  - Dashboard
  - Create trip

  - Trip details 
    - view itinerary
    - reservation 
    - add friends 
    - Explore cities 
        - View all reservations
        - Things to do by city (map view)

------------------------------------------------------------------------------
## 2 Components 

  - itinerary detail card
  - Create reservation form
  - reservation detail card
  - Things to do detail card
  - Things to do map 



------------------------------------------------------------------------------

## 3 Service 

  - AuthService 
      - me()
      - signup()
      - login()
      - logout()
      - getUser()

  - TripService 
      - create(trip)
      - listAll() // filtered in the backend by trip.users contains currentUserid 
      - getOne(id) // populate uers
      - addUser(email)

 - ItinerariesService     
      - create(itinerary) - contains trip + destination + dates
      - listByTrip(tripId)
      - addExperience(idExperience)

  - ReservationsService 
      - create(reservation) - contains tripId
      - listByTrip(tripId)

  - ExperiencesService
      - create(experience) - contains destination id
      - listByDestination(idDestination)


@todo paste here a google places result { }
