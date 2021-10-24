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


export default function IndexPage() {

  const milestoneOneData = {
      sections: [
        {
          title: 'Designed to Improve',
          subTitle: 'a solution',
          image: '',
          content: "Our team brings to the fore an application designed to improve the quality of services in the agricultural field. The Agromag solution aims to facilitate communication between stakeholders, offering users the opportunity to distribute ads and connect with other entities interested in providing various services. Starting from the rental of agricultural equipment and arable land and continuing with the possibility of finding workers, our platform addresses exclusively the agricultural sector, having as its main goal the full exploitation of resources and the improvement of an important sector of the Romanian economy."
        },
        {
          title: 'Customer Segments',
          subTitle: "let's talk about",
          image: '',
          content: "Being a B2B application, our solution is addressed, on the one hand, to companies that own agricultural land or equipment that they want to offer for rent and, on the other hand, to companies that need such resources or labor force for carrying out various activities in the agricultural field."
        },
        {
          title: 'Competion',
          subTitle: "Better than",
          image: '',
          content: ""
        },
        {
          title: 'Over The Competition',
          subTitle: 'our advantages',
          image: '',
          content: ""
        },
        {
          title: 'Key metrics',
          subTitle: "growth and performance ",
          image: '',
          content: ""
        },
        {
          title: 'Cost structure',
          subTitle: "Yes, we will need some money",
          image: '',
          content: ""
        },
        {
          title: 'Revenue streams',
          subTitle: "But we will make a lot more",
          image: '',
          content: ""
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
              />
          ))}
          
          
          <TeamSection />
          
        </Layout>
    </ThemeProvider>
  );
}
