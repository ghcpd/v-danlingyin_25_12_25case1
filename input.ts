// input.ts

/**
 * Represents an account with an ID and balance.
 */
export interface Account {
  id: string
  balance: number
}

/**
 * Calculates the interest based on balance and rate.
 * @param {number} balance - The account balance.
 * @param {number} rate - The interest rate.
 * @returns {number} The calculated interest.
 */
export function calculateInterest(balance: number, rate: number) {
  return balance * rate
}

/**
 * Service for managing accounts.
 */
export class AccountService {
  private accounts: Map<string, Account> = new Map()

  /**
   * Retrieves an account by ID.
   * @param {string} id - The account ID.
   * @returns {Account | null} The account or null if not found.
   */
  getAccount(id: string): Account | null {
    return this.accounts.get(id) || null
  }

  /**
   * Saves an account.
   * @param {Account} account - The account to save.
   */
  saveAccount(account: Account): void {
    this.accounts.set(account.id, account)
  }
}