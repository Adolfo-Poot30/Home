// Base de datos ficticia de servicios
const services = [
    {
        id: 1,
        title: "Corte de Cabello",
        description: "Corte profesional personalizado según tu estilo y tipo de cabello.",
        price: "$35 - $60",
        image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "cortes"
    },
    {
        id: 2,
        title: "Coloración Profesional",
        description: "Transforma tu look con nuestra coloración de alta calidad y cuidado.",
        price: "$70 - $120",
        image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "coloracion"
    },
    {
        id: 3,
        title: "Tratamiento de Keratina",
        description: "Elimina el frizz y obtén un cabello suave y manejable por meses.",
        price: "$150 - $250",
        image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "tratamientos"
    },
    {
        id: 4,
        title: "Extensiones de Cabello",
        description: "Añade longitud y volumen con nuestras extensiones de alta calidad.",
        price: "$200 - $500",
        image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "extensiones"
    },
    {
        id: 5,
        title: "Maquillaje Profesional",
        description: "Maquillaje para ocasiones especiales realizado por nuestros expertos.",
        price: "$50 - $100",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "maquillaje"
    },
    {
        id: 6,
        title: "Manicura y Pedicura",
        description: "Cuidado completo de uñas con esmaltado semipermanente opcional.",
        price: "$30 - $60",
        image: "https://images.pexels.com/photos/31091768/pexels-photo-31091768/free-photo-of-pedicure.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: "manicura"
    },
    {
        id: 7,
        title: "Depilación con Cera",
        description: "Depilación profesional para una piel suave y sin vello.",
        price: "$20 - $80",
        image: "https://images.pexels.com/photos/6763116/pexels-photo-6763116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: "depilacion"
    },
    {
        id: 8,
        title: "Masaje Relajante",
        description: "Alivia el estrés y la tensión con nuestro masaje profesional.",
        price: "$60 - $100",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "masajes"
    }
];

// Base de datos simulada del equipo
const team = [
    {
        id: 1,
        name: "María González",
        position: "Estilista Senior",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        bio: "Especialista en cortes y coloración con más de 10 años de experiencia."
    },
    {
        id: 2,
        name: "Laura Martínez",
        position: "Experta en Extensiones",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        bio: "Certificada en las mejores técnicas de aplicación de extensiones."
    },
    {
        id: 3,
        name: "Carlos Rodríguez",
        position: "Barbero Profesional",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        bio: "Especialista en cortes masculinos y estilos modernos."
    },
    {
        id: 4,
        name: "Ana Sánchez",
        position: "Maquilladora Profesional",
        image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        bio: "Creativa y detallista, especializada en maquillaje para eventos."
    }
];

// Base de datos simulada de testimonios
const testimonials = [
    {
        id: 1,
        text: "El mejor salón al que he ido. María hizo magia con mi cabello y ahora recibo cumplidos todos los días.",
        author: "Sofía Ramírez",
        role: "Cliente frecuente",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        text: "Carlos es increíble. Siempre sabe exactamente qué corte me queda mejor y hace que me sienta genial.",
        author: "Javier López",
        role: "Cliente desde 2018",
        image: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        text: "Las extensiones que me puso Laura son tan naturales que hasta mi peluquera habitual pensó que era mi cabello real.",
        author: "Daniela Castro",
        role: "Nueva cliente",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
    
];