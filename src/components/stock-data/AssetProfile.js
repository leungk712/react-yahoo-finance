import { useSelector } from "react-redux";
import { Card, Col, Row, Steps } from 'antd';

const AssetProfile = () => {
    const stock = useSelector(state => state.stocks.value.stock);

    if (Object.keys(stock).length) {
        return (
            
        )
    }
}

export default AssetProfile;