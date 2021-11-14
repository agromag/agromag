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
      description: '',
      path: '/milestones/1',
      date: '2011 - present'
    },

    {
      id: 2,
      title: 'Milestone 2',
      subTitle: 'Project Details',
      description: '',
      path: '/milestones/2',
      date: '2011 - present'
    },

    {
      id: 3,
      title: 'Milestone 3',
      subTitle: 'Project Details',
      description: '',
      path: '/milestones/3',
      date: '2011 - present'
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
                  <h4 className="vertical-timeline-element-subtitle">{milestone.subtitle}</h4>
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
