**PERFIL BERNARDO AUGUSTO**


<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Perfil</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
  <header>
    <div class="navbar">
      <div class="logo">
        <h1>Perfil</h1>
      </div>
      <div class="nav-items">
        <a href="#home" class="active">Início</a>
        <a href="#about">Sobre</a>
        <a href="#skills">Habilidades</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </div>
      <div class="menu-toggle">
        <i class="fas fa-bars"></i>
      </div>
    </div>
  </header>

  <section id="home" class="hero">
    <div class="hero-content">
      <h1>Olá, eu sou Bernardo Augusto<span class="highlight"></span></h1>
      <p class="typed-text">Sou um <span id="typed"></span></p>
      <div class="cta-buttons">
        <a href="#contact" class="btn primary-btn">Contate-me</a>
        <a href="#projects" class="btn secondary-btn">Ver Meu Trabalho</a>
      </div>
      <div class="social-links">
        <a href="https://github.com/BernardoApl?tab=repositories" target="_blank"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/bernardo-lopes-3500b92b6/" target="_blank"><i class="fab fa-linkedin"></i></a>
        
      </div>
    </div>
  </section>

  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title">Sobre Mim</h2>
      <div class="about-content">
        <div class="about-img">
          <img src="Perfil.jpeg" alt="Foto de Perfil">
        </div>
        <div class="about-text">
            <p>Oi, sou Bernardo Augusto Pereira Lopes, estudante de Engenharia de Software no 3º Periódo na PUC Minas - Coração Eucarístico. Sou um explorador por tecnologia e programação, sempre em busca de novos aprendizados.</p>
            <p>Estou me especializando no desenvolvimento de soluções práticas e eficientes, tanto no front-end quanto no back-end. Criando sistemas e diversificando esses recursos.</p>
        </div>
        </div>
      </div>
    </div>
  </section>

  <section id="skills" class="skills">
    <div class="container">
     <h2 class="section-title">Minhas Habilidades</h2>
      <div class="skills-content">
        <div class="skill-category">
          <h3>Gestão de Projetos</h3>
          <div class="skill-item">
            <div class="skill-name">Metodologia Ágil</div>
            <div class="skill-bar">
              <div class="skill-progress" data-progress="80"></div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-name">Liderança de Equipe</div>
            <div class="skill-bar">
              <div class="skill-progress" data-progress="85"></div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-name">Gestão de Riscos</div>
            <div class="skill-bar">
              <div class="skill-progress" data-progress="67"></div>
            </div>
          </div>
        </div>
        <div class="skill-category">
          <h3>Criatividade</h3>
          <div class="skill-item">
            <div class="skill-name">Resolução de Problemas</div>
            <div class="skill-bar">
              <div class="skill-progress" data-progress="87"></div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-name">Design Thinking</div>
            <div class="skill-bar">
              <div class="skill-progress" data-progress="82"></div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-name">Inovação</div>
            <div class="skill-bar">
              <div class="skill-progress" data-progress="74"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="projects" class="projects">
    <div class="container">
      <h2 class="section-title">Meus Projetos GitHub</h2>
      <div class="github-profile">
        <div id="github-user-info" class="github-user-info">
          <!-- Informações do usuário do GitHub serão inseridas aqui via JavaScript -->
        </div>
      </div>
      <div id="projects-container" class="projects-container">
        <!-- Os projetos do GitHub serão inseridos aqui via JavaScript -->
        <div class="loading">Carregando projetos do GitHub...</div>
      </div>
    </div>
  </section>

  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title">Fale Comigo</h2>
      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <p>b.lopes.software@gmail.com</p>
          </div>
          <div class="contact-item">
            <i class="fas fa-phone"></i>
            <p>+55 (31) 97182-0224</p>
          </div>
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <p>Betim, Brasil</p>
          </div>
        </div>
        <form id="contact-form" class="contact-form">
          <div class="form-group">
            <input type="text" id="name" placeholder="Seu Nome" required>
          </div>
          <div class="form-group">
            <input type="email" id="email" placeholder="Seu Email" required>
          </div>
          <div class="form-group">
            <input type="text" id="subject" placeholder="Assunto" required>
          </div>
          <div class="form-group">
            <textarea id="message" placeholder="Sua Mensagem" required></textarea>
          </div>
          <button type="submit" class="btn primary-btn">Enviar Mensagem</button>
        </form>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="footer-content">
        <p>&copy; 2025 Bernardo Lopes.</p>
        <div class="social-links">
          <a href="https://github.com/BernardoApl?tab=repositories" target="_blank"><i class="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/bernardo-lopes-3500b92b6/" target="_blank"><i class="fab fa-linkedin"></i></a>
          
        </div>
      </div>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
  <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
