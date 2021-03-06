import { useSelector } from "react-redux";
import { Table, Typography } from 'antd';
import FundOwnershipPie from "./FundOwnershipPie";

const { Title } = Typography;

const FundOwnership = () => {
    const stock = useSelector(state => state.stocks.value.stock);

    const { fundOwnership } = stock;

    if (Object.keys(stock).length && Object.keys(fundOwnership).length) {
        const columns = [
            {
                key: 1,
                title: 'Organization',
                dataIndex: 'organization'
            },
            {
                key: 2,
                title: '% Held',
                dataIndex: 'pctHeld',
                render: (item) => item.fmt
            },
            {
                key: 3,
                title: 'Shares Held',
                dataIndex: 'position',
                render: (item) => item.fmt
            },
            {
                key: 4,
                title: 'Value',
                dataIndex: 'value',
                render: (item) => item.fmt
            }
        ];

        return (
            <div>
                <Title level={3}>
                    Fund Ownership
                </Title>
                <Table
                    columns={columns}
                    dataSource={fundOwnership.ownershipList}
                    pagination={false}
                    rowKey={(record) => record.title}
                />
                <FundOwnershipPie />
            </div>
        )
    }

    return null;
}

export default FundOwnership;