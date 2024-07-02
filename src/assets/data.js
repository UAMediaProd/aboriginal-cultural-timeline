export const TITLE = 'A timeline of colonisation of the First Nations of Australia'

export const INTRO_TEXT = [
  'The process of British colonisation, dispossession, and genocide against Aboriginal and Torres Strait Islander peoples was long and complex. This timeline is an attempt to introduce readers to a general overview of colonisation and is not intended to be comprehensive or definitive.'
]

export const ERA_DATA = [
  {
    id: 'bce',
    name: 'Aboriginal land',
    yearText: 'BCE 65,000 - 1770',
    isSubEra: false,
    gapAfter: 3,
    summary: [
      'Aboriginal and Torres Strait Islander people have inhabited the continent of Australia and its surrounding islands for at least 65,000 years. Prior to British colonisation, there were an estimated 260 distinct Aboriginal and Torres Strait Islander language groups with up to 500 different dialects. These language groups developed rich and intricate cultural lives based on storytelling, ritual, ceremony, art, law, language, and spirituality – all of which were built upon a deep connection to their respective Country.',
      'Colonial ignorance has led to oversimplifications and misunderstandings about traditional Aboriginal life. Contrary to some common beliefs, Aboriginal societies were not ‘mere’ hunter-gatherers. They held a sophisticated knowledge of how to sustainably live off and manage the land. Practices included harvesting, storing, and planting seeds, building dams, wells, irrigation systems, and elaborate traps, and an advanced usage of fire burnoffs to protect and maintain the land. They built stone houses, painted with ochre, and buried and cremated their dead. Aboriginal people lived in harmony with the natural environment, allowing civilisation to flourish and maintaining the wild beauty of nature for over 60,000 years.'
    ]
  },
  {
    id: 'invasion',
    name: 'Invasion and colonisation',
    yearText: '1770-1890',
    isSubEra: false,
    gapAfter: 0,
    summary: [
      'There were over 250 distinct Aboriginal and Torres Strait Islander language groups when Lieutenant James Cook first arrived on the continent.',
      'Early colonisers could not understand the Aboriginal peoples’ sustainable, harmonious connection to the land. This justified the settlers’ wrongful concept of ‘terra nullius’, or ‘land belonging to nobody’ -- land that was ripe for colonisation.',
      'There were an estimated 300,000-950,000 Aboriginal and Torres Strait Islander people at the time of invasion. By 1900, this number had reduced by 90%. New diseases, food scarcity, forcible land acquisition, and direct violent conflicts all contributed to the decline.'
    ]
  },
  {
    id: 'wars',
    name: 'Frontier Wars',
    yearText: '',
    isSubEra: true,
    gapAfter: 0.5,
    summary: [
      '\'Frontier Wars\' refer to all the massacres, wars, and instances of resistance beginning from the arrival of colonists and ending roughly around 1934.',
      'Below is a map of all the recorded colonial frontier massacres in Australia in this period.'
    ]
  },
  {
    id: 'segregation',
    name: '"Protection" and segregation',
    yearText: '1860-1900',
    isSubEra: false,
    gapAfter: 1,
    summary: [
      'By the mid 1800s, the violence, disease and dispossession resulting from colonisation had reduced the Aboriginal and Torres Strait Islander population. Laws were put in place to assimilate Aboriginal and Torres Strait Islander people. It was assumed that their culture, lifestyle, and identity would eventually \'die out\' or \'fade away\'.',
      'Survivors of frontier wars were moved onto missions and reserves to safeguard, control, and Christianise them. Living conditions on reserves were often harsh. They were told where they could live, work, and travel, who they could associate with, and who they could marry. These policies were paternalistically called \'protection\'.'
    ]
  },
  {
    id: 'assimilation',
    name: 'Assimilation',
    yearText: '1910-1950s',
    isSubEra: false,
    gapAfter: 1,
    summary: [
      'Assimilation was an official federal policy intended to erase Aboriginal and Torres Strait Islanders\' identity and absorb them into white society. Many reserves closed and residents were encouraged to move into the towns. This caused significant stress to many who had grown to view the reserves as homelands and had built strong community ties there.',
      'Aboriginal people were subject to continued control over their lives, including curfews, lower wages, and alcohol bans. Most significant of all was the widespread policy of forced child removal, also know as the Stolen Generations.',
      ' In the 1920s and 1930s, Aboriginal activism boomed. There were increasing calls for the abolition of the Aboriginal Protection Board in favour of an all-Aboriginal governing body.'
    ]
  },
  {
    id: 'stolen',
    name: 'The Stolen Generations',
    yearText: '1910s-1970s',
    isSubEra: false,
    gapAfter: 0.5,
    summary: [
      'The Stolen Generations refer to the forcible removal of Aboriginal and Torres Strait Islander children from their families. Children were taken based on the assimilation polices which claimed that the lives of Aboriginal children would be improved if they became part of white society. This process was also called ‘natural elimination’.',
      'Children taken were denied access to their families, communities, cultures and taught to reject their heritage in favour of the white culture. Names were changed and language was forbidden.',
      'An estimation of 10-33% of Aboriginal and Torres Strait children were separated from their familied in just 60 years.  Intergenerational trauma has continued to severely impact those taken and their descendents.',
      'In 1980, government link-up services were established to support members of the Stolen Generations in their search to reconnect with their families. Testimonies of the Stolen Generations can be heard and read here: <a href="https://www.stolengenerationstestimonies.com/" class="underline hover:text-brand-midblue" target="_blank" rel="noopener noreferrer">https://www.stolengenerationstestimonies.com/</a>.'
    ]
  },
  {
    id: 'activism',
    name: 'Activism and integration',
    yearText: '1960s-1990s',
    isSubEra: false,
    gapAfter: 1,
    summary: [
      'The 1960s were a period of significant social change. Aboriginal and Torres Strait Islander people tirelessly campaigned for voting rights, self-determination, equal pay, and better working and living conditions. Their efforts culminated in the 1967 Referendum. Commonwealth authorities increasingly adopted measures to improve the welfare and outcomes of Aboriginal people and grant land rights to traditional owners.',
      'Although much progress was made in this period, calls for constitution recognition and a Treaty did not eventuate. Aboriginal and Torres Strait Islander people still experienced much hardship, racism, and land dispossession.'
    ]
  },
  {
    id: 'reconciliation',
    name: 'Reconciliation and self-determination',
    yearText: '1991-present',
    isSubEra: false,
    gapAfter: 1,
    summary: [
      'Instead of a Treaty, the Australian Government formed an official policy of Reconciliation. Its goal was to strengthen relationships between First Nations and non-First Nations people through increased understanding and respect. Reconciliation still remains a major commitment for many workplaces and organisations.',
      'It is now recognised that Aboriginal and Torres Strait Islander people must be centered in decision-making about their own lives. More Aboriginal-controlled organisations and initiatives have arisen over recent years, including health care, education, and social services. Terra nullius, the doctrine that justified British invasion, was finally nullified in favour of recognising the Aboriginal and Torres Strait Islanders as the original owners of the land.',
      'Although enormous strides have been made over the last few decades, many issues remain. There is still no Treaty, and Aboriginal and Torres Strait Islander representation is still not protected by the Constitution.'
    ]
  },
]

export const YEAR_DATA = [
  {
    eraId: 'bce',
    gap: 4,
    yearText: 'BCE 65,000',
    name: '',
    details: ['Earliest known evidence of Aboriginal civilisation.'],
    media: {
      type: 'image',
      src: 'https://mediaproduction.adelaide.edu.au/aboriginal-cultural-timeline/images/bce65000.jpg',
      text: [
        'Piece of ochre used in what is now Kakadu National Park, 53,000–59,000 years ago.',
        'Museum and Gallery of the Northern Territory.',
        'This material has been copied and communicated under the Statutory Licence pursuant to s113P of the Copyright Act 1968 for the educational purposes of the University of Adelaide. Any further copying or communication of this material by you may be the subject of copyright protection.'
      ]
    }
  },

  {
    eraId: 'invasion',
    gap: 5,
    yearText: '1770',
    name: '',
    details: ['James Cook arrives at Botany Bay and claims possession of Australia for Britain.'],
    media: {
      type: 'youtube',
      src: 'q_cOJgpk4ko?start=85&end=120',
      thumbnail: 'https://i.ytimg.com/vi/q_cOJgpk4ko/maxresdefault.jpg',
      text: []
    }

  },
  {
    eraId: 'invasion',
    gap: -5,
    yearText: '1788',
    name: '',
    details: ['The First Fleet arrives in Sydney Harbour on January 24, 1788.']
  },
  {
    eraId: 'invasion',
    gap: 1,
    yearText: '1834',
    name: '',
    details: [
      'South Australia established as a British colony.',
      'The Letters Patent declare that Aboriginal occupation of lands must not be interrupted; this is ignored in practice.'
    ],
    media: {
      type: 'image',
      src: 'https://mediaproduction.adelaide.edu.au/aboriginal-cultural-timeline/images/1834.jpg',
      text: [
        'Letters Patent under the Great Seal of the United Kingdom erecting and establishing the Province of South Australia and fixing the boundaries thereof, 19 February 1836',
        'State Records of South Australia SRSA: GRG 2/64'
      ]
    }
  },

  {
    eraId: 'segregation',
    gap: 3,
    yearText: '1860',
    name: '',
    details: ['Official enquiry into Aboriginal welfare recommends the creation of missions, reserves, and a Board to control and regulate Aboriginal lives.']
  },
  {
    eraId: 'segregation',
    gap: -6,
    yearText: '1881',
    name: '',
    details: ['Parliamentary inquiry into poor conditions at Corranderrk Reserve. Aboriginal residents call for land rights and self-determination.'],
    media: {
      type: 'image',
      src: 'https://mediaproduction.adelaide.edu.au/aboriginal-cultural-timeline/images/1881.jpg',
      text: [
        'William Barak and the Aboriginal community of Coranderrk.',
        'State Library of Victoria 1903SLV'
      ]
    }
  },
  {
    eraId: 'segregation',
    gap: 1,
    yearText: '1901',
    name: '',
    details: [
      'Australia becomes a Federation. Aboriginal people are excluded from the Constitution.'
    ]
  },

  {
    eraId: 'assimilation',
    gap: 3,
    yearText: '1911',
    name: '',
    details: ['Aboriginies Act 1911 (SA) passed. Removal of \'mixed descent\' children begins.']
  },
  {
    eraId: 'assimilation',
    gap: 1,
    yearText: '1938',
    name: '',
    details: ['Aboriginal Day of Mourning and Protest held in Sydney on January 26th. Eventually becomes a week-long celebration in July, now known as NAIDOC Week.'],
    media: {
      type: 'image',
      src: 'https://mediaproduction.adelaide.edu.au/aboriginal-cultural-timeline/images/1938.jpg',
      text: [
        'Left to right: William (Bill) Ferguson, Jack Kinchela, Isaac Ingram, Doris Williams, Esther Ingram, Arthur Williams Jr, Phillip Ingram, unknown, Louisa Agnes Ingram holding daughter Olive, Jack Patten.',
        'Mitchell Library, State Library of New South Wales Q 059/9'
      ]
    }
  },
  {
    eraId: 'assimilation',
    gap: 1,
    yearText: '1956',
    name: '',
    details: [
      'Britain begins atomic weapons testing program in Australia.',
      'Aboriginal communities severely impacted by fallout, contamination, and displacement, still suffer higher cancer rates than the general population.'
    ],
    media: {
      type: 'image',
      src: 'https://mediaproduction.adelaide.edu.au/aboriginal-cultural-timeline/images/1956.jpg',
      text: [
        '\'You can have it all back now ... we\'ve finished with it\', Geoff Pryor, 1984.',
        'National Library of Australia nla.obj-156502334',
        'This material has been copied and communicated under the Statutory Licence pursuant to s113P of the Copyright Act 1968 for the educational purposes of the University of Adelaide. Any further copying or communication of this material by you may be the subject of copyright protection.'
      ]
    }
  },

  {
    eraId: 'stolen',
    standalone: true,
    gap: 1,
    yearText: '',
    name: '',
    details: [],
    media: {
      type: 'youtube',
      src: 'vlqx8EYvRbQ',
      thumbnail: 'https://i.ytimg.com/vi/vlqx8EYvRbQ/maxresdefault.jpg',
      text: []
    }
  },

  {
    eraId: 'activism',
    gap: 4,
    yearText: '1966',
    name: '',
    details: [
      'Gurindji people at Wave Hill station begin their seven-year-long strike, calling for better working conditions, fair wages, and reclamation of country. Their petition is ignored.',
      'In 1974, the Labor Government  would finally return their lands in a symbolic ceremony. Prime Minister Gough Whitlam poured a handful of soil through Vincent Lingiari’s fingers, saying:',
      '“Vincent Lingiari, I solemnly hand to you these deeds as proof, in Australian law, that these lands belong to the Gurindji people".',
      'This moment has been celebrated through song, most recently by Electric Fields.'
    ],
    media: {
      type: 'youtube',
      src: 'ao7GOymvhsw',
      thumbnail: 'https://i.ytimg.com/vi/ao7GOymvhsw/maxresdefault.jpg',
      text: []
    }
  },
  {
    eraId: 'activism',
    gap: -18,
    yearText: '1967',
    name: '',
    details: ['Over 90% of Australians vote YES in referendum to amend the Constitution. Aboriginal and Torres Strait Islander people included in Census for the first time.']
  },
  {
    eraId: 'activism',
    gap: 10,
    yearText: '1985',
    name: '',
    details: ['Uluru handed back to the Anangu people after decades of lobbying.'],
    media: {
      type: 'image',
      src: 'https://mediaproduction.adelaide.edu.au/aboriginal-cultural-timeline/images/1985.jpg',
      text: [
        'Left to right: Sir Ninian Stephen, Clyde Holding, traditional owners Peter Bulla, Peter Kanari, Nipper Winmarti and his wife, Barbara Tjirkadu, Barry Cohen, 26 October 1985.',
        'National Museum of Australia',
        'This material has been copied and communicated under the Statutory Licence pursuant to s113P of the Copyright Act 1968 for the educational purposes of the University of Adelaide. Any further copying or communication of this material by you may be the subject of copyright protection.'
      ]
    }
  },
  {
    eraId: 'activism',
    gap: -5,
    yearText: '1988',
    name: '',
    details: ['Barunga Statement presented to Prime Minister Bob Hawke, calling for land rights, self-determination, and compensation. Hawke\'s promise of a treaty by 1990 has still not been fulfilled.']
  },

  {
    eraId: 'reconciliation',
    gap: 4,
    yearText: '1992',
    name: '',
    details: ['High Court of Australia\'s Mabo decision formally recognises native title and renders terra nullius a legal fiction.'],
    media: {
      type: 'image',
      src: 'https://mediaproduction.adelaide.edu.au/aboriginal-cultural-timeline/images/1992.jpg',
      text: [
        'Eddie Koiki Mabo at Las, Murray Island, 1989. Photo: John Whitterron. Yarra Bank Films.',
        'National Museum of Australia',
        'This material has been copied and communicated under the Statutory Licence pursuant to s113P of the Copyright Act 1968 for the educational purposes of the University of Adelaide. Any further copying or communication of this material by you may be the subject of copyright protection.'
      ]
    }
  },
  {
    eraId: 'reconciliation',
    gap: 1,
    yearText: '1997',
    name: '',
    details: ['\'Bringing Them Home\' report released by the National Inquiry into the Separation of Aboriginal and Torres Strait Island Children from Their Families. Most of its 54 recommendations are ignored.'],
    media: {
      type: 'youtube',
      src: 'JWwCQ21hT7U',
      thumbnail: 'https://i.ytimg.com/vi/JWwCQ21hT7U/maxresdefault.jpg',
      text: []
    }
  },
  {
    eraId: 'reconciliation',
    gap: 3,
    yearText: '2008',
    name: '',
    details: ['Prime Minister Kevin Rudd formally apologises on behalf of the Government for creating the Stolen Generations.'],
    media: {
      type: 'youtube',
      src: 'RThkO3XBThs',
      thumbnail: 'https://i.ytimg.com/vi/RThkO3XBThs/hqdefault.jpg',
      text: []
    }
  },
  {
    eraId: 'reconciliation',
    gap: 1,
    yearText: '2017',
    name: '',
    details: ['Uluru Statement from the Heart born from a series of regional dialogues held across the country.'],
    media: {
      type: 'youtube',
      src: 'YJrHStMY1Gg',
      thumbnail: 'https://i.ytimg.com/vi/YJrHStMY1Gg/maxresdefault.jpg',
      text: []
    }
  },
  {
    eraId: 'reconciliation',
    gap: 1,
    yearText: '2023',
    name: '',
    details: ['Australia votes no in the Voice to Parliament referendum, denying Aboriginal and Torres Strait Islander communities an enshrined route to help inform policy and legal decision that impact their lives. <a href="https://www.reconciliation.org.au/reconciliation/support-a-voice-to-parliament/100-years-of-calls-for-voice/" class="underline hover:text-brand-midblue" target="_blank" rel="noopener noreferrer">This voice has been called for close to 100 years.</a>']
  }
]
