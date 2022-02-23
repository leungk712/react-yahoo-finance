import { useSelector } from "react-redux";
import { Column } from '@ant-design/plots';
import { Typography } from 'antd';
const { Title } = Typography;

const Recommendations = () => {
    const stock = useSelector(state => state.stocks.value.stock);

    const { recommendationTrend } = stock;

    const recommendation = recommendationTrend.trend[0];

    const data = [
        {
          type: 'Strong Buy',
          value: recommendation.strongBuy
        },
        {
          type: 'Buy',
          value: recommendation.buy
        },
        {
          type: 'Hold',
          value: recommendation.hold
        },
        {
          type: 'Sell',
          value: recommendation.sell
        },
        {
          type: 'Strong Sell',
          value: recommendation.strongSell
        }
    ];
    const config = {
        data,
        xField: 'type',
        yField: 'value',
        label: {
          position: 'middle',
          style: {
            fill: '#333',
            opacity: 0.6,
          },
        },
        colorField: 'type',
        color: ({ type }) => {
            if (type === "Strong Buy") return "#27AE60";
            if (type === "Buy") return "#52BE80";
            if (type === "Hold") return "#F7DC6F";
            if (type === "Sell") return "#F5B041";
            if (type === "Strong Sell") return "#E74C3C";

            return "blue";
        },
        tooltip: false,
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        }
    };
    return (
        <div style={{ "padding": "20px" }}>
            <Title level={3}>Analyst Recommendations</Title>
            <Column {...config} />
        </div>
    );
}

export default Recommendations;