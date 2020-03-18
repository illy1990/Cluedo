const suspectsArray = {
    mrGreen: [{ firstName: "Jacob", lastName: "Green", job: "Entrepreneur", age: 45, description: "He has a lot of connections", image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", color: "green" }],
    drOrchid: [{ firstName: "Doctor", lastName: "Orchid", job: "Scientist", age: 26, description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy", image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg", color: "white" }],
    profPlum: [{ firstName: "Victor", lastName: "Plum", job: "Designer", age: 22, description: "Billionaire video game designer", image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg", color: "purple" }],
    missScarlet: [{ firstName: "Kasandra", lastName: "Scarlet", job: "Actor", age: 31, description: "She is an A-list movie star with a dark past", image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg", color: "red" }],
    mrsPeacock: [{ firstName: "Eleanor", lastName: "Peacock", job: "Socialité", age: 36, description: "She is from a wealthy family and uses her status and money to earn popularity", image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", color: "blue" }],
    mrMustard: [{ firstName: "Jack", lastName: "Mustard", job: "Retired Football player", age: 62, description: "He is a former football player who tries to get by on his former glory", image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg", color: "yellow" }]
}


var weaponsArray = [
    { name: "Rope", weight: 10 },
    { name: "knife", weight: 8 },
    { name: "candlestick", weight: 2 },
    { name: "dumbbell", weight: 30 },
    { name: "poison", weight: 2 },
    { name: "axe", weight: 15 },
    { name: "bat", weight: 13 },
    { name: "trophy", weight: 25 },
    { name: "pistol", weight: 20 },
]

var roomsArray = [
    { name: "Dining Room" },
    { name: "Conservatory" },
    { name: "Kitchen" },
    { name: "Study" },
    { name: "Billiard" },
    { name: "Lounge" },
    { name: "Ballroom" },
    { name: "Hall" },
    { name: "Spa" },
    { name: "Living Room" },
    { name: "Observatory" },
    { name: "Guest House" },
    { name: "Patio" }
]

let i = 0;

document.getElementById("Personenanzeige").addEventListener("click", () => {
    i++;
    if (i <= 6) {
        console.log(i)
        console.log(typeof (suspectsArray[0]))
        document.getElementById("Personenausgabe").innerHTML += suspectsArray[i]
    } else {
        i = 1;
        document.getElementById("Personenausgabe").innerHTML += suspectsArray[i]
    }
})

// => document.getElementById("Personenausgabe").innerHTML = (ele[i].image)))
// suspectsArray[i]()
// suspectsArray.forEach(document.getElementById("Personenausgabe").innerHTML += i)
