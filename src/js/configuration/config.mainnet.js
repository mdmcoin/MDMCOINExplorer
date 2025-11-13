const nodeUrl = 'https://nodes.mdmcoin.com';

export default {
    networkId: 'mainnet',
    displayName: 'Mainnet',
    apiBaseUrl: nodeUrl,
    useCustomRequestConfig: true,
    dataServicesBaseUrl: 'https://apidata2.mdmcoin.com/v0',
    spamListUrl: 'https://raw.githubusercontent.com/mdmcoin/mdmcommunity/refs/heads/main/scam_tokens.csv',
    nodes: [{url: nodeUrl, maintainer: 'Waves'}]
};
