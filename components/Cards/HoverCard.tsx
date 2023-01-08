import { Card, Col, Row, Button, Text } from '@nextui-org/react';
import { Avatar } from '@nextui-org/react';
import Anchors from '../Anchors/Anchors';
import { Badge } from 'primereact/badge';
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const HoverCard = ({ article }:any) => {
  return (
    <Card css={{ w: '100%', h: '300px' }} variant="flat">
      <Card.Header
        css={{ position: 'absolute', zIndex: 1, backgroundColor: '#00000075' }}
      >
        <Col>               
          <Text h3 color="white">
            {article.title}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src="/assets/imgs/pomodoro-technique.jpeg"
          width="100%"
          height="100%"
          objectFit="fill"
          alt="Card example background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: 'absolute',
          bgBlur: '#ffffff66',
          borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              size="md"
            />
          </Col>
          <Col>
            <Row justify="flex-end">
              <Anchors
                type="text-swapping"
                text="Read more"
                href="#"
              />
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
export default HoverCard;
