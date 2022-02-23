import { useSelector } from "react-redux";
import { Card, Col, Divider, Row, Tag } from 'antd';
import './SummaryDetail';
import SummaryDetail from "./SummaryDetail";

const Price = () => {
    const stock = useSelector(state => state.stocks.value.stock);

    const { price } = stock;

    if (price && Object.keys(price).length) {
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
                                    <Tag
                                        color={price.regularMarketChange.raw < 0.00 ? "red" : "green"}
                                        style={{height: '50px', lineHeight: '50px', textAlign: 'center', marginTop: '10px'}}
                                    >
                                        <h1 style={{ fontSize: '40px', fontWeight: 'bold'}}>
                                            ${ price.regularMarketChange.fmt } ({ price.regularMarketChangePercent.fmt })
                                        </h1>
                                    </Tag>
                                </Col>
                            </Row>
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