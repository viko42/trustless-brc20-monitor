export enum Tokens {
    DEV = "DEV",
    TM = "TM",
    GM = "GM",
    WETH = "WETH"
}
export const contracts = {
    [Tokens.DEV]: {
        addr: "0xdd2863416081D0C10E57AaB4B3C5197183be4B34",
        alerts: {
            allTransactions: true,
        }
    },
    [Tokens.TM]: {
        addr: "0x13f86cbF0476e1D867342adE6d60164F8E26c14F",
        alerts: {
            allTransactions: true,
        },
    },
    [Tokens.GM]: {
        addr: "0x2fe8d5A64afFc1d703aECa8a566f5e9FaeE0C003",
        alerts: {
            allTransactions: false,
        },
    },
    [Tokens.WETH]: {
        addr: "0x74B033e56434845E02c9bc4F0caC75438033b00D",
        alerts: {
            allTransactions: false,
        },
    },
};