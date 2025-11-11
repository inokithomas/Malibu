// Agendamento
const formAgendamento = document.getElementById("form-agendamento");
formAgendamento.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Agendamento realizado com sucesso!");
  formAgendamento.reset();
});

// Feedback
const stars = document.querySelectorAll(".star");
const estrelaInput = document.getElementById("estrelaSelecionada");

stars.forEach((star, index) => {
  // Hover
  star.addEventListener("mouseover", () => {
    stars.forEach((s, i) => {
      s.classList.toggle("hover", i <= index);
    });
  });

  star.addEventListener("mouseout", () => {
    stars.forEach((s) => s.classList.remove("hover"));
  });

  star.addEventListener("click", () => {
    const rating = index + 1;
    estrelaInput.value = rating;

    stars.forEach((s, i) => {
      s.classList.toggle("selected", i < rating);
    });
  });
});

// Lista de feedbacks
const formFeedback = document.getElementById("form-feedback");
const listaFeedbacks = document.getElementById("lista-feedbacks");

formFeedback.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formFeedback);
  const nome = formData.get("nomeFeedback");
  const estrelas = formData.get("estrela");
  const referencia = formData.get("referencia");
  const comentario = formData.get("comentario");

  const div = document.createElement("div");
  div.classList.add("feedback-card");
  div.innerHTML = `<strong>${nome}</strong> avaliou <em>${referencia}</em> com ${estrelas} ★<br>${comentario}`;
  listaFeedbacks.appendChild(div);

  formFeedback.reset();
  estrelaInput.value = "";
  stars.forEach((s) => s.classList.remove("selected"));
});
