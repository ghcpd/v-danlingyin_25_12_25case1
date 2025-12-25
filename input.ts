// input.ts

/**
 * Represents a simple account record stored by AccountService.
 *
 * - `id` is the unique identifier for the account.
 * - `balance` is a numeric balance (units/currency are not enforced by this type).
 *
 * @example
 * const a: Account = { id: 'acct-1', balance: 1250.50 };
 */
export interface Account {
  /** Unique account identifier. */
  id: string
  /** Numeric account balance. May be negative. */
  balance: number
}

/**
 * Calculate the interest amount for a given balance and rate.
 *
 * Description:
 * Computes the interest as `balance * rate` and returns the raw interest amount.
 * This function performs no rounding, currency conversion or validation of inputs.
 *
 * @param balance - Principal or current account balance.
 * @param rate - Interest rate expressed as a decimal (e.g. `0.05` = 5%). May be negative.
 * @returns The interest amount (same units as `balance`).
 *
 * @remarks
 * - Edge cases: negative balances and/or negative rates are allowed and will be calculated as-is.
 * - No exceptions are thrown by this function.
 * - Callers are responsible for rounding and validating business rules (minimum/maximum rates, caps, etc.).
 *
 * @example
 * const interest = calculateInterest(1000, 0.03); // 30
 */
export function calculateInterest(balance: number, rate: number) {
  return balance * rate
}

/**
 * In-memory repository for Account records.
 *
 * Behavior:
 * - Stores accounts in a Map keyed by `Account.id`.
 * - Data is kept in-process only (no persistence) and will be lost on process exit.
 * - Methods do not perform schema validation beyond the TypeScript type contract.
 *
 * @example
 * const svc = new AccountService()
 * svc.saveAccount({ id: 'a', balance: 100 })
 * const acct = svc.getAccount('a')
 */
export class AccountService {
  // internal in-memory store (private — not part of the public API surface)
  private accounts: Map<string, Account> = new Map()

  /**
   * Retrieve an account by id.
   *
   * @param id - Account identifier to look up.
   * @returns The matching Account, or `null` if not found.
   *
   * @remarks
   * - This is an O(1) lookup backed by a Map.
   * - The method does not mutate the repository.
   * - Never throws for a missing id; callers should handle the `null` case.
   *
   * @example
   * const acct = svc.getAccount('acct-1')
   * if (acct) { /* use acct */ }
   */
  getAccount(id: string): Account | null {
    return this.accounts.get(id) || null
  }

  /**
   * Insert or update an account in the repository.
   *
   * @param account - Account object to store. The `id` property is used as the key.
   * @returns void
   *
   * @remarks
   * - If an account with the same `id` already exists it will be overwritten.
   * - No validation is performed (callers must ensure `account.id` is non-empty and `balance` is valid).
   * - This method performs an in-memory mutation and does not throw on success.
   *
   * @example
   * svc.saveAccount({ id: 'acct-1', balance: 200 })
   */
  saveAccount(account: Account): void {
    this.accounts.set(account.id, account)
  }
}