// @ts-nocheck
import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import { Link } from 'components/link';


import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import TeamSection from '../sections/team-section';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';




export default function IndexPage() {

  const milestones = [
    {
      id: 1,
      title: 'Milestone 1',
      subTitle: 'Project Details',
      description: 'This section offers an overview of your project. It is also meant to help you clarify a few essential aspects regarding our project. ',
      path: '/milestones/1',
      date: '25.10.2021'
    },

    {
      id: 2,
      title: 'Milestone 2',
      subTitle: 'Validation 1',
      description: "This is one of the most important milestones. You need to go through the Customer Discovery process presented in the second lecture. Your initial focus should be on testing the problem, and then the solution (test your understanding of the customers' problem or need, and only after validating this, determine if the your solution matches this need)",
      path: '/milestones/2',
      date: '8.11.2021'
    },

    {
      id: 3,
      title: 'Milestone 3',
      subTitle: 'Landing Page and Wireframe',
      description: 'Wireframe and landing page',
      path: '/milestones/3',
      date: '15.11.2021'
    },

    {
      id: 4,
      title: 'Milestone 4',
      subTitle: 'UX',
      description: '',
      path: '/milestones/4',
      date: '22.11.2021'
    },

    {
      id: 5,
      title: 'Milestone 5',
      subTitle: '',
      description: '',
      path: '/milestones/5',
      date: '22.11.2021'
    },

  ]
  
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Agromat - Fiky Page" />
          <Banner />

          <VerticalTimeline>
              {milestones.reverse().map(milestone => (
                  
                  <Link path={milestone.path}>
                      <VerticalTimelineElement
                    key={milestone.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#fff', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date={milestone.date}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    position={milestone.id%2==0 ? "left" : "right"}
                >
                  <h3 className="vertical-timeline-element-title">{milestone.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{milestone.subTitle}</h4>
                  <p> {milestone.description}</p>

                </VerticalTimelineElement>
                  </Link>

              ))}
          </VerticalTimeline>
        
          
          <TeamSection />
          
        </Layout>
    </ThemeProvider>
  );
}
