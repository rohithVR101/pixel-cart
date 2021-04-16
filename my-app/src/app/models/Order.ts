export class Order {
  Bill_No: string;
  Order_ID: string;
  Customer_Phone: string;
  Customer_Email: string;
  Customer_Name: string;
  Product_ID: number;
  Product_Name: string;
  Quantity: number;
  Rate: number;
  Amount: number;
  Order_Date: string;
  Order_Time: string;
  Payment_Mode: string;
  Payment_ID: string;
  Received_Amount: number;
  Balance_Given: number;
  CGST: number;
  SGST: number;
  Subtotal: number;
  Total: number;
  Discount: number;

  constructor(
    Bill_No: string,
    Order_ID: string,
    Customer_Phone: string,
    Customer_Email: string,
    Customer_Name: string,
    Product_ID: number,
    Product_Name: string,
    Quantity: number,
    Rate: number,
    Amount: number,
    Order_Date: string,
    Order_Time: string,
    Payment_Mode: string,
    Payment_ID: string,
    Received_Amount: number,
    Balance_Given: number,
    CGST: number,
    SGST: number,
    Subtotal: number,
    Total: number,
    Discount: number
  ) {
    this.Bill_No = Bill_No;
    this.Order_ID = Order_ID;
    this.Customer_Phone = Customer_Phone;
    this.Customer_Email = Customer_Email;
    this.Customer_Name = Customer_Name;
    this.Product_ID = Product_ID;
    this.Product_Name = Product_Name;
    this.Quantity = Quantity;
    this.Rate = Rate;
    this.Amount = Amount;
    this.Order_Date = Order_Date;
    this.Order_Time = Order_Time;
    this.Payment_Mode = Payment_Mode;
    this.Payment_ID = Payment_ID;
    this.Received_Amount = Received_Amount;
    this.Balance_Given = Balance_Given;
    this.CGST = CGST;
    this.SGST = SGST;
    this.Subtotal = Subtotal;
    this.Total = Total;
    this.Discount = Discount;
  }
}
