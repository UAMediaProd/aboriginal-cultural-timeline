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
      'Aboriginal and Torres Strait Islander peoples have inhabited the continent of Australia and its surrounding islands for at least 65,000 years. Prior to British colonisation, there were an estimated 260 distinct Aboriginal and Torres Strait Islander language groups with up to 800 different dialects. These language groups developed rich and intricate cultural lives based on storytelling, ritual, ceremony, art, law, language, and spirituality – all of which are built upon a deep connection to their respective Country.',
      'Colonial ignorance has led to oversimplifications and misunderstandings about traditional Aboriginal life. Contrary to some common beliefs, Aboriginal societies were not ‘mere’ hunter-gatherers. They held a sophisticated knowledge of how to sustainably live off and manage the land. Practices included harvesting, storing, and planting seeds, building dams, wells, irrigation systems, and elaborate traps, and an advanced usage of fire burnoffs to protect and maintain the land. They built stone houses, painted with ochre, and buried and cremated their dead. Aboriginal and Torres Strait Islander peoples lived in harmony with the natural environment, allowing civilisation to flourish while maintaining the wild beauty of nature for over 60,000 years.'
    ]
  },
  {
    id: 'invasion',
    name: 'Invasion and colonisation',
    yearText: '1778-1901',
    isSubEra: false,
    gapAfter: 0,
    summary: [
      'There were over 260 distinct Aboriginal and Torres Strait Islander language groups when Lieutenant James Cook first arrived on the continent.',
      'Early colonisers did not seek to understand the norms and practices of Aboriginal society and instead claimed the land as \'terra nullius\'. This claim was then used to dehumanise Aboriginal and Torres Strait Islander peoples and legitimised acts of violence against them.',
      'There were an estimated 300,000-950,000 Aboriginal and Torres Strait Islander peoples at the time of invasion. Direct acts of violence and disease brought by colonisers, along with forcibly removing people from their Country and disrupting food production processes causing food scarcity, resulted in the deaths of 90% of the population by the beginning of the twentieth century. '
    ]
  },
  {
    id: 'wars',
    name: 'Frontier Wars',
    yearText: '1788 - 1930s',
    isSubEra: true,
    gapAfter: 0.5,
    summary: [
      'Select the image to view the interactive map of all the recorded colonial frontier massacres in Australia in this period.',
      'You can select each site to discover more historical details about the site.',
      'NOTE: The map opens in a new browser window and you must then return to this window to complete the module.'
    ],
    ref: 'Ryan, Lyndall; Debenham, Jennifer; Pascoe, Bill; Smith, Robyn; Owen, Chris; Richards, Jonathan; Gilbert, Stephanie; Anders, Robert J; Usher, Kaine; Price, Daniel; Newley, Jack; Brown, Mark; Le, Le Hoang; Fairbairn, Hedy Colonial Frontier Massacres in Australia 1788-1930 Newcastle: University of Newcastle, 2017-2022, <a href="http://hdl.handle.net/1959.13/1340762" target="_blank" rel="noreferrer noopener" class="underline">http://hdl.handle.net/1959.13/1340762</a>  (accessed 16/03/2022).'
  },
  {
    id: 'segregation',
    name: '"Protection" and segregation',
    yearText: '1860-1900',
    isSubEra: false,
    gapAfter: 1,
    summary: [
      'By the mid 1800s, the violence, disease and dispossession resulting from colonisation had reduced the Aboriginal and Torres Strait Islander population drastically. Laws were put in place to assimilate Aboriginal and Torres Strait Islander peoples. It was assumed that their culture, lifestyle, and identity would eventually \'die out\' or \'fade away\'.',
      'Survivors of frontier wars were moved onto missions and reserves to safeguard, control, and Christianise them. Living conditions on reserves were often harsh. Aboriginal and Torres Strait Islander peoples were told where they could live, work, and travel, who they could associate with, and who they could marry. These policies were paternalistically called \'protection\'.'
    ]
  },
  {
    id: 'assimilation',
    name: 'Assimilation',
    yearText: '1910-1950s',
    isSubEra: false,
    gapAfter: 1,
    summary: [
      'Assimilation was an official federal policy intended to erase Aboriginal and Torres Strait Islander identities and absorb them into white society. Many reserves closed and residents were encouraged to move into the towns. This caused significant stress to many who had grown to view the reserves as homelands and had built strong community ties there.',
      'Aboriginal and Torres Strait Islander peoples were subject to continued control over their lives, including curfews, lower wages, and alcohol bans. Most significant of all was the widespread cruel policy of forced child removal, also known as the Stolen Generations.',
      ' In the 1920s and 1930s, Aboriginal activism boomed. There were increasing calls for the abolition of the Aboriginal Protection Board (also known as the Aborigines Protection Board) in favour of an all-Aboriginal governing body.'
    ]
  },
  {
    id: 'stolen',
    name: 'The Stolen Generations',
    yearText: '1910s-1970s',
    isSubEra: false,
    gapAfter: 0.5,
    summary: [
      'The Stolen Generations refer to the forcible removal of Aboriginal and Torres Strait Islander children from their families. Children were taken based on the assimilation polices which claimed that the lives of Aboriginal and Torres Strait Islander children would be improved if they became part of white society. This process was also called ‘natural elimination’.',
      'Children taken were denied access to their families, communities, cultures and taught to reject their heritage in favour of white culture. Names were changed and language was forbidden.',
      'An estimation of 10-33% of Aboriginal and Torres Strait Islander children were stolen from their families in just 60 years.  Intergenerational trauma has continued to severely impact those taken and their descendents.',
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
      'The 1960s were a period of significant social change. Aboriginal and Torres Strait Islander peoples tirelessly campaigned for voting rights, self-determination, equal pay, land rights, and better working and living conditions. Their efforts culminated in the 1967 Referendum. Commonwealth authorities increasingly adopted measures to improve the welfare and outcomes of Aboriginal peoples and grant land rights to Traditional Owners.',
      'Although much progress was made in this period, calls for constitutional recognition and a Treaty did not eventuate. Aboriginal and Torres Strait Islander peoples continued to experience hardship, racism, and land dispossession.'
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
      'It is now recognised that Aboriginal and Torres Strait Islander peoples must be centered in decision-making about their own lives. More Aboriginal-controlled organisations and initiatives have arisen over recent years, including health care, education, and social services. Terra nullius, the doctrine that justified British invasion, was finally nullified in favour of recognising the Aboriginal and Torres Strait Islander peoples as the original owners of the land.',
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
      type: 'video',
      src: 'https://cdn.theguardian.tv/mainwebsite/2017/07/20/200717rocks_desk.mp4',
      thumbnail: 'https://mediaproduction.adelaide.edu.au/aboriginal-cultural-timeline/images/bce65000.png',
      pretext: 'Archaeological excavations at Madjedbebe, located on  the ancestral lands of the Mirarr people in Australia\'s Northern Territory, unearthed artifacts dating back at least 65,000 years with some evidence suggesting they could be as old as 80,000 years.',
      text: [
        '',
        'The Guardian. (2017, July 20) Aboriginal archaeological dig: 80,000-year-old site in Australia - video.',
        '<a href="https://www.theguardian.com/australia-news/video/2017/jul/20/aboriginal-archaeological-dig-80000-australia-video" target="_blank" rel="noreferrer noopener" class="underline text-lg italic">https://www.theguardian.com/australia-news/video/2017/jul/20/aboriginal-archaeological-dig-80000-australia-video</a>'
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
      text: ['', 'Dharawal elder recounts Captain Cook\'s arrival in Australia 250 years ago, Guardian Australia,', '<a href="https://www.youtube.com/watch?v=q_cOJgpk4ko" target="_blank" rel="noreferrer noopener" class="underline text-lg italic">https://www.youtube.com/watch?v=q_cOJgpk4ko</a>']
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
    yearText: '1836',
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
      'Australia becomes a Federation. Aboriginal and Torres Strait Islander peoples are excluded from the Constitution.'
    ]
  },

  {
    eraId: 'assimilation',
    gap: 3,
    yearText: '1911',
    name: '',
    details: ['Aboriginies Act 1911 (SA) passed. Removal of \'mixed descent\' children begins, known as the Stolen Generations.']
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
    yearText: '1952',
    name: '',
    details: [
      'Britain begins atomic weapons testing at three key sites in Australia, most notably, Maralinga in South Australia.',
      'Aboriginal communities were severely impacted by fallout, contamination, and displacement and still suffer higher cancer rates than the general population to this day.'
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
    gap: 4,
    yearText: 'Intergenerational trauma',
    name: 'Intergenerational trauma',
    details: ['Select the thumbnail to watch the video produced by the Healing Foundation.'],
    media: {
      type: 'youtube',
      src: 'vlqx8EYvRbQ',
      thumbnail: 'https://i.ytimg.com/vi/vlqx8EYvRbQ/maxresdefault.jpg',
      text: [
        '',
        'Select the links below for additional information',
        '<a href="https://url.au.m.mimecastprotect.com/s/feDJC6XQJvFw53zVIjIYxO?domain=url.avanan.click" target="_blank" rel="noreferrer noopener" class=" text-white text-lg underline">Healing Foundation Fact Sheet<a/>',
        '<a href="https://healingfoundation.org.au/intergenerational-trauma/ourfuture/" target="_blank" rel="noreferrer noopener" class=" text-white text-lg underline">Professor Helen Milroy - The Healing Foundation<a/>'
      ]
    }
  },

  {
    eraId: 'activism',
    gap: 4,
    yearText: '1966',
    name: '',
    details: [
      'Gurindji people at Wave Hill station begin their seven-year-long strike, calling for better working conditions, fair wages, and reclamation of Country. Their petition is ignored.',
      'In 1974, the Labor Government  finally returned their lands in a symbolic ceremony. Prime Minister Gough Whitlam poured a handful of soil through Vincent Lingiari’s fingers, saying:',
      '“Vincent Lingiari, I solemnly hand to you these deeds as proof, in Australian law, that these lands belong to the Gurindji people".',
      'This moment has been celebrated through song, most recently by Electric Fields.'
    ],
    media: {
      type: 'youtube',
      src: 'ao7GOymvhsw',
      thumbnail: 'https://i.ytimg.com/vi/ao7GOymvhsw/maxresdefault.jpg',
      text: ['', 'Electric Fields - From Little Things Big Things Grow (Official Video), EMI Music Australia,', ' <a href="https://www.youtube.com/watch?v=ao7GOymvhsw" target="_blank" rel="noreferrer noopener" class="underline text-lg italic">https://www.youtube.com/watch?v=ao7GOymvhsw</a>']
    }
  },
  {
    eraId: 'activism',
    gap: -18,
    yearText: '1967',
    name: '',
    details: ['Over 90% of Australians vote YES in referendum to amend the Constitution. Aboriginal and Torres Strait Islander peoples are included in Census for the first time.']
  },
  {
    eraId: 'activism',
    gap: 10,
    yearText: '1985',
    name: '',
    details: ['Uluru handed back to the Aṉangu people after decades of lobbying.'],
  },
  {
    eraId: 'activism',
    gap: -5,
    yearText: '1988',
    name: '',
    details: ['Barunga Statement presented to Prime Minister Bob Hawke, calling for land rights, self-determination, and compensation. Hawke\'s promise of a Treaty by 1990 has still not been fulfilled.']
  },

  {
    eraId: 'reconciliation',
    gap: 4,
    yearText: '1992',
    name: '',
    details: ['High Court of Australia\'s Mabo decision formally recognises native title and renders <em>terra nullius</em> a legal fiction.'],
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
    details: ['\'Bringing Them Home\' report released by the National Inquiry into the Separation of Aboriginal and Torres Strait Islander Children from Their Families. Most of its 54 recommendations are ignored.'],
    media: {
      type: 'youtube',
      src: 'JWwCQ21hT7U',
      thumbnail: 'https://i.ytimg.com/vi/JWwCQ21hT7U/maxresdefault.jpg',
      text: ['', 'Bringing Them Home - excerpt from video, Australian Human Rights Commission,', '<a href="https://www.youtube.com/watch?v=JWwCQ21hT7U" target="_blank" rel="noreferrer noopener" class="underline text-lg italic">https://www.youtube.com/watch?v=JWwCQ21hT7U</a>']
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
      text: ['', 'Apology to Australia\'s Indigenous peoples, ABC News In-depth,', '<a href="https://www.youtube.com/watch?v=RThkO3XBThs" target="_blank" rel="noreferrer noopener" class="underline text-lg italic">https://www.youtube.com/watch?v=RThkO3XBThs</a>']
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
      text: ['', 'Uluru Statement from the Heart, Seriously Social,', '<a href="https://www.youtube.com/watch?v=YJrHStMY1Gg" target="_blank" rel="noreferrer noopener" class="underline text-lg italic">https://www.youtube.com/watch?v=YJrHStMY1Gg</a>']
    }
  },
  {
    eraId: 'reconciliation',
    gap: 1,
    yearText: '2023',
    name: '',
    details: ['Australia votes NO in the Voice to Parliament referendum, denying Aboriginal and Torres Strait Islander communities an enshrined route to help inform policy and legal decision that impact their lives. <a href="https://www.reconciliation.org.au/reconciliation/support-a-voice-to-parliament/100-years-of-calls-for-voice/" class="underline hover:text-brand-midblue" target="_blank" rel="noopener noreferrer">This voice has been called for close to 100 years.</a>']
  },
  {
    eraId: 'reconciliation',
    gap: 1,
    yearText: '2023',
    name: '',
    details: ['On the 26 March 2023, the South Australian Parliament passed the <a href="https://www.dpc.sa.gov.au/responsibilities/state-protocols-acknowledgements/state-services/events/making-history-with-the-first-nations-voice-to-parliament" class="underline hover:text-brand-midblue" target="_blank" rel="noopener noreferrer">First Nations Voice Bill 2023</a>. The Act establishes Australia\'s first Voice to Parliament for First Nations people in South Australia and is a representative, elected body for Aboriginal and Torres Strait Islander peoples. Through the Voice, First Nations people can have their say at the highest levels of decision-making in South Australia, including to Parliament, on matters, policies and laws that affect them.</a>']
  }
]
