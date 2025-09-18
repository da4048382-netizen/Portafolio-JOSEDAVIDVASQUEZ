import { BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench, GraduationCap, Quote } from "lucide-react";

export const dataAboutMe = [
    {
        id: 1,
        name: "Tiempo en la programación y el desarrollo web",
        icon: <Briefcase />,
        description: "2 años",
    },
    {
        id: 2,
        name: "Logros",
        icon: <UsersRound />,
        description:
            "Este año 2025 obtengo el título de Técnico en Desarrollo de Software con el SENA, Técnico en Sistemas por colegio, además estoy cursando un semillero con la empresa Quipux.",
        logos: [
            { src: "/sena logo.png", alt: "SENA Logo" },
            { src: "/quipux_logo.jpg", alt: "Quipux Logo" },
        ],
    },
    {
        id: 3,
        name: "Proyectos",
        icon: <Wrench />,
        description: "+5 completados",
    },
];

export const itemsNavbar = [
    { id: 1, title: "Home", icon: <Home size={20} />, link: "#home" },
    { id: 2, title: "Sobre mí", icon: <UserRound size={20} />, link: "#about-me" },
    { id: 3, title: "Servicios", icon: <BookText size={20} />, link: "#services" },
    { id: 4, title: "Portafolio", icon: <CodeSquare size={20} />, link: "#portfolio" },
    { id: 5, title: "Educación", icon: <GraduationCap size={20} />, link: "#education" },
    { id: 6, title: "Testimonios", icon: <Quote size={20} />, link: "#testimonials" },
    { id: 7, title: "Contacto", icon: <Mail size={20} />, link: "#contact" },
];

export const dataSlider = [
    { id: 1, url: "/slider-1.jpg" },
    { id: 2, url: "/slider-2.jpg" },
    { id: 3, url: "/slider-3.jpg" },
    { id: 4, url: "/slider-4.jpg" },
];

export const dataPortfolio = [
    { id: 1, title: "Web ", image: "/image-1.jpg", urlGithub: "#!", urlDemo: "#!" },
    { id: 2, title: "Desarrollo Web Ágil", image: "/image-2.jpg", urlGithub: "#!", urlDemo: "#!" },
    { id: 3, title: "Estrategias Web", image: "/image-3.jpg", urlGithub: "#!", urlDemo: "#!" },
    { id: 4, title: "Navegando Ideas Creativas", image: "/image-4.jpg", urlGithub: "#!", urlDemo: "#!" },
    { id: 5, title: "Sitios Web Impactantes", image: "/image-5.jpg", urlGithub: "#!", urlDemo: "#!" },
    { id: 6, title: "Proyectos Web Dinámicos", image: "/image-6.jpg", urlGithub: "#!", urlDemo: "#!" },
];

export const dataExperience = [
    {
        id: 1,
        title: "Frontend Development 💄",
        experience: [
            { name: "HTML", subtitle: "intermedio", value: 80 },
            { name: "CSS", subtitle: "Intermedio", value: 75 },
            { name: "JavaScript", subtitle: "Intermedio", value: 60 },
            { name: "Tailwind CSS", subtitle: "Basico", value: 70 },
            { name: "React", subtitle: "Básico", value: 65 },
            { name: "Bootstrap", subtitle: "Básico", value: 50 },
        ],
    },
    {
        id: 2,
        title: "Backend Development 🥷",
        experience: [
            { name: "Node JS", subtitle: "Básico", value: 80 },
            { name: "Mongo DB", subtitle: "Intermedio", value: 75 },
            { name: "Python", subtitle: "Básico", value: 60 },
            { name: "MySQL", subtitle: "Experimentado", value: 70 },
            { name: "PHP", subtitle: "Experimentado", value: 65 },
            { name: "Django", subtitle: "Básico", value: 55 },
        ],
    },
];

export const dataServices = [
    {
        id: 1,
        title: "Desarrollo Web",
        icon: <PanelsTopLeft />,
        features: [
            { name: "Desarrollo de sitios web personalizados" },
            { name: "Diseño y desarrollo responsive" },
            { name: "Optimización SEO" },
            { name: "Desarrollo de aplicaciones web" },
            { name: "Gestión de contenido" },
            { name: "Comercio electrónico" },
            { name: "Mantenimiento y soporte continuo" },
        ],
    },
    {
        id: 2,
        title: "Creación de contenido",
        icon: <BellPlus />,
        features: [
            { name: "Redacción de contenido original y de calidad" },
            { name: "Creación de vídeos atractivos y dinámicos" },
            { name: "Diseño gráfico para una imagen impactante" },
            { name: "Edición profesional de textos y materiales visuales" },
            { name: "Estrategias de marketing de contenidos efectivas" },
            { name: "Producción de podcasts informativos y entretenidos" },
            { name: "Generación de infografías visualmente atractivas" },
        ],
    },
    {
        id: 3,
        title: "UI/UX Design",
        icon: <Brush />,
        features: [
            { name: "Diseño intuitivo para una experiencia de usuario fluida" },
            { name: "Prototipado interactivo" },
            { name: "Investigación de usuarios" },
            { name: "Optimización de la usabilidad" },
            { name: "Pruebas de usabilidad" },
            { name: "Diseño responsive para móviles y tablets" },
        ],
    },
];

export const dataContact = [
    { id: 1, title: "Teléfono", subtitle: "+57 313 344 67 21", link: "tel:+573133446721", icon: <Phone /> },
    { id: 2, title: "Github", subtitle: "github.com/da4048382-netizen", link: "https://github.com/da4048382-netizen", icon: <Code2 /> },
    { id: 3, title: "Email", subtitle: "da4048382@gmail.com", link: "mailto:da4048382@gmail.com", icon: <Inbox /> },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description: "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile-1.jpeg",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description: "Me encanta la variedad de testimonios disponibles. Inspirador ver cómo otras personas han superado desafíos similares. ¡Gracias!",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 3,
        name: "María García",
        description: "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras.",
        imageUrl: "/profile-3.jpeg",
    },
];
