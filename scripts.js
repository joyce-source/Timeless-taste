document.addEventListener('DOMContentLoaded', function() {
    // Get the navigation buttons
    var homeBtn = document.getElementById('home-btn');
    var aboutBtn = document.getElementById('about-btn');
    var recipesBtn = document.getElementById('recipes-btn');
    var communityBtn = document.getElementById('community-btn');

    // Add event listeners to navigation buttons
    homeBtn.addEventListener('click', scrollToSection);
    aboutBtn.addEventListener('click', scrollToSection);
    recipesBtn.addEventListener('click', scrollToSection);
    communityBtn.addEventListener('click', scrollToSection);

    // Function to handle scrolling to section
    function scrollToSection(event) {
        event.preventDefault(); // Prevent default anchor behavior

        var targetId = event.target.getAttribute('href').substring(1); // Get the target section id
        var targetSection = document.getElementById(targetId);

        // Scroll to the target section with smooth behavior
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    }

    // Add recipes dynamically to the Recipes section
    var recipes = [
        'Artisan Bread',
        'Non-Alcoholic Mojito',
        'Juicy Burger',
        'Banana and Blueberry Smoothie',
        'Grilled Beef Steak',
        'Pumpkin Soup',
        'Chocolate Brownie',
        'Kenyan Pilau',
        'Avocado and Cherry Tomatoes Salad'
    ];

    var recipeList = document.getElementById('recipe-list');

    recipes.forEach(function(recipe) {
        var li = document.createElement('li');
        li.textContent = recipe;
        recipeList.appendChild(li);
    });

    // Add community members dynamically to the Community section
    var communityMembers = [
        { username: 'user1', avatar: 'avatar1.jpg' },
        { username: 'user2', avatar: 'avatar2.jpg' },
        { username: 'user3', avatar: 'avatar3.jpg' },
        // Add more members as needed
    ];

    var communityMembersContainer = document.getElementById('community-members');

    communityMembers.forEach(function(member) {
        var div = document.createElement('div');
        div.classList.add('community-member');

        var img = document.createElement('img');
        img.src = member.avatar;
        img.alt = member.username;

        var username = document.createElement('p');
        username.textContent = member.username;

        div.appendChild(img);
        div.appendChild(username);

        communityMembersContainer.appendChild(div);
    });
});
