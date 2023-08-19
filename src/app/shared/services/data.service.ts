import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private gallerieList: any = [
    {
      name: ['Starry Night', 'Nuit étoilée'],
      year: 1889,
      description: [
        'Although The Starry Night was painted during the day in Van Gogh\'s ground-floor studio, it would be inaccurate to state that the picture was painted from memory. The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. "Through the iron-barred window," he wrote to his brother, Theo, around 23 May 1889, "I can see an enclosed square of wheat ... above which, in the morning, I watch the sun rise in all its glory."',
        'Bien que "La Nuit étoilée" ait été peinte pendant la journée dans l\'atelier au rez-de-chaussée de Van Gogh, il serait incorrect de dire que le tableau a été peint de mémoire. La vue a été identifiée comme celle depuis la fenêtre de sa chambre, orientée vers l\'est, une vue que Van Gogh a peinte sous différentes variations pas moins de vingt et une fois, dont "La Nuit étoilée". "À travers la fenêtre grillagée", écrivait-il à son frère Theo vers le 23 mai 1889, "je peux voir un carré de blé clos... au-dessus duquel, le matin, j\'observe le soleil se lever dans toute sa splendeur."'
      ],
      source: 'https://en.wikipedia.org/wiki/The_Starry_Night',
      artist: {
        image: './assets/starry-night/artist.jpg',
        name: 'Vincent Van Gogh'
      },
      images: {
        thumbnail: './assets/starry-night/thumbnail.jpg',
        hero: {
          small: './assets/starry-night/hero-small.jpg',
          large: './assets/starry-night/hero-large.jpg'
        },
        gallery: './assets/starry-night/gallery.jpg'
      }
    },
    {
      name: ['Girl with a Pearl Earring', 'La Jeune Fille à la perle'],
      year: 1665,
      description: [
        "The painting is a tronie, the Dutch 17th-century description of a 'head' that was not meant to be a portrait. It depicts a European girl wearing an exotic dress, an oriental turban, and what was thought to be a very large pearl as an earring. In 2014, Dutch astrophysicist Vincent Icke raised doubts about the material of the earring and argued that it looks more like polished tin than pearl on the grounds of the specular reflection, the pear shape and the large size of the earring.",
        "\"La Jeune Fille à la perle\" est un tronie, terme néerlandais du XVIIe siècle désignant une 'tête' qui n'était pas destinée à être un portrait. Il représente une jeune fille européenne portant une robe exotique, un turban oriental et ce qui était supposé être une très grosse perle en tant que boucle d'oreille. En 2014, l'astrophysicien néerlandais Vincent Icke a soulevé des doutes quant à la nature de la boucle d'oreille et a argumenté qu'elle ressemble plus à de l'étain poli qu'à une perle, en se basant sur la réflexion spéculaire, la forme de poire et la grande taille de la boucle d'oreille."
      ],
      source: 'https://en.wikipedia.org/wiki/Girl_with_a_Pearl_Earring',
      artist: {
        image: './assets/girl-with-pearl-earring/artist.jpg',
        name: 'Johannes Vermeer'
      },
      images: {
        thumbnail: './assets/girl-with-pearl-earring/thumbnail.jpg',
        hero: {
          small: './assets/girl-with-pearl-earring/hero-small.jpg',
          large: './assets/girl-with-pearl-earring/hero-large.jpg'
        },
        gallery: './assets/girl-with-pearl-earring/gallery.jpg'
      }
    },
    {
      name: ['Guernica', 'Guernica'],
      year: 1937,
      description: [
        'The scene occurs within a room where, on the left, a wide-eyed bull stands over a grieving woman holding a dead child in her arms. In the center of the room a horse falls in agony with a large gaping hole in its side, as if it had just been run through by a spear or javelin. The horse appears to be wearing chain mail armor, decorated with vertical tally marks arranged in rows. A dead and dismembered soldier lies under the horse. The hand of his severed right arm grasps a shattered sword, from which a flower grows.',
        "La scène se déroule dans une pièce où, sur la gauche, un taureau aux yeux grands ouverts se tient au-dessus d'une femme en deuil tenant un enfant mort dans ses bras. Au centre de la pièce, un cheval tombe en agonie avec une grande cavité béante dans son flanc, comme s'il venait d'être transpercé par une lance ou un javelot. Le cheval semble porter une armure de mailles, ornée de marques de comptage verticales disposées en rangées. Un soldat mort et démembré gît sous le cheval. La main de son bras droit tranché saisit une épée brisée, d'où émerge une fleur."
      ],
      source: 'https://en.wikipedia.org/wiki/Guernica_(Picasso)',
      artist: {
        image: './assets/guernica/artist.jpg',
        name: 'Pablo Picasso'
      },
      images: {
        thumbnail: './assets/guernica/thumbnail.jpg',
        hero: {
          small: './assets/guernica/hero-small.jpg',
          large: './assets/guernica/hero-large.jpg'
        },
        gallery: './assets/guernica/gallery.jpg'
      }
    },
    {
      name: ['Penitent Magdalene', 'Marie-Madeleine pénitente'],
      year: 1625,
      description: [
        "Penitent Magdalene is a painting by the Italian artist Artemisia Gentileschi. It hangs in Seville Cathedral. It has probably been in the cathedral since the late 17th century. The painting's first home was the collection of Fernando Enriquez Afan de Ribera, from 1626 to 1637. She returned to the subject later in the 1620s in Mary Magdalene as Melancholy.",
        '"Penitent Magdalene" est une peinture de l\'artiste italienne Artemisia Gentileschi. Elle est exposée à la Cathédrale de Séville. Elle se trouve probablement dans la cathédrale depuis la fin du XVIIe siècle. La première demeure de la peinture était la collection de Fernando Enriquez Afan de Ribera, de 1626 à 1637. Elle est revenue plus tard au sujet dans les années 1620 avec "Mary Magdalene as Melancholy" ("Marie-Madeleine en mélancolie")'
      ],
      source:
        'https://en.wikipedia.org/wiki/Penitent_Magdalene_(Artemisia_Gentileschi)',
      artist: {
        image: './assets/penitent-magdalene/artist.jpg',
        name: 'Artemisia Gentileschi'
      },
      images: {
        thumbnail: './assets/penitent-magdalene/thumbnail.jpg',
        hero: {
          small: './assets/penitent-magdalene/hero-small.jpg',
          large: './assets/penitent-magdalene/hero-large.jpg'
        },
        gallery: './assets/penitent-magdalene/gallery.jpg'
      }
    },
    {
      name: [
        'The Storm on the Sea of Galilee',
        'La Tempête sur la mer de Galilée'
      ],
      year: 1633,
      description: [
        "The painting, in vertical format, shows a close-up view of Christ's disciples struggling frantically against the heavy storm to regain control of their fishing boat. A huge wave beats the bow and rips the sail. One of the disciples is seen vomiting over the side. Another one, looking directly out at the viewer, is a self-portrait of the artist. Only Christ, depicted on the right, remains calm.",
        "La peinture, au format vertical, montre une vue rapprochée des disciples de Jésus luttant frénétiquement contre la tempête violente pour reprendre le contrôle de leur bateau de pêche. Une énorme vague frappe la proue et déchire la voile. Un des disciples est vu en train de vomir par-dessus bord. Un autre, regardant directement le spectateur, est un autoportrait de l'artiste. Seul le Christ, représenté à droite, reste calme"
      ],
      source: 'https://en.wikipedia.org/wiki/The_Storm_on_the_Sea_of_Galilee',
      artist: {
        image: './assets/the-storm-on-the-sea-of-galilee/artist.jpg',
        name: 'Rembrandt'
      },
      images: {
        thumbnail: './assets/the-storm-on-the-sea-of-galilee/thumbnail.jpg',
        hero: {
          small: './assets/the-storm-on-the-sea-of-galilee/hero-small.jpg',
          large: './assets/the-storm-on-the-sea-of-galilee/hero-large.jpg'
        },
        gallery: './assets/the-storm-on-the-sea-of-galilee/gallery.jpg'
      }
    },
    {
      name: ['The Great Wave off Kanagawa', 'La Grande Vague de Kanagawa'],
      year: 1831,
      description: [
        'The Great Wave off Kanagawa (Japanese: 神奈川沖浪裏, Hepburn: Kanagawa-oki Nami Ura, lit. "Under the Wave off Kanagawa"), also known as The Great Wave or simply The Wave, is a woodblock print by the Japanese ukiyo-e artist Hokusai. It was published sometime between 1829 and 1833 in the late Edo period as the first print in Hokusai\'s series Thirty-six Views of Mount Fuji. The image depicts an enormous wave threatening three boats off the coast in the Sagami Bay (Kanagawa Prefecture) while Mount Fuji rises in the background.',
        '"La Grande Vague de Kanagawa" (en japonais : 神奈川沖浪裏, Kanagawa-oki Nami Ura) est également connue sous le nom de "La Grande Vague" ou simplement "La Vague". Il s\'agit d\'une estampe sur bois réalisée par l\'artiste japonais ukiyo-e Hokusai. Elle a été publiée quelque part entre 1829 et 1833, à la fin de la période Edo, en tant que première estampe de la série "Trente-six vues du mont Fuji" de Hokusai. L\'image représente une énorme vague menaçant trois bateaux au large de la côte de la baie de Sagami (préfecture de Kanagawa), tandis que le mont Fuji se dresse en arrière-plan.'
      ],
      source: 'https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa',
      artist: {
        image: './assets/the-great-wave-off-kanagawa/artist.jpg',
        name: 'Hokusai'
      },
      images: {
        thumbnail: './assets/the-great-wave-off-kanagawa/thumbnail.jpg',
        hero: {
          small: './assets/the-great-wave-off-kanagawa/hero-small.jpg',
          large: './assets/the-great-wave-off-kanagawa/hero-large.jpg'
        },
        gallery: './assets/the-great-wave-off-kanagawa/gallery.jpg'
      }
    },
    {
      name: ['Van Gogh Self-portrait', 'Autoportrait de Van Gogh'],
      year: 1889,
      description: [
        'This self-portrait was one of about 32 produced over a 10-year period, and these were an important part of his work as a painter; he painted himself because he often lacked the money to pay for models. He took the painting with him to Auvers-sur-Oise, near Paris, where he showed it to Dr. Paul Gachet, who thought it was "absolutely fanatical". Art historians are divided as to whether this painting or Self-portrait without beard is Van Gogh\'s final self-portrait. The art historians Ingo F. Walther and Jan Hulsker consider this to be the last.',
        "Cet autoportrait faisait partie d'environ 32 autoportraits réalisés sur une période de 10 ans, et ceux-ci étaient une part importante de son travail en tant que peintre ; il se peignait lui-même parce qu'il manquait souvent d'argent pour payer des modèles. Il a emporté ce tableau avec lui à Auvers-sur-Oise, près de Paris, où il l'a montré au Dr. Paul Gachet, qui a trouvé cela « absolument fantastique ». Les historiens de l'art sont partagés quant à savoir si ce tableau ou \"Autoportrait sans barbe\" est le dernier autoportrait de Van Gogh. Les historiens de l'art Ingo F. Walther et Jan Hulsker considèrent que c'est le dernier."
      ],
      source: 'https://en.wikipedia.org/wiki/Van_Gogh_self-portrait_(1889)',
      artist: {
        image: './assets/van-gogh-self-portrait/artist.jpg',
        name: 'Vincent Van Gogh'
      },
      images: {
        thumbnail: './assets/van-gogh-self-portrait/thumbnail.jpg',
        hero: {
          small: './assets/van-gogh-self-portrait/hero-small.jpg',
          large: './assets/van-gogh-self-portrait/hero-large.jpg'
        },
        gallery: './assets/van-gogh-self-portrait/gallery.jpg'
      }
    },
    {
      name: ['The Sleeping Gypsy', 'La Gitane endormie'],
      year: 1897,
      description: [
        'The Sleeping Gypsy (French: La Bohémienne endormie) is an 1897 oil painting by French Naïve artist Henri Rousseau (1844–1910). It is a fantastical depiction of a lion musing over a sleeping woman on a moonlit night. Rousseau first exhibited the painting at the 13th Salon des Indépendants, and tried unsuccessfully to sell it to the mayor of his hometown, Laval. Instead, it entered the private collection of a Parisian charcoal merchant where it remained until 1924, when it was discovered by the art critic Louis Vauxcelles.',
        "\"La Bohémienne endormie\" (en anglais : \"The Sleeping Gypsy\") est une peinture à l'huile de 1897 réalisée par l'artiste naïf français Henri Rousseau (1844-1910). C'est une représentation fantastique d'un lion méditant devant une femme endormie par une nuit de pleine lune. Rousseau a exposé la peinture pour la première fois au 13e Salon des Indépendants, et a tenté sans succès de la vendre au maire de sa ville natale, Laval. À la place, elle est entrée dans la collection privée d'un marchand de charbon parisien où elle est restée jusqu'en 1924, date à laquelle elle a été découverte par le critique d'art Louis Vauxcelles."
      ],
      source: 'https://en.wikipedia.org/wiki/The_Sleeping_Gypsy',
      artist: {
        image: './assets/the-sleeping-gypsy/artist.jpg',
        name: 'Henri Rousseau'
      },
      images: {
        thumbnail: './assets/the-sleeping-gypsy/thumbnail.jpg',
        hero: {
          small: './assets/the-sleeping-gypsy/hero-small.jpg',
          large: './assets/the-sleeping-gypsy/hero-large.jpg'
        },
        gallery: './assets/the-sleeping-gypsy/gallery.jpg'
      }
    },
    {
      name: ['Lady with an Ermine', "Dame à l'hermine"],
      year: 1489,
      description: [
        'The Lady with an Ermine (Italian: Dama con l\'ermellino [ˈdaːma kon lermelˈliːno]; Polish: Dama z gronostajem) is a portrait painting widely attributed to the Italian Renaissance artist Leonardo da Vinci. Dated to c. 1489–1491, the work is painted in oils on a panel of walnut wood. Its subject is Cecilia Gallerani, a mistress of Ludovico Sforza ("Il Moro"), Duke of Milan; Leonardo was painter to the Sforza court at the time of its execution. It is one of only four surviving portraits of women painted by Leonardo, the others being Ginevra de\' Benci, La Belle Ferronnière and the Mona Lisa',
        "\"La Dame à l'hermine\" (en italien : Dama con l'ermellino ; en polonais : Dama z gronostajem) est un portrait largement attribué à l'artiste de la Renaissance italienne Léonard de Vinci. Datée d'environ 1489 à 1491, l'œuvre est peinte à l'huile sur un panneau de bois de noyer. Son sujet est Cecilia Gallerani, une maîtresse de Ludovico Sforza (\"Il Moro\"), duc de Milan ; Léonard était peintre à la cour Sforza à l'époque de sa réalisation. Il s'agit de l'un des quatre seuls portraits de femmes survivants peints par Léonard, les autres étant Ginevra de' Benci, La Belle Ferronnière et la Mona Lisa."
      ],
      source: 'https://en.wikipedia.org/wiki/Lady_with_an_Ermine',
      artist: {
        image: './assets/lady-with-an-ermine/artist.jpg',
        name: 'Leonardo da Vinci'
      },
      images: {
        thumbnail: './assets/lady-with-an-ermine/thumbnail.jpg',
        hero: {
          small: './assets/lady-with-an-ermine/hero-small.jpg',
          large: './assets/lady-with-an-ermine/hero-large.jpg'
        },
        gallery: './assets/lady-with-an-ermine/gallery.jpg'
      }
    },
    {
      name: ['The Night Café', 'Le Café de nuit'],
      year: 1888,
      description: [
        "The Night Café (French: Le Café de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles. Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut. The interior depicted is the Café de la Gare, 30 Place Lamartine, run by Joseph-Michel Ginoux and his wife Marie, who in November 1888 posed for Van Gogh's and Gauguin's Arlésienne; a bit later, Joseph Ginoux evidently posed for both artists, too.",
        "\"Le Café de nuit\" (en anglais : \"The Night Café\") est une peinture à l'huile créée par l'artiste néerlandais Vincent van Gogh en septembre 1888 à Arles. Son titre est inscrit en bas à droite, sous la signature. La peinture appartient à l'Université Yale et est actuellement conservée à la Yale University Art Gallery à New Haven, dans le Connecticut. L'intérieur représenté est celui du Café de la Gare, situé au 30 Place Lamartine, tenu par Joseph-Michel Ginoux et sa femme Marie, qui en novembre 1888 ont posé pour Van Gogh et Gauguin en tant qu'Arlésienne ; un peu plus tard, Joseph Ginoux a visiblement également posé pour les deux artistes."
      ],
      source: 'https://en.wikipedia.org/wiki/The_Night_Caf%C3%A9',
      artist: {
        image: './assets/the-night-cafe/artist.jpg',
        name: 'Vincent Van Gogh'
      },
      images: {
        thumbnail: './assets/the-night-cafe/thumbnail.jpg',
        hero: {
          small: './assets/the-night-cafe/hero-small.jpg',
          large: './assets/the-night-cafe/hero-large.jpg'
        },
        gallery: './assets/the-night-cafe/gallery.jpg'
      }
    },
    {
      name: ['The Basket of Apples', 'La Corbeille de pommes'],
      year: 1893,
      description: [
        'The Basket of Apples (French: Le panier de pommes) is a still life oil painting by French artist Paul Cézanne, which he created c. 1893. The painting is particularly remarkable for its creative composition, which rejected realistic representation in favour of distorting objects to create multiple perspectives. This approach eventually influenced other art movements, including Fauvism and Cubism. It belongs to the Helen Birch Bartlett Memorial Collection of the Art Institute of Chicago.',
        "\"Le Panier de pommes\" (en anglais : \"The Basket of Apples\") est une peinture à l'huile de nature morte réalisée par l'artiste français Paul Cézanne, qu'il a créée vers 1893. La peinture est particulièrement remarquable pour sa composition créative, qui a rejeté la représentation réaliste au profit de la déformation des objets pour créer des perspectives multiples. Cette approche a finalement influencé d'autres mouvements artistiques, notamment le fauvisme et le cubisme. Elle appartient à la collection Helen Birch Bartlett de l'Art Institute de Chicago."
      ],
      source: 'https://en.wikipedia.org/wiki/The_Basket_of_Apples',
      artist: {
        image: './assets/the-basket-of-apples/artist.jpg',
        name: 'Paul Cézanne'
      },
      images: {
        thumbnail: './assets/the-basket-of-apples/thumbnail.jpg',
        hero: {
          small: './assets/the-basket-of-apples/hero-small.jpg',
          large: './assets/the-basket-of-apples/hero-large.jpg'
        },
        gallery: './assets/the-basket-of-apples/gallery.jpg'
      }
    },
    {
      name: ['The Boy in the Red Vest', 'Le Garçon au gilet rouge'],
      year: 1889,
      description: [
        'Cézanne painted four oil portraits of this Italian boy in the red vest, all in different poses, which allowed him to study the relationship between the figure and space. The most famous of the four, and the one commonly referred to by this title, is the one which depicts the boy in a melancholic seated pose with his elbow on a table and his head cradled in his hand. It is currently held in Zürich, Switzerland. The other three portraits, of different poses, are in museums in the US',
        "Cézanne a peint quatre portraits à l'huile de ce garçon italien au gilet rouge, chacun dans une pose différente, ce qui lui a permis d'étudier la relation entre la figure et l'espace. Le plus célèbre des quatre, et celui couramment désigné par ce titre, est celui qui représente le garçon dans une pose assise mélancolique, avec le coude sur une table et la tête soutenue dans la main. Il est actuellement conservé à Zurich, en Suisse. Les trois autres portraits, dans des poses différentes, se trouvent dans des musées aux États-Unis."
      ],
      source: 'https://en.wikipedia.org/wiki/The_Boy_in_the_Red_Vest',
      artist: {
        image: './assets/the-boy-in-the-red-vest/artist.jpg',
        name: 'Paul Cézanne'
      },
      images: {
        thumbnail: './assets/the-boy-in-the-red-vest/thumbnail.jpg',
        hero: {
          small: './assets/the-boy-in-the-red-vest/hero-small.jpg',
          large: './assets/the-boy-in-the-red-vest/hero-large.jpg'
        },
        gallery: './assets/the-boy-in-the-red-vest/gallery.jpg'
      }
    },
    {
      name: ['Arnolfini Portrait', 'Le Portrait des époux Arnolfini'],
      year: 1434,
      description: [
        'It is considered one of the most original and complex paintings in Western art, because of its beauty, complex iconography, geometric orthogonal perspective, and expansion of the picture space with the use of a mirror. According to Ernst Gombrich "in its own way it was as new and revolutionary as Donatello\'s or Masaccio\'s work in Italy. A simple corner of the real world had suddenly been fixed on to a panel as if by magic ... For the first time in history the artist became the perfect eye-witness in the truest sense of the term".',
        "Il est considéré comme l'une des peintures les plus originales et complexes de l'art occidental, en raison de sa beauté, de son iconographie complexe, de sa perspective géométrique orthogonale et de l'expansion de l'espace pictural grâce à l'utilisation d'un miroir. Selon Ernst Gombrich, \"à sa manière, elle était aussi nouvelle et révolutionnaire que les œuvres de Donatello ou de Masaccio en Italie. Un simple coin du monde réel avait soudain été fixé sur un panneau comme par magie... Pour la première fois de l'histoire, l'artiste est devenu le témoin oculaire parfait au sens le plus vrai du terme\"."
      ],
      source: 'https://en.wikipedia.org/wiki/Arnolfini_Portrait',
      artist: {
        image: './assets/arnolfini-portrait/artist.jpg',
        name: 'Jan van Eyck'
      },
      images: {
        thumbnail: './assets/arnolfini-portrait/thumbnail.jpg',
        hero: {
          small: './assets/arnolfini-portrait/hero-small.jpg',
          large: './assets/arnolfini-portrait/hero-large.jpg'
        },
        gallery: './assets/arnolfini-portrait/gallery.jpg'
      }
    },
    {
      name: ['Mona Lisa', 'La Joconde'],
      year: 1503,
      description: [
        'The Mona Lisa (/ˌmoʊnə ˈliːsə/; italian: La Gioconda [la dʒoˈkonda] or Monna Lisa [ˈmɔnna ˈliːza]) is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as "the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world". The painting\'s novel qualities include the subject\'s enigmatic expression, the monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism.',
        "La Mona Lisa (ou /ˌmoʊnə ˈliːsə/ ; en italien : La Gioconda [la dʒoˈkonda] ou Monna Lisa [ˈmɔnna ˈliːza]) est un portrait en demi-longueur réalisé par l'artiste italien Leonardo da Vinci. Considérée comme un chef-d'œuvre archétypal de la Renaissance italienne, elle a été décrite comme \"l'œuvre d'art la plus connue, la plus visitée, la plus écrite, la plus chantée, la plus parodiée au monde\". Les caractéristiques novatrices de la peinture comprennent l'expression énigmatique du sujet, la monumentalité de la composition, le modelage subtil des formes et l'illusionnisme atmosphérique."
      ],
      source: 'https://en.wikipedia.org/wiki/Mona_Lisa',
      artist: {
        image: './assets/mona-lisa/artist.jpg',
        name: 'Leonardo da Vinci'
      },
      images: {
        thumbnail: './assets/mona-lisa/thumbnail.jpg',
        hero: {
          small: './assets/mona-lisa/hero-small.jpg',
          large: './assets/mona-lisa/hero-large.jpg'
        },
        gallery: './assets/mona-lisa/gallery.jpg'
      }
    },
    {
      name: ['The Swing', 'La Balançoire'],
      year: 1767,
      description: [
        'The painting depicts an elegant young woman on a swing. A smiling young man, hiding in the bushes on the left, watches her from a vantage point that allows him to see up into her billowing dress, where his arm is pointed with hat in hand. A smiling older man, who is nearly hidden in the shadows on the right, propels the swing with a pair of ropes. The older man appears to be unaware of the young man. As the young lady swings high, she throws her left leg up, allowing her dainty shoe to fly through the air.',
        "La peinture représente une élégante jeune femme sur une balançoire. Un jeune homme souriant, caché dans les buissons à gauche, la regarde d'un point de vue qui lui permet de voir sous sa robe qui flotte, là où son bras est pointé, chapeau à la main. Un homme plus âgé, souriant, presque caché dans l'ombre à droite, propulse la balançoire avec une paire de cordes. L'homme plus âgé semble ne pas être conscient du jeune homme. Alors que la jeune femme se balance haut, elle lève sa jambe gauche, laissant sa chaussure délicate voler dans les airs."
      ],
      source: 'https://en.wikipedia.org/wiki/The_Swing_(Fragonard)',
      artist: {
        image: './assets/the-swing/artist.jpg',
        name: 'Jean-Honoré Fragonard'
      },
      images: {
        thumbnail: './assets/the-swing/thumbnail.jpg',
        hero: {
          small: './assets/the-swing/hero-small.jpg',
          large: './assets/the-swing/hero-large.jpg'
        },
        gallery: './assets/the-swing/gallery.jpg'
      }
    }
  ];

  getGallerie() {
    return of(this.gallerieList);
  }
}
