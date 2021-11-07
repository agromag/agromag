// @ts-nocheck
import {useState} from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import Problems from '../sections/problems'
import TeamSection from '../sections/team-section';
import Solutions from '../sections/solutions';
import CoreFeature from 'sections/core-feature';
import KeyFeature from 'sections/key-feature';
import ServiceSection from 'sections/service-section';
import Section from 'components/simple-section'
import Competion from 'sections/competion';
import List from 'components/list';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import Image1 from '../assets/milestones/2/Image1.jpeg'
import Image2 from '../assets/milestones/2/Image2.jpeg'

export default function IndexPage() {

  const [state, setState] = useState ([
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
    }
])



  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Agromag - Fiky Page" />
          <Banner buttonText="Explore Milestone 2" />
          <KeyFeature />
          {/* <ServiceSection /> */}
          
          
          
          
          <TeamSection />
          
        </Layout>
    </ThemeProvider>
  );
}
