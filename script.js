// Initialize Typed.js
const typed = new Typed('#typed', {
    strings: ['Desenvolvedor Web','Designer UI/UX', 'Especialista em Responsividade','Entusiasta de Design Digital'],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
});

  
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navItems = document.querySelector('.nav-items');
  
  menuToggle.addEventListener('click', () => {
    navItems.classList.toggle('active');
  });
  
  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });
  
      // Update active link
      document.querySelectorAll('.nav-items a').forEach(link => link.classList.remove('active'));
      this.classList.add('active');
  
      // Close mobile menu if open
      if (navItems.classList.contains('active')) {
        navItems.classList.remove('active');
      }
    });
  });
  
  // Função para buscar e exibir projetos do GitHub
  async function fetchGitHubProjects() {
    const username = 'BernardoApl';
    const projectsContainer = document.getElementById('projects-container');
    const userInfoContainer = document.getElementById('github-user-info');
  
    try {
      // Buscar informações do usuário
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      const userData = await userResponse.json();
  
      // Exibir informações do usuário
      userInfoContainer.innerHTML = `
        <img src="${userData.avatar_url}" alt="${userData.name || username}" />
        <div class="github-user-details">
          <h3>${userData.name || username}</h3>
          <p>${userData.bio || ''}</p>
          <div class="github-stats">
            <div class="github-stat">
              <i class="fas fa-code-branch"></i>
              <span>${userData.public_repos} repositórios</span>
            </div>
            <div class="github-stat">
              <i class="fas fa-users"></i>
              <span>${userData.followers} seguidores</span>
            </div>
          </div>
        </div>
      `;
  
      // Buscar repositórios
      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=9`);
      const repos = await reposResponse.json();
  
      // Limpar o container
      projectsContainer.innerHTML = '';
  
      // Exibir repositórios
      repos.forEach(repo => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
  
        // Determinar linguagem principal
        const language = repo.language || 'N/A';
  
        projectCard.innerHTML = `
          <div class="project-info">
            <h3>${repo.name}</h3>
            <p>${repo.description || 'Sem descrição disponível.'}</p>
            <div class="project-tags">
              <span>${language}</span>
              ${repo.stargazers_count > 0 ? `<span>${repo.stargazers_count} ⭐</span>` : ''}
              ${repo.forks_count > 0 ? `<span>${repo.forks_count} forks</span>` : ''}
            </div>
            <div class="project-links">
              ${repo.homepage ? `<a href="${repo.homepage}" target="_blank"><i class="fas fa-external-link-alt"></i></a>` : ''}
              <a href="${repo.html_url}" target="_blank"><i class="fab fa-github"></i></a>
            </div>
          </div>
        `;
  
        projectsContainer.appendChild(projectCard);
      });
  
    } catch (error) {
      console.error('Erro ao buscar projetos do GitHub:', error);
      projectsContainer.innerHTML = `
        <div class="error">
          <p>Erro ao carregar projetos do GitHub. Por favor, tente novamente mais tarde.</p>
        </div>
      `;
    }
  }
  
  // Chamar a função quando a seção de projetos está visível
  window.addEventListener('scroll', () => {
    if (isInViewport(document.querySelector('#projects')) && !projectsLoaded) {
      fetchGitHubProjects();
      projectsLoaded = true;
    }
  });
  
  // Variável para controlar se os projetos já foram carregados
  let projectsLoaded = false;
  
  // Animate skills when in viewport
  function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
  
    skillBars.forEach(bar => {
      const progress = bar.dataset.progress + '%';
      bar.style.width = progress;
    });
  }
  
  // Animate stats counter when in viewport
  function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
  
    stats.forEach(stat => {
      const target = parseInt(stat.dataset.count);
      const increment = target / 100;
      let current = 0;
  
      const updateCount = () => {
        if (current < target) {
          current += increment;
          stat.textContent = Math.ceil(current);
          setTimeout(updateCount, 10);
        } else {
          stat.textContent = target;
        }
      };
  
      updateCount();
    });
  }
  
  // Check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Handle scroll events for animations
  let skillsAnimated = false;
  let statsAnimated = false;
  
  window.addEventListener('scroll', () => {
    // Animate skills when skills section is in viewport
    if (!skillsAnimated && isInViewport(document.querySelector('.skills'))) {
      animateSkills();
      skillsAnimated = true;
    }
  
    // Animate stats when about section is in viewport
    if (!statsAnimated && isInViewport(document.querySelector('.stats'))) {
      animateStats();
      statsAnimated = true;
    }
  
    // Update active nav link based on scroll position
    const sections = document.querySelectorAll('section');
    let currentSection = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });
  
    document.querySelectorAll('.nav-items a').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
  
  // Form Submission
  const contactForm = document.getElementById('contact-form');
  
  // Inicializa o EmailJS com sua chave pública
  emailjs.init("RQ1dSXDL1URKXCGsG"); // Sua chave pública do EmailJS
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    // Validation
    if (!name || !email || !subject || !message) {
      alert('Por favor, preencha todos os campos');
      return;
    }
  
    // Desabilitar o botão enquanto envia
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
  
    // Parâmetros para o template do EmailJS
    const templateParams = {
      to_name: "Bernardo",
      to_email: "b.lopes.software@gmail.com",
      from_name: name,
      from_email: email,
      subject: subject,
      message: message
    };
  
    // Enviar email usando EmailJS
    emailjs.send('service_mq054m8', 'template_lf5n7os', templateParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Sua mensagem foi enviada com sucesso!');
        contactForm.reset();
      }, function(error) {
        console.log('FAILED...', error);
        alert('Erro ao enviar mensagem. Por favor, tente novamente mais tarde.');
      })
      .finally(function() {
        // Restaurar o botão
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
      });
  });
  
  // Initialize animations on page load
  window.addEventListener('load', () => {
    // Add mobile menu styling
    document.head.insertAdjacentHTML('beforeend', `
      <style>
        @media screen and (max-width: 768px) {
          .nav-items.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 80px;
            left: 0;
            right: 0;
            background-color: white;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            padding: 20px;
            z-index: 100;
          }
  
          .nav-items.active a {
            margin: 10px 0;
          }
        }
      </style>
    `);
  
    // Check if sections are already in viewport on page load
    if (isInViewport(document.querySelector('.skills'))) {
      animateSkills();
      skillsAnimated = true;
    }
  
    if (isInViewport(document.querySelector('.stats'))) {
      animateStats();
      statsAnimated = true;
    }
  
    // Carregar projetos do GitHub ao iniciar
    fetchGitHubProjects();
    projectsLoaded = true;
  });
  
