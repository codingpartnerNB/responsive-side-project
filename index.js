const aboutus = [
    {
        id: 1,
        img: './assests/users.png',
        number: '8,756+',
        title: 'Users',
    },
    {
        id: 2,
        img: './assests/downloads.png',
        number: '5,500+',
        title: 'Downloads',
    },
    {
        id: 3,
        img: './assests/review.png',
        number: '3,650+',
        title: 'Reviews',
    },
    {
        id: 4,
        img: './assests/like.png',
        number: '6,058+',
        title: 'Likes',
    }
];

const features = [
    {
        id: 1,
        img: './assests/feather.png',
        title: 'Creative Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse porro quam veniam numquam nisi officiis'
    },
    {
        id: 2,
        img: './assests/heart.png',
        title: 'Lovely App',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse porro quam veniam numquam nisi officiis'
    },
    {
        id: 3,
        img: './assests/settings.png',
        title: 'Easy Customize',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse porro quam veniam numquam nisi officiis'
    }
];

const ourworking = [
    {
        id: 1,
        img: './assests/circle.png',
        title: 'Download For Free',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque aspernatur sed, nisi a pariatur et.'
    },
    {
        id: 2,
        img: './assests/circle.png',
        title: 'Select Membership',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque aspernatur sed, nisi a pariatur et.'
    },
    {
        id: 3,
        img: './assests/circle.png',
        title: 'Login Your Account',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque aspernatur sed, nisi a pariatur et.'
    },
    {
        id: 4,
        img: './assests/circle.png',
        title: 'Enjoy This App',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque aspernatur sed, nisi a pariatur et.'
    }
];

const membership = [
    {
        id: 1,
        title: 'Basic',
        price: '$12',
        accessibility: 'Limited access',
        features: ['5 Sub Domain', '100 GB Disk Space', '24/7 Tech Support', 'Daily Backups', 'Phone Support']
    },
    {
        id: 2,
        title: 'Standard',
        price: '$29',
        accessibility: 'Limited access',
        features: ['10 Sub Domain', '300 GB Disk Space', '24/7 Tech Support', 'Daily Backups', 'Phone Support']
    },
    {
        id: 3,
        title: 'Premium',
        price: '$55',
        accessibility: 'Unlimited access',
        features: ['30 Sub Domain', '500 GB Disk Space', '24/7 Tech Support', 'Daily Backups', 'Phone Support']
    }
];


const featuresContent = document.querySelector('#features-content');

const featuresBottom = document.querySelector('#features-bottom');

const workingList = document.querySelector('#working-list');

const plans = document.querySelector('#plans');

window.addEventListener("DOMContentLoaded", displayOnLoad);


function displayOnLoad(){
    aboutus.forEach((item)=>{
        const li = document.createElement('li');
        li.className = 'features-item';
        const image = document.createElement('img');
        image.setAttribute('src', item.img);
        image.setAttribute('alt', item.title);
        const numberDiv = document.createElement('div');
        numberDiv.appendChild(document.createTextNode(item.number));
        const p = document.createElement('p');
        p.appendChild(document.createTextNode(item.title));
        
        li.appendChild(image);
        li.appendChild(numberDiv);
        li.appendChild(p);

        featuresContent.appendChild(li);
    });

    features.forEach((item)=>{
        const li = document.createElement('li');
        li.className = 'features-item';
        const image = document.createElement('img');
        image.setAttribute('src', item.img);
        image.setAttribute('alt', item.title);
        const heading = document.createElement('h4');
        heading.appendChild(document.createTextNode(item.title));
        if(item.id&1 !== 0){
            heading.classList.add('red');
        }
        const p = document.createElement('p');
        p.appendChild(document.createTextNode(item.description));
        li.appendChild(image);
        li.appendChild(heading);
        li.appendChild(p);
        featuresBottom.appendChild(li);
    });


    ourworking.forEach((item)=>{
        const li = document.createElement('li');
        li.className = 'working-item';
        const image = document.createElement('img');
        image.setAttribute('src', item.img);
        image.setAttribute('alt', item.title);
        const div = document.createElement('div');
        div.className = 'working-item-text';
        const heading = document.createElement('h4');
        heading.appendChild(document.createTextNode(item.title));
        const p = document.createElement('p');
        p.appendChild(document.createTextNode(item.description));

        div.appendChild(heading);
        div.appendChild(p);

        li.appendChild(image);
        li.appendChild(div);

        workingList.appendChild(li);
    });

    // <li class="plan-item">
    //     <h4>BASIC</h4>
    //     <div>$12</div>
    //     <h3>LIMITED ACCESS</h3>
    //     <p>5 Sub Domain</p>
    //     <p>100 GB Disk Space</p>
    //     <p>24/7 Tech Support</p>
    //     <p>Daily Backups</p>
    //     <p>Phone Support</p>
    //     <button class="btn">Choose Plan</button>
    // </li>

    membership.forEach((item)=>{
        const li = document.createElement('li');
        li.className = 'plan-item';
        const titleHeading = document.createElement('h4');
        titleHeading.appendChild(document.createTextNode(item.title));
        const price = document.createElement('div');
        price.appendChild(document.createTextNode(item.price));
        const accessibilityHeading = document.createElement('h3');
        accessibilityHeading.appendChild(document.createTextNode(item.accessibility));

        li.appendChild(titleHeading);
        li.appendChild(price);
        li.appendChild(accessibilityHeading);

        item.features.forEach((plan)=>{
            let p = document.createElement('p');
            p.appendChild(document.createTextNode(plan));
            li.appendChild(p);
        });

        const button = document.createElement('button');
        button.className = 'btn';
        button.appendChild(document.createTextNode('Choose Plan'));
        
        li.appendChild(button);

        plans.appendChild(li);
    });
}
