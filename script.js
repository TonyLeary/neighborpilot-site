const revealItems = document.querySelectorAll("[data-reveal]");

const observer = new IntersectionObserver(
  entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.14 }
);

for (const item of revealItems) {
  observer.observe(item);
}

const pilotForm = document.querySelector("#pilot-form");
const formNote = document.querySelector("#form-note");

pilotForm?.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(pilotForm);
  const business = data.get("business") || "the mock business";
  formNote.textContent = `Start packet queued for ${business}. Next production step: replace this with Stripe Checkout + onboarding webhook.`;
});

