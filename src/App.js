import { ThemeProvider, createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Card from "./components/Card";
import CardAvatar from "./components/CardAvatar";
import Navbar from "./components/Navbar";
import theme from './styleds/Theme'
import { MenuContentStyle } from './styleds/ButtonStyled'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
  }

  body {
    background-color: hsl(218, 28%, 13%);
    color: white;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    margin: 0px auto;
  }

`

const WarpCardAvatar = styled.div`
  margin-top: 5rem;
  /* display: grid; */
  @media screen and (max-width: 375px){
    display: grid;
    grid-template-columns: repeat(1,1fr);
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-evenly;
  }
`

const InputEmail = styled.input`
  outline: none;
  border-radius: 50px;
  background-color: white;
  border: none;
  padding: 0.3rem 1rem;
  width:65%;
  margin-right: 1rem;
`

const BoxOverlap = styled.div`
  position: relative;
  margin-top: 10rem;
  margin-bottom: -100px;
  text-align: center;
  width:600px;
  margin-left:  auto;
  margin-right:  auto;
  padding: 3rem;
  border-radius: 5px;
  background-color: ${theme.DarkBlueEmailMain};
  box-shadow: 0 5px 10px 0 black;

  ${InputEmail} {
    margin-top: 1rem;
    width: 60%;
  }

  ${MenuContentStyle} {
      margin-top: 1rem;
      padding:0.5rem 1rem;
    }

  @media screen and (max-width: 375px) {
    width:90%;
    margin-bottom: -150px;
    h1{
      font-size: 1.3rem;
      margin-bottom:1rem;
    }

    p {
      font-size: 1rem;
    } 
    
    ${InputEmail} {
      width: 100%;
    }

    ${MenuContentStyle} {
      margin-top: 1rem;
      width: 100%;
      padding:0.5rem 0;
    }
  }
`

const Container = styled.div`
  margin: 0px auto;
  text-align: center;
  padding: 0 1rem;
  @media screen and (max-width: 375px){
    max-width: 375px;
  }
  @media screen  and (min-width: 1440px){
    max-width: 1440px;
  }
`

const WarpCard = styled.div`
  display: grid;
  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(1,1fr); 
    p {
      margin-top: 2rem;
    }
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(2,1fr); 
  }
`

const Link = styled.a`
  color: ${theme.Cyan};
  text-decoration: none;
  position: relative;
  &:after {
    width: 100%;
    content: " ";
    display: block;
    position: absolute;
    bottom: -30%;
    border-bottom: 1px solid ${theme.Cyan};
  }
`

const Footer = styled.div`
  background-color: ${theme.Footer} ;
  padding: 7rem 0;

  @media screen and (max-width: 375px) {
    padding: 13rem 0 7rem 0; 
  }
`

const WarpBoxContent = styled.div`
  display: flex;
  margin-top: 5rem;
  img {
    width: 50%;
    margin-right: 3rem;
  }
  text-align: start;

  h1{
    font-size: 2rem;
  }

  @media screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    img {
      width:100%
    }
    h1 {
      font-size: 1.2rem;
      margin-top: 1rem;
    }
  }
`

const FooterGrid = styled.div`
  display: grid;
  font-size: 1rem;
  @media screen and (min-width:375px) {
    grid-template-columns: repeat(1,1fr);

    p {
      margin-top:1rem;
    }
    
    div {
      padding: 1rem 0;
    }  

    li {
      padding:0.3rem;
    }
  }
  @media screen and (min-width:1440px) {
    grid-template-columns: repeat(5,1fr);
    div {
      margin: 0rem auto;
    }  

  }
`

const paragraph = [
  {
    img: 'https://static.remove.bg/remove-bg-web/588fbfdd2324490a4329d4ad22d1bd436e1d384a/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg',
    heading: 'Access your files, anywhere',
    body: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'
  },
  {
    img: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
    heading: 'Security you can trust',
    body: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg',
    heading: 'Real-time collaboration',
    body: 'Securely share files and folders with friends, family and colleagues for live collaboration. NO email attachments requred.'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg',
    heading: 'Store any type of file',
    body: "Whether you're sharing holidays shotos or work documents, Fylo has you covered allowing for all file tyoes to be securely and shared."
  },
]


const paragraphAvatar = [
  {
    comment: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    avatar: 'https://www.fakeavatar.com/wp-content/uploads/2018/02/FinEyesOpenShut-480x480.jpg',
    name: 'Satish Patel',
    job: 'Founder & CEO, Huddle',
  },
  {
    comment: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ETm1HSUSt367HbatCJ57a1M5iKU29WbHF3Vqm440exaYmVbxfrEfRhd-oXl25ZhOUxc&usqp=CAU',
    name: 'Bruce Mckenzie',
    job: 'Founder & CEO, Huddle',
  },
  {
    comment: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    avatar: 'https://www.fakeavatar.com/wp-content/uploads/2022/04/K.jpg',
    name: 'Iva Boyd',
    job: 'Founder & CEO, Huddle',
  }
]

const aboutUs = [
  'about us',
  'jobs',
  'press',
  'blog',
]

const contactUs = [
  'contact us',
  'terms',
  'privacy',
]

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Navbar />
        <div>
          <img src="https://laz-img-sg.alicdn.com/p/6a78913c131cfcd539813bd4b7c42459.png" alt="img-test" width="100%" />
          <h1 style={{ margin: '1rem 0', fontSize: '1.5rem' }}>
            All your files in one secure <br /> location, accessible anywhere.
          </h1>
          <p style={{
            fontWeight: '400',
            fontSize: '1.09rem',
            width: '350px',
            margin: '0 auto'
          }}>
            Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.
          </p>
          <MenuContentStyle>get started</MenuContentStyle>
        </div>
        <WarpCard>
          {
            paragraph.map((item, index) => <Card {...item} key={index} />)
          }
        </WarpCard>
        <WarpBoxContent>
          <img src="https://laz-img-sg.alicdn.com/p/6a78913c131cfcd539813bd4b7c42459.png" alt="img-test"/>
          <div>
            <h1>Stay productive, wherever you are</h1>
            <p style={{ marginTop: '1rem', textAlign: 'start' }}>
              Never let location be an issue when when accessing your files. Fylo has you covered for all of your file storage needs.
              <br />
              <br />
              <span>
                Securely share files and folders with friends,<br />
                family and colleagues for live collaboration. No <br />
                email attachments required.
              </span>
              <br />
              <br />
              <Link href="#">See how Fylo works</Link>
            </p>
          </div>
        </WarpBoxContent>
        <WarpCardAvatar>
          {
            paragraphAvatar.map((item, index) => <CardAvatar {...item} key={index} />)
          }
        </WarpCardAvatar>
      </Container>
      <BoxOverlap>
        <h1>Get early access today</h1>
        <p>It only takes minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
        <div>
          <InputEmail type='text' />
          <MenuContentStyle width="50px"> get started for free </MenuContentStyle>
        </div>
      </BoxOverlap>
      <Footer>
        <Container style={{ textAlign: "start" }}>
          <h1>Fylo</h1>
          <FooterGrid>
            <p style={{ width: '300px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, officiis quas quia illo architecto voluptatibus. Dignissimos minima.</p>
            <div>
              <p>+1-543-123-4567</p>
              <p>example@fylo.com</p>
            </div>
            <div>
              <ul style={{ listStyle: 'none' }}>
                {
                  aboutUs.map((item, index) => <li key={index}>{item}</li>)
                }
              </ul>
            </div>
            <div>
              <ul style={{ listStyle: 'none' }}>
                {
                  contactUs.map((item, index) => <li key={index}>{item}</li>)
                }
              </ul>
            </div>
          </FooterGrid>
        </Container>
      </Footer>
    </ThemeProvider>
  );
}

export default App;
