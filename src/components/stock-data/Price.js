import { useSelector } from "react-redux";

import { Card, Col, Row, Tag } from 'antd';


const Price = () => {
    const stock = useSelector(state => state.stocks.value.stock);

    const { price } = stock;

    if (price && Object.keys(price).length) {
        return (
            <div>
                <Card
                    title={`${price.shortName} (${price.symbol})`}
                    bordered={false}
                    style={{ width: '60%' }}
                    headStyle={{fontSize: '2rem'}}
                >
                    <Row>
                        <h3>{ price.quoteSourceName }</h3>
                    </Row>
                    <Row>
                        <Col span={10}>
                            <h1
                            style={{
                                    fontSize: '45px',
                                    fontWeight: 'bold'
                                }}
                            >
                                ${ price.regularMarketPrice.fmt }
                            </h1>
                        </Col>
                        <Col span={10}>
                            <Tag color="green" style={{height: '50px', lineHeight: '50px', textAlign: 'center', marginTop: '10px'}}>
                                <h1 style={{ fontSize: '40px', fontWeight: 'bold'}}>
                                    ${ price.regularMarketChange.fmt } ({ price.regularMarketChangePercent.fmt })
                                </h1>
                            </Tag>
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }

    return null;
}

export default Price;