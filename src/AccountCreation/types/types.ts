export interface AccountCreation {
  cosigner: boolean
  cosignerOf?: string
  import: boolean
  importHardware: boolean
  name: string
  password: string
  repeatedPassword: string
  requiresPassword: boolean
  secretKey?: string
  testnet: boolean
  walletID?: string
}

export interface AccountCreationErrors {
  name?: string
  password?: string
  secretKey?: string
  walletID?: string
}
