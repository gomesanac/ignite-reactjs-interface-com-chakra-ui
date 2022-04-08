export interface cityType {
  name: string;
  country: string;
  image: string;
  flag: string;
}

export interface continenteType {
  id: string;
  continent: string;
  description: string;
  banner: string;
  countries: number;
  languages: number;
  mostTenCitys: number;
  citys: cityType[];
}

const continentesData: continenteType[] = [
  {
    id: 'africa',
    continent: 'África',
    description:
      'A África é conhecida pela sua pluralidade étnica e cultural, e, por meio de uma história milenar, é capaz de contar a história de toda a humanidade.',
    banner: '',
    countries: 54,
    languages: 2000,
    mostTenCitys: 10,
    citys: [
      {
        name: 'Londres',
        country: 'Reino Unido',
        image:
          'https://images.unsplash.com/photo-1527259047647-731b8be6fd42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/290px-Flag_of_the_United_Kingdom.svg.png',
      },
    ],
  },
  {
    id: 'america-do-norte',
    continent: 'America do Norte',
    description:
      'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
    banner:
      'https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    countries: 50,
    languages: 60,
    mostTenCitys: 27,
    citys: [
      {
        name: 'Londres',
        country: 'Reino Unido',
        image: '',
        flag: '',
      },
    ],
  },
  {
    id: 'america-do-sul',
    continent: 'America do sul',
    description:
      'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
    banner: '',
    countries: 50,
    languages: 60,
    mostTenCitys: 27,
    citys: [
      {
        name: 'Londres',
        country: 'Reino Unido',
        image: '',
        flag: '',
      },
    ],
  },
  {
    id: 'europa',
    continent: 'Europa',
    description:
      'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.',
    banner:
      'https://images.unsplash.com/photo-1493707553966-283afac8c358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    countries: 50,
    languages: 60,
    mostTenCitys: 27,
    citys: [
      {
        name: 'Londres',
        country: 'Reino Unido',
        image:
          'https://images.unsplash.com/photo-1527259047647-731b8be6fd42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/290px-Flag_of_the_United_Kingdom.svg.png',
      },
      {
        name: 'Paris',
        country: 'França',
        image:
          'https://images.unsplash.com/photo-1527259047647-731b8be6fd42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/290px-Flag_of_the_United_Kingdom.svg.png',
      },
      {
        name: 'Roma',
        country: 'Itália',
        image:
          'https://images.unsplash.com/photo-1527259047647-731b8be6fd42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/290px-Flag_of_the_United_Kingdom.svg.png',
      },
      {
        name: 'Praga',
        country: 'República Tcheca',
        image:
          'https://images.unsplash.com/photo-1527259047647-731b8be6fd42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/290px-Flag_of_the_United_Kingdom.svg.png',
      },
      {
        name: 'Amsterdã',
        country: 'Holanda',
        image:
          'https://images.unsplash.com/photo-1527259047647-731b8be6fd42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/290px-Flag_of_the_United_Kingdom.svg.png',
      },
    ],
  },
];

const continentes = (slug: string) => {
  return continentesData.find(({ id }) => id === slug);
};

export default continentes;
