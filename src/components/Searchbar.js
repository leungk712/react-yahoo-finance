import { Button, Input } from 'antd';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { fetchStockInformation } from "../store/slices/stocksSlice";
import { queryParamsString, yahooFinanceURL } from "../helpers/constants";

function Searchbar() {
    const [stockTicker, setStockTicker] = useState("");
    const dispatch = useDispatch();

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
        <>
            <Input
                data-testid="stock-ticker-search-input"
                size="large"
                placeholder="Stock Ticker (eg. AAPL, MSFT, AMZN)"
                onChange={handleSetStockTicker}
            />
            <Button
                data-testid="stock-ticker-search-btn"
                type="primary"
                onClick={handleStockSearch}
            >
                Search
            </Button>
        </>

    )
}

export default Searchbar;