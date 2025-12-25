// input.ts

/**
 * Represents a user's account.
 *
 * @remarks
 * This is a plain data interface; no runtime validation is performed.
 */
export interface Account {
  /** Unique account identifier. */
  id: string
  /** Numeric account balance. */
  balance: number
}

/**
 * Calculates the interest amount for a given balance and rate.
 *
 * @param balance - Principal amount used to compute interest.
 * @param rate - Interest rate as a multiplier (e.g., 0.05 for 5%).
 * @returns The computed interest (balance * rate).
 *
 * @remarks
 * - The function does not perform input validation; callers should ensure both arguments are finite numbers.
 * - Negative balances or rates are accepted and will yield a result accordingly.
 */
export function calculateInterest(balance: number, rate: number) {
  return balance * rate
} 

/**
 * Service for managing `Account` objects in an in-memory store.
 *
 * @remarks
 * - Uses an internal `Map` keyed by account `id`.
 */
export class AccountService {
  private accounts: Map<string, Account> = new Map()

  /**
   * Retrieves an account by its identifier.
   *
   * @param id - The account identifier to look up.
   * @returns The `Account` if found, otherwise `null`.
   *
   * @remarks
   * Performs an in-memory lookup; no I/O is performed.
   */
  getAccount(id: string): Account | null {
    return this.accounts.get(id) || null
  }

  /**
   * Saves or updates an account in the in-memory store.
   *
   * @param account - The account to save. The `id` field is used as the key.
   *
   * @remarks
   * If an account with the same `id` already exists, it will be overwritten.
   */
  saveAccount(account: Account): void {
    this.accounts.set(account.id, account)
  }
}