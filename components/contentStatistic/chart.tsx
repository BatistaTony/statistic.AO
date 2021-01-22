import { LineChart } from 'react-chartkick';
import 'chart.js';

const ChartKid = () => {
  const data = { '2016': 16, '2017': 50, '2018': 169, '2019': 203, '2020': 416, '2021': 320 };

  return (
    <LineChart
      data={data}
      width={'100%'}
      height={'80%'}
      legend={false}
      min={0}
      suffix=" Crianças fora do ensino"
    />
  );
};

export default ChartKid;
