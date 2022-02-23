import { useSelector } from "react-redux";
import { Card, Col, Row, Steps } from 'antd';

const { Step } = Steps;

const SummaryDetail = () => {
    const stock = useSelector(state => state.stocks.value.stock);

    const { summaryDetail } = stock;

    const gridStyle = {
        width: '100%',
        textAlign: 'center',
    };

    if (Object.keys(stock).length) {
        const dividendInfo = {
            dividendRate: summaryDetail.dividendRate && summaryDetail.dividendRate.fmt ? `$${summaryDetail.dividendRate.fmt}` : `-`,
            dividendYield: summaryDetail.dividendYield && summaryDetail.dividendYield.fmt ? `(${summaryDetail.dividendYield.fmt})` : ``
        }

        return (
            <Card>
                <Card.Grid hoverable={false} style={gridStyle}>
                    <Row>
                        <Col span={8}>
                            <h1>Previous Close:</h1>
                        </Col>
                        <Col span={16}>
                            {`$${summaryDetail.regularMarketPreviousClose.fmt}`}
                        </Col>
                    </Row>
                </Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                    <Row>
                        <Col span={8}>
                            <h1>Day Range:</h1> 
                        </Col>
                        <Col span={16}>
                            <Steps current={2} progressDot size="small">
                                <Step
                                    description={`$${summaryDetail.regularMarketDayLow.fmt}`}
                                />
                                <Step
                                    description={`$${summaryDetail.regularMarketDayHigh.fmt}`}
                                />
                            </Steps>
                        </Col>
                    </Row>
                </Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                    <Row>
                        <Col span={8}>
                            <h1>52 Week Range:</h1> 
                        </Col>
                        <Col span={16}>
                            <Steps current={2} progressDot size="small">
                                <Step
                                    description={`$${summaryDetail.fiftyTwoWeekLow.fmt}`}
                                />
                                <Step
                                    description={`$${summaryDetail.fiftyTwoWeekHigh.fmt}`}
                                />
                            </Steps>
                        </Col>
                    </Row>
                </Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                    <Row>
                        <Col span={8}>
                            <h1>Volume:</h1>
                        </Col>
                        <Col span={16}>
                            {summaryDetail.regularMarketVolume.fmt}
                        </Col>
                    </Row>
                </Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                    <Row>
                        <Col span={8}>
                            <h1>Market Cap:</h1>
                        </Col>
                        <Col span={16}>
                            {summaryDetail.marketCap.fmt} USD
                        </Col>
                    </Row>
                </Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                    <Row>
                        <Col span={8}>
                            <h1>P/E Ratio (TTM):</h1>
                        </Col>
                        <Col span={16}>
                            {summaryDetail.trailingPE ? summaryDetail.trailingPE.fmt : "-"}
                        </Col>
                    </Row>
                </Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                    <Row>
                        <Col span={8}>
                            <h1>Dividend:</h1>
                        </Col>
                        <Col span={16}>
                            {dividendInfo.dividendRate} {dividendInfo.dividendYield}
                        </Col>
                    </Row>
                </Card.Grid>
            </Card>
        )
    }

    return null;
}

export default SummaryDetail;