// Handle Create Event Form
const eventForm = document.getElementById("eventForm");
const myEvents = document.querySelector(".my-events ul");

eventForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = eventForm.querySelector("input[type='text']").value;
  const date = eventForm.querySelector("input[type='date']").value;

  // Add to My Events
  const li = document.createElement("li");
  li.textContent = `${title} – Created (on ${date})`;
  myEvents.appendChild(li);

  // Reset form
  eventForm.reset();
  alert("Event created successfully!");
});

// Handle Event Register buttons
document.querySelectorAll(".register-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const eventName = btn.parentElement.querySelector("h3").textContent;
    const li = document.createElement("li");
    li.textContent = `${eventName} – Registered ✅`;
    myEvents.appendChild(li);
    btn.disabled = true;
    btn.textContent = "Registered";
  });
});
