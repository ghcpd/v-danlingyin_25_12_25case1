// input.ts

/**
 * Account
 *
 * Represents a basic account record stored in memory.
 *
 * @remarks
 * - `id` uniquely identifies an account.
 * - `balance` is a numeric amount and may be negative.
 */
export interface Account {
  /** Unique account identifier. */
  id: string
  /** Current account balance (may be negative). */
  balance: number
}

/**
 * Calculate interest for a numeric balance using a simple rate multiplier.
 *
 * Description:
 * Computes the interest amount as `balance * rate` and returns the raw numeric
 * result. The function does not perform rounding or validation of the inputs.
 *
 * @param balance - Principal amount on which interest is calculated.
 * @param rate - Interest rate expressed as a decimal (for example, `0.05` = 5%).
 * @returns The interest amount computed as `balance * rate`.
 *
 * Edge cases / notes:
 * - If `balance` or `rate` is negative the returned interest will be negative.
 * - The function does not validate types or ranges and will return `NaN` if
 *   either argument is not a finite number.
 * - No exceptions are thrown by this function.
 *
 * @example
 * calculateInterest(1000, 0.05) // 50
 */
export function calculateInterest(balance: number, rate: number) {
  return balance * rate
}

export class AccountService {
  private accounts: Map<string, Account> = new Map()

  /**
   * Retrieve an account by id.
   *
   * @param id - The account identifier to look up.
   * @returns The matching `Account` if found; otherwise `null`.
   *
   * Edge cases:
   * - Returns `null` when no account exists for the given `id`.
   * - No validation is performed on `id` (e.g. empty string is accepted as a key).
   */
  getAccount(id: string): Account | null {
    return this.accounts.get(id) || null
  }

  /**
   * Save or replace an account in the in-memory store.
   *
   * @param account - The `Account` instance to save. `account.id` is used as the key.
   * @returns void
   *
   * Behavior / edge cases:
   * - If an account with the same `id` already exists it will be overwritten.
   * - No validation is performed (for example, duplicate IDs or negative
   *   balances are accepted).
   */
  saveAccount(account: Account): void {
    this.accounts.set(account.id, account)
  }
}