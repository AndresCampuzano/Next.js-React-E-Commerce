import React from 'react'
import { Image, Header } from 'semantic-ui-react'
import Layout from '@components/Layout/Layout'

const avoFacts = [
  {
    title: 'There are more seniors than kids',
    content:
      'A pretty sad fact about Japan because it’s actually a big problem and there’s a lack of childbirth. The people don’t have time or money to have a family in today’s Japanese Society. And this has led to the situation where there are more seniors than children.',
  },
  {
    title: 'Has one of the world’s lowest crime rates.',
    content:
      'Japan is one of the safest countries in the world, so if you worry about crime, you should probably look into moving here. The most common crimes here includes stealing a bicycle or umbrellas left outside the convenience store.',
  },
  {
    title: 'Most vending machines in the world.',
    content:
      'One of the things you will notice when traveling to Japan is the huge amount of vending machines. They’re literally everywhere, around every corner, and it’s almost like they’re part of the modern Japanese culture, but also a good and convenient way for the companies to sell beverages and make money without paying staff.',
  },
  {
    title: 'Japan consists of 6852 islands.',
    content:
      'You might know that Japan is an island nation, but did you know that there are more than 6800 islands in Japan? The four biggest islands are Honshu, Hokkaido, Kyushu, and Shikoku, which together makes up about 97% of the total land area. And don’t forget about the paradise islands of Okinawa with its beautiful beaches and tropical climate.',
  },
  {
    title: 'To clean is a part of the education in many schools',
    content:
      'Law and Order is a big thing in Japan (I’m not talking about the TV-series), and it’s important to learn this already as a child. That’s why a lot of Japanese schools are making their students clean toilets, classrooms and the school area. This also saves money because the schools won’t need as many cleaners.',
  },
]

const AboutPage = () => {
  return (
    <Layout>
      <section>
        <Header as="h1" textAlign="center">
          5 Surprising Facts About Japan
        </Header>
        <figure>
          <Image src="/images/aboutImage.webp" alt="Tokyo photo" />
          <figcaption>
            A yakitori chef works at his grill in a back street of Shinbashi
            district in Tokyo. Photo: Lukasz Palka, Originally from{' '}
            <a
              target="_blank"
              href="https://www.scmp.com/lifestyle/travel-leisure/article/2178339/tips-tokyo-street-photographer-insiders-guide-people"
            >
              South China Morning Post
            </a>
          </figcaption>
        </figure>
        <ol>
          {avoFacts.map(({ title, content }) => (
            <li key={title}>
              <h3 className="ui header">{title}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ol>
      </section>

      <style jsx>
        {`
          figure,
          ol {
            padding: 0;
            margin: 0;
          }

          figure {
            margin: 2rem auto 3rem;
            text-align: center;
          }
          figcaption {
            margin-top: 0.5rem;
            font-site: 0.7rem;
            color: grey;
          }

          ol {
            list-style: none;

            // Look ma! Responsive grid with no Media queries :)
            // https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            grid-gap: 4.5rem 3rem;

            // Look ma! A CSS Counter :)
            // https://moderncss.dev/totally-custom-list-styles/
            counter-reset: orderedlist;
          }
          li::before {
            counter-increment: orderedlist;
            content: counter(orderedlist);

            // Boring stuff
            position: absolute;
            top: -43px;
            left: -5px;
            color: #cecece;
            font-size: 5rem;
            font-weight: bold;
          }

          li {
            position: relative;
          }
          h3:first-child {
            // why the first-child selector you may ask...
            // to gain specificity and thus avoid using '!important' :)
            padding-left: 40px;
            margin-bottom: 2rem;
          }
        `}
      </style>
    </Layout>
  )
}

export default AboutPage
