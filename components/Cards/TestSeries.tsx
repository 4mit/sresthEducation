import Anchors from '../Anchors/Anchors';
import styles from './ArticleCard.module.css';
import { Button, Card, Grid, Row, Switch, Text } from '@nextui-org/react';
import { GridIcon, ListIcon } from '../icons/grid';
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
const list = [
  {
    title: 'Data structure',
    img: '/images/fruit-1.jpeg',
    price: '$5.50',
  },
  {
    title: 'Algorithm',
    img: '/images/fruit-2.jpeg',
    price: '$3.00',
  },
  {
    title: 'SSC',
    img: '/images/fruit-3.jpeg',
    price: '$10.00',
  },
  {
    title: 'PSC',
    img: '/images/fruit-4.jpeg',
    price: '$5.30',
  },
  {
    title: '10th standarad',
    img: '/images/fruit-5.jpeg',
    price: '$15.70',
  },
  {
    title: '12 standard',
    img: '/images/fruit-6.jpeg',
    price: '$8.00',
  },
  {
    title: 'Banks',
    img: '/images/fruit-7.jpeg',
    price: '$7.50',
  },
  {
    title: 'General knowledge',
    img: '/images/fruit-8.jpeg',
    price: '$12.20',
  },
];
export default function TestSeries({ article }) {
  return (
    <div className="bg-slate-100  mt-3 p-2 sm:p-12">
      <div className="p-3 flex items-center justify-between">
        <h3>Fee Structure</h3>
      </div>
      <div className="p-3 ">
        <p>Please contact us to get to know more about fee structure </p>
        <p>We provides our courses at bare minimum Fee</p>
        <p>Please Contact at : 8871596385</p>
      </div>
    </div>
  );
}
