import React from 'react'
import Link from 'next/link'
import { Segment, Container, Grid, List, Header } from 'semantic-ui-react'

const Footer = () => (
  <Segment
    vertical
    as="footer"
    style={{
      padding: '4em 0em',
      marginTop: '3em',
      borderTop: '1px solid #f2f2f2',
    }}
  >
    <Container text>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as="h4" content="5 Surprising Facts About Japan ⛩" />
            <List>
              <List.Item>
                <Link href="/about">
                  <a>Click here⛩</a>
                </Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as="h4" content="Made with ♥ by Andrés Campuzano" />
            <List>
              <List.Item>
                <Link href="https://andrescampuzano.com">
                  <a>My portfolio</a>
                </Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4">Next JS project</Header>
            <p>This is my first Next JS project, I appreciate any feedback.</p>
            <List horizontal style={{ display: 'flex' }}>
              <List.Item
                icon="twitter"
                style={{ display: 'flex' }}
                content={
                  <a href="https://twitter.com/andrescampuzan0">Twitter</a>
                }
              />
              <List.Item
                icon="github"
                style={{ display: 'flex' }}
                content={
                  <a href="https://github.com/andrescampuzano">GitHub</a>
                }
              />
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="colophon">
        <p className="colophon-entry">
          Icons made by{' '}
          <a
            target="_blank"
            href="https://www.flaticon.com/authors/smashicons"
            title="Smashicons"
          >
            Smashicons
          </a>
          {' from '}
          <a target="_blank" href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </p>
        <p className="colophon-entry">
          Poster images taken from{' '}
          <a
            className="acnor"
            target="_blank"
            href="https://displate.com/mrmomo/mr-momo-collective?art=5de96fc4c1257"
            title="Mr Momo Collective, Japan Rubyart Collection, Citypop Japan"
          >
            displate | Mr Momo Collective, Japan Rubyart Collection, Citypop
            Japan
          </a>
        </p>
      </div>
    </Container>

    <style jsx>{`
      .colophon {
        text-align: center;
        margin-top: 3.2rem;
        font-size: 0.8rem;
      }
      .colophon-entry {
        color: grey;
        margin-bottom: 0;
      }
    `}</style>
  </Segment>
)

export default Footer
