import { useSelector } from "react-redux";
import { Pie } from '@ant-design/plots';

const FundOwnershipPie = () => {
    const stock = useSelector(state => state.stocks.value.stock);

    const { fundOwnership } = stock;

    const data = fundOwnership.ownershipList.map(fund => ({
        type: fund.organization,
        value: fund.pctHeld.raw.toFixed(4) * 100
    }));

    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
          type: 'spider',
          labelHeight: 28,
          content: '{name}'
        },
        interactions: [
          {
            type: 'element-active',
          },
        ],
    };

    return (
        <Pie {...config} />
    )
}

export default FundOwnershipPie;