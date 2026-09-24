import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="site-header">
    <div class="header-inner">
      <a href="#inicio" class="brand">
        <span class="brand-mark">TF</span>
        <span>
          <strong>TALLER FELTES</strong>
          <small>MOTOS · POMPEYA</small>
        </span>
      </a>

      <nav class="desktop-nav">
        <a href="#servicios">Servicios</a>
        <a href="#galeria">Trabajos</a>
        <a href="#ubicacion">Ubicación</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <a class="header-cta" href="https://wa.me/5491134546399">LLAMAR</a>
    </div>
  </header>

  <main>

    <!-- HERO -->
    <section id="inicio" class="hero">
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <div class="eyebrow">
          <span></span>
          TALLER DE MOTOS · POMPEYA
        </div>

        <h1>
          POTENCIA.<br>
          PRECISIÓN.<br>
          <em>CONFIANZA.</em>
        </h1>

        <p class="hero-title">
          TU MOTO, LISTA PARA<br class="mobile-only">
          LA PRÓXIMA SALIDA.
        </p>

        <p class="hero-description">
          Reparación, mantenimiento y puesta a punto.
          Revisamos tu moto para que vuelva a la calle
          en las mejores condiciones posibles.
        </p>

        <div class="hero-actions">
          <a class="btn btn-red" href="https://wa.me/5491134546399">
            CONTACTAR AL TALLER
            <span>→</span>
          </a>

          <a class="btn btn-outline" href="#servicios">
            VER SERVICIOS
          </a>
        </div>

        <div class="hero-meta">
          <div>
            <strong>AV. SÁENZ 658</strong>
            <span>POMPEYA · CABA</span>
          </div>
          <div>
            <strong>LUN — VIE</strong>
            <span>09:00 — 19:00</span>
          </div>
          <div>
            <strong>SÁBADOS</strong>
            <span>09:00 — 18:00</span>
          </div>
        </div>
      </div>

      <div class="hero-number">658</div>
    </section>

    <!-- INTRO -->
    <section class="intro section">
      <div class="section-label">01 / EL TALLER</div>

      <div class="intro-grid">
        <div>
          <h2>
            TU MOTO.<br>
            <span>NUESTRO TRABAJO.</span>
          </h2>
        </div>

        <div class="intro-copy">
          <p class="lead">
            En Taller Feltes trabajamos sobre motos que necesitan
            mantenimiento, reparación o una revisión antes de volver
            a rodar.
          </p>

          <p>
            La idea es simple: detectar el problema, revisar el estado
            general y realizar el trabajo necesario según el diagnóstico.
            Porque una moto bien mantenida no solamente funciona mejor:
            también te permite salir a la calle con mayor tranquilidad.
          </p>
        </div>
      </div>

      <div class="promo-card">
        <div class="promo-image">
          <img src="/images/portada.jpg" alt="Taller de Motos Feltes">
        </div>

        <div class="promo-content">
          <span class="promo-kicker">MANTENIMIENTO · REPARACIONES</span>
          <h3>¿Tu moto necesita un ajuste?</h3>
          <p>
            Dejá que la revisemos y encontrá el problema antes
            de que se convierta en uno mayor.
          </p>
          <a href="https://wa.me/5491134546399" class="text-link">
            CONSULTAR AHORA →
          </a>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section id="servicios" class="services section">
      <div class="section-label">02 / SERVICIOS</div>

      <div class="section-heading">
        <div>
          <h2>
            SERVICIO<br>
            <span>DE TALLER.</span>
          </h2>
        </div>

        <p>
          Trabajos de mantenimiento, revisión y reparación según
          el estado y las necesidades de cada moto.
        </p>
      </div>

      <div class="services-grid">

        <article class="service-card">
          <span class="service-number">01</span>
          <h3>MOTOR</h3>
          <p>
            Diagnóstico y mantenimiento del motor para detectar
            fallas, pérdidas, ruidos, problemas de funcionamiento
            o pérdida de rendimiento.
          </p>
          <ul>
            <li>Revisión general</li>
            <li>Cambio de aceite y filtros</li>
            <li>Puesta a punto</li>
            <li>Revisión de válvulas</li>
            <li>Diagnóstico de fallas</li>
          </ul>
        </article>

        <article class="service-card">
          <span class="service-number">02</span>
          <h3>TRANSMISIÓN</h3>
          <p>
            Revisión y mantenimiento del sistema de transmisión
            para mejorar su funcionamiento y detectar desgaste.
          </p>
          <ul>
            <li>Cadena</li>
            <li>Piñón y corona</li>
            <li>Tensado y lubricación</li>
            <li>Kit de transmisión</li>
            <li>Embrague y regulación</li>
          </ul>
        </article>

        <article class="service-card">
          <span class="service-number">03</span>
          <h3>FRENOS</h3>
          <p>
            Control del sistema de frenado y revisión de los
            componentes relacionados con la seguridad de la moto.
          </p>
          <ul>
            <li>Pastillas</li>
            <li>Discos</li>
            <li>Líquido de frenos</li>
            <li>Regulación</li>
            <li>Detección de desgaste</li>
          </ul>
        </article>

        <article class="service-card">
          <span class="service-number">04</span>
          <h3>ELECTRICIDAD</h3>
          <p>
            Diagnóstico de problemas eléctricos y revisión de los
            principales componentes del sistema.
          </p>
          <ul>
            <li>Batería</li>
            <li>Sistema de carga</li>
            <li>Arranque</li>
            <li>Luces</li>
            <li>Fusibles y conexiones</li>
          </ul>
        </article>

        <article class="service-card">
          <span class="service-number">05</span>
          <h3>SUSPENSIÓN</h3>
          <p>
            Revisión del tren delantero y elementos de suspensión
            para detectar pérdidas, desgaste o funcionamiento irregular.
          </p>
          <ul>
            <li>Barrales y horquilla</li>
            <li>Retenes</li>
            <li>Dirección</li>
            <li>Rodamientos</li>
            <li>Regulaciones</li>
          </ul>
        </article>

        <article class="service-card">
          <span class="service-number">06</span>
          <h3>RUEDAS</h3>
          <p>
            Control del estado de ruedas, neumáticos y componentes
            relacionados con el rodamiento.
          </p>
          <ul>
            <li>Desgaste de neumáticos</li>
            <li>Presión</li>
            <li>Llantas</li>
            <li>Cámaras cuando corresponda</li>
            <li>Rodamientos</li>
          </ul>
        </article>

        <article class="service-card">
          <span class="service-number">07</span>
          <h3>ALIMENTACIÓN</h3>
          <p>
            Revisión del sistema de alimentación cuando existen
            problemas de marcha, arranque o funcionamiento.
          </p>
          <ul>
            <li>Diagnóstico de funcionamiento</li>
            <li>Limpieza y mantenimiento</li>
            <li>Carburación cuando corresponda</li>
            <li>Inyección cuando corresponda</li>
          </ul>
        </article>

        <article class="service-card featured">
          <span class="service-number">08</span>
          <h3>SERVICE GENERAL</h3>
          <p>
            Una revisión integral para conocer el estado de la moto
            y detectar necesidades de mantenimiento antes de salir.
          </p>
          <ul>
            <li>Revisión general</li>
            <li>Fluidos</li>
            <li>Ajustes</li>
            <li>Lubricación</li>
            <li>Detección preventiva de desgaste</li>
          </ul>
        </article>

      </div>

      <div class="service-note">
        <strong>IMPORTANTE</strong>
        <span>
          Los trabajos se realizan según diagnóstico, modelo y estado
          de cada moto. Consultá previamente por el servicio que necesitás.
        </span>
      </div>
    </section>

    <!-- CTA -->
    <section class="warning-section">
      <div class="warning-inner">
        <div class="warning-icon">!</div>

        <div>
          <span class="warning-label">NO ESPERES A QUE TU MOTO TE DEJE A PIE</span>

          <h2>
            UN RUIDO EXTRAÑO<br>
            PUEDE SER UNA SEÑAL.
          </h2>

          <p>
            Ruidos, vibraciones, dificultades para arrancar,
            pérdida de potencia, problemas de frenos o cambios,
            luces que fallan o un comportamiento extraño pueden
            ser señales de que tu moto necesita una revisión.
          </p>

          <a href="https://wa.me/5491134546399" class="btn btn-white">
            CONSULTAR POR TELÉFONO
            <span>→</span>
          </a>
        </div>
      </div>
    </section>

    <!-- GALLERY -->
    <section id="galeria" class="gallery section">
      <div class="section-label">03 / TRABAJOS</div>

      <div class="section-heading gallery-heading">
        <div>
          <h2>
            EL TALLER<br>
            <span>EN ACCIÓN.</span>
          </h2>
        </div>

        <p>
          Una mirada al espacio de trabajo y a las motos que pasan
          por Taller Feltes.
        </p>
      </div>

      <div class="gallery-grid">

        <button class="gallery-item gallery-feature" data-image="/images/frente.jpg">
          <img src="/images/frente.jpg" alt="Frente de Taller Feltes" loading="lazy">
          <span>EL TALLER</span>
        </button>

        <button class="gallery-item" data-image="/images/taller01.jpg">
          <img src="/images/taller01.jpg" alt="Trabajo en Taller Feltes" loading="lazy">
        </button>

        <button class="gallery-item" data-image="/images/taller02.jpg">
          <img src="/images/taller02.jpg" alt="Trabajo en Taller Feltes" loading="lazy">
        </button>

        <button class="gallery-item" data-image="/images/taller03.jpg">
          <img src="/images/taller03.jpg" alt="Trabajo en Taller Feltes" loading="lazy">
        </button>

        <button class="gallery-item" data-image="/images/taller04.jpg">
          <img src="/images/taller04.jpg" alt="Trabajo en Taller Feltes" loading="lazy">
        </button>

        <button class="gallery-item" data-image="/images/taller05.jpg">
          <img src="/images/taller05.jpg" alt="Trabajo en Taller Feltes" loading="lazy">
        </button>

        <button class="gallery-item" data-image="/images/taller06.jpg">
          <img src="/images/taller06.jpg" alt="Trabajo en Taller Feltes" loading="lazy">
        </button>

        <button class="gallery-item" data-image="/images/taller07.jpg">
          <img src="/images/taller07.jpg" alt="Trabajo en Taller Feltes" loading="lazy">
        </button>

        <button class="gallery-item" data-image="/images/taller08.jpg">
          <img src="/images/taller08.jpg" alt="Trabajo en Taller Feltes" loading="lazy">
        </button>

        <button class="gallery-item" data-image="/images/taller09.jpg">
          <img src="/images/taller09.jpg" alt="Trabajo en Taller Feltes" loading="lazy">
        </button>

        <button class="gallery-item" data-image="/images/taller10.jpg">
          <img src="/images/taller10.jpg" alt="Trabajo en Taller Feltes" loading="lazy">
        </button>

        <button class="gallery-item" data-image="/images/taller11.jpg">
          <img src="/images/taller11.jpg" alt="Trabajo en Taller Feltes" loading="lazy">
        </button>

        <button class="gallery-item" data-image="/images/taller12.jpg">
          <img src="/images/taller12.jpg" alt="Trabajo en Taller Feltes" loading="lazy">
        </button>

        <button class="gallery-item" data-image="/images/taller13.jpg">
          <img src="/images/taller13.jpg" alt="Trabajo en Taller Feltes" loading="lazy">
        </button>

        <button class="gallery-item" data-image="/images/taller14.jpg">
          <img src="/images/taller14.jpg" alt="Trabajo en Taller Feltes" loading="lazy">
        </button>

        <button class="gallery-item" data-image="/images/taller15.jpg">
          <img src="/images/taller15.jpg" alt="Trabajo en Taller Feltes" loading="lazy">
        </button>

        <button class="gallery-item" data-image="/images/taller16.jpg">
          <img src="/images/taller16.jpg" alt="Trabajo en Taller Feltes" loading="lazy">
        </button>

        <button class="gallery-item" data-image="/images/taller17.jpg">
          <img src="/images/taller17.jpg" alt="Trabajo en Taller Feltes" loading="lazy">
        </button>

        <button class="gallery-item" data-image="/images/taller18.jpg">
          <img src="/images/taller18.jpg" alt="Trabajo en Taller Feltes" loading="lazy">
        </button>

        <button class="gallery-item" data-image="/images/taller19.jpg">
          <img src="/images/taller19.jpg" alt="Trabajo en Taller Feltes" loading="lazy">
        </button>

      </div>
    </section>

    <!-- LOCATION -->
    <section id="ubicacion" class="location section">
      <div class="section-label">04 / ENCONTRANOS</div>

      <div class="location-grid">

        <div class="location-image">
          <img src="/images/frente.jpg" alt="Taller Feltes - Av. Sáenz 658">
          <div class="image-tag">AV. SÁENZ 658</div>
        </div>

        <div class="location-content">
          <span class="location-kicker">POMPEYA · CABA</span>

          <h2>
            PASÁ POR<br>
            <span>EL TALLER.</span>
          </h2>

          <p class="address">
            <a class="address-link" href="https://www.google.com/maps/search/?api=1&query=Av.+Sáenz+658,+Nueva+Pompeya,+CABA" target="_blank" rel="noopener"><strong>Av. Sáenz 658</strong></a><br>
            Nueva Pompeya, Ciudad Autónoma de Buenos Aires
          </p>

          <div class="contact-lines">
            <a href="https://wa.me/5491134546399">
              <span>PRINCIPAL</span>
              <strong>11 3454-6399</strong>
            </a>

            <a href="https://wa.me/5491168743554">
              <span>ALTERNATIVO</span>
              <strong>11 6874-3554</strong>
            </a>
          </div>

          <a
            class="btn btn-red"
            href="https://www.google.com/maps/search/?api=1&query=Av.+S%C3%A1enz+658%2C+Buenos+Aires"
            target="_blank"
            rel="noopener noreferrer"
          >
            ABRIR EN MAPS
            <span>↗</span>
          </a>
        </div>

      </div>
    </section>

    <!-- HOURS -->
    <section class="hours section">
      <div class="section-label">05 / HORARIOS</div>

      <div class="hours-grid">

        <div class="hours-intro">
          <h2>
            CUANDO<br>
            <span>NECESITES.</span>
          </h2>
          <p>
            Horarios de atención del taller.
          </p>
        </div>

        <div class="hours-list">
          <div class="hours-row">
            <span>LUNES</span>
            <strong>09:00 — 19:00</strong>
          </div>

          <div class="hours-row">
            <span>MARTES</span>
            <strong>09:00 — 19:00</strong>
          </div>

          <div class="hours-row">
            <span>MIÉRCOLES</span>
            <strong>09:00 — 19:00</strong>
          </div>

          <div class="hours-row">
            <span>JUEVES</span>
            <strong>09:00 — 19:00</strong>
          </div>

          <div class="hours-row">
            <span>VIERNES</span>
            <strong>09:00 — 19:00</strong>
          </div>

          <div class="hours-row saturday">
            <span>SÁBADO</span>
            <strong>09:00 — 18:00</strong>
          </div>
        </div>

      </div>
    </section>

    <!-- CONTACT -->
    <section id="contacto" class="contact-section">
      <div class="contact-inner">

        <div>
          <span class="contact-kicker">TALLER FELTES · POMPEYA</span>

          <h2>
            ¿LISTO PARA<br>
            <em>VOLVER A RODAR?</em>
          </h2>

          <p>
            Consultá por tu moto y contanos qué problema estás teniendo.
          </p>
        </div>

        <div class="contact-actions">
          <a class="big-phone" href="https://wa.me/5491134546399">
            <span>LLAMAR</span>
            11 3454-6399
          </a>

          <a class="contact-alt" href="https://wa.me/5491168743554">
            Teléfono alternativo: 11 6874-3554
          </a>
        </div>

      </div>
    </section>

  </main>

  <footer class="site-footer">
    <div>
      <strong>TALLER FELTES</strong>
      <span>REPARACIÓN · MANTENIMIENTO · PUESTA A PUNTO</span>
    </div>

    <div>
      <span>AV. SÁENZ 658 · POMPEYA · CABA</span>
    </div>
  </footer>

  <!-- LIGHTBOX -->
  <div class="lightbox" id="lightbox" aria-hidden="true">
    <button class="lightbox-close" id="lightboxClose" aria-label="Cerrar">×</button>

    <div class="lightbox-content">
      <img id="lightboxImage" src="" alt="Imagen ampliada de Taller Feltes">
    </div>
  </div>

  <!-- FLOATING CALL -->
  <a class="floating-call" href="https://wa.me/5491134546399" aria-label="Llamar a Taller Feltes">
    <span>☎</span>
  </a>
`

const lightbox = document.querySelector<HTMLDivElement>('#lightbox')
const lightboxImage = document.querySelector<HTMLImageElement>('#lightboxImage')
const lightboxClose = document.querySelector<HTMLButtonElement>('#lightboxClose')

const galleryItems = document.querySelectorAll<HTMLButtonElement>('.gallery-item')

galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    const image = item.dataset.image

    if (!image || !lightbox || !lightboxImage) return

    lightboxImage.src = image
    lightbox.classList.add('active')
    lightbox.setAttribute('aria-hidden', 'false')
    document.body.classList.add('no-scroll')
  })
})

function closeLightbox() {
  if (!lightbox || !lightboxImage) return

  lightbox.classList.remove('active')
  lightbox.setAttribute('aria-hidden', 'true')
  lightboxImage.src = ''
  document.body.classList.remove('no-scroll')
}

lightboxClose?.addEventListener('click', closeLightbox)

lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    closeLightbox()
  }
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeLightbox()
  }
})
