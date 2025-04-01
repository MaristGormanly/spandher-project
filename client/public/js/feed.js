// feed.js

document.addEventListener("DOMContentLoaded", function () {
    const eventList = document.getElementById("eventList");
    const postForm = document.getElementById("postForm");
    const postTitle = document.getElementById("postTitle");
    const postBody = document.getElementById("postBody");

    // sample data array
    let liveEvents = [
        { title: "Tutoring Sessions", body: "Join our free tutoring sessions every week!" },
        { title: "Esports Championship", body: "Watch the best teams compete in this year's tournament." },
        { title: "Live Ted Talk", body: "Security experts discuss the future of cybersecurity." },
        { title: "Virtual Music Concert", body: "Experience live music from your favorite artists!" },
        { title: "Science Behind Weather", body: "Learn about meteorology from top scientists." }
    ];

    // Function to render posts to the feed
    function renderFeed() {
        eventList.innerHTML = ""; // Clear the feed before re-rendering
        liveEvents.forEach(event => {
            let eventElement = document.createElement("div");
            eventElement.className = "event";
            eventElement.innerHTML = `
                <h3>${event.title}</h3>
                <p>${event.body}</p>
                <button class="like-btn"> Like</button>
            `;
            eventList.appendChild(eventElement);
        });
    }

    // handle new post submission
    postForm.addEventListener("submit", function (e) {
        e.preventDefault(); // prevent form reload
        const newEvent = {
            title: postTitle.value,
            body: postBody.value
        };
        liveEvents.unshift(newEvent); // add new post to the top
        renderFeed(); // render feed
        postTitle.value = "";
        postBody.value = "";
    });

    // initial render
    renderFeed();
});
