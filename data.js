        const puzzles = [
            {
                name: "Colors",
                people: ["Alice", "Bob", "Charlie", "Diana"],
                categories: {
                    color: ["Red", "Blue", "Green", "Yellow"],
                    pet: ["Dog", "Cat", "Bird", "Fish"],
                    sport: ["Tennis", "Soccer", "Golf", "Swim"],
                    drink: ["Coffee", "Tea", "Juice", "Water"]
                },
                clues: [
                    "The person with the dog swims.",
                    "The person with the yellow color drinks water.",
                    "Charlie drinks water.",
                    "The person with the dog drinks juice.",
                    "The person who plays soccer drinks water.",
                    "The person with the blue color has a cat.",
                    "Bob likes the green color.",
                    "Alice swims.",
                    "Bob plays tennis.",
                    "The person with the bird drinks water.",
                    "The person with the cat drinks coffee."
                ],
                solution: {
                    Alice: { color: "Red", pet: "Dog", sport: "Swim", drink: "Juice" },
                    Bob: { color: "Green", pet: "Fish", sport: "Tennis", drink: "Tea" },
                    Charlie: { color: "Yellow", pet: "Bird", sport: "Soccer", drink: "Water" },
                    Diana: { color: "Blue", pet: "Cat", sport: "Golf", drink: "Coffee" }
                }
            },
            {
                name: "Jobs",
                people: ["Emma", "Frank", "Grace", "Henry"],
                categories: {
                    job: ["Teacher", "Doctor", "Artist", "Engineer"],
                    city: ["Paris", "London", "Tokyo", "Berlin"],
                    hobby: ["Reading", "Painting", "Gaming", "Cooking"],
                    transport: ["Car", "Bike", "Train", "Bus"]
                },
                clues: [
                    "The person in Tokyo travels by train.",
                    "The teacher enjoys reading.",
                    "The person in Berlin travels by car.",
                    "Emma lives in Paris.",
                    "The person who enjoys painting travels by car.",
                    "Grace lives in Tokyo.",
                    "The person in Tokyo enjoys gaming.",
                    "Emma travels by bus.",
                    "Frank is an artist.",
                    "The doctor travels by bus."
                ],
                solution: {
                    Emma: { job: "Doctor", city: "Paris", hobby: "Cooking", transport: "Bus" },
                    Frank: { job: "Artist", city: "Berlin", hobby: "Painting", transport: "Car" },
                    Grace: { job: "Engineer", city: "Tokyo", hobby: "Gaming", transport: "Train" },
                    Henry: { job: "Teacher", city: "London", hobby: "Reading", transport: "Bike" }
                }
            },
            {
                name: "Drinks",
                people: ["Ivy", "Jack", "Karen", "Leo"],
                categories: {
                    drink: ["Wine", "Beer", "Soda", "Milk"],
                    food: ["Pizza", "Burger", "Salad", "Pasta"],
                    time: ["Morning", "Noon", "Evening", "Night"],
                    place: ["Home", "Cafe", "Restaurant", "Park"]
                },
                clues: [
                    "The person drinking milk eats pizza.",
                    "The evening visitor is at the restaurant.",
                    "Leo visits at noon.",
                    "Jack eats salad.",
                    "The morning visitor is at the cafe.",
                    "The person drinking beer eats burger.",
                    "The person eating burger visits at morning.",
                    "Ivy is at home.",
                    "The person drinking wine eats salad.",
                    "The person eating pasta is at the park."
                ],
                solution: {
                    Ivy: { drink: "Milk", food: "Pizza", time: "Night", place: "Home" },
                    Jack: { drink: "Wine", food: "Salad", time: "Evening", place: "Restaurant" },
                    Karen: { drink: "Beer", food: "Burger", time: "Morning", place: "Cafe" },
                    Leo: { drink: "Soda", food: "Pasta", time: "Noon", place: "Park" }
                }
            },
            {
                name: "Animals",
                people: ["Max", "Nina", "Oscar", "Piper", "Quinn"],
                categories: {
                    animal: ["Dog", "Cat", "Bird", "Fish", "Rabbit"],
                    color: ["Black", "White", "Brown", "Gray", "Orange"],
                    age: ["Young", "Adult", "Senior", "Newborn", "Teen"],
                    location: ["Home", "Farm", "Zoo", "Park", "Shelter"]
                },
                clues: [
                    "The dog is white.",
                    "The bird is at the farm.",
                    "The young animal is at the park.",
                    "The senior animal is at the farm.",
                    "Piper's animal is at home.",
                    "The fish is at the shelter.",
                    "The fish is black.",
                    "Nina's animal is brown.",
                    "Quinn's animal is senior.",
                    "Oscar's animal is young.",
                    "The rabbit is orange.",
                    "The brown animal is adult.",
                    "The orange animal is newborn."
                ],
                solution: {
                    Max: { animal: "Fish", color: "Black", age: "Teen", location: "Shelter" },
                    Nina: { animal: "Cat", color: "Brown", age: "Adult", location: "Zoo" },
                    Oscar: { animal: "Dog", color: "White", age: "Young", location: "Park" },
                    Piper: { animal: "Rabbit", color: "Orange", age: "Newborn", location: "Home" },
                    Quinn: { animal: "Bird", color: "Gray", age: "Senior", location: "Farm" }
                }
            },
            {
                name: "Books",
                people: ["Alice", "Ben", "Clara", "David", "Emma"],
                categories: {
                    genre: ["Mystery", "Romance", "Science", "History", "Fantasy"],
                    author: ["Smith", "Jones", "Brown", "Wilson", "Davis"],
                    pages: ["200", "300", "400", "500", "600"],
                    year: ["2018", "2019", "2020", "2021", "2022"]
                },
                clues: [
                    "The history book has 200 pages.",
                    "Brown wrote the 400-page book.",
                    "Davis wrote the 500-page book.",
                    "The mystery book is by Brown.",
                    "The fantasy book is from 2020.",
                    "Emma's book is 200 pages.",
                    "Ben's book is from 2022.",
                    "Jones's book is from 2021.",
                    "Clara reads a romance book.",
                    "The science book is by Wilson.",
                    "The 500-page book is from 2018.",
                    "Alice's book is by Brown.",
                    "The 600-page book is from 2022."
                ],
                solution: {
                    Alice: { genre: "Mystery", author: "Brown", pages: "400", year: "2019" },
                    Ben: { genre: "Science", author: "Wilson", pages: "600", year: "2022" },
                    Clara: { genre: "Romance", author: "Davis", pages: "500", year: "2018" },
                    David: { genre: "Fantasy", author: "Smith", pages: "300", year: "2020" },
                    Emma: { genre: "History", author: "Jones", pages: "200", year: "2021" }
                }
            },
            {
                name: "Countries",
                people: ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"],
                categories: {
                    country: ["Japan", "France", "Brazil", "Canada", "Spain", "India"],
                    language: ["Japanese", "French", "Portuguese", "English", "Spanish", "Hindi"],
                    food: ["Sushi", "Croissant", "Feijoada", "Poutine", "Paella", "Curry"],
                    season: ["Spring", "Summer", "Fall", "Winter", "Rainy", "Dry"]
                },
                clues: [
                    "The person from Canada speaks English.",
                    "The person from Canada prefers winter.",
                    "Eve is from France.",
                    "The person from France eats croissant.",
                    "The French speaker prefers summer.",
                    "The person from Brazil eats feijoada.",
                    "Alice's favorite season is spring.",
                    "The Japanese speaker eats sushi.",
                    "Diana speaks Portuguese.",
                    "The person from Canada eats poutine.",
                    "Charlie is from India.",
                    "The Portuguese speaker prefers rainy.",
                    "The person from India speaks Hindi.",
                    "The person from Spain eats paella.",
                    "The person from Spain prefers fall.",
                    "Bob speaks Spanish."
                ],
                solution: {
                    Alice: { country: "Japan", language: "Japanese", food: "Sushi", season: "Spring" },
                    Bob: { country: "Spain", language: "Spanish", food: "Paella", season: "Fall" },
                    Charlie: { country: "India", language: "Hindi", food: "Curry", season: "Dry" },
                    Diana: { country: "Brazil", language: "Portuguese", food: "Feijoada", season: "Rainy" },
                    Eve: { country: "France", language: "French", food: "Croissant", season: "Summer" },
                    Frank: { country: "Canada", language: "English", food: "Poutine", season: "Winter" }
                }
            }
        ];

        let currentPuzzleIndex = 0;
        let gridState = {};
        let hintCount = 0;
        const MAX_HINTS = 3;