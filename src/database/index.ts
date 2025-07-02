const filmes = [
  {
    filmes: [
      {
        titulo: "O Poderoso Chefão",
        diretor: "Francis Ford Coppola",
        ano: 1972,
        genero: ["Crime", "Drama"],
        duracao: 175,
        ratings: [
          { valor: 9.2, fonte: "IMDb" },
          { valor: 4.5, fonte: "Rotten Tomatoes" },
        ],
        elenco: ["Marlon Brando", "Al Pacino", "James Caan"],
        sinopse: [
          {
            texto:
              "Um chefão da máfia tenta transferir o controle de seu império clandestino para seu filho relutante.",
            idioma: "pt-br",
          },
          {
            texto:
              "A mafia boss tries to transfer control of his clandestine empire to his reluctant son.",
            idioma: "en",
          },
          {
            texto:
              "Un chef de la mafia tente de transférer le contrôle de son empire clandestin à son fils réticent.",
            idioma: "fr",
          },
        ],
        poster: "link para o poster do filme",
        trailer: "link para o trailer do filme",
        locacoes: ["Nova York", "Sicília", "Las Vegas"],
        orcamento: "$6 milhões",
        bilheteria: "$245 milhões",
        premios: [
          { nome: "Oscar de Melhor Filme", relevancia: 10 },
          { nome: "Oscar de Melhor Ator", relevancia: 8 },
        ],
      },
      {
        titulo: "Interestelar",
        diretor: "Christopher Nolan",
        ano: 2014,
        genero: ["Aventura", "Drama", "Ficção Científica"],
        duracao: 169,
        ratings: [
          { valor: 8.6, fonte: "IMDb" },
          { valor: 4.7, fonte: "Rotten Tomatoes" },
        ],
        elenco: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        sinopse: [
          {
            texto:
              "Um grupo de exploradores espaciais viaja através de um buraco de minhoca em busca de um novo lar para a humanidade.",
            idioma: "pt-br",
          },
          {
            texto:
              "A group of space explorers travels through a wormhole in search of a new home for humanity.",
            idioma: "en",
          },
          {
            texto:
              "Un groupe d'explorateurs spatiaux voyage à travers un trou de ver pour trouver un nouveau foyer pour l'humanité.",
            idioma: "fr",
          },
        ],
        poster: "link para o poster do filme",
        trailer: "link para o trailer do filme",
        locacoes: [
          "Planeta Miller",
          "Estação Espacial Endurance",
          "Planeta Gargantua",
        ],
        orcamento: "$165 milhões",
        bilheteria: "$677 milhões",
        premios: [
          { nome: "Oscar de Melhores Efeitos Visuais", relevancia: 8 },
          { nome: "BAFTA de Melhor Direção de Arte", relevancia: 7 },
        ],
      },
      {
        titulo: "O Senhor dos Anéis: O Retorno do Rei",
        diretor: "Peter Jackson",
        ano: 2003,
        genero: ["Aventura", "Fantasia"],
        duracao: 201,
        ratings: [
          { valor: 8.9, fonte: "IMDb" },
          { valor: 4.8, fonte: "Rotten Tomatoes" },
        ],
        elenco: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
        sinopse: [
          {
            texto:
              "The Fellowship of the Ring prepares for the final battle against Sauron to save Middle-earth.",
            idioma: "en",
          },
          {
            texto:
              "La Communauté de l'Anneau se prépare pour la bataille finale contre Sauron pour sauver la Terre du Milieu.",
            idioma: "fr",
          },
        ],
        poster: "link para o poster do filme",
        trailer: "link para o trailer do filme",
        locacoes: ["Nova Zelândia", "Mount Sunday", "Tongariro National Park"],
        orcamento: "$94 milhões",
        bilheteria: "$1.142 bilhão",
        premios: [
          { nome: "Oscar de Melhor Filme", relevancia: 10 },
          { nome: "Oscar de Melhor Direção", relevancia: 9 },
        ],
      },
      {
        titulo: "Matrix",
        diretor: "Lana Wachowski, Lilly Wachowski",
        ano: 1999,
        genero: ["Ação", "Ficção Científica"],
        duracao: 136,
        ratings: [
          { valor: 8.7, fonte: "IMDb" },
          { valor: 4.6, fonte: "Rotten Tomatoes" },
        ],
        elenco: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        sinopse: [
          {
            texto:
              "Un hacker découvre la vraie nature de la réalité et lutte contre une intelligence artificielle qui asservit l'humanité.",
            idioma: "fr",
          },
        ],
        poster: "link para o poster do filme",
        trailer: "link para o trailer do filme",
        locacoes: ["Sydney", "Chicago", "Londres"],
        orcamento: "$63 milhões",
        bilheteria: "$463 milhões",
        premios: [
          { nome: "4 Oscars", relevancia: 9 },
          { nome: "4 BAFTAs", relevancia: 8 },
        ],
      },
      {
        titulo: "Cidade de Deus",
        diretor: "Fernando Meirelles, Kátia Lund",
        ano: 2002,
        genero: ["Crime", "Drama"],
        duracao: 130,
        ratings: [
          { valor: 8.6, fonte: "IMDb" },
          { valor: 4.7, fonte: "Rotten Tomatoes" },
        ],
        elenco: [
          "Alexandre Rodrigues",
          "Leandro Firmino",
          "Phellipe Haagensen",
        ],
        sinopse: [
          {
            texto:
              "Dois jovens crescem em uma favela violenta do Rio de Janeiro e tomam caminhos diferentes: um se torna fotógrafo, o outro um traficante de drogas.",
            idioma: "pt-br",
          },
          {
            texto:
              "Two young men grow up in a violent favela in Rio de Janeiro and take different paths: one becomes a photographer, the other a drug dealer.",
            idioma: "en",
          },
          {
            texto:
              "Deux jeunes grandissent dans une favela violente de Rio de Janeiro et empruntent des chemins différents : l'un devient photographe, l'autre trafiquant de drogue.",
            idioma: "fr",
          },
        ],
        poster: "link para o poster do filme",
        trailer: "link para o trailer do filme",
        locacoes: ["Rio de Janeiro", "São Paulo"],
        orcamento: "$3.3 milhões",
        bilheteria: "$30 milhões",
        premios: [
          { nome: "4 BAFTAs", relevancia: 8 },
          { nome: "Globo de Ouro de Melhor Filme Estrangeiro", relevancia: 7 },
        ],
      },
      {
        titulo: "A Origem",
        diretor: "Christopher Nolan",
        ano: 2010,
        genero: ["Ação", "Ficção Científica", "Thriller"],
        duracao: 148,
        ratings: [
          { valor: 8.8, fonte: "IMDb" },
          { valor: 4.6, fonte: "Rotten Tomatoes" },
        ],
        elenco: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
        sinopse: [
          {
            texto:
              "Um ladrão especializado em roubar segredos corporativos por meio do uso de tecnologia de compartilhamento de sonhos é contratado para plantar uma ideia na mente de um CEO.",
            idioma: "pt-br",
          },
          {
            texto:
              "A thief specializing in stealing corporate secrets through the use of dream-sharing technology is hired to plant an idea in the mind of a CEO.",
            idioma: "en",
          },
          {
            texto:
              "Un voleur spécialisé dans le vol de secrets d'entreprise grâce à l'utilisation de la technologie de partage de rêves est engagé pour planter une idée dans l'esprit d'un PDG.",
            idioma: "fr",
          },
        ],
        poster: "link para o poster do filme",
        trailer: "link para o trailer do filme",
        locacoes: ["Paris", "Tóquio", "Califórnia"],
        orcamento: "$160 milhões",
        bilheteria: "$828 milhões",
        premios: [
          { nome: "4 Oscars", relevancia: 9 },
          { nome: "4 BAFTAs", relevancia: 8 },
        ],
      },
      {
        titulo: "Titanic",
        diretor: "James Cameron",
        ano: 1997,
        genero: ["Drama", "Romance"],
        duracao: 195,
        ratings: [
          { valor: 7.8, fonte: "IMDb" },
          { valor: 4.4, fonte: "Rotten Tomatoes" },
        ],
        elenco: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
        sinopse: [
          {
            texto:
              "Um romance proibido floresce a bordo do navio mais famoso do mundo, que está destinado a uma tragédia.",
            idioma: "pt-br",
          },
          {
            texto:
              "A forbidden romance blooms aboard the world's most famous ship, destined for tragedy.",
            idioma: "en",
          },
          {
            texto:
              "Un amour interdit fleurit à bord du navire le plus célèbre au monde, destiné à la tragédie.",
            idioma: "fr",
          },
        ],
        poster: "link para o poster do filme",
        trailer: "link para o trailer do filme",
        locacoes: ["México", "Califórnia"],
        orcamento: "$200 milhões",
        bilheteria: "$2.208 bilhões",
        premios: [
          { nome: "11 Oscars", relevancia: 10 },
          { nome: "3 BAFTAs", relevancia: 8 },
        ],
      },
      {
        titulo: "Clube da Luta",
        diretor: "David Fincher",
        ano: 1999,
        genero: ["Drama"],
        duracao: 139,
        ratings: [
          { valor: 8.8, fonte: "IMDb" },
          { valor: 4.5, fonte: "Rotten Tomatoes" },
        ],
        elenco: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
        sinopse: [
          {
            texto:
              "Um homem descontente e entediado forma um clube de luta clandestino como forma de lidar com sua vida insatisfatória.",
            idioma: "pt-br",
          },
          {
            texto:
              "A discontented and bored man forms an underground fight club as a way to cope with his unsatisfactory life.",
            idioma: "en",
          },
          {
            texto:
              "Un homme mécontent et ennuyé crée un club de combat clandestin comme moyen de faire face à sa vie insatisfaisante.",
            idioma: "fr",
          },
        ],
        poster: "link para o poster do filme",
        trailer: "link para o trailer do filme",
        locacoes: ["Los Angeles", "Wilmington", "Nova York"],
        orcamento: "$63 milhões",
        bilheteria: "$101 milhões",
        premios: [
          { nome: "Saturn Award de Melhor Diretor", relevancia: 7 },
          { nome: "MTV Movie Award de Melhor Filme", relevancia: 6 },
        ],
      },
    ],
  },
];


export { filmes }; 