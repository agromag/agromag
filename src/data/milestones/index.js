import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io'
import Image1 from '../../assets/milestones/2/Image1.jpeg'
import Image2 from '../../assets/milestones/2/Image2.jpeg'
import Image3 from '../../assets/milestones/2/1.png'
import Image4 from '../../assets/milestones/2/2.png'
import Image5 from '../../assets/milestones/2/3.png'
import Image6 from '../../assets/milestones/2/4.png'
import Image7 from '../../assets/milestones/2/5.png'
import Image8 from '../../assets/milestones/2/6.png'
import Image9 from '../../assets/milestones/2/7.png'
import Image10 from '../../assets/milestones/2/8.png'
import Image11 from '../../assets/milestones/2/9.png'
import Image12 from '../../assets/milestones/2/10.png'
import Image13 from '../../assets/milestones/2/11.png'
import Image14 from '../../assets/milestones/2/12.png'
import Image15 from '../../assets/milestones/2/13.png'
import Image16 from '../../assets/milestones/4/Flow post_view ad.drawio.png'
import Image17 from '../../assets/milestones/4/User stories.png'
import Image18 from '../../assets/milestones/5/analytics.png'
import Image19 from '../../assets/milestones/5/FB Page.JPG'
import Image20 from '../../assets/milestones/5/FB Page2.JPG'
import Image21 from '../../assets/milestones/5/FB Page3.JPG'
import Image22 from '../../assets/milestones/5/Share1.JPG'
import Image23 from '../../assets/milestones/5/Share2.JPG'
import Image24 from '../../assets/milestones/5/Share3.JPG'
import Image25 from '../../assets/milestones/5/User Persona.PNG'
import Image26 from '../../assets/milestones/6/img1.png'
import Image27 from '../../assets/milestones/6/img2.png'
import Image28 from '../../assets/milestones/6/img3.png'
import Image29 from '../../assets/milestones/6/img4.png'
import Image30 from '../../assets/milestones/6/img5.gif'
import Image31 from '../../assets/milestones/6/img6.png'
import Image32 from '../../assets/milestones/6/t1.png'
import Image33 from '../../assets/milestones/6/t2.png'
import Image34 from '../../assets/milestones/6/t3.png'

import { Link } from 'components/link'

const milestones = [
    {
        id: '1',
        sections: [
            {
                title: 'Designed to Improve',
                subTitle: 'a solution',
                image: '',
                content: "Our team brings to the fore an application designed to improve the quality of services in the agricultural field. The Agromag solution aims to facilitate communication between stakeholders, offering users the opportunity to distribute ads and connect with other entities interested in providing various services. Starting from the rental of agricultural equipment and arable land and continuing with the possibility of finding workers, our platform addresses exclusively the agricultural sector, having as its main goal the full exploitation of resources and the improvement of an important sector of the Romanian economy."
            },

            {
                title: 'Customer Segment',
                subTitle: "let's talk about",
                image: '',
                content: "Being a B2B application, our solution is addressed, on the one hand, to companies that own agricultural land or equipment that they want to offer for rent and, on the other hand, to companies that need such resources or labor force for carrying out various activities in the agricultural field."
            },

            {
                title: 'Competion',
                subTitle: "Better than",
                image: '',
                content: "Our competion is represented by all the other platforms where people can post services. For example: ",
                component: {
                    type: 'list',
                    content: [
                        {
                          id: 1,
                          icon: <IoIosCheckmarkCircle />,
                          text: 'OLX',
                          isAvailable: true,
                        },
                        {
                          id: 2,
                          icon: <IoIosCheckmarkCircle />,
                          text: "Bizoo",
                          isAvailable: true,
                        },
                    ],
                }
              },
              {
                title: 'Over The Competition',
                subTitle: 'our advantages',
                image: '',
                content: "The greates advantage of our application is that it is focused only on the agricultural field."
              },
              {
                title: 'Key Metrics',
                subTitle: "growth and performance ",
                image: '',
                content: "",
                component: {
                    type: 'list',
                    content: [
                        {
                          id: 1,
                          icon: <IoIosCheckmarkCircle />,
                          text: 'Total number of users',
                          isAvailable: true,
                        },
                        {
                          id: 2,
                          icon: <IoIosCheckmarkCircle />,
                          text: "Number of land / equipment rental ads",
                          isAvailable: true,
                        },
                        {
                          id: 3,
                          icon: <IoIosCheckmarkCircle />,
                          text: 'Number of ads for services',
                          isAvailable: true,
                        },
                        {
                          id: 4,
                          icon: <IoIosCheckmarkCircle />,
                          text: 'Ad completion rate (number of services performed / total number of ads)',
                          isAvailable: true,
                        },
                      ],
                }
              },
              {
                title: 'Cost Structure',
                subTitle: "Yes, we will need some money",
                image: '',
                content: "",
                component: {
                    type: 'list',
                    content: [
                        {
                          id: 1,
                          icon: <IoIosCheckmarkCircle />,
                          text: 'Development costs (design & front-end & back-end)',
                          isAvailable: true,
                        },
                        {
                          id: 2,
                          icon: <IoIosCheckmarkCircle />,
                          text: "Cloud services",
                          isAvailable: true,
                        },
                        {
                          id: 3,
                          icon: <IoIosCheckmarkCircle />,
                          text: 'Hosting',
                          isAvailable: true,
                        },
                        {
                          id: 4,
                          icon: <IoIosCheckmarkCircle />,
                          text: 'Marketing',
                          isAvailable: true,
                        },
                    ],
                },

                // children: <List items={lists.costStructure} childStyle={{fontSize: '18px', textAlign: 'left'}}/>
              },
              {
                title: 'Revenue Streams',
                subTitle: "But we will make a lot more",
                image: '',
                content: "",
                component: {
                    type: 'list',
                    content: [
                        {
                          id: 1,
                          icon: <IoIosCheckmarkCircle />,
                          text: 'Advertisements areas',
                          isAvailable: true,
                        },
                        {
                          id: 2,
                          icon: <IoIosCheckmarkCircle />,
                          text: "A percentage of the value of a published ad (7% taken from the user who needs the service)",
                          isAvailable: true,
                        },
                        {
                          id: 3,
                          icon: <IoIosCheckmarkCircle />,
                          text: "From customers' purchases ",
                          isAvailable: true,
                        },
                        {
                          id: 4,
                          icon: <IoIosCheckmarkCircle />,
                          text: "From customers' purchase of certain ad promotion packages",
                          isAvailable: true,
                        },
                    ]
                }
                // children: <List items={lists.streams} childStyle={{fontSize: '18px', textAlign: 'left'}}/>
              },
        ]
    },

    {
        id: '2',
        sections: [
            {
                title: 'The problem',
                subTitle: "How we identified ",
                image: '',
                content: "Romania is one of the European Union countries with the highest potential in the agricultural sector, being on the sixth place as the agricultural area used among the European Union countries. However, it faces an extremely low yield of agricultural production which is due to several factors: ",
                component: {
                    type: 'list',
                    content: [
                        {
                            id: 1,
                            icon: <IoIosCheckmarkCircle />,
                            text: 'The need to capitalize on land at maximum capacity, there being an immense potential of the agricultural sector ',
                            isAvailable: true,
                        },

                        {
                            id: 2,
                            icon: <IoIosCheckmarkCircle />,
                            text: 'Lack of a dedicated platform to agriculture ',
                            isAvailable: true,
                        },

                        {
                            id: 3,
                            icon: <IoIosCheckmarkCircle />,
                            text: 'Wear of agricultural equipment due to their periodic use',
                            isAvailable: true,
                        },

                        {
                            id: 4,
                            icon: <IoIosCheckmarkCircle />,
                            text: 'Agricultural land left uncultivated for very long periods of time',
                            isAvailable: true,
                        },

                        {
                            id: 5,
                            icon: <IoIosCheckmarkCircle />,
                            text: 'Need for improvement or modernization of agricultural services',
                            isAvailable: true,
                        },
                    ]
                }
                
            },

            {
                title: 'Solution for the problem',
                subTitle: "What we thought is a",
                image: '',
                content: "After analyzing these factors, our team comes up with the proposal to implement a B2B application dedicated exclusively to the agricultural sector, which will streamline and help the evolution of this field. The key features we want to highlight are: the possibility of renting arable land, agricultural equipment and finding labor. All these will help to exploit the resources at the maximum level, resulting in the development of agricultural production and increased sales. ",
            },

            {
                title: 'Customer discovery ',
                subTitle: "Our plan for",
                image: '',
                content: "To point out the problems as well as possible and to discover in detail the needs of potential users, our team chose to develop a questionnaire. In this questionnaire we aim to find out the level of digitalization of enterprises and to outline the portrait of future collaborators. In addition to this questionnaire, we managed to find some people who work or have friends who work in this sector to find out about the main problems facing Romanian farmers and to be aware of their needs in terms of land, services, machinery, and workers. ",
            },
            
            {
                title: 'Information ',
                subTitle: "How We collected",
                image: [
                    Image1, 
                    Image2
                ],
                formSection: {
                    text: [
                        "The process of discovering potential customers was focused on the one hand on sharing a questionnaire with questions relevant to the field of applicability of our solution and, on the other hand, by organizing interviews with the person that our team considered to be. interested. The segment we addressed includes people who carry out activities in the agricultural field and, in order to obtain their answer, we acted in two parts: we shared the online questionnaire on facebook groups dedicated to Romanian farmers and we organized telephone interviews with acquaintances. which operates in this field. ",
                        "Given that we address exclusively the Romanian market, the questionnaire contains questions only in Romanian, and its purpose is to discover the needs of local farmers and to see if our application could be really useful for it. So, here are some results: "
                    ],
                    images: [
                        Image3,Image4,Image5,Image6,Image7,Image8,Image9,Image10,Image11,Image12,Image13,Image14,Image15,
                    ],
                    conclusions: {
                        text: 'After analyzing the results obtained by spreading this form, I drew the following conclusions: ',
                        component: {
                            type: 'list',
                            content: [
                                {
                                    id: 1,
                                    icon: <IoIosCheckmarkCircle />,
                                    text: 'Most users have at least an average level of experience in using the Internet and prefer to use a mobile phone to access various applications. ',
                                    isAvailable: true,
                                },
        
                                {
                                    id: 2,
                                    icon: <IoIosCheckmarkCircle />,
                                    text: ' Although there are particular cases, farmers who have resources also offer services in this area ',
                                    isAvailable: true,
                                },
        
                                {
                                    id: 3,
                                    icon: <IoIosCheckmarkCircle />,
                                    text: 'Most farmers own arable land and equipment that they do not fully exploit, but also offer services in the field (labor, freight or consulting) and some of them also obtain financial benefits ',
                                    isAvailable: true,
                                },
        
                                {
                                    id: 4,
                                    icon: <IoIosCheckmarkCircle />,
                                    text: 'For many of those interested, there have been situations in which they needed help in carrying out various activities and prefer to turn to the recommendations of acquaintances or look for various solutions on the Internet. ',
                                    isAvailable: true,
                                },
        
                                {
                                    id: 5,
                                    icon: <IoIosCheckmarkCircle />,
                                    text: 'The amounts that users would be willing to invest to receive help differ depending on the possibilities and needs of each, but from the attached graphs it can be seen that most users are willing to invest in such services. ',
                                    isAvailable: true,
                                },
                            ]
                        }
                    },

                },
                content: "In order to contact people working in agriculture, we first searched for Facebook groups dedicated to this topic, where we were able to distribute our form to get answers from the right people. The questions that were asked in the form can be seen below: ",
                other: [
                    {
                        title: 'Interview #1: ',
                        items: [
                            {
                                q: 'What would you say is the biggest shortcoming in today’s agricultural scene? ',
                                a: 'The lack of workforce. It’s very hard to find people that are able to use machinery, plow or harvest the land.'
                            },

                            {
                                q: 'How do you usually obtain people for these things? ',
                                a: 'I ask other farmers to recommend people they worked with in the past or through people’s mouth - I tell acquaintances that I need people to work with and the word goes through the village.'
                            },

                            {
                                q: 'What problems did you encounter using these methods? ',
                                a: 'It takes a long time to find workers and it isn’t safe either. There are people that don’t keep their word and disappear, leaving you with a lack of workforce. Sometimes they come to our lands and ask for greater pay. Things usually don’t go the way you plan.'
                            },

                            {
                                q: 'Would you use a platform where people can list their services (e.g.: expertise in operating a certain machine, or repair of utilities) and the pay they expect per day? ',
                                a: 'It sounds interesting, but how would you solve the security aspect? '
                            },

                            {
                                q: 'The platform will act as a third-party that will guarantee both sides that the deal will take place as it should. The company must pay in advance when applying for the workers’ services and the rest afterwards. If the worker won’t keep their part of the deal, they won’t receive the advance payment and they will be banned for a period. Also, we plan on having a review system, so people can compare prices and previous experiences, thus encouraging competition and professionalism in this field. ',
                                a: 'This sounds great! There may be a couple of instances where people don’t keep their part of the deal at the start, but as the companies and people gather more reviews and experience the drawbacks of dishonesty, things will calm down and the market will develop. '
                            },
                        ]
                    },

                    {
                        title: 'Interview #2: ',
                        items: [
                            {
                                q: 'What is a problem you keep facing as a farmer? ',
                                a: 'Scams. Scams that involve a very large amount of money. Even businesses that sell fertilizers, pesticides or herbicides do these kinds of things. You agree on an amount and a price, and they usually deliver significantly less products than discussed. '
                            },

                            {
                                q: 'How do you deal with this problem? ',
                                a: 'There isn’t a sure way. I talk to people and see what they used in the past, but this approach doesn’t always work.'
                            },

                            {
                                q: 'How would you feel about a platform that would not only be a buffer between you and the company you buy from, making sure both parties keep their end of the bargain, but also provide you with a plethora of options regarding each aspect you’re interested in, allowing you to compare offers and see the reviews of each individual company? ',
                                a: 'This seems like it could solve the problem I’m facing at the moment, but it’s only a small part of a bigger picture. Agriculture involves a lot of processes, like buying machinery, buying or renting land, workforce, buying seeds, crops solutions, repairing and maintaining utilities and so on. I think that your platform can also cover these areas. '
                            },

                            {
                                q: 'I agree. There is no reason why we shouldn’t expand our offer to all kinds of services inside this segment. Do you ever find yourself with machinery that sits still after working the land? ',
                                a: 'Yes, there is a period of time when you don’t need to use them while the crops are growing and you’re waiting for the harvest. But I don’t view this as a problem, we have enough space to store them. '
                            },

                            {
                                q: 'Well, after a period of research, our team concluded that resources are very poorly used in our country. Wouldn’t you prefer to keep your unused machinery working and provide you with passive income?',
                                a: 'That sounds good, but how would I do such a thing? '
                            },

                            {
                                q: 'We intend our platform to be a place where services can also be rented, not only sold. So, you could find farmers that need more machinery to harvest their land and you could be the one to provide it. On the other hand, you could rent more land from people who don’t want to work theirs and use your machinery on it. Of course, these are just some examples of the multiple possible use cases, all including the same principles of business safety. ',
                                a: 'To be honest, if such a service existed, I would use it. Good luck in your further steps of development!  '
                            },
                        ]
                    }
                ]
            },

            {
                title: 'Changes ',
                subTitle: "Product",
                image: '',
                content: "Following the analysis of the answers in the questionnaire of the interviews, our team found that the solution initially imagined could meet the needs of users working in agriculture. The idea was appreciated by the interviewees, who considered it necessary and helpful in terms of simplifying the exchange of services in the agriculture field and, therefore, we decided that our product will not change. The only aspect that could be changed is the fact that, although we initially opted for a web platform, we noticed that users feel more comfortable with their phone and, for this reason, there is the possibility of creating a mobile application. ",
            },

            {
                title: 'Do you consider that you are ready to move to the Customer Validation stage (to test selling)? Provide arguments. ',
                subTitle: "Customer Validation",
                image: '',
                content: "Considering the answers received at this stage, we believe that our product can move to the next step of its development. Given the fact that people working in agriculture feel the need to use an application that facilitates the exchange of services in this field, we believe that we are ready to move towards the stage of validation and selling testing. ",
            },
        ]
    },

    {
        id: '3',
        sections: [
            {
                title: 'Landing Page',
                subTitle: "We Built our",
                image: '',
                content: '',
                link: {
                    label: 'Go to the landing page',
                    path: 'https://agromag-lp.vercel.app/'
                }  
            },

            {
                title: 'Wireframes',
                subTitle: "Also we Built the",
                image: '',
                content: '',
                link: {
                    label: 'Checkout our wireframes',
                    path: '/AgroMag Wireframe-2.pdf'
                }  
            },
        ]
        
    },

    {
        id: '4',
        sections: [
            {
                title: 'Stories, Cases / Flows',
                subTitle: "User",
                image: [
                    Image16,
                    Image17
                ],
                
            },

            {
                title: 'Face-to-face Interviews & User persona',
                subTitle: "In Progress",
                content: 'For these two requirements we encountered some problems. Because in the field we choose it is a little more difficult to find people willing to collaborate and want to support the interviews, we have to postpone this stage for a week. Many of the people contacted did not agree to be recorded, and those who are willing to do so did not have the availability to hold the interview this week. So, we have scheduled a few interviews next week, and we will make changes to these requirements by the end of the next milestone.',
            },
        ]
        
    },

    {
        id: '5',
        sections: [
            {
                title: 'Section to our landing page',
                subTitle: "lead collection",
                content: "We added a form to our landing page so we can collect leads."
                
            },

            {
                title: 'Analytics',
                subTitle: 'Google',
                content: "We added Google Analytics so we can understand our user behavior ",
                image: [
                    Image18
                ]
            },

            {
                title: 'To our FB page',
                subTitle: 'Bring People',
                content: "We create a facebook page so we can start building a community ",
                image: [
                    Image19,
                    Image20,
                    Image21,
                    Image22,
                    Image23,
                    Image24
                ]
            },

            {
                title: 'Persona',
                subTitle: 'User',
                image: [
                    Image25,
                ]
            },

        ]
    },

    {
        id: '6',
        sections: [
            {
                title: 'Market ',
                subTitle: "Target",
                content: "Regarding Agromag, the target market consists exclusively of Romanian farmers, our application being intended to facilitate the processes carried out in this sector. The total number of farmers in Romania this year is estimated at about 4.3 million (a percentage of 23% of the total population of the country), but because we are talking about a mobile application that includes an online payment process, we must address people who have access to smartphones, can handle modern technologies and have a debit card to make these payments. From this point of view, we consider that our target audience consists, on one hand of people who own large and medium-sized farms and, on the other hand, of independent farmers, estimating a total of 1.5 million people. "
            },

            {
                title: 'Approximate number of competitors in our targeted market ',
                content: 'For our targeted market, the number of main competitors is 6, these being: OLX, lajumate.ro, anunturi-agricole.ro, folosit.com, Bizoo and agricultura-romaneasca.ro. In the case of competitors with a huge market share, we take into account the fact that they are not niches in the field of agriculture, so the market share in their case will fluctuate quite a bit in value. '
            },

            {
                title: "Competitors ",
                component: {
                    type: 'list',
                    content: [
                        {
                          id: 1,
                          icon: <IoIosCheckmarkCircle />,
                          text: 'Anunturi-Agricole.ro ',
                          isAvailable: true,
                          image: Image27,
                          description: "With a total of over 5000 ads published, the website is based on a concept similar to that of the Agromag application, because it offers the possibility to publish and search for any kind of ad in the agricultural field, from renting, selling, buying equipment, resources or animals, up to the need for workforce. Although it provides details for contacting the person who posted the ad, the site does not facilitate the successful communication and performance of services between 2 users, not assuming responsibility for the published content. Analysing the user interactions with this page, we noticed that for a promoted ad the maximum number of hits was 35,000 people, while for a simple ad, the average value is about 3500 views. "
                        },
                        {
                          id: 2,
                          icon: <IoIosCheckmarkCircle />,
                          text: "OLX ",
                          isAvailable: true,
                          image: Image31,
                          description: "A competitor is also considered the olx.ro site, having at the same time a mobile version of the application. Here users frequently post ads of any kind, being quite familiar with the platform. Market share estimation would be difficult to achieve, because the content published on this platform is extremely diverse, and from the huge number of users it is quite difficult to separate the public interested only from the agricultural sector. "
                        },

                        {
                            id: 3,
                          icon: <IoIosCheckmarkCircle />,
                          text: "AgriculturaRomaneasca.ro  ",
                          isAvailable: true,
                          image: Image26,
                          description: "A third possible competition is the Agricultura Romaneasca page, an initiative started in 2009, which is addressed to farmers who want to find out new information about this sector of activity, but also to publish various ads. Although their perspective is close to that of Agromag, we consider that we are distinguished from them by the fact that we want to integrate the possibility to request and offer workforce and similar services, not just renting resources. The market share could not be estimated in the case of this competitor either, because the number of users is not quantified by the owners. "
                        },

                        {
                            id: 4,
                          icon: <IoIosCheckmarkCircle />,
                          text: "Lajumate.ro  ",
                          isAvailable: true,
                          image: Image30,
                          description: "Lajumate.ro is an online advertising platform launched by Intact Media Group in October 2015, which aims to facilitate the sale-purchase process among all internet users in Romania. This site, also having a mobile application developed, is a direct competitor, posting numerous ads in the field of agriculture. The disadvantage of this platform over Agromag is the lack of orientation towards a specific field. "
                        },

                        {
                            id: 5,
                          icon: <IoIosCheckmarkCircle />,
                          text: "Bizoo",
                          isAvailable: true,
                          image: Image28,
                          description: "Bizoo is an online platform that offers the possibility of posting ads in many fields, including ads for the agriculture industry. The main categories of ads on this site are related to agriculture, food and beverages, packaging and paper, cars, boats, vehicles, office supplies, home and garden, etc. "
                        },

                        {
                            id: 6,
                          icon: <IoIosCheckmarkCircle />,
                          text: "Folosit.com",
                          isAvailable: true,
                          image: Image29,
                          description: "The web application folosit.com is an application similar to the Bizoo application and thus becoming a competitor of Agromag. "
                        },


                    ],
                }
              
            },

            {
                title: 'MARKET SHARE for competitors ',
                content: "To determinate the market share of the competition we use as reference the number of unique users in a month. The total number of usersis indicative, as some of them can use multiple platforms in parallel. These are the statistics for the biggest competitors: ",
                image: [Image32]
            },

            {
                title: 'Potential market share for 5 years ',
                content: "In the first year, we are looking forward to get 0.1% of the current market share. The next year, through good feedback and numerous ads, we aim to get on our platform another 0.5% of active users. Following years, we estimate a exponential growth. ",
                image: [Image33]
            },

            {
                title: ' The value of our market share for 5 years',
                subTitle: 'Total market value and',
                content: 'Our application can generate revenue from the following: Promoting ads, Post more than 3 ads (the first 3 are free) or Obtaining a percentage of the cost of a published service. For Agromag, the main sources will come from the promotion of ads, the publication of more than 3 ads, but also the percentage obtained from the value of the service. We estimate to have a profit of 500 RON per month, accumulating 6000 RON in the first year obtained from the promotion of the ads; another gain from the publication of a number of more than 3 ads worth 460 RON per month, accumulating 5520 RON in the first year and a gain of 500 RON per month obtained from the percentage of services, reaching 6000 RON. ',
                image: [Image34]
            }
        ]
    }
]

export default milestones

