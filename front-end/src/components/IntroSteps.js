import React, { Component } from 'react';
import { Button, Segment, Container, Header, Divider, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function mapReimbursementStepsToComponent(step, index) {
    const { key, icon, description, actions, title, to, link, style } = step
    // var cardHeight = height == null ? '24rem':height
    // var cardWidth = width == null ? '15rem':width
    var buttons = []
    actions.forEach((action, key) => {
        buttons.push(<Button as='a' key={action+key} attached='bottom' color='teal' content={action}/>)
    })
    return (
            <Card
                className='stepCard'
                raised
                as={Link}
                to={to}
                fluid
                color='teal'
                extra={buttons}
                description={<Card.Description textAlign='center' content={description}/>}
                header={<Header className='stepHeader' textAlign='center'>{title}<Divider/></Header>}
            />
    );
}

const stepCards = [
    {
        key: 'download',
        title: '1. Scan the trash',
        style: {
            color: '#4183c5'
        },
        to: '',
        description: '...',
        actions: ['Hold your trash below our camera and sensors'],
        index: '0'
    },
    {
        key: 'fill',
        icon: 'address card outline',
        title: '2. Wait for our algorithms...',
        style: {
            color: '#4183c5'
        },
        to: '',
        description: '...',
        actions: ['View Classification'],
        index: '1'
    },
    {
        key: 'add',
        icon: 'sitemap',
        to: '#',
        title: '3. Tell us how we did!',
        description: '...',
        actions: ['Make Correction'],
        link: true,
        index: '2'
    }
]

class IntroSteps extends Component {
    constructor(props) {
        super(props);
        this.state = { isMobile: window.innerWidth < 800}
        this.resize = this.resize.bind(this)
    }
    componentDidMount() {
        window.addEventListener("resize", this.resize);
        this.resize();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize);
    }

    resize() {
        this.setState({isMobile: window.innerWidth < 800});
    }
    render() {
        const {isMobile} = this.state
        return (
            <div>
                <Divider/>
                <Header as='h2' content='How it works:' textAlign='center' />
                <Segment>
                    <Card.Group itemsPerRow={isMobile ? '1':'3'}>
                        {stepCards.map(mapReimbursementStepsToComponent)}
                    </Card.Group>
                </Segment>
            </div>
        )
    }
}

export default IntroSteps
