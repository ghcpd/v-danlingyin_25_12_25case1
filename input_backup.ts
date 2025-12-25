// input.ts (backup)

export interface Account {
  id: string
  balance: number
}

export function calculateInterest(balance: number, rate: number) {
  return balance * rate
}

export class AccountService {
  private accounts: Map<string, Account> = new Map()

  getAccount(id: string): Account | null {
    return this.accounts.get(id) || null
  }

  saveAccount(account: Account): void {
    this.accounts.set(account.id, account)
  }
}
