// @ts-nocheck
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';
import FeatureCardColumn from 'components/feature-card-column';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: '5% of the GDP',
    title: '5% of the GDP',
    text:
      "Currently, agriculture in Romania represents 5% of the GDP and it engages about 30% of the country's active population",
  },
  {
    id: 2,
    imgSrc: Performance,
    altText: 'Great pottential',
    title: 'Great pottential',
    text:
      "Romania has an agricultural area of 14.8 million hectares, of which only ten million are occupied by arable land.",
  },
  {
    id: 3,
    imgSrc: Performance,
    altText: 'Vulnerable Field',
    title: 'Vulnerable Field',
    text:
      "Romanian citizens who own agricultural land or equipment do not take full advantage of their resources.",
  },
  {
    id: 4,
    imgSrc: Performance,
    altText: 'Opportunity',
    title: 'Opportunity',
    text:
      "Uncultivated land plots and unused equipment, as well as failure to adopt modern techniques, annually influence the agricultural sector.",
  },
];

export default function KeyFeature() {
  return (
      <section sx={{variant: 'section.keyFeature'}} id="step1">
          <Container>
              <SectionHeader 
                  slogan="We noticed the"
                  title="Agriculture sector in Romania"
                         
              />

              <Grid sx={styles.grid}>
                  {data.map((item) => (
                      <FeatureCardColumn 
                          key={item.id}
                          src={item.imgSrc}
                          alt={item.altText}
                          title={item.title}
                          text={item.text}
                      />
                  ))}
              </Grid>
          </Container>
      </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
