import React from 'react';
import { FaGithub, FaLink, FaNodeJs, FaReact } from 'react-icons/fa';
import {
    ProjectDiv,
    Row,
    ServiceBox,
    ServiceBoxHeader,
    ServiceBoxP,
    A,
    BoxDiv,
} from './Styles';
import { Container, Common, H1 } from '../../SharedStyles/SharedStyles';
import { AiFillGithub } from 'react-icons/ai';
import { FaHtml5, FaJs, FaCss3 } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
// import { SiExpress, SiMaterialui } from 'react-icons/si/SiExpress';

import { v4 as uuidv4 } from 'uuid';

const Projects = () => {
    const projects = [
   
        {
            id: 1,
            project_name: 'Wordle',
            image: 'images/wordle.webp',
            project_desc:
                'Wordle is a web-based word game created and developed by software engineer Surbhi Lande. Players have six attempts to guess a five-letter word, with feedback given for each guess in the form of colored tiles indicating when letters match or occupy the correct position.',
            deploy_link: 'https://reactjs-wordle.vercel.app',
            repo_link: 'https://reactjs-wordle.vercel.app',
            tech_stack: [
                <FaHtml5 />,
                <FaCss3 />,
                <FaReact/>,
            ],
        },
        {
            id: 2,
            project_name: 'Notes App',
            image: 'images/notes app image.png',
            project_desc:
                'Notes is a good helper to manage your schedules and notes. It gives you a quick and simple notepad editing experience when you write notes, memo, email, message, shopping list and to do list. It makes to take a note easier than any other notepad and memo apps.',
            deploy_link: 'https://react-notes-app-seven.vercel.app/',
            repo_link: 'https://github.com/surbhi322/React-Notes-App',
            tech_stack: [
                <FaHtml5 />,
                <FaCss3 />,
                <FaJs />,
                <FaReact/>
            ],
        },
        {
            id: 3,
            project_name: 'Mini YouTube',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvIioeQvJa-B4kJDQPEdqhsghPnIfzANwlHA&usqp=CAU',
            project_desc:
                "A simple YouTube clone completed in two days , where user can find all the videos similar as YouTube app . where user can search for the video & download the videos.",
            deploy_link: 'https://mini-youtube-murex.vercel.app/',
            repo_link: 'https://github.com/surbhi322/mini-youtube',
            tech_stack: [
                <FaHtml5 />,
                <FaCss3 />,
                <FaJs />,
               
            ],
        },
        {
            id: 4,
            project_name: 'Movie Booking App',
            image: 'images/movie.jpg',
            project_desc:
                'EasyBooker is a simple app that helps you quickly book movie tickets. No fuss, just choose your movie, pick your seat.',
            deploy_link: 'https://movie-ticket-booking-system.vercel.app/',
            repo_link: 'https://github.com/surbhi322/movie-ticket-booking',
            tech_stack: [
                <FaJs />,
                <FaHtml5 />,
                <FaCss3 />,
            ]
        },
        {
            id: 5,
            project_name: 'Frazo App Clone',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrnbe93PeMIRm29TDYre-Hp1fSyz4V7v6DStWYOuAuSIoRKQnDedJaHVAFTXZpeF8rAFQ&usqp=CAU',
            project_desc:
                'Frazo is a e-commerce website,offering a wide range of fresh vegetables.',
            deploy_link:"https://surbhi-frazo-clone.vercel.app",
            repo_link: 'https://github.com/surbhi322/Frazo-Clone',
            tech_stack: [
                <FaJs />,
                <FaHtml5 />,
                <FaCss3 />,
                <FaReact/>,
            ]
        }
    ];

    return (
        <Container className='projects'>
            <ProjectDiv>
                <Common>
                    <H1>Projects</H1>
                </Common>
                <Row>
                    {projects.map((item) => (
                        <BoxDiv key={uuidv4()}>
                            <ServiceBox>
                                <img
                                    src={item.image}
                                    alt='icon'
                                    style={{ width: '100%', height:'200px',padding:'10px' }}
                                />
                                <div style={{ margin: '25px' }}>
                                    <ServiceBoxHeader
                                        style={{ textAlign: 'center' }}
                                    >
                                        {item.project_name}
                                    </ServiceBoxHeader>
                                    <ServiceBoxP>
                                        {item.project_desc}
                                    </ServiceBoxP>
                                    {/* <a href="">Read more</a> */}
                                    <div
                                        style={{
                                            margin: '20px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {item.tech_stack.map((item) => (
                                            <div
                                                key={uuidv4()}
                                                className='iconsTechStack'
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                    <A
                                        href={item.repo_link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <FaGithub /> Code
                                    </A>
                                    <A
                                        href={item.deploy_link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <FaLink /> Demo
                                    </A>
                                </div>
                            </ServiceBox>
                        </BoxDiv>
                    ))}
                </Row>
            </ProjectDiv>
        </Container>
    );
};

export default Projects;
