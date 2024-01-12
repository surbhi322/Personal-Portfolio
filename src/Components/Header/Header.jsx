import React from 'react';
import { HeaderContent, H1, P, A, HeaderButtons, TypeWriterH1 } from './Styles';
import { Container } from '../../SharedStyles/SharedStyles';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <Container className='home'>
            <HeaderContent>
                <div>
                    <H1>Hi 👋 I'm Surbhi Lande</H1>
                    <TypeWriterH1>
                        <Typewriter
                            options={{
                                strings: [
                                    'A Software Developer',
                                    'A Problem Solver',
                                    'A Full Stack Developer',
                                ],
                                pauseFor: 1500,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </TypeWriterH1>
                    <P>
                    Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.
                    </P>
                    <HeaderButtons>
                        <A
                            target='_blank'
                            rel='noreferrer'
                            href='https://drive.google.com/file/d/1eLYyFJFGUiC2sAGAdAJZAv4S_jy7L60N/view?usp=sharing'
                        >
                            Resume
                        </A>
                        &nbsp;&nbsp;&nbsp;
                        <Link
                            activeClass='active'
                            to='projects'
                            spy={true}
                            smooth={true}
                            duration={300}
                        >
                            <A>Projects</A>
                        </Link>
                    </HeaderButtons>
                </div>
            </HeaderContent>
        </Container>
    );
};

export default Banner;
