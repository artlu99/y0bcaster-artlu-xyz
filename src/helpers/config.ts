export const config = {
  rpcUrl: import.meta.env['VITE_OPTIMISM_RPC_URL'] ?? '',
  domain: import.meta.env['VITE_DOMAIN'],
  siweUri: import.meta.env['VITE_SIWE_URI'],
}
