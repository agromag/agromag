// @ts-nocheck
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaGithub, FaLinkedin, FaMailBulk} from 'react-icons/fa';

import Member1 from 'assets/team/member-1.png';
import Member2 from 'assets/team/member-2.png';
import Member3 from 'assets/team/member-3.png';
import Member4 from 'assets/team/member-4.png';
import Member5 from 'assets/team/member-5.png';
import Member6 from 'assets/team/member-6.png';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Sebastian SIMIONESCU',
    title: 'Sebastian SIMIONESCU',
    designation: 'Poject Manager',
    socialProfile: [
      {
        id: 1,
        name: 'mail',
        path: 'mailto: ssimionescu@stud.energ.upb.ro',
        icon: <FaMailBulk />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/imsebbastian/',
        icon: <FaLinkedin />,
      },
      {
        id: 3,
        name: 'github',
        path: 'https://github.com/imsebbastiann',
        icon: <FaGithub />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Theia VLAD',
    title: 'Theia VLAD',
    designation: 'Product Owner ',
    socialProfile: [
      {
        id: 1,
        name: 'mail',
        path: 'mailto: theia_madalin.vlad@stud.acs.upb.ro ',
        icon: <FaMailBulk />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: '#',
        icon: <FaLinkedin />,
      },
      {
        id: 3,
        name: 'github',
        path: '#',
        icon: <FaGithub />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: 'Diana GHINDAOANU',
    title: 'Diana GHINDAOANU',
    designation: 'Business Analyst',
    socialProfile: [
      {
        id: 1,
        name: 'mail',
        path: 'mailto: diana.ghindaoanu@stud.fils.upb.ro',
        icon: <FaMailBulk />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/diana-ghindaoanu-360695162',
        icon: <FaLinkedin />,
      },
      {
        id: 3,
        name: 'github',
        path: 'https://github.com/diana-ghindaoanu',
        icon: <FaGithub />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Member4,
    altText: 'Georgiana BESEA',
    title: 'Georgiana BESEA',
    designation: 'Back-end Developer',
    socialProfile: [
      {
        id: 1,
        name: 'mail',
        path: 'mailto: georgiana.besea@stud.acs.upb.ro ',
        icon: <FaMailBulk />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: '#',
        icon: <FaLinkedin />,
      },
      {
        id: 3,
        name: 'github',
        path: '#',
        icon: <FaGithub />,
      },
    ],
  },
  {
    id: 5,
    imgSrc: Member5,
    altText: 'Victoria BUBOC',
    title: 'Victoria BUBOC',
    designation: 'Front-end Developer',
    socialProfile: [
      {
        id: 1,
        name: 'mail',
        path: 'mailto:victoria.buboc1860@stud.acs.upb.ro',
        icon: <FaMailBulk />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: '#',
        icon: <FaLinkedin />,
      },
      {
        id: 3,
        name: 'github',
        path: '#',
        icon: <FaGithub />,
      },
    ],
  },
  {
    id: 6,
    imgSrc: Member6,
    altText: 'Bianca DINUT',
    title: 'Bianca DINUT',
    designation: 'Marketing Specialist',
    socialProfile: [
      {
        id: 1,
        name: 'mail',
        path: 'mailto:bianca_ana.dinut@stud.acs.upb.ro',
        icon: <FaMailBulk />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: '#',
        icon: <FaLinkedin />,
      },
      {
        id: 3,
        name: 'github',
        path: '#',
        icon: <FaGithub />,
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <section sx={{variant: 'section.team'}}>
      <Container>
          <SectionHeader 
            slogan="our team"
            title="The most qualified and talented individuals"
            isWhite={false}
          />

          <Grid sx={styles.grid}>
            {data.map((item) => (
                <TeamCard 
                    key={item.id}
                    src={item.imgSrc}
                    altText={item.altText}
                    designation = {item.designation}
                    title = {item.title}
                    social = {item.socialProfile}
                />
            ))}
          </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
