import { useSelector } from "react-redux";
import { Card, Col, Divider, Row } from 'antd';
import AssetProfile from "./AssetProfile";
import FundOwnership from "./FundOwnership";
import SummaryDetail from "./SummaryDetail";

const Price = () => {
    const stock = useSelector(state => state.stocks.value.stock);

    const { price } = stock;

    if (Object.keys(stock).length) {
        return (
            <div>
                <Row>
                    <Col span={14}>
                        <Card
                            title={`${price.shortName} (${price.symbol})`}
                            bordered={false}
                            style={{ width: '100%' }}
                            headStyle={{fontSize: '2rem'}}
                        >
                            <Row>
                                <h3>{ price.quoteSourceName }</h3>
                            </Row>
                            <Row>
                                <Col span={8}>
                                    <h1
                                        style={{
                                            fontSize: '45px',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        ${price.regularMarketPrice.fmt}
                                    </h1>
                                </Col>
                                <Col span={10}>
                                    <h1
                                        style={{
                                            fontSize: '40px',
                                            fontWeight: 'bold',
                                            color: price.regularMarketChange.raw < 0.00 ? "#C0392B" : "#27AE60"
                                        }}
                                    >
                                        ${ price.regularMarketChange.fmt } ({ price.regularMarketChangePercent.fmt })
                                    </h1>
                                </Col>
                            </Row>

                            <Divider />

                            <AssetProfile />

                            <Divider />

                            <FundOwnership />

                            <Divider />
                        </Card>
                    </Col>
                    
                    <Col span={8}>
                        <SummaryDetail />
                    </Col>
                </Row>
            </div>
        )
    }

    return null;
}

export default Price;