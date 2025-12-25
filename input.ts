// input.ts

/**
 * Represents a bank account with unique identifier and balance.
 * @interface Account
 * @property {string} id - Unique identifier for the account
 * @property {number} balance - The current account balance in currency units
 */
export interface Account {
  id: string
  balance: number
}

/**
 * Calculates interest on a given balance based on the provided rate.
 * 
 * @param {number} balance - The principal balance on which to calculate interest
 * @param {number} rate - The interest rate as a decimal (e.g., 0.05 for 5%)
 * @returns {number} The calculated interest amount
 * 
 * @example
 * const interest = calculateInterest(1000, 0.05); // Returns 50
 */
export function calculateInterest(balance: number, rate: number) {
  return balance * rate
}

/**
 * Service for managing bank accounts.
 * Provides methods to retrieve and persist account information.
 * 
 * @class AccountService
 */
export class AccountService {
  private accounts: Map<string, Account> = new Map()

  /**
   * Retrieves an account by its unique identifier.
   * 
   * @param {string} id - The unique identifier of the account to retrieve
   * @returns {Account | null} The account object if found, null if no account exists with the given id
   * 
   * @example
   * const account = service.getAccount('ACC-001');
   * if (account) {
   *   console.log(`Balance: ${account.balance}`);
   * }
   */
  getAccount(id: string): Account | null {
    return this.accounts.get(id) || null
  }

  /**
   * Saves or updates an account in the service.
   * If an account with the same id exists, it will be overwritten.
   * 
   * @param {Account} account - The account object to save or update
   * @returns {void}
   * 
   * @example
   * const account: Account = { id: 'ACC-001', balance: 1000 };
   * service.saveAccount(account);
   */
  saveAccount(account: Account): void {
    this.accounts.set(account.id, account)
  }
}