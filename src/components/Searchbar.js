import { Button, Input } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchStockInformation } from "../store/slices/stocksSlice";
import { queryParamsString, yahooFinanceURL } from "../helpers/constants";

function Searchbar() {
    const [stockTicker, setStockTicker] = useState("");
    const dispatch = useDispatch();
    const stock = useSelector(state => state.stocks.value);

    const payload = {
        url: yahooFinanceURL.quoteSummary,
        stockTicker,
        queryParams: queryParamsString
    }

    const handleSetStockTicker = (evt) => {
        setStockTicker(evt.target.value);
    }

    const handleStockSearch = () => {
        dispatch(fetchStockInformation(payload));
    }

    return (
        <div style={{ "marginBottom": "30px"}}>
            <Input.Group compact>
                <Input
                    data-testid="stock-ticker-search-input"
                    size="large"
                    placeholder="Stock Ticker (eg. AAPL, MSFT, AMZN)"
                    style={{ width: 'calc(100% - 200px)', height: '50px' }}
                    onChange={handleSetStockTicker}
                />
                <Button
                    data-testid="stock-ticker-search-btn"
                    type="primary"
                    style={{height: '50px'}}
                    onClick={handleStockSearch}
                    loading={stock.loadingMessage === "retrieving stock info..."}
                >
                    Search
                </Button>
            </Input.Group>
        </div>
    )
}

export default Searchbar;