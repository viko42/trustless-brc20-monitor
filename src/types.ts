export type TrustLessTokenObj = {
  id: string;
  deleted_at: Date;
  created_at: Date;
  updated_at: Date;
  address: string;
  total_supply: string;
  owner: string;
  decimal: number;
  deployed_at_block: number;
  slug: string;
  symbol: string;
  name: string;
  thumbnail: string;
  description: string;
  social: {
    website: string;
    discord: string;
    twitter: string;
    telegram: string;
    medium: string;
    instagram: string;
  };
  index: number;
  network: string;
  priority: number;
  base_token_symbol: string;
};

export type TrustLessTradeHistoriesResponse = {
  error: string;
  status: boolean;
  data: {
    id: string;
    deleted_at: Date;
    created_at: Date;
    updated_at: Date;
    tx_hash: string;
    contract_address: string;
    timestamp: Date;
    sender: string;
    to: string;
    amount0_in: string;
    amount1_in: string;
    amount0_out: string;
    amount1_out: string;
    log_index: number;
    token: string;
    price: string;
    volume: string;
    pair: {
      id: string;
      deleted_at: Date;
      created_at: Date;
      updated_at: Date;
      tx_hash: string;
      contract_address: string;
      timestamp: Date;
      token0: string;
      token1: string;
      pair: string;
      arg3: number;
      log_index: number;
      token0_obj: TrustLessTokenObj;
      token1_obj: TrustLessTokenObj;
      reserve0: string;
      reserve1: string;
    };
    base_token_symbol: string;
  }[];
};


export type TrustLessFetchPriceResponse = {
    "error": string;
    "status": boolean;
    "data": {
        "address":string;
        "total_supply":string;
        "total_supply_number":string;
        "owner":string;
        "decimal":number;
        "deployed_at_block":0,
        "slug":string;
        "symbol":string;
        "name":string;
        "thumbnail":string;
        "description":string;
        "index":number;
        "volume":string;
        "total_volume":string;
        "btc_volume":number;
        "usd_volume":number;
        "btc_total_volume":number;
        "usd_total_volume":number;
        "market_cap":string;
        "usd_market_cap":number;
        "price":string;
        "btc_price":number;
        "usd_price":number;
        "percent":string;
        "percent_7day":string;
        "network":string;
        "priority":0,
        "base_token_symbol":string;
    }[];
}

export enum PeriodAlert {
  realTime = "realtime",
  oneHour =  "oneHour",
}