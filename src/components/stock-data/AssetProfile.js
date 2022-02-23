import { useSelector } from "react-redux";
import { Typography } from 'antd';

const { Paragraph, Title } = Typography;

const AssetProfile = () => {
    const stock = useSelector(state => state.stocks.value.stock);

    const { assetProfile } = stock;

    if (Object.keys(stock).length) {
        return (
            <div>
                <Title level={5}>
                    Sector: {assetProfile.sector}
                </Title>
                <Title level={5}>
                    Industry: {assetProfile.industry}
                </Title>

                <Paragraph>
                   {assetProfile.longBusinessSummary}
                </Paragraph>
                <Paragraph>
                    {assetProfile.city}, {assetProfile.state}, {assetProfile.country}
                </Paragraph>
            </div>
        )
    }
}

export default AssetProfile;