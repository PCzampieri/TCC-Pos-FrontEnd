import React from 'react'

import { Segment, Grid, Header, List, Image, Container, Icon } from 'semantic-ui-react'

import logojs from '../../assets/images/logojs.png'
import logonode from '../../assets/images/logoNode.png'
import logoreact from '../../assets/images/logoReact.png'

const Footer = () => {
  return (
    <Segment inverted vertical style={{ padding: '3em 0em', marginTop: '0px' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='FullStack Developer' />
              <List link inverted>
                <List.Item >Home</List.Item>
                <List.Item >NodeJS</List.Item>
                <List.Item >ReactJS</List.Item>
                <List.Item >React Native</List.Item>                  
              </List>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header inverted as='h4' content='DEV JS | BLOG' />
              <List link inverted>
                <List.Item >Conteúdos da Stack mais moderna do mercado</List.Item>
                <List.Item >Stack JavaScript</List.Item>                 
              </List>
            </Grid.Column>              
            <Grid.Column verticalAlign='middle' width={1}>        
              <Image src={logonode} size='mini' centered/>
            </Grid.Column>     
            <Grid.Column verticalAlign='middle' width={1}>
              <Image src={logoreact} size='mini' centered/>                
            </Grid.Column>      
            <Grid.Column verticalAlign='middle' width={1}>        
              <Image src={logojs} size='mini' centered />
            </Grid.Column> 
          </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Row centered width={10}  >
            <span><Icon name='copyright outline' /> 2019 - Todos os direitos reservados.</span>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}

export default Footer