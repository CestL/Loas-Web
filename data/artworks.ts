/* ====================================================
   LOART - ARTWORK DATA
   
   IMPORTANT: This is where you add your own paintings!
   
   Each artwork object contains:
   - id: unique identifier
   - title: artwork title
   - artist: artist name
   - year: year created
   - location: where it was created/exhibited
   - materials: medium used (Oil Paint, Watercolor, etc.)
   - period: art period (Rococo, Baroque, Impressionism, etc.)
   - currentStatus: where it's currently located
   - description: brief description of the artwork
   - image: path to the image file
   - era: for filtering (1600s, 1700s, 1800s, 1900s)
   
   ==================================================== */

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  year: number;
  location: string;
  materials: string;
  description: string;
  image: string;
  era: "Asiático" | "Floral" | "Retrato" | "Valdivia" | "Talleres";
}

/* ====================================================
   ADD YOUR OWN ARTWORK OBJECTS IN THIS ARRAY
   
   To add a new painting:
   1. Place your image in /public/artworks/ folder
   2. Copy one of the objects below as a template
   3. Update all the fields with your painting info
   4. Make sure the image path matches your file name
   
   Example:
   {
     id: "my-painting",
     title: "My Beautiful Painting",
     artist: "Your Name",
     year: 2024,
     location: "Your City",
     materials: "Oil on Canvas",
     period: "Contemporary",
     currentStatus: "Private Collection",
     description: "Description of your artwork...",
     image: "/artworks/my-painting.jpg",
     era: "1900s"
   }
   ==================================================== */

export const artworks: Artwork[] = [
  // ===== Masterpieces ARTWORKS =====
  {
    id: "Camelia Blanca",
    title: "Camelia Blanca",
    artist: "LOA",
    year: 2018,
    location: "Valdivia, Chile",
    materials: "Óleo sobre Madera",
    description: "Una de las primeras exploraciones de la artista en la pintura al óleo y su primer cuadro floral dentro de su trayectoria. Esta obra, realizada en 2018 como su cuarta pintura, representa el inicio de una conexión artística con la naturaleza, la textura y la sensibilidad de las flores. A través de pinceladas expresivas y orgánicas, las flores blancas emergen delicadamente sobre un fondo oscuro, creando un contraste íntimo y elegante que refleja el descubrimiento de una identidad artística en formación.",
    image: "/artworks/Camelia Blanca.PNG", 
    era: "Floral"
  },

  {
    id: "El Cielo que Pinta la Tierra",
    title: "El Cielo que Pinta la Tierra",
    artist: "LOA",
    year: 2023,
    location: "Valdivia, Chile",
    materials: "Óleo sobre Madera",
    description: "Una obra vibrante donde el color se convierte en emoción. Los intensos tonos naranjas, dorados y magentas envuelven el paisaje en una atmósfera cálida y contemplativa, evocando la calma de un atardecer que transforma la naturaleza en luz. El reflejo del sol sobre el agua guía la mirada hacia el centro de la composición, mientras la figura blanca del cisne aporta serenidad y equilibrio entre la intensidad cromática del entorno. Pintada sobre madera, la textura natural de la superficie se integra con las pinceladas visibles del óleo, entregando profundidad y carácter a la escena.\n\nLa obra transmite un momento de quietud y conexión con la naturaleza, donde el cielo parece teñir la tierra con sus últimos colores del día.",
    image: "/artworks/El cielo que pinta la tierra.jpg", 
    era: ""
  },

  {
    id: "Garza al Atardecer",
    title: "Garza al Atardecer",
    artist: "LOA",
    year: 2024,
    location: "Valdivia, Chile",
    materials: "Acrílico sobre Lienzo",
    description: "Una escena serena donde la naturaleza se presenta en silencio y equilibrio. La figura de la garza, delicada y solitaria, se alza entre los juncos mientras la luz del atardecer cubre el paisaje con suaves tonos rosados, dorados y lavanda. El reflejo cálido sobre el agua crea una atmósfera tranquila y contemplativa, transmitiendo la sensación de un instante suspendido entre el día y la noche.\n\nLas pinceladas ligeras y fluidas del acrílico aportan movimiento al entorno natural, mientras los contrastes entre la vegetación oscura y la luminosidad del cielo dirigen la mirada hacia el centro de la obra. La composición evoca calma, introspección y una conexión silenciosa con la naturaleza.",
    image: "/artworks/Garza al atardecer.jpg",
    era: "Valdivia"
  },

  {
    id: "Invierno",
    title: "Invierno",
    artist: "LOA",
    year: 2019,
    location: "Valdivia, Chile",
    materials: "Óleo sobre Madera",
    description: "Inspirada en la atmósfera de Valdivia, esta obra no representa un lugar real, sino un paisaje construido desde la memoria y la imaginación de la artista. Los tonos dorados y ocres del bosque contrastan con los reflejos azules del agua, creando una escena donde el invierno se interpreta desde la calma, la introspección y la contemplación silenciosa. \n\nLa textura espesa del óleo sobre madera aporta profundidad y movimiento a la composición, permitiendo que la luz parezca filtrarse entre los árboles y se funda con el reflejo del paisaje. La pequeña figura solitaria junto al agua añade una sensación de escala y quietud, evocando la experiencia íntima de recorrer paisajes del sur bajo una atmósfera fría y luminosa. \n\nComo parte de la colección Las Cuatro Estaciones, la obra explora la relación emocional entre la naturaleza y los estados internos del artista, transformando recuerdos y sensaciones en escenarios imaginarios inspirados en Valdivia",
    image: "/artworks/Invierno.jpg",
    era: ""
  },

  {
    id: "Naturaleza Fria",
    title: "Naturaleza Fria",
    artist: "LOA",
    year: 2018,
    location: "Valdivia, Chile",
    materials: "Acrílico sobre Madera",
    description: "Naturaleza Fría presenta un paisaje floral inmerso en una atmósfera etérea y contemplativa. Sobre un fondo dominado por tonalidades azules y turquesas, emergen delicadas flores rosadas que aportan calidez y contraste visual. Las formas aparecen parcialmente difuminadas, como si fueran observadas a través de una cortina de lluvia, un cristal empañado o un recuerdo que se desvanece lentamente. La composición combina elementos naturales con una sensación abstracta, invitando al espectador a explorar tanto la imagen visible como las emociones que sugiere. \n\nLa obra establece un diálogo entre la serenidad del color y la vitalidad de la naturaleza. El predominio de los tonos fríos genera una sensación de calma, introspección y distancia, mientras que las flores rosadas irrumpen como símbolos de vida, fragilidad y esperanza. Esta tensión cromática crea un equilibrio visual que atrae la mirada hacia los distintos puntos de la composición.",
    image: "/artworks/Naturaleza Fria.jpg",
    era: "Floral"
  },

  {
    id: "Parque Saval",
    title: "Parque Saval",
    artist: "LOA",
    year: 2018,
    location: "Valdivia, Chile",
    materials: "Óleo sobre Lienzo",
    description: "Esta pintura captura un rincón característico del Parque Saval, uno de los espacios naturales más representativos de la ciudad de Valdivia. La escena muestra la tranquilidad de una laguna bordeada por una suave franja de tierra y vegetación, donde la luz se extiende sobre el paisaje creando reflejos y sombras que revelan la calma del entorno. Los árboles se alinean en el horizonte como guardianes silenciosos del lugar, mientras el agua refleja fragmentos del cielo, generando una sensación de amplitud y serenidad.\n\nLa composición transmite la esencia de los paisajes valdivianos: naturaleza abundante, espacios abiertos y una estrecha relación entre el agua y la vegetación. La pincelada visible y la riqueza cromática aportan una atmósfera cálida y luminosa. Parque Saval forma parte de la colección Valdivia, una serie dedicada a retratar los paisajes que conforman la identidad visual y emocional de la ciudad.",
    image: "/artworks/Parque Saval.jpg",
    era: "Valdivia",
  },

  {
    id: "Risco Curiñanco",
    title: "Risco Curiñanco",
    artist: "LOA",
    year: 2018,
    location: "Valdivia, Chile",
    materials: "Óleo sobre Lienzo",
    description: "Esta obra retrata una de las vistas más emblemáticas de la costa valdiviana: el paisaje observado desde el risco de Curiñanco, donde el océano Pacífico, la playa y las formaciones rocosas convergen en una composición de gran fuerza visual. Desde una perspectiva elevada, la mirada recorre la extensa línea costera hasta perderse en el horizonte, mientras las olas dibujan franjas blancas sobre el azul profundo del mar. \n\nEn el centro de la escena destaca la característica formación rocosa que emerge junto a la playa, actuando como punto focal y símbolo de la geografía única del sector. La vegetación costera en primer plano enmarca la vista y refuerza la sensación de encontrarse frente a un paisaje natural imponente y prácticamente intacto.\n\nRisco de Curiñanco forma parte de la colección Valdivia, una serie dedicada a representar los paisajes que definen la identidad natural de la región. Desde una vista privilegiada sobre la costa del Pacífico, la obra captura la inmensidad del océano, la fuerza del relieve costero y la belleza intacta de uno de los rincones más reconocibles del litoral valdiviano. A través del color y la textura, la pintura transforma el paisaje en una experiencia de contemplación, memoria y pertenencia territorial.",
    image: "/artworks/Risco Curiñanco.jpg",
    era: "Valdivia"
  },

  {
    id: "Santuario de la Naturaleza",
    title: "Santuario de la Naturaleza",
    artist: "LOA",
    year: 2018,
    location: "Valdivia, Chile",
    materials: "Óleo sobre Lienzo",
    description: "Esta obra retrata uno de los símbolos naturales más reconocidos de Valdivia: los cisnes de cuello negro que habitan el Santuario de la Naturaleza del Río Cruces. La escena se desarrolla entre extensos humedales y totorales que rodean un tranquilo espejo de agua, donde una familia de cisnes avanza serenamente por el paisaje.\n\nLos tonos azules del agua contrastan con los dorados y ocres de la vegetación acuática, creando una atmósfera luminosa y armoniosa. La composición transmite una sensación de calma y equilibrio, destacando la estrecha relación entre la fauna y los ecosistemas que caracterizan los humedales valdivianos.\n\nLa pintura se construye a partir de una composición envolvente donde la vegetación ocupa gran parte del espacio visual, generando un marco natural que dirige la atención hacia los cisnes. El agua funciona como un corredor visual que atraviesa la obra y aporta profundidad a la escena.\n\nSantuario de la Naturaleza forma parte de la colección Valdivia, una serie dedicada a retratar los paisajes y ecosistemas que definen la identidad de la ciudad y sus alrededores. La obra captura la serenidad de los humedales del Río Cruces, donde los característicos cisnes de cuello negro conviven con la vegetación acuática que ha dado fama internacional a este santuario. A través de una paleta luminosa y una pincelada expresiva, la pintura invita a contemplar la riqueza ecológica y la belleza silenciosa de uno de los espacios naturales más valiosos del sur de Chile.",
    image: "/artworks/Santuario de la Naturaleza.jpg",
    era: "Valdivia"
  },

  {
    id: "Vista Oriental",
    title: "Vista Oriental",
    artist: "LOA",
    year: 2024,
    location: "Valdivia, Chile",
    materials: "Acrílico sobre Lienzo",
    description: "Vista Oriental presenta un paisaje inspirado en la tradición pictórica de Asia oriental, donde montañas escarpadas emergen entre brumas suaves y se reflejan en aguas tranquilas. La composición combina elementos naturales y humanos en una escena de equilibrio y contemplación: un pequeño navegante avanza silenciosamente por el lago mientras, en primer plano, un ave descansa sobre la rama florida de un árbol que se extiende hacia el espacio abierto. \n\nLa obra está dominada por una paleta de tonos suaves y luminosos, donde los ocres, grises y blancos crean una atmósfera serena y atemporal. La presencia de la luna sobre las montañas refuerza la sensación de quietud y espiritualidad, transformando el paisaje en un espacio de reflexión más que en una representación geográfica específica.\n\nLa composición se articula en torno a la monumentalidad de las montañas, que ocupan gran parte de la superficie pictórica y transmiten una sensación de permanencia y grandeza. Frente a ellas, las figuras humanas aparecen diminutas, una característica recurrente en la pintura oriental tradicional que enfatiza la relación de respeto entre el ser humano y la naturaleza.\n\nEl uso del espacio vacío desempeña un papel fundamental. Las amplias áreas despejadas del lago y del cielo permiten que la mirada respire y recorra la obra con calma, generando una sensación de silencio visual. Este recurso, frecuente en la estética oriental, otorga tanta importancia a lo que se muestra como a aquello que permanece sugerido.",
    image: "/artworks/Vista Oriental.jpg",
    era: "Asiático"
  },

  {
    id: "Volcan Osorno",
    title: "Volcan Osorno",
    artist: "LOA",
    year: 2024,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Lienzo",
    description: "La pintura presenta una interpretación poética y atmosférica del Volcán Osorno, uno de los paisajes más emblemáticos del sur de Chile. La obra transmite serenidad, inmensidad y conexión con la naturaleza mediante una composición donde el volcán aparece parcialmente velado por ramas en primer plano, creando profundidad y una sensación de observación íntima.",
    image: "/artworks/Volcan Osorno.jpg",
    era: ""
  },
  // ===== Asiático ARTWORKS =====
  {
    id: "Akatsuki",
    title: "Akatsuki",
    artist: "LOA",
    year: 2024,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Lienzo",
    description: "“Akatsuki” es una obra inspirada en la estética de la pintura japonesa tradicional y contemporánea, donde la simplicidad visual se transforma en un lenguaje profundamente simbólico y contemplativo. El título —que en japonés puede traducirse como “amanecer” — dialoga perfectamente con la atmósfera cálida y silenciosa que domina la composición.\n\n La pintura presenta un paisaje minimalista compuesto por montañas nevadas, un sendero que conduce hacia una estructura tradicional japonesa y un árbol de flores rojizas que se eleva verticalmente dominando la escena. El fondo en tonos beige y durazno genera una sensación de calma y amplitud, mientras que el círculo rojo intenso recuerda al sol naciente, elemento icónico de la cultura visual japonesa.",
    image: "/artworks/Akatsuki.jpg",
    era: "Asiático"
  },

  {
    id: "Japon Fantasmal",
    title: "Japon Fantasmal",
    artist: "LOA",
    year: 2025,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Lienzo",
    description: "“Japón Fantasmal” es una obra de fuerte carga poética y emocional que combina elementos de la estética japonesa tradicional con una atmósfera etérea y melancólica. La pintura transmite silencio, memoria y espiritualidad mediante una composición minimalista donde la figura humana aparece casi disuelta en el paisaje, como un recuerdo o una presencia espiritual que atraviesa un mundo suspendido entre la realidad y el sueño.\n\n La obra presenta una figura femenina vista de espaldas, vestida con un kimono de tonos grises y negros, sosteniendo una sombrilla tradicional japonesa. La escena se desarrolla en un paisaje nebuloso y casi monocromático, donde predominan los blancos, grises suaves y negros diluidos. El espacio blanco domina la composición y se convierte en un elemento expresivo fundamental. No representa ausencia, sino silencio, distancia y contemplación.",
    image: "/artworks/Japon Fantasmal.jpg",
    era: "Asiático"
  },

  // ===== Valdivia ARTWORKS =====
  {
    id: "Atardecer en Curiñanco",
    title: "Atardecer en Curiñanco",
    artist: "LOA",
    year: 2020,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Madera",
    description: "“Atardecer en Curiñanco” transmite una atmósfera de contemplación y serenidad frente al paisaje costero del sur de Chile. La obra captura el instante en que el sol desciende sobre el océano, bañando el cielo y el mar con tonos cálidos de naranja, amarillo y rosa, que contrastan con los azules y verdes profundos de los acantilados y la vegetación.\n\n La composición dirige la mirada hacia el horizonte central, donde el sol se refleja sobre el agua como una columna luminosa. Los promontorios oscuros a ambos lados enmarcan la escena y generan profundidad, mientras que las rocas dispersas en el mar aportan ritmo visual y sensación de movimiento natural. La perspectiva elevada sugiere un punto de observación íntimo, como si el espectador estuviera contemplando el paisaje desde un mirador costero.",
    image: "/artworks/Atardecer en curiñanco.jpg",
    era: "Valdivia"
  },
 
  {
    id: "Cambio Estacional",
    title: "Cambio Estacional",
    artist: "LOA",
    year: 2023,
    location: "Valdivia, Chile",
    materials:  "Acrilico sobre Madera",
    description: "Esta obra es un paisaje de gran vitalidad y expresividad, donde la naturaleza se representa a través de una explosión de color y textura. Es una pieza que evoca la sensación de caminar por un bosque en una época de transición.\n\n Un bosque o arboleda con árboles de troncos delgados y ramas que se elevan hacia un cielo claro. El suelo está cubierto de una densa capa de vegetación baja, y las copas de los árboles muestran una mezcla de follaje verde y flores o hojas de un rojo intenso. La perspectiva es lineal, con un sendero o claro que se adentra en el bosque, guiando la mirada del espectador hacia el fondo. Los árboles están dispuestos de forma natural, creando un ritmo visual que invita a explorar la escena.",
    image: "/artworks/Cambio Estacional.jpg",
    era: "Valdivia"
  },

  {
    id: "Contemplando la alameda",
    title: "Contemplando la alameda",
    artist: "LOA",
    year: 2019,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Madera",
    description: "Esta obra es un retrato narrativo y atmosférico que representa a Samuel, el nieto del artista, capturado en un momento de soledad y reflexión en el camino de La Alameda calle icónica que guía a la Universidad Austral en Valdivia. La pintura combina la figura humana con un paisaje que parece casi onírico, creando una escena que evoca la juventud, la introspección y la conexión con la naturaleza.",
    image: "/artworks/Contemplando la alameda.jpg",
    era: "Valdivia"
  },

  {
    id: "Detrás de la Isla Teja",
    title: "Detrás de la Isla Teja",
    artist: "LOA",
    year: 2026,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Lienzo",
    description: "Esta obra es una vista del paisaje vibrante y atmosférico del Santuario de la Naturaleza Carlos Anwandter, perspectiva desde el mirador en la Isla Teja en Valdivia, Chile. La pintura transmite la serenidad y la riqueza ecológica de este entorno natural protegido, conocido por sus humedales, aves nativas y paisajes fluviales. A través de una técnica suelta y una paleta vibrante, el artista invita al espectador a sumergirse en la escena y a sentir la paz y la belleza del humedal valdiviano. La obra no solo representa un lugar, sino que evoca emociones de conexión con la naturaleza, conciencia ambiental y aprecio por la biodiversidad local.",
    image: "/artworks/Detras de la isla teja.JPG", 
    era: "Valdivia"
  },

  {
    id: "Selva Valdiviana",
    title: "Selva Valdiviana",
    artist: "LOA",
    year: 2020,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Madera",
    description: "Esta notable pintura de la artista LOA representa una inmersión profunda en la riqueza botánica y la atmósfera mística del sur de Chile, específicamente de la Selva Valdiviana. Dentro de su producción paisajística, esta obra destaca por su complejidad técnica, alejándose temporalmente de las estructuras de horizontes limpios para envolver al espectador en la densidad y el follaje característicos de este ecosistema único en el mundo.\n\n En la base de la composición, una curva pronunciada de un sendero peatonal o camino de tierra en tonos beige, ocre y sutiles rosados cruza desde la esquina inferior izquierda hacia el lateral derecho. El camino está ejecutado con un empaste denso y rugoso que simula fielmente la textura del suelo forestal.",
    image: "/artworks/Selva Valdiviana.PNG", 
    era: "Valdivia"
  },

  {
    id: "Agar",
    title: "Agar",
    artist: "LOA",
    year: 2022,
    location: "Valdivia, Chile",
    materials: "Óleo sobre Lienzo",
    description: "",
    image: "/artworks/Agar.jpg",
    era: "Valdivia"
  },
  // ===== Retrato ARTWORKS =====
  {
    id: "Aurora",
    title: "Aurora",
    artist: "LOA",
    year: 2025,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Madera",
    description: "“Aurora” es una obra íntima y delicada que retrata a la nieta de la artista desde una mirada profundamente afectiva y emocional. Realizada en acrílico sobre madera, la pintura combina ternura, imaginación y simbolismo en una escena de apariencia casi onírica.\n\n La composición se centra en la figura de la niña, representada de perfil y envuelta en una atmósfera suave dominada por tonos lilas y rosados. Aurora aparece sentada serenamente, con una expresión tranquila y contemplativa, sosteniendo en sus manos un pequeño animal, figura delicada que parece convertirse en el centro emocional de la escena. Su mirada transmite inocencia, curiosidad y una conexión silenciosa con el mundo natural.\n\n El fondo está poblado de flores flotantes y tallos estilizados que rodean la figura como si crecieran dentro de un sueño o recuerdo. Estos elementos florales no buscan un realismo botánico, sino una función poética y simbólica: representan crecimiento, fragilidad, dulzura y el paso del tiempo. El nombre “Aurora” también sugiere un nuevo comienzo, la luz del amanecer y la pureza de la infancia.",
    image: "/artworks/Auro.jpg",
    era: "Retrato"
  },

 {
    id: "Basket",
    title: "Basket",
    artist: "LOA",
    year: 2025,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Madera",
    description: "Esta pintura representa una secuencia de movimiento y energía a través de la figura de una niña jugando básquetbol. La obra muestra tres momentos consecutivos de la acción deportiva: el desplazamiento, el salto y el lanzamiento hacia la canasta. La composición recuerda a una narrativa visual, casi cinematográfica, donde el tiempo queda fragmentado en distintas etapas del juego.",
    image: "/artworks/Basket.jpg",
    era: "Retrato"
  },

  {
    id: "Taekwondo",
    title: "LuiFer",
    artist: "LOA",
    year: 2025,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Madera",
    description: "Esta pintura acrílica sobre madera presenta una composición tripartita que captura diferentes facetas del arte marcial, La figura frontal, de pie y con los brazos colgando, transmite calma, autoridad o meditación. El fondo oscuro y texturizado crea un efecto de halo o energía concentrada, destacando su importancia dentro de la triada. Es el eje compositivo y simbólico.\n\n Este cuadro lo hizo la artista para un niño llamado Luis Fernando al que le tiene mucho cariño.",
    image: "/artworks/Taekwondo.jpg",
    era: "Retrato"
  },

  {
    id: "Coco",
    title: "Coco",
    artist: "LOA",
    year: 2025,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Lienzo",
    description: "Esta obra es un retrato íntimo y vibrante que captura la esencia de Verónica, la nieta del artista, mediante un uso audaz del color y una composición que evoca la tradición japonesa. La pintura trasciende la simple representación para convertirse en una obra de carácter simbólico y emocional.\n\nEl centro de la composición es una figura femenina joven, identificada como Verónica. Lleva un vestuario tradicional de estilo japonés, Un kimono o yukata de color amarillo con un estampado floral sutil, y un obi (cinturón) rojo ancho. Sostiene una sombrilla roja sobre su cabeza.",
    image: "/artworks/Coco.JPEG", 
    era: "Retrato"
  },

  {
    id: "Elio",
    title: "Elio",
    artist: "LOA",
    year: 2025,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Madera",
    description: "Esta obra es una representación dinámica y expresiva de un baterista en acción, capturando la energía, el ritmo y la pasión de la interpretación musical en vivo. La pintura utiliza un lenguaje visual vibrante y una composición teatral para evocar la experiencia de un concierto.",
    image: "/artworks/Elio.jpg",
    era: "Retrato"
  },

  {
    id: "Elisa",
    title: "Elisa",
    artist: "LOA",
    year: 2025,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Madera",
    description: "Esta obra es un retrato poético y etéreo que representa a Elisa, la nieta del artista, capturada en un momento de intimidad musical mientras toca la guitarra. La pintura combina la figura humana con elementos naturales y una estética influenciada por la caligrafía y la pintura oriental, creando una escena que evoca la armonía entre el arte, la naturaleza y la familia.\n\n La artista logra transmitir no solo la apariencia física de su nieta, sino también su esencia como músico y su lugar en la familia. La obra es un tributo a la creatividad, la belleza efímera y la armonía entre el ser humano y la naturaleza.",
    image: "/artworks/Elisa.jpg",
    era: "Retrato"
  },

  {
    id: "Gimnasia",
    title: "Gimnasia",
    artist: "LOA",
    year: 2025,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Lienzo",
    description: "Esta obra es una celebración vibrante y llena de vida de la juventud, el movimiento y el cariño. Representa a Fiorela, una niña a quien la artista profesa un gran afecto, capturada en plena acción mientras practica gimnasia. La pintura transmite la energía, la gracia y la alegría de la infancia a través de un estilo expresivo y colorido.\n\n Las figuras están dispuestas en una línea horizontal en la parte inferior del lienzo, sobre una base rojiza que sugiere un suelo o tarima. El espacio superior está ocupado por cinco manchas abstractas de color rojo y amarillo, que evocan flores, fuegos artificiales o explosiones de energía, añadiendo un toque festivo y onírico a la escena.",
    image: "/artworks/Gimnasia.jpg",
    era: "Retrato"
  },

  {
    id: "Isabel",
    title: "Isabel",
    artist: "LOA",
    year: 2025,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Madera",
    description: "Esta pintura es un homenaje emotivo y vibrante a Isabel, la nieta de la artista, capturada en un momento de expresión musical y libertad. A través de un uso expresivo del color, una composición dinámica y una técnica que prioriza la actitud sobre el detalle, el artista logra transmitir la esencia de la juventud, la pasión por la música y la fuerza de carácter de Isabel. La obra no solo representa a una niña tocando el bajo, sino que evoca emociones de cariño, admiración y celebración de su talento y personalidad. \n\n En el centro de la composición, una figura femenina joven, identificada como Isabel, sostiene y toca un bajo eléctrico de color rojo intenso. Lleva pantalones negros ajustados, una blusa amarilla con detalles oscuros (posiblemente manga larga o estampada), y su cabello largo y oscuro cae sobre sus hombros. Su postura es erguida y segura, con las manos posicionadas en el diapasón y las cuerdas del instrumento, sugiriendo que está en plena interpretación.",
    image: "/artworks/Isabel.jpg",
    era: "Retrato"
  },

  {
    id: "Los Actores",
    title: "Los Actores",
    artist: "LOA",
    year: 2025,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Lienzo",
    description: "Esta pintura, de estilo naíf o arte ingenio, captura la esencia de una representación teatral infantil. A través de trazos sencillos y una paleta de colores muy viva, el autor nos introduce en una puesta en escena que evoca la inocencia y el esfuerzo de un grupo de niños sobre las tablas.\n\n La obra es un tierno homenaje a las dinámicas escolares y comunitarias. Representa ese momento exacto de una función infantil donde coexisten la concentración, los nervios por actuar y la ilusión de disfrazarse.",
    image: "/artworks/los Actores.jpg",
    era: "Retrato"
  },

  {
    id: "Mati",
    title: "Matica",
    artist: "LOA",
    year: 2025,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Madera",
    description: "Esta pintura Matica a color es un retrato íntimo y emotivo que captura a la nieta de la artista llamada Maria Antonieta en pleno acto creativo. La obra destaca por su enfoque personal, fusionando la figuración con una vibrante abstracción expresiva.\n\n La pintura muestra a Matica sentada de espaldas a la audiencia, centrada frente a un piano vertical que ocupa el lado izquierdo del lienzo. Su cabello castaño y ondulado cae sobre su espalda. Lleva un vestido que es el foco de color principal de su figura: una falda con rayas verticales y gruesas de rojo, azul, amarillo y rosa, ceñida en la cintura por un lazo rojo muy largo que se extiende dramáticamente hacia la derecha, creando una línea de movimiento que equilibra la composición.",
    image: "/artworks/Matica.jpg",
    era: "Retrato"
  },

  {
    id: "Péndulo ",
    title: "Péndulo",
    artist: "LOA",
    year: 2018,
    location: "Valdivia, Chile",
    materials: "Óleo sobre Lienzo",
    description: "Esta pintura de la artista captura una escena profundamente arraigada en el afecto familiar y la identidad local. Representa a sus tres nietas —María Antonieta, Isabel y Elisa— contemplando el paisaje de la costanera de Valdivia, centrando su atención en el emblemático Péndulo de Foucault. La obra fusiona el retrato íntimo con el paisaje urbano costero bajo el tamiz del arte.\n\n En el primer plano inferior, sentadas de espaldas sobre un banco o murete, se encuentran las tres jóvenes espectadoras. Su disposición de espaldas invita al público a compartir su misma mirada.",
    image: "/artworks/Pendulo.jpg",
    era: "Retrato"
  },

  {
    id: "Una Taza de Café",
    title: "Una Taza de Café",
    artist: "LOA",
    year: 2025,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Papel",
    description: "Esta pintura de la artista LOA posee una carga emocional, histórica y mística que la diferencia drásticamente de cualquier otra obra de su colección. Al retratar a su hermana, conocida cariñosamente como (Chichi), la creadora abandona los paisajes exuberantes, los colores contrastantes y los grupos dinámicos para concentrarse en la intimidad de una sola figura humana.\n\n El café, símbolo universal de la conversación, el encuentro y la calidez del hogar, se convierte aquí en un elemento de compañía silenciosa.",
    image: "/artworks/Una taza de cafe.jpg",
    era: "Retrato"
  },

  {
    id: "Veronica",
    title: "Vevi",
    artist: "LOA",
    year: 2025,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Madera",
    description: "Descripción y Análisis de la Obra: Retrato Expresionista de Vevi Esta impactante pintura expande de forma crucial el registro de la colección familiar. Firmada en la esquina inferior derecha con las icónicas siglas LOA, la obra es un retrato dedicado a —o inspirado en— su hija, Verónica Virginia (Vevi).\n\n A diferencia de las atmósferas bucólicas y los paisajes naturales que caracterizan gran parte del catálogo familiar, esta pieza se adentra de lleno en un expresionismo figurativo de fuerte carga teatral, nocturna y fantástica. La figura femenina no se funde pasivamente con el entorno, sino que domina el espacio con una presencia escénica magnética y vibrante.\n\n El retrato de Vevi puede interpretarse como una celebración de la identidad, la feminidad y la expresión artística o escénica. El traje azul y la postura majestuosa transforman a la hija de la artista en una especie de deidad mística, una bailarina Arabe o una reina de la noche que se sostiene imperturbable mientras el entorno a su alrededor estalla en líneas de color y destellos.",
    image: "/artworks/Vevi.jpg",
    era: "Retrato"
  },

  {
    id: "Virgi",
    title: "Virginia",
    artist: "LOA",
    year: 2025,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Madera",
    description: "Esta obra de formato vertical posee una delicadeza única dentro de la colección familiar. Firmada en la esquina inferior derecha con las iniciales LOA, representa a su otra nieta, Virginia, integrándola en un entorno natural que desborda lirismo.\n\n A nivel compositivo y atmosférico, la pieza comparte el recurso de la perspectiva emocional visto en (Las Nietas ante el Péndulo de Valdivia o Matíca tocando el piano), donde el sujeto es retratado de espaldas. Sin embargo, aquí la paleta cromática se vuelve monocromática y etérea, envolviendo a la figura en un halo de ensueño romántico y campestre.\n\n Es una obra que exhala inocencia, ternura y paz bucólica. La complicidad silenciosa entre la niña y su pequeña mascota evoca el amor y el respeto por los animales, un rasgo recurrente en las vivencias cotidianas y afectivas de la infancia.",
    image: "/artworks/Virginia.jpg",
    era: "Retrato"
  },

  {
    id: "Recuerdos de Chichi",
    title: "Recuerdos de Chichi",
    artist: "LOA",
    year: 2026,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Lienzo",
    description: "",
    image: "/artworks/Recuerdos de chichi.jpg",
    era: "Retrato"
  },

  // ===== Talleres ARTWORKS =====
  {
    id: "Bloom",
    title: "Bloom",
    artist: "Coco",
    year: 2026,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Lienzo",
    description: "Una ventana abierta de un azul intenso revela un paisaje costero sereno, bañado por la luz del Mediterráneo. Sobre el alféizar, una maceta con flores rosas y un cerezo en flor enmarcan la vista, invitando al espectador a trascender el umbral y sumergirse en la calma del horizonte. Pintura realizada por estudiante en talleres de LOA.",
    image: "/artworks/Bloom.JPEG", 
    era: "Talleres"
  },

  {
    id: "Bodegón de Cristal",
    title: "Bodegón de Cristal",
    artist: "Matica",
    year: 2026,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Lienzo",
    description: "Esta obra es un bodegón de estilo impresionista que destaca por su manejo del color y la luz, utilizando elementos cotidianos para crear una composición vibrante y equilibrada.\n\nLa escena representa una disposición de objetos de mesa: dos jarras o botellas de vidrio translúcido, limones enteros y cortados, y varias cerezas oscuras esparcidas.\n\nPintura realizada por estudiante en talleres de LOA.",
    image: "/artworks/Bodegon de Cristal.jpg",
    era: "Talleres"
  },

  {
    id: "Contemplación",
    title: "Contemplación",
    artist: "Isabel",
    year: 2023,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Lienzo",
    description: "La pintura Contemplación representa un valle alpino con un río serpenteante que fluye desde las montañas nevadas en el fondo hacia el primer plano. El valle está cubierto de praderas verdes y flores silvestres, mientras que bosques de coníferas bordean los lados.\n\n Logra capturar la esencia de un entorno natural salvaje y majestuoso. A través de una técnica suelta y una paleta vibrante, el artista invita al espectador a sumergirse en la escena y a sentir la energía y la paz de la naturaleza. La obra no solo representa un lugar, sino que evoca emociones de libertad, asombro y conexión con el mundo natural.\n\n Pintura realizada por estudiante en talleres de LOA.",
    image: "/artworks/Contemplacion.jpg",
    era: "Talleres"
  },
   
  {
    id: "Guitarra de Eddie Van Halen",
    title: "Guitarra de Eddie Van Halen",
    artist: "Elisa",
    year: 2026,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Lienzo",
    description: "Esta pintura es un homenaje vibrante y energético a la guitarra de Eddie Van Halen, un ícono del rock y la innovación musical. A través de un uso expresivo del color, una composición dinámica y una técnica que prioriza la actitud sobre el detalle, el artista logra transmitir la esencia de la música rock, la pasión por la innovación y la fuerza de carácter de Eddie Van Halen. La obra no solo representa una guitarra, sino que evoca emociones de admiración, celebración y conexión con el legado musical.\n\n Pintura realizada por estudiante en talleres de LOA.",
    image: "/artworks/Guitarra Eddie Van Halen.jpg",
    era: "Talleres"
  },

  {
    id: "Velero",
    title: "Velero",
    artist: "Celina",
    year: 2026,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Lienzo",
    description: "Esta Pintura busca adentrarse en un paisaje lírico, idílico y fuertemente emotivo. A través de una composición clásica en capas y un uso vibrante del color, la artista logra un equilibrio entre la calma de la naturaleza y una intensa energía interna.\n\n En la parte inferior, la escena está delimitada por una orilla densamente florecida. Se aprecian detalles de vegetación en un verde brillante, salpicado por flores blancas, amarillas y, predominantemente, pequeñas flores rosadas (que recuerdan a tulipanes o flores silvestres) alzándose en tallos definidos. El cuerpo de agua, resuelto en sutiles tonos azulados, grisáceos y reflejos celestes, ocupa el centro de la composición. En el corazón del cuadro navega un velero blanco de dos mástiles. Su figura es nítida y proyecta un reflejo directo sobre el agua, lo que le otorga un rol protagónico.\n\n Pintura realizada por estudiante en talleres de LOA.",
    image: "/artworks/Velero.jpg",
    era: "Talleres"
  },

  {
    id: "Playa Nocturna",
    title: "Playa Nocturna",
    artist: "Matica",
    year: 2019,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Lienzo",
    description: "Esta obra posee un valor sumamente especial dentro de la colección, ya que representa el relevo artístico y la continuidad del talento familiar. Firmada en la esquina inferior derecha como MATICA , esta pintura es una creación directa de la nieta de la artista, la joven María Antonieta.\n\n Al asumir el rol de creadora, Matíca hereda la sensibilidad por las texturas y la pureza formal del estilo naíf de su abuela, pero le imprime su propio sello: una mirada más mística, introspectiva y enfocada en la atmósfera mágica de la noche y el paisaje deshabitado.\n\n Pintura realizada por estudiante en talleres de LOA.",
    image: "/artworks/Playa Nocturna.jpg",
    era: "Talleres"
  },

  {
    id: "Rio Futa",
    title: "Rio Futa",
    artist: "Matica",
    year: 2021,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Lienzo",
    description: "Esta hermosa pintura de paisaje expande el catálogo de Matíca (María Antonieta), consolidando su rol como continuadora del legado artístico familiar. En esta ocasión, la joven artista abandona la atmósfera nocturna y mística de sus composiciones previas para capturar la serenidad de un entorno natural icónico del sur de Chile: el Río Futa, ubicado en la Región de Los Ríos.\n\n A través de un manejo luminoso del color y una notable atención a la geografía local, Matíca reinterpreta el paisaje sureño combinando la frescura de su juventud con la entrañable técnica naíf que une a su familia.\n\n Pintura realizada por estudiante en talleres de LOA.",
    image: "/artworks/Rio Futa.jpg",
    era: "Talleres"
  },

  {
    id: "SW",
    title: "SW",
    artist: "Isabel",
    year: 2021,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Lienzo",
    description: "Esta encantadora pintura, atribuida a Isabel (nieta de la artista principal de la colección), expande el universo creativo de la familia hacia un nuevo territorio: la cultura pop y la ciencia ficción. Basada explícitamente en una escena de la saga Star Wars, la obra captura a los emblemáticos droides C-3PO y R2-D2 en un entorno sereno y ajardinado.\n\n Con un estilo naíf distintivo, Isabel reinterpreta el icónico momento, fusionando la mitología galáctica con la calidez y la textura propias de la técnica familiar, logrando un equilibrio único entre lo artificial (los droides) y lo natural (el jardín).\n\n Pintura realizada por estudiante en talleres de LOA.",
    image: "/artworks/SW.jpg",
    era: "Talleres"
  },

  {
    id: "Volcan Puntiuagudo",
    title: "Volcan Puntiuagudo",
    artist: "Elisa",
    year: 2022,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Lienzo",
    description: "La pintura del Volcán Puntiagudo realizada por Elisa es una hermosa declaración de arraigo, identidad y respeto por la naturaleza indómita.\n\n Símbolo eterno del paisaje del sur de Chile, el volcán es representado aquí no en una faceta destructiva o violenta, sino como un guardián silencioso, una presencia eterna y pacífica que domina el entorno. El equilibrio entre el azul del agua y la pureza de la nieve transmite una sensación térmica de frescura y aire limpio. Es una obra madura dentro de la producción de la joven artista, demostrando su capacidad para captar la monumentalidad del entorno geográfico local y transformarlo, a través de sus pinceles, en un refugio visual de absoluta calma y claridad.\n\n Pintura realizada por estudiante en talleres de LOA.",
    image: "/artworks/Volcan Puntiagudo.jpg",
    era: "Talleres"
  },

  {
    id: "Humedales",
    title: "Humedales",
    artist: "Virginia",
    year: 2026,
    location: "Santiago, Chile",
    materials: "Acrilico sobre Papel",
    description: "Esta apacible pintura, incorporada a la muestra colectiva familiar, pertenece a la autoría de Virginia, nieta de la artista (LOA). En esta pieza, Virginia se aleja de la representación de figuras humanas o escenas cotidianas para concentrarse por completo en el paisaje puro, capturando con una mirada sensible y nativa la quietud de los humedales del sur de Chile.\n\n A través de un estilo naíf sereno y atmosférico, la obra rinde un homenaje directo a los ecosistemas acuáticos que definen la geografía y la biodiversidad de la zona.\n\n Pintura realizada por estudiante en talleres de LOA",
    image: "/artworks/Humedales.jpg",
    era: "Talleres"
  },

  {
    id: "Agujero Negro",
    title: "Agujero Negro",
    artist: "Elisa",
    year: 2026,
    location: "Valdivia, Chile",
    materials: "Óleo sobre Madera",
    description: "",
    image: "/artworks/Agujero Negro.jpg",
    era: "Talleres"
  },

  {
    id: "Cerezo",
    title: "Cerezo",
    artist: "Elisa",
    year: 2019,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Madera",
    description: "",
    image: "/artworks/Cerezo.jpg",
    era: "Talleres"
  },

  {
    id: "Jardin",
    title: "Jardín",
    artist: "Matica",
    year: 2021,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Madera",
    description: "",
    image: "/artworks/Jardin.jpg",
    era: "Talleres"
  },

  {
    id: "Replica de Van Gogh",
    title: "Replica de Van Gogh",
    artist: "Isabel",
    year: 2026,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Madera",
    description: "",
    image: "/artworks/Replica de Van Gogh.jpg",
    era: "Talleres"
  },
   
  {
    id: "La Flor Roja",
    title: "La Flor Roja",
    artist: "Isabel",
    year: 2023,
    location: "Valdivia, Chile",
    materials: "Óleo sobre Papel",
    description: "",
    image: "/artworks/La Flor Roja.JPEG",
    era: "Talleres"
  },

  {
    id: "Taller Infantil 1",
    title: "Taller Infantil 1",
    artist: "Olivia",
    year: 2025,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Papel",
    description: "Pinturas infantiles realizadas en talleres de LOA",
    image: "/artworks/Taller Infantil 1.jpg",
    era: "Talleres"
  },

  {
    id: "Taller Infantil 2",
    title: "Taller Infantil 2",
    artist: "Jose T.",
    year: 2025,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Papel",
    description: "Pinturas infantiles realizadas en talleres de LOA",
    image: "/artworks/Taller Infantil 2.jpg",
    era: "Talleres"
  },

  {
    id: "Taller Infantil 3",
    title: "Taller Infantil 3",
    artist: "Olivia",
    year: 2025,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Papel",
    description: "Pinturas infantiles realizadas en talleres de LOA",
    image: "/artworks/Taller Infantil 3.jpg",
    era: "Talleres"
  },
  // ===== Floral ARTWORKS =====
  {
    id: "Camelia Rosa",
    title: "Camelia Rosa",
    artist: "LOA",
    year: 2018,
    location: "Valdivia, Chile",
    materials: "Óleo sobre Madera",
    description: "Esta pintura de Camelias rosas es una obra maestra de la técnica y la expresión. El uso del óleo permite una riqueza de color y textura que es fundamental para transmitir la belleza de las flores. El hecho de que sea parte de una serie con una obra gemela de flores blancas y otra de flores Amarillas eleva su significado, transformándola de un simple bodegón a una exploración artística de la luz, el color y la emoción. Juntas, las Tres obras ofrecen una experiencia visual completa y profunda, invitando al espectador a reflexionar sobre la diversidad y la belleza de la naturaleza.",
    image: "/artworks/Camelia Rosa.PNG", 
    era: "Floral"
  },

  {
    id: "El Jarrón en el Mural",
    title: "El Jarrón en el Mural",
    artist: "LOA",
    year: 2026,
    location: "Valdivia, Chile",
    materials: "Acrílico sobre muro",
    description: "Esta obra es un bodegón mural que presenta un ramo de flores silvestres en un jarrón de cristal, destacando por su atmósfera cálida, íntima y nostálgica. A diferencia de una pintura de caballete, al ser parte de un mural, la obra tiene una escala que invita a la contemplación desde la distancia, y su ejecución parece aprovechar la textura y la superficie del muro para lograr un efecto único.",
    image: "/artworks/Jarron de Mural.jpg",
    era: "Floral"
  },

  {
    id: "Flores de Jade",
    title: "Flores de Jade",
    artist: "LOA",
    year: 2023,
    location: "Valdivia, Chile",
    materials: "Óleo sobre Cartón",
    description: "",
    image: "/artworks/Flores de Jade.jpg",
    era: "Floral"
  },

  {
    id: "Jarron",
    title: "Jarron",
    artist: "LOA",
    year: 2025,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Madera",
    description: "",
    image: "/artworks/Jarron.JPEG",
    era: "Talleres"
  },
  
  // ===== No categorias ARTWORKS =====
  {
    id: "Bodegón",
    title: "Bodegón",
    artist: "LOA",
    year: 2026,
    location: "Santiago, Chile",
    materials: "Acrilico sobre Madera",
    description: "Esta obra es un bodegón de atmósfera íntima y dramática, donde la luz y el color se combinan para evocar una sensación de calma y contemplación.\n\nLa escena muestra una botella de vino tinto, una copa parcialmente llena, un racimo de uvas y dos manzanas sobre una superficie. Los elementos están dispuestos de forma equilibrada, con la botella y la copa como ejes centrales. Las frutas flanquean la composición, creando un arco visual.",
    image: "/artworks/Bodegon.jpg",
    era: ""
  },

  {
    id: "San Cristóbal",
    title: "San Cristóbal",
    artist: "LOA",
    year: 2024,
    location: "Santiago, Chile",
    materials: "Acrilico con Hilos sobre Lienzo",
    description: "Interpretación pictórica vibrante y expresiva del Cerro San Cristóbal en Santiago de Chile, capturando la esencia del paisaje urbano y natural que caracteriza a esta emblemática colina. es una obra de gran expresividad y colorido, que logra capturar la esencia del paisaje urbano y natural de Santiago. A través de una técnica suelta y una paleta vibrante, el artista invita al espectador a compartir una mirada contemplativa sobre este emblemático lugar. No solo representa un paisaje, sino que evoca emociones de pertenencia, nostalgia y alegría, convirtiéndose en un tributo a la identidad local y a la belleza de la ciudad.",
    image: "/artworks/Cerro San Cristobal.JPEG", 
    era: ""
  },

  {
    id: "Crayones",
    title: "Crayones",
    artist: "LOA",
    year: 2024,
    location: "Valdivia, Chile",
    materials: "Crayón de cera sobre papel",
    description: "Este dibujo con crayones es una obra de arte encantadora y llena de vida, que captura la esencia de la naturaleza y la inocencia de la creatividad. A través de un uso expresivo del color y una técnica sencilla, el artista logra transmitir emociones de alegría, esperanza y conexión con el mundo natural. La obra es un testimonio de la belleza que se encuentra en la simplicidad y la espontaneidad.",
    image: "/artworks/Crayones.jpg",
    era: ""
  },

  {
    id: "La Ventana",
    title: "La Ventana",
    artist: "LOA",
    year: 2023,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Lienzo",
    description: "Esta obra es un paisaje sereno y luminoso que captura una vista panorámica de un lago rodeado de montañas, enmarcada por una estructura arquitectónica que sugiere una ventana. La pintura transmite una sensación de paz, vacaciones y conexión con la naturaleza, evocando la belleza de destinos lacustres como los de la región de los Lagos en Chile.\n\n La escena representa un lago de aguas tranquilas y color turquesa/azulado, con pequeñas embarcaciones (una roja y otra más oscura) navegando en su superficie. En el fondo, una cadena de montañas cubiertas de bosques se eleva bajo un cielo azul claro con nubes blancas dispersas. A lo lejos, se adivinan algunas construcciones o casas en la orilla opuesta.\n\n La obra está diseñada como una vista enmarcada. Un borde de color madera/ocre rodea la escena, creando una perspectiva de ventana al paisaje. En primer plano, a la derecha, un jarrón con flores rosadas y moradas añade un toque de color y vida, anclando la escena en un espacio interior o semi-interior. La parte inferior de la obra muestra una superficie de madera clara, que simula el suelo de una terraza o el alféizar de una ventana.",
    image: "/artworks/La Ventana.jpg",
    era: ""
  },

  {
    id: "Medanos de Coro",
    title: "Medanos de Coro",
    artist: "LOA",
    year: 2022,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Madera",
    description: "Esta pintura ofrece una interpretación paisajística de uno de los entornos naturales más emblemáticos de Venezuela: el Parque Nacional Los Médanos de Coro. Manteniendo el lenguaje visual que caracteriza las obras de la artista, la pieza transita entre el arte naíf y la abstracción geométrica orgánica, capturando la calidez extrema y la geografía cambiante del desierto falconiano.\n\n Pintar los Médanos de Coro implica conectar con las raíces, la topografía y la luz particular del territorio venezolano. La ausencia de figuras humanas o vegetación refuerza la inmensidad y la solemnidad del desierto. El sol naranja y solitario no solo es un elemento de iluminación, sino un símbolo del norte de Venezuela, donde el astro rey domina el paisaje de manera absoluta. Es una obra que evoca nostalgia, pertenencia y una profunda apreciación por la belleza silenciosa de la naturaleza.",
    image: "/artworks/Medanos de Coro.jpg",
    era: ""
  },

  {
    id: "Otoño",
    title: "Otoño",
    artist: "LOA",
    year: 2019,
    location: "Valdivia, Chile",
    materials: "Óleo sobre Madera",
    description: "Esta pintura, titulada Otoño, forma parte de una serie dedicada a Las Cuatro Estaciones. En esta pieza, la artista se aleja de la narrativa humana o marina de composiciones previas para concentrarse de lleno en la fuerza de la naturaleza vegetal, utilizando el color y la textura densa como vehículos primordiales para transmitir la atmósfera nostálgica y cálida de la transición estacional.\n\n La composición está dominada en sus dos tercios inferiores por una densa franja de árboles alineados. Cada uno de ellos exhibe una etapa diferente de la coloración otoñal. Al ser parte de la colección de Las 4 Estaciones, Otoño cumple un rol fundamental: representar el ciclo de la madurez, el cambio y el desprendimiento.\n\n La pintura celebra la belleza de la transformación. La transición del verde moribundo al rojo encendido y al marrón seco es una metáfora visual de la transitoriedad de la vida. A pesar de que el otoño suele asociarse a la melancolía por la caída de las hojas, la artista decide retratarlo como una fase vibrante y llena de fuerza, donde los árboles se despiden de su ropaje con un último destello de esplendor dorado antes del letargo invernal. Es una obra que transmite calidez hogareña, madurez artística y una profunda conexión con los ritmos del tiempo natural.",
    image: "/artworks/Otoño.jpg",
    era: ""
  },

  {
    id: "Primavera",
    title: "Primavera",
    artist: "LOA",
    year: 2019,
    location: "Valdivia, Chile",
    materials: "Óleo sobre Madera",
    description: "Esta vibrante pintura, titulada Primavera, es otra pieza fundamental de la colección Las Cuatro Estaciones de la artista (LOA). En contraste directo con la calidez melancólica de Otoño, esta obra estalla en frescura, luz y vitalidad, utilizando una perspectiva envolvente que invita al espectador a caminar bajo un dosel de flores.\n\n La pintura representa un sendero o camino arbolado (un parque, avenida o alameda) en plena floración. Los árboles se alinean a ambos lados del camino, con troncos delgados y sinuosos en tonos marrones y ocres que se ramifican hacia el cielo, entrelazándose en la parte superior.\n\n Dentro de la colección de Las 4 Estaciones, Primavera simboliza el renacimiento, la juventud y el despertar de la vida.\n\n Tras el letargo invernal, la naturaleza regresa con una fuerza desbordante. Al elegir una paleta de azules y púrpuras en lugar del clásico rosa o blanco floral, la artista le otorga al paisaje una atmósfera mágica, casi de ensueño. El sendero despejado y cubierto de pétalos es una invitación poética a avanzar, sugiriendo optimismo y nuevos caminos por recorrer. Es una obra sumamente alegre que celebra la abundancia y la belleza cíclica del mundo natural, capturada con la característica sensibilidad y ternura que define el universo visual de LOA.",
    image: "/artworks/Primavera.jpg",
    era: ""
  },

  {
    id: "Verano",
    title: "Verano",
    artist: "LOA",
    year: 2019,
    location: "Valdivia, Chile",
    materials: "Óleo sobre Madera",
    description: "Esta luminosa marina, titulada Verano, completa la emblemática serie de Las Cuatro Estaciones de la artista (LOA). En perfecta consonancia con las entregas de Invierno, Otoño y Primavera, esta pieza captura la esencia del estío costero. Mediante un empaste generoso y una vibrante paleta crepuscular, la obra evoca la calidez de una caleta o bahía protegida, donde el mar y el sol poniente se vuelven los protagonistas absolutos.\n\n Dentro de la colección de Las 4 Estaciones, Verano simboliza la plenitud, la madurez del ciclo y la calma.",
    image: "/artworks/Verano.jpg",
    era: ""
  },

  {
    id: "Bodegón II",
    title: "Bodegón II",
    artist: "LOA",
    year: 2022,
    location: "Valdivia, Chile",
    materials: "Pintura de Tela sobre Tela",
    description: "",
    image: "/artworks/Bodegon II.jpg",
    era: ""
  },
  
  {
    id: "Playa Cepe",
    title: "Playa Cepe",
    artist: "LOA",
    year: 2026,
    location: "Valdivia, Chile",
    materials: "Acrilico sobre Lienzo",
    description: "",
    image: "/artworks/Playa Cepe.jpg",
    era: ""
  },
  

  
  /* ====================================================
     PLACE YOUR PAINTING IMAGES HERE
     
     Add more artwork objects following the same structure.
     Remember to:
     1. Give each artwork a unique id
     2. Place your images in /public/artworks/
     3. Use the correct era for filtering (1600s-1900s)
     
     ==================================================== */
];

// Era options for the gallery filter
export const eras = ["Asiático", "Floral", "Retrato", "Talleres", "Valdivia"] as const;
export type Era = typeof eras[number];
