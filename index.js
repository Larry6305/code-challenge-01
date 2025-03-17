const ramenList = document.getElementById("ramen-list");
const ramenDetails = {
    image: document.querySelector("#ramen-details img"),
    name: document.getElementById("ramen-name"),
    restaurant: document.getElementById("ramen-restaurant"),
    rating: document.getElementById("ramen-rating"),
    comment: document.getElementById("ramen-comment")
};
const ramenForm = document.getElementById("ramen-form");
const addRamenBtn = document.getElementById("add-ramen");

let ramenData = [
    {
        name: "Shoyu Ramen",
        restaurant: "Ichiran",
        image: "https://img.hellofresh.com/f_auto,fl_lossy,h_640,q_auto,w_1200/hellofresh_s3/image/62164054b9b4ec558362b243-0b7c599a.jpg",
        rating: 9,
        comment: "Delicious and well-balanced broth!"
    },
    {
        name: "Tonkotsu Ramen",
        restaurant: "Ippudo",
        image: "https://www.craftycookbook.com/wp-content/uploads/2023/04/tonkotsu.jpg",
        rating: 8,
        comment: "Rich and creamy broth!"
    },
    {
        name: "Miso Ramen",
        restaurant: "Ramen Nagi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSovKueJMTYpDGYhltiTPYjHnQ0ldBn7K0yBw&secho ",
        rating: 10,
        comment: "The best miso ramen I've had!"
    }
];

function renderRamenList() {
    ramenList.innerHTML = "";
    ramenData.forEach((ramen, index) => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => showRamenDetails(index));
        ramenList.appendChild(img);
    });
}

function showRamenDetails(index) {
    const ramen = ramenData[index];
    ramenDetails.image.src = ramen.image;
    ramenDetails.name.textContent = ramen.name;
    ramenDetails.restaurant.textContent = ramen.restaurant;
    ramenDetails.rating.textContent = ramen.rating;
    ramenDetails.comment.textContent = ramen.comment;
}

addRamenBtn.addEventListener("click", () => {
    ramenForm.style.display = ramenForm.style.display === "none" ? "block" : "none";
});

ramenForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newRamen = {
        name: document.getElementById("name").value,
        restaurant: document.getElementById("restaurant").value,
        image: document.getElementById("image").value,
        rating: document.getElementById("rating").value,
        comment: document.getElementById("comment").value
    };

    ramenData.push(newRamen);
    renderRamenList();
    ramenForm.reset();
    ramenForm.style.display = "none";
});

renderRamenList();
showRamenDetails(0);