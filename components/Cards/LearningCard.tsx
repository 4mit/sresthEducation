import Anchors from '../Anchors/Anchors';
import { Button, Card, Grid, Row, Switch, Text } from '@nextui-org/react';
const list = [
  {
    title: 'Saurabh Chubey',
    img: '/images/fruit-1.jpeg',
    price: 'Free',
  },
  {
    title: 'Faculty - 2 ',
    img: '/images/fruit-1.jpeg',
    price: '$5.50',
  },
  {
    title: 'Faculty - 3',
    img: '/images/fruit-2.jpeg',
    price: '$3.00',
  },
  {
    title: 'Faculty - 4',
    img: '/images/fruit-3.jpeg',
    price: '$10.00',
  },
];
export default function LearningCard({ article }) {
  return (
    <div className="bg-slate-100 mt-3 p-2 sm:p-12">
      <div className="p-3 flex items-center justify-between">
        <h3>Our Faculty</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {list.map((item, index) => (
          <Grid key={index}>
            <Card isPressable variant="flat">
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src="/choube.png"
                  objectFit="contain"
                  width="100%"
                  height={140}
                  alt={item.title}
                />
              </Card.Body>
              <Card.Footer css={{ display: 'flex', flexDirection: 'column' }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text b>{item.title}</Text>
                  <Text
                    css={{
                      color: '$accents7',
                      fontWeight: '$semibold',
                      fontSize: '$sm',
                    }}
                  >
                    (MSC Maths)
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </div>
    </div>
  );
}
