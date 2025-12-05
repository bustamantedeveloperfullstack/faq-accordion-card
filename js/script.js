const faqsDiv = document.querySelector('.faqs');

faqsArrays.forEach(faq => {
  const faqContainer = document.createElement('div');
  faqContainer.classList.add('faq-container');

  const faqQuestion = document.createElement('div');
  faqQuestion.classList.add('faq-question');
  faqQuestion.innerHTML = `
  <span class='faq-question-text'>${faq.question}</span>
  <img src='./images/icon-arrow-down.svg' alt='illustration-img-arrow' class='flecha'/>
  `;

  const faqResponse = document.createElement('div');
  faqResponse.classList.add('faq-response');
  faqResponse.textContent = faq.response;

  faqContainer.appendChild(faqQuestion);
  faqContainer.appendChild(faqResponse);
  faqsDiv.appendChild(faqContainer);

  //al dar click, si esta activo lo remueve, sino remueve todos y activa el clicleado
  faqQuestion.addEventListener('click', () => {
    faqContainer.classList.contains('active') ?
      faqContainer.classList.remove('active') : (
        document.querySelectorAll('.faq-container').forEach(container => {
          container.classList.remove('active');
        }),
        faqContainer.classList.toggle('active')
      );
  });
});