const req = new XMLHttpRequest();

req.onload = () => { // handles the response from the API
    const data = JSON.parse(req.response); // convert response to an object
    console.log('This is the response', data);

    // destruct object
    const{squadName, homeTown, formed, secretBase, active, members} = data;

    function createHeader() {
        const heading = document.getElementById('heading');
        const newElement = document.createElement('h1');
        newElement.id = 'squadName';
        newElement.innerText = squadName;
        heading.append(newElement);
    }

    function createDetailsSection() {
        const details = document.getElementById('details');
    
        const detailsHeading = document.createElement('h2');
        detailsHeading.id = 'detailsHeading';
        detailsHeading.innerText = 'Details';
        details.append(detailsHeading);
    
        const dateFormed = document.createElement('p');
        dateFormed.innerText = 'Formed: ' + formed;
        details.appendChild(dateFormed);
    
        const home = document.createElement('p');
        home.innerText = 'Hometown: ' + homeTown;
        details.append(home);
    
        const base = document.createElement('p');
        base.innerText = 'Secret base: ' + secretBase;
        details.append(base);
    
        const membersHeading = document.createElement('h2');
        membersHeading.id = 'membersHeading';
        membersHeading.innerText = 'Members';
        details.append(membersHeading);
    
        const heroList = document.createElement('ul')
        for (let member of data.members){
            const listItem = document.createElement('li')
            listItem.innerText = member.name;
            heroList.append(listItem);
        }
        details.appendChild(heroList);
    }

    

    createHeader();
    createDetailsSection();
}

req.open('GET', 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json');
req.send();
