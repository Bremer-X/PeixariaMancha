// Configurações e Dados
const RESTAURANTE = {
    NOME: "Peixaria Mancha",
    ENDERECO: "Médici II, Rua Outeiro, 200 - Marambaia",
    HORARIOS: "Seg-Dom 11:00 - 15:30 || Delivery Seg-Dom 7:00 - 14:00",
    TELEFONE: "5591982696928", // Número formatado para API do WhatsApp
    TELEFONE_VISUAL: "(91) 98269-6928",
    INSTAGRAM_URL: "https://instagram.com/peixariamancha",
    FACEBOOK_URL: "https://facebook.com/peixariamancha",
    GOOGLE_MAPS_URL: "https://maps.google.com/maps?q=M%C3%A9dici%20II%2C%20Rua%20Outeiro%2C%20200%20-%20Marambaia&t=&z=15&ie=UTF8&iwloc=&output=embed",
};

const MENU_DATA = [
    // Entradas
    { category: "entradas", name: "Casquinha de Siri", desc: "Carne de siri pura, temperada com ervas finas e gratinada com parmesão.", price: "R$ 32,00" },
    { category: "entradas", name: "Lula à Dorê", desc: "Anéis de lula frescos empanados e fritos, acompanhados de molho tártaro.", price: "R$ 58,00" },
    { category: "entradas", name: "Camarão ao Alho e Óleo", desc: "Camarões rosa selecionados e salteados no azeite e alho laminado.", price: "R$ 65,00" },
    { category: "entradas", name: "Bolinho de Bacalhau", desc: "Tradicional receita portuguesa, crocante por fora e macio por dentro (6 unid).", price: "R$ 42,00" },
    { category: "entradas", name: "Iscas de Peixe", desc: "Filé de peixe fresco empanado, servido com limão e molho especial.", price: "R$ 48,00" },
    { category: "entradas", name: "Ostras Gratinadas", desc: "Ostras frescas gratinadas com queijo e ervas (6 unid).", price: "R$ 55,00" },

    // Principais
    { category: "principais", name: "Moqueca Capixaba", desc: "Tradicional moqueca de badejo, acompanha arroz branco e pirão. (Para 2 pessoas)", price: "R$ 145,00" },
    { category: "principais", name: "Lagosta Grelhada", desc: "Lagosta inteira grelhada na manteiga de ervas, com risoto de limão siciliano.", price: "R$ 180,00" },
    { category: "principais", name: "Camarão na Moranga", desc: "Camarões médios em creme de abóbora e catupiry, acompanha arroz e batata palha.", price: "R$ 160,00" },
    { category: "principais", name: "Salmão ao Molho de Maracujá", desc: "Filé de salmão grelhado com molho agridoce, acompanha legumes salteados.", price: "R$ 89,00" },
    { category: "principais", name: "Bacalhau à Lagareiro", desc: "Posta de bacalhau assada com batatas ao murro, cebola, alho e azeite extra virgem.", price: "R$ 135,00" },
    { category: "principais", name: "Risoto de Frutos do Mar", desc: "Arroz arbóreo com camarão, lula, polvo e mexilhões, finalizado com vinho branco.", price: "R$ 95,00" },

    // Sobremesas
    { category: "sobremesas", name: "Petit Gâteau", desc: "Bolinho de chocolate com recheio cremoso, servido com sorvete de creme.", price: "R$ 28,00" },
    { category: "sobremesas", name: "Pudim de Leite", desc: "Clássico pudim de leite condensado, liso e sem furinhos.", price: "R$ 18,00" },
    { category: "sobremesas", name: "Mousse de Limão", desc: "Mousse leve e aerada com raspas de limão siciliano.", price: "R$ 22,00" },
    { category: "sobremesas", name: "Torta de Coco", desc: "Fatia de torta cremosa com coco fresco e calda de caramelo.", price: "R$ 24,00" },
    { category: "sobremesas", name: "Sorvete Artesanal", desc: "Duas bolas de sorvete (consulte sabores) com calda de frutas vermelhas.", price: "R$ 20,00" },
    { category: "sobremesas", name: "Frutas da Estação", desc: "Seleção de frutas frescas fatiadas.", price: "R$ 15,00" },

    // Bebidas
    { category: "bebidas", name: "Caipirinha Especial", desc: "Cachaça artesanal, limão e açúcar (ou adoçante).", price: "R$ 25,00" },
    { category: "bebidas", name: "Suco Natural", desc: "Laranja, Limão, Abacaxi, Maracujá (500ml).", price: "R$ 12,00" },
    { category: "bebidas", name: "Cerveja Long Neck", desc: "Heineken, Stella Artois, Corona.", price: "R$ 14,00" },
    { category: "bebidas", name: "Vinho Branco (Taça)", desc: "Consulte nossa carta de vinhos para opções.", price: "R$ 28,00" },
    { category: "bebidas", name: "Água de Coco", desc: "Natural, servida no coco.", price: "R$ 10,00" },
    { category: "bebidas", name: "Refrigerante", desc: "Lata 350ml.", price: "R$ 7,00" },
];

const TESTIMONIALS = [
    { text: "A melhor moqueca que já comi! Ingredientes fresquíssimos e atendimento impecável.", author: "Mariana Silva" },
    { text: "Ambiente sofisticado e acolhedor. O camarão na moranga é divino. Recomendo muito!", author: "Carlos Eduardo" },
    { text: "Lugar perfeito para um jantar romântico. A carta de vinhos harmoniza muito bem com os pratos.", author: "Fernanda Lima" },
    { text: "Atendimento nota 10! Fomos muito bem recebidos e a comida estava espetacular.", author: "Roberto Souza" },
    { text: "Preço justo pela qualidade oferecida. Voltarei com certeza!", author: "Ana Clara" }
];

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    initContent();
    initMenu();
    initTestimonials();
    initForm();
    initAnimations();
    initMobileMenu();
    initLightbox();
    initHeroCarousel();
});

// ... (existing code)

// 8. Hero Carousel
function initHeroCarousel() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;

    let currentSlide = 0;
    const slideInterval = 5000; // 5 segundos

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, slideInterval);
}

// 1. Injetar Conteúdo Dinâmico
function initContent() {
    // Links de WhatsApp
    const whatsappLinks = document.querySelectorAll('.whatsapp-link');
    whatsappLinks.forEach(link => {
        link.href = `https://wa.me/${RESTAURANTE.TELEFONE}?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido%20ou%20tirar%20d%C3%BAvidas.`;
        link.target = "_blank";
    });

    // Informações de Contato
    document.getElementById('address-text').textContent = RESTAURANTE.ENDERECO;
    document.getElementById('hours-text').textContent = RESTAURANTE.HORARIOS;
    document.getElementById('phone-text').textContent = RESTAURANTE.TELEFONE_VISUAL;
    document.getElementById('year').textContent = new Date().getFullYear();

    // Redes Sociais
    document.querySelector('.instagram-link').href = RESTAURANTE.INSTAGRAM_URL;
    document.querySelector('.facebook-link').href = RESTAURANTE.FACEBOOK_URL;

    // Mapa
    document.getElementById('map-container').innerHTML = `<iframe src="${RESTAURANTE.GOOGLE_MAPS_URL}" allowfullscreen="" loading="lazy"></iframe>`;

    // Botão Maps
    document.getElementById('maps-btn').href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(RESTAURANTE.ENDERECO)}`;
}

// 2. Lógica do Menu
function initMenu() {
    const tabsContainer = document.getElementById('menu-tabs');
    const menuGrid = document.getElementById('menu-grid');
    const categories = ['Entradas', 'Principais', 'Sobremesas', 'Bebidas'];

    // Criar Tabs
    categories.forEach((cat, index) => {
        const btn = document.createElement('button');
        btn.className = `menu-tab ${index === 0 ? 'active' : ''}`;
        btn.textContent = cat;
        btn.onclick = () => filterMenu(cat.toLowerCase());
        tabsContainer.appendChild(btn);
    });

    // Renderizar Menu Inicial
    filterMenu('entradas');
}

function filterMenu(category) {
    // Atualizar Tabs
    document.querySelectorAll('.menu-tab').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase() === category);
    });

    // Atualizar Grid com Animação
    const menuGrid = document.getElementById('menu-grid');
    menuGrid.innerHTML = '';

    const items = MENU_DATA.filter(item => item.category === category);

    items.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'menu-item scroll-reveal';
        div.style.animationDelay = `${index * 0.1}s`; // Stagger animation
        div.innerHTML = `
            <div class="menu-item-info">
                <h4>${item.name}</h4>
                <p class="menu-item-desc">${item.desc}</p>
            </div>
            <div class="menu-item-price">${item.price}</div>
        `;
        menuGrid.appendChild(div);
    });

    // Re-trigger animations for new elements
    observeElements();
}

// 3. Carrossel de Depoimentos Simples
let currentTestimonial = 0;

function initTestimonials() {
    const track = document.getElementById('testimonial-track');
    const nav = document.getElementById('testimonial-nav');

    // Renderizar Slides
    TESTIMONIALS.forEach((t) => {
        const slide = document.createElement('div');
        slide.className = 'testimonial-slide';
        slide.innerHTML = `
            <p class="testimonial-text">"${t.text}"</p>
            <p class="testimonial-author">- ${t.author}</p>
        `;
        track.appendChild(slide);
    });

    // Criar Dots
    TESTIMONIALS.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `nav-dot ${index === 0 ? 'active' : ''}`;
        dot.onclick = () => goToTestimonial(index);
        nav.appendChild(dot);
    });

    // Auto Play
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % TESTIMONIALS.length;
        goToTestimonial(currentTestimonial);
    }, 5000);
}

function goToTestimonial(index) {
    const track = document.getElementById('testimonial-track');
    const dots = document.querySelectorAll('.nav-dot');

    currentTestimonial = index;
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// 4. Formulário de Reserva
function initForm() {
    const form = document.getElementById('reservation-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;
        const obs = document.getElementById('obs').value;

        // Data formatada para BR
        const dateObj = new Date(date);
        const dateFormatted = dateObj.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

        const message = `*Nova Reserva - ${RESTAURANTE.NOME}*%0A%0A` +
            `*Nome:* ${name}%0A` +
            `*Telefone:* ${phone}%0A` +
            `*Data:* ${dateFormatted}%0A` +
            `*Horário:* ${time}%0A` +
            `*Pessoas:* ${guests}%0A` +
            `*Obs:* ${obs || 'Nenhuma'}`;

        const whatsappUrl = `https://wa.me/${RESTAURANTE.TELEFONE}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    });
}

// 5. Lightbox Galeria
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const triggers = document.querySelectorAll('.gallery-item img');
    const closeBtn = document.querySelector('.lightbox-close');

    triggers.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.classList.add('active');
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
}

// 6. Mobile Menu & Header
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const nav = document.getElementById('nav-links');
    const header = document.getElementById('header');

    btn.addEventListener('click', () => {
        nav.classList.toggle('active');
        const icon = btn.querySelector('i');
        if (nav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Fechar menu ao clicar em link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            btn.querySelector('i').classList.remove('fa-times');
            btn.querySelector('i').classList.add('fa-bars');
        });
    });

    // Sticky Header Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Back to top button
        const backToTop = document.getElementById('back-to-top');
        if (window.scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    document.getElementById('back-to-top').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// 7. Animations on Scroll
function initAnimations() {
    observeElements();
}

function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
}
