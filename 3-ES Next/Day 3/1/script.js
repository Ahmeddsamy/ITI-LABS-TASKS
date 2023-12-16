"use strict";
import {
  Employee,
  Manager,
  WorkerBee,
  SalesPerson,
  Engineer,
} from "./class.js";

console.log("a-------------------------------------");
//a.	Employee has the properties name (whose value defaults to the empty string) and dept (whose value defaults to "general").
const ahmed = new Employee("ahmed", "TO");
const samy = new Employee("samy", "Tender");
const nashaat = new Employee("nashaat", "Contract");
const hamed = new Employee("hamed", "Cost");
console.log(ahmed);
console.log("b-------------------------------------");
//b.	Manager is based on Employee. It adds the reports property (whose value defaults to an empty array, intended to have an array of Employee objects as its value).

const manager1 = new Manager("Kareem", "Management");
manager1.addReport(ahmed);
manager1.addReport(samy);
console.log(manager1);
console.log("c-------------------------------------");
//c.	WorkerBee is also based on Employee. It adds the projects property (whose value defaults to an empty array, intended to have an array of strings as its value).

const teamLead1 = new WorkerBee("Ayman", "TeamLeads");

console.log(teamLead1);

console.log("d-------------------------------------");
//d.	SalesPerson is based on WorkerBee. It adds the quota property (whose value defaults to 100). It also overrides the dept property with the value "sales", indicating that all salespersons are in the same department.

const sales1 = new SalesPerson("Amr");
sales1.addProject("Cluster1"); // adding a project to sales man
console.log(sales1);

console.log("e-------------------------------------");
//e.	Engineer is based on WorkerBee. It adds the machine property (whose value defaults to the empty string) and also overrides the dept property with the value "engineering".

const engineer1 = new Engineer("Mostafa");
console.log(engineer1);
