/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/lisaMTayl
*/



axios.get(`https://api.github.com/users/lisaMTayl`)
  .then(data => {
    // Handles Success: here's where we get the results from server
    console.log('response', data);

    // hold received data
    const gitData = data.data;

    // select main dom node
    const cards = document.querySelector('.cards');

    // append data
    const card = createCards(gitData);
    cards.appendChild(card);
  })

   .catch(error => {
    console.log('Oh no, you broke me!', error)
});

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 


   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/


/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createCards (object) {

// Define new elements
const card = document.createElement('div');
const cardImg = document.createElement('img');
const cardInfo = document.createElement('div');
const fullName = document.createElement('h3');
const username = document.createElement('p');
const location = document.createElement('p');
const profile = document.createElement('p');
const followers = document.createElement('p');
const following = document.createElement('p');
const bio = document.createElement('p');

// Setup structure of elements
card.appendChild(cardImg);
card.appendChild(cardInfo);
cardInfo.appendChild(username);
cardInfo.appendChild(fullName);
cardInfo.appendChild(location);
cardInfo.appendChild(profile);
cardInfo.appendChild(followers);
cardInfo.appendChild(following);
cardInfo.appendChild(bio);

// Set class names
card.classList.add('card');
fullName.classList.add('name');
username.classList.add('username');

// Set content
//???? How to pull specific data for each element from the array?
cardImg.src = object.avatar_url;
fullName.textContent = object.name;
username.textContent = object.login;
location.textContent = object.location;
profile.textContent = object.profile_url;
followers.textContent = object.followers;

  return card;
}

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

followersArray.forEach(gitID => {
  axios.get(`https://api.github.com/users/${gitID}`)
    .then( data => {
      const gitID = data.data;
      const cards = document.querySelector('.cards');
      cards.appendChild(createCards(gitID));
        })
});

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

