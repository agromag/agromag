// @ts-nocheck
import React from 'react';
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


export default function IndexPage() {

  const lists = {
      competion:[
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
      metrics:[
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
      costStructure:[
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
      streams: [
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
  


  const milestoneOneData = {
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
          children: <List items={lists.competion} childStyle={{fontSize: '18px', textAlign: 'left'}}/>
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
          children: <List items={lists.metrics} childStyle={{fontSize: '18px', textAlign: 'left'}}/>
        },
        {
          title: 'Cost Structure',
          subTitle: "Yes, we will need some money",
          image: '',
          content: "",
          children: <List items={lists.costStructure} childStyle={{fontSize: '18px', textAlign: 'left'}}/>
        },
        {
          title: 'Revenue Streams',
          subTitle: "But we will make a lot more",
          image: '',
          content: "",
          children: <List items={lists.streams} childStyle={{fontSize: '18px', textAlign: 'left'}}/>
        },

      ]
  }


  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Agromat - Fiky Page" />
          <Banner />
          <KeyFeature />
          {/* <ServiceSection /> */}
          
          {milestoneOneData.sections.map((section,i) => (
              <Section 
                  title={section.title}
                  subTitle = {section.subTitle}
                  content = {section.content}
                  key={i}
                  children = {section.children ? section.children : null}
              />
          ))}
          
          
          <TeamSection />
          
        </Layout>
    </ThemeProvider>
  );
}
