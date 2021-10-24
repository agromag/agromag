import {Box, Grid } from 'theme-ui';
import CompetionColumn from 'components/competion-column';

export default function Competion() {

    const competion = [
        {
            id: 1,
            imgSrc: 'https://www.underconsideration.com/brandnew/archives/olx_logo.png'
        },
        {
            id: 2,
            
            imgSrc: 'https://www.bizoo.ro/skins/assets/img/brand/light.png'
        }
    ]

    return (
        <Box>
            <Grid sx={styles.grid}>
                {competion.map((item) => (
                        <CompetionColumn 
                            key={item.id}
                            src={item.imgSrc}
                            alt={item.name}
                            title={item.name}
                        />
                ))}
            </Grid>
        </Box>
    )
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
