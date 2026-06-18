
// Main Class - File ka naam Exp10.java hona chahiye
public class Exp10 {
    public static void main(String[] args) {
        
        // 1. Savings Account banaya aur run kiya
        System.out.println("----- Savings Account -----");
        SavingsAccount savings = new SavingsAccount(101, "Rahul", 10000.0, 5.0); // 5% Interest Rate
        savings.deposit(2000.0);
        savings.displaySavingsDetails();
        
        System.out.println(); // Khali line gap ke liye

        // 2. Current Account banaya aur run kiya
        System.out.println("----- Current Account -----");
        CurrentAccount current = new CurrentAccount(102, "Anita", 20000.0, 2.0); // 2% Interest Rate
        current.deposit(3000.0);
        current.displayCurrentDetails();
    }
}

// Base Class / Parent Class (Encapsulation ka use)
class Account {
    private int accountNumber;
    private String accountHolderName;
    private double balance;

    // Constructor data fill karne ke liye
    public Account(int accountNumber, String accountHolderName, double balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    // Money deposit karne ka method
    public void deposit(double amount) {
        this.balance += amount;
        System.out.println("Amount Deposited: " + amount);
    }

    // Getters taaki private data ko child class use kar sake
    public int getAccountNumber() { return accountNumber; }
    public String getAccountHolderName() { return accountHolderName; }
    public double getBalance() { return balance; }
}

// Child Class 1 - Inheritance ka use
class SavingsAccount extends Account {
    private double interestRate;

    public SavingsAccount(int accountNumber, String accountHolderName, double balance, double interestRate) {
        super(accountNumber, accountHolderName, balance); // Parent constructor ko call kiya
        this.interestRate = interestRate;
    }

    // Interest calculate karne ka formula
    public double calculateInterest() {
        return (getBalance() * interestRate) / 100;
    }

    // Details print karne ke liye
    public void displaySavingsDetails() {
        System.out.println("Account Number: " + getAccountNumber());
        System.out.println("Account Holder Name: " + getAccountHolderName());
        System.out.println("Balance: " + getBalance());
        System.out.println("Savings Account Interest: " + calculateInterest());
    }
}

// Child Class 2 - Inheritance ka use
class CurrentAccount extends Account {
    private double interestRate;

    public CurrentAccount(int accountNumber, String accountHolderName, double balance, double interestRate) {
        super(accountNumber, accountHolderName, balance);
        this.interestRate = interestRate;
    }

    // Interest calculate karne ka formula
    public double calculateInterest() {
        return (getBalance() * interestRate) / 100;
    }

    // Details print karne ke liye
    public void displayCurrentDetails() {
        System.out.println("Account Number: " + getAccountNumber());
        System.out.println("Account Holder Name: " + getAccountHolderName());
        System.out.println("Balance: " + getBalance());
        System.out.println("Current Account Interest: " + calculateInterest());
    }
}
