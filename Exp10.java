

public class Exp10 {
    public static void main(String[] args) {
        
        
        System.out.println("----- Savings Account -----");
        SavingsAccount savings = new SavingsAccount(101, "Rahul", 10000.0, 5.0); // 5% Interest Rate
        savings.deposit(2000.0);
        savings.displaySavingsDetails();
        
        System.out.println(); 

        
        System.out.println("----- Current Account -----");
        CurrentAccount current = new CurrentAccount(102, "Anita", 20000.0, 2.0); // 2% Interest Rate
        current.deposit(3000.0);
        current.displayCurrentDetails();
    }
}

class Account {
    private int accountNumber;
    private String accountHolderName;
    private double balance;

    
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

    
    public int getAccountNumber() { return accountNumber; }
    public String getAccountHolderName() { return accountHolderName; }
    public double getBalance() { return balance; }
}


class SavingsAccount extends Account {
    private double interestRate;

    public SavingsAccount(int accountNumber, String accountHolderName, double balance, double interestRate) {
        super(accountNumber, accountHolderName, balance); // Parent constructor ko call kiya
        this.interestRate = interestRate;
    }

    
    public double calculateInterest() {
        return (getBalance() * interestRate) / 100;
    }

    
    public void displaySavingsDetails() {
        System.out.println("Account Number: " + getAccountNumber());
        System.out.println("Account Holder Name: " + getAccountHolderName());
        System.out.println("Balance: " + getBalance());
        System.out.println("Savings Account Interest: " + calculateInterest());
    }
}


class CurrentAccount extends Account {
    private double interestRate;

    public CurrentAccount(int accountNumber, String accountHolderName, double balance, double interestRate) {
        super(accountNumber, accountHolderName, balance);
        this.interestRate = interestRate;
    }

    
    public double calculateInterest() {
        return (getBalance() * interestRate) / 100;
    }

    
    public void displayCurrentDetails() {
        System.out.println("Account Number: " + getAccountNumber());
        System.out.println("Account Holder Name: " + getAccountHolderName());
        System.out.println("Balance: " + getBalance());
        System.out.println("Current Account Interest: " + calculateInterest());
    }
}
