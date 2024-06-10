const tokens: Record<string, string> = {
    'domain1.com': 'token1',
    'domain2.com': 'token2'
  };
  
  export const isValidToken = (token: string): boolean => {
    return Object.values(tokens).includes(token);
  };
  
  export const getTokenForDomain = (domain: string): string | undefined => {
    return tokens[domain];
  };
  