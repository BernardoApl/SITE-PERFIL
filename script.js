// Typed.js e EmailJS já estão carregados via CDN no HTML

// Declare Typed variable
let Typed

// Initialize Typed.js
if (typeof Typed !== "undefined") {
  const typed = new Typed("#typed", {
    strings: ["Desenvolvedor Web", "Designer UI/UX", "Entusiasta de Design Digital"],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true,
  })
}

// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle")
const navItems = document.querySelector(".nav-items")

if (menuToggle && navItems) {
  menuToggle.addEventListener("click", () => {
    navItems.classList.toggle("active")
  })
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth",
      })

      // Update active link
      document.querySelectorAll(".nav-items a").forEach((link) => link.classList.remove("active"))
      this.classList.add("active")

      // Close mobile menu if open
      if (navItems && navItems.classList.contains("active")) {
        navItems.classList.remove("active")
      }
    }
  })
})

function createFlashEffects() {
  const sections = document.querySelectorAll("section")

  sections.forEach((section) => {
    const elements = section.querySelectorAll(
      "h1, h2, h3, p, .skill-item, .project-card, .contact-item, .about-img, .github-user-info, .btn, .social-links a, .tech-badges img, .form-group",
    )

    elements.forEach((element, index) => {
      element.classList.add("flash-element")
      element.style.animationDelay = `${index * 0.15}s`
    })
  })
}

function handleFlashOnScroll() {
  const flashElements = document.querySelectorAll(".flash-element")

  flashElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 100

    if (elementTop < window.innerHeight - elementVisible && elementTop > -element.offsetHeight) {
      element.classList.add("visible")
    }
  })
}

function createFloatingParticles() {
  const body = document.body
  const particleCount = 15

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div")
    particle.className = "floating-particle"
    particle.style.cssText = `
      position: fixed;
      width: ${Math.random() * 4 + 2}px;
      height: ${Math.random() * 4 + 2}px;
      background: rgba(0, 102, 255, ${Math.random() * 0.5 + 0.2});
      border-radius: 50%;
      pointer-events: none;
      z-index: -1;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: floatParticle ${Math.random() * 20 + 10}s linear infinite;
    `
    body.appendChild(particle)
  }

  // Adicionar CSS para animação das partículas
  if (!document.querySelector("#particle-styles")) {
    const style = document.createElement("style")
    style.id = "particle-styles"
    style.textContent = `
      @keyframes floatParticle {
        0% {
          transform: translateY(0px) translateX(0px) rotate(0deg);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(-100vh) translateX(50px) rotate(360deg);
          opacity: 0;
        }
      }
    `
    document.head.appendChild(style)
  }
}

// Função para buscar e exibir projetos do GitHub
async function fetchGitHubProjects() {
  const username = "BernardoApl"
  const projectsContainer = document.getElementById("projects-container")
  const userInfoContainer = document.getElementById("github-user-info")

  if (!projectsContainer || !userInfoContainer) return

  try {
    // Buscar informações do usuário
    const userResponse = await fetch(`https://api.github.com/users/${username}`)
    const userData = await userResponse.json()

    // Exibir informações do usuário
    userInfoContainer.innerHTML = `
      <img src="${userData.avatar_url}" alt="${userData.name || username}" />
      <div class="github-user-details">
        <h3>${userData.name || username}</h3>
        <p>${userData.bio || ""}</p>
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
    `

    // Buscar repositórios
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=9`)
    const repos = await reposResponse.json()

    // Limpar o container
    projectsContainer.innerHTML = ""

    // Exibir repositórios
    repos.forEach((repo, index) => {
      const projectCard = document.createElement("div")
      projectCard.className = "project-card flash-element"
      projectCard.style.animationDelay = `${index * 0.1}s`

      // Determinar linguagem principal
      const language = repo.language || "N/A"

      projectCard.innerHTML = `
        <div class="project-info">
          <h3>${repo.name}</h3>
          <p>${repo.description || "Sem descrição disponível."}</p>
          <div class="project-tags">
            <span>${language}</span>
            ${repo.stargazers_count > 0 ? `<span>${repo.stargazers_count} ⭐</span>` : ""}
            ${repo.forks_count > 0 ? `<span>${repo.forks_count} forks</span>` : ""}
          </div>
          <div class="project-links">
            ${repo.homepage ? `<a href="${repo.homepage}" target="_blank"><i class="fas fa-external-link-alt"></i></a>` : ""}
            <a href="${repo.html_url}" target="_blank"><i class="fab fa-github"></i></a>
          </div>
        </div>
      `

      projectsContainer.appendChild(projectCard)
    })

    handleFlashOnScroll()
  } catch (error) {
    console.error("Erro ao buscar projetos do GitHub:", error)
    projectsContainer.innerHTML = `
      <div class="error">
        <p>Erro ao carregar projetos do GitHub. Por favor, tente novamente mais tarde.</p>
      </div>
    `
  }
}

// Variável para controlar se os projetos já foram carregados
let projectsLoaded = false

// Animate skills when in viewport
function animateSkills() {
  const skillBars = document.querySelectorAll(".skill-progress")

  skillBars.forEach((bar) => {
    const progress = bar.dataset.progress + "%"
    bar.style.width = progress
  })
}

// Check if element is in viewport
function isInViewport(element) {
  if (!element) return false
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// Handle scroll events for animations
let skillsAnimated = false

let ticking = false

function updateOnScroll() {
  // Flash effects
  handleFlashOnScroll()

  // Animate skills when skills section is in viewport
  const skillsSection = document.querySelector(".skills")
  if (!skillsAnimated && skillsSection && isInViewport(skillsSection)) {
    animateSkills()
    skillsAnimated = true
  }

  // Carregar projetos quando a seção está visível
  const projectsSection = document.querySelector("#projects")
  if (projectsSection && isInViewport(projectsSection) && !projectsLoaded) {
    fetchGitHubProjects()
    projectsLoaded = true
  }

  // Update active nav link based on scroll position
  const sections = document.querySelectorAll("section")
  let currentSection = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100
    const sectionHeight = section.clientHeight
    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id")
    }
  })

  document.querySelectorAll(".nav-items a").forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active")
    }
  })

  ticking = false
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(updateOnScroll)
    ticking = true
  }
})

// Form Submission
const contactForm = document.getElementById("contact-form")

if (contactForm) {
  // Declare emailjs variable
  let emailjs

  if (typeof emailjs !== "undefined") {
    emailjs.init("RQ1dSXDL1URKXCGsG")
  }

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("name")?.value
    const email = document.getElementById("email")?.value
    const subject = document.getElementById("subject")?.value
    const message = document.getElementById("message")?.value

    // Validation
    if (!name || !email || !subject || !message) {
      alert("Por favor, preencha todos os campos")
      return
    }

    // Desabilitar o botão enquanto envia
    const submitBtn = contactForm.querySelector('button[type="submit"]')
    const originalBtnText = submitBtn?.textContent || "Enviar Mensagem"
    if (submitBtn) {
      submitBtn.textContent = "Enviando..."
      submitBtn.disabled = true
    }

    if (typeof emailjs !== "undefined") {
      // Parâmetros para o template do EmailJS
      const templateParams = {
        to_name: "Bernardo",
        to_email: "b.lopes.software@gmail.com",
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
      }

      // Enviar email usando EmailJS
      emailjs
        .send("service_mq054m8", "template_lf5n7os", templateParams)
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text)
            alert("Sua mensagem foi enviada com sucesso!")
            contactForm.reset()
          },
          (error) => {
            console.log("FAILED...", error)
            alert("Erro ao enviar mensagem. Por favor, tente novamente mais tarde.")
          },
        )
        .finally(() => {
          // Restaurar o botão
          if (submitBtn) {
            submitBtn.textContent = originalBtnText
            submitBtn.disabled = false
          }
        })
    } else {
      // Fallback se EmailJS não estiver disponível
      alert("Formulário enviado! (EmailJS não disponível no preview)")
      contactForm.reset()
      if (submitBtn) {
        submitBtn.textContent = originalBtnText
        submitBtn.disabled = false
      }
    }
  })
}

function createParticles() {
  const containers = [
    document.getElementById("particles-container"),
    document.getElementById("particles-home"),
    document.getElementById("particles-about"),
    document.getElementById("particles-projects"),
    document.getElementById("particles-contact"),
  ]

  containers.forEach((container) => {
    if (!container) return

    // Limpar partículas existentes
    container.innerHTML = ""

    // Número reduzido de partículas para melhor performance
    const numParticles = Math.min(Math.floor(window.innerWidth / 30), 20)

    // Criar partículas
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement("span")
      particle.className = "particle"

      // Tamanho aleatório
      const size = Math.random() * 10 + 2
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`

      // Posição inicial aleatória
      const posX = Math.random() * 100
      const posY = Math.random() * 100
      particle.style.left = `${posX}%`
      particle.style.top = `${posY}%`

      // Opacidade aleatória
      particle.style.opacity = Math.random() * 0.4 + 0.1

      // Duração da animação aleatória
      const duration = Math.random() * 15 + 10
      particle.style.animationDuration = `${duration}s`

      // Atraso da animação aleatório
      const delay = Math.random() * 5
      particle.style.animationDelay = `${delay}s`

      container.appendChild(particle)
    }
  })
}

// Initialize animations on page load
window.addEventListener("load", () => {
  createFlashEffects()
  handleFlashOnScroll()

  createFloatingParticles()

  // Criar partículas animadas
  createParticles()

  // Recriar partículas ao redimensionar a janela (com debounce)
  let resizeTimeout
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
      createParticles()
      createFloatingParticles()
    }, 250)
  })

  // Add mobile menu styling
  if (!document.querySelector("#mobile-menu-styles")) {
    const style = document.createElement("style")
    style.id = "mobile-menu-styles"
    style.textContent = `
      @media screen and (max-width: 768px) {
        .nav-items.active {
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 80px;
          left: 0;
          right: 0;
          background-color: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 5px 15px rgba(0, 102, 255, 0.2);
          padding: 20px;
          z-index: 100;
          border: 1px solid rgba(0, 102, 255, 0.3);
        }

        .nav-items.active a {
          margin: 10px 0;
          color: #ffffff;
        }
      }
    `
    document.head.appendChild(style)
  }

  // Check if sections are already in viewport on page load
  const skillsSection = document.querySelector(".skills")
  if (skillsSection && isInViewport(skillsSection)) {
    animateSkills()
    skillsAnimated = true
  }

  // Carregar projetos do GitHub ao iniciar
  setTimeout(() => {
    fetchGitHubProjects()
    projectsLoaded = true
  }, 1000)
})
