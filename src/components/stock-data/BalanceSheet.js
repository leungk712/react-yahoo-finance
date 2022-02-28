import { useSelector } from "react-redux";
import { Descriptions } from 'antd';
import parseISO from 'date-fns/parseISO'
import { format } from 'date-fns';    

const BalanceSheet = () => {
    const stock = useSelector(state => state.stocks.value.stock);

    const { balanceSheetHistory } = stock;

    const balanceSheet = balanceSheetHistory.balanceSheetStatements.map(balanceSheet => ({
        endDate: format(parseISO(balanceSheet.endDate.fmt), 'MM/dd/yyyy'),
        cash: balanceSheet.cash.fmt,
        netReceivables: balanceSheet.netReceivables.fmt,
        shortTermInvestments: balanceSheet.shortTermInvestments.fmt,
        inventory: balanceSheet.inventory.fmt,
        totalCurrentAssets: balanceSheet.totalCurrentAssets.fmt,
        totalAssets: balanceSheet.totalAssets.fmt,
        longTermDebt: balanceSheet.longTermDebt.fmt,
        totalCurrentLiabilities: balanceSheet.totalCurrentLiabilities.fmt,
        totalLiabilities: balanceSheet.totalLiab.fmt
    }));

    const displayBalanceSheetValue = (value, dollarSign) => {
        return balanceSheet.map(item => {
            return <Descriptions.Item>
                {dollarSign ? `$${item[value]}` : item[value]}
                </Descriptions.Item>
        });
    }

    const balanceSheetData = [
        {
            label: "Date",
            value: "endDate",
            dollarSign: false
        },
        {
            label: "Cash",
            value: "cash",
            dollarSign: true
        },
        {
            label: "Net Receivables",
            value: "netReceivables",
            dollarSign: true
        },
        {
            label: "Short Term Investmenets",
            value: "shortTermInvestments",
            dollarSign: true
        },
        {
            label: "Inventory",
            value: "inventory",
            dollarSign: true
        },
        {
            label: "Total Current Assets",
            value: "totalCurrentAssets",
            dollarSign: true
        },
        {
            label: "Total Assets",
            value: "totalAssets",
            dollarSign: true
        },
        {
            label: "Total Current Liabilities",
            value: "totalCurrentLiabilities",
            dollarSign: true
        },
        {
            label: "Total Liabilities",
            value: "totalLiabilities",
            dollarSign: true
        },
    ];

    return (
        <>
            <Descriptions bordered column={5}>
                {
                    balanceSheetData.map(balanceSheet => { 
                        return (
                            <>
                                <Descriptions.Item label={balanceSheet.label} />
                                { displayBalanceSheetValue(balanceSheet.value, balanceSheet.dollarSign) }
                            </>
                        )
                    })
                }
            </Descriptions> 
        </>
    )
}

export default BalanceSheet;