function toggleAccordion(element) {
    // Kapcsold be/ki az accordion-title és accordion-content osztályokat
    element.classList.toggle('active');
    const content = element.nextElementSibling;
    content.classList.toggle('active');
  }