// @ts-nocheck
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import milestones from '../../data/milestones'
import { ThemeProvider } from 'theme-ui';
import theme from '../../theme';
import SEO from '../../components/seo';
import Layout from '../../components/layout';
import Banner from '../../sections/banner';
import TeamSection from '../../sections/team-section';
import Section from '../../components/simple-section'
import KeyFeature from '../../sections/key-feature'
import ButtonGroup from '../../components/button-group'
import { GetStaticPaths, GetStaticProps } from 'next';

export default function Milestones(props){

    const [milestone, setMilestone] = useState(null)
    const [previous, setPrevious] = useState(null)
    const [next, setNext] = useState(null)

    const router = useRouter()
    const { id } = router.query

    useEffect(()=> {

        if(!id){
            return ;
        }
    
        const getMilestoneData = async () => {

            const result = milestones.filter((item) => item.id === id)[0]
            setMilestone(result)

            const index = milestones.indexOf(result)

            if(index === 0){
                setNext((index+2).toString())
                setPrevious(null)
            
            } else if (index < milestones.length - 1) {
                setNext((index+2).toString())
                setPrevious((index).toString())
            
            } else {
                setPrevious((index).toString())
                setNext(null)
            }

        }

        getMilestoneData()

    }, [id])
    
    

    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Banner buttonText={`Explore Milestone ${id}`}/>
                <KeyFeature />

                {milestone && milestone.sections.map((section,i) => (
                    <Section 
                        title={section.title}
                        subTitle = {section.subTitle}
                        content = {section.content}
                        key={i}
                        children = {section.children ? section.children : null}
                        component = {section.component ? section.component : null }
                        image = {section.image ? section.image : null}
                        formSection = {section.formSection ? section.formSection : null}
                        other = {section.other ? section.other : null }
                        link = {section.link ? section.link : null}
                    />
                ))}

                <ButtonGroup next={next} previous={previous}/>
                
                <TeamSection />
          
            </Layout>
        </ThemeProvider>
    )
}

