const { response } = require("express");
const express = require("express");
const { v4: uuidV4 } = require("uuid");

const app = express();

app.use(express.json());

const customers = [];

// Middleware
const verifyIfExistsAccountWithCPF = (req, res, next) => {
  const { cpf } = req.headers;

  const customer = customers.find((customer) => customer.cpf === cpf); // Retorna um objeto;

  if (!customer) {
    return res.status(400).json({ error: "Customer not found!" });
  }

  req.customer = customer;

  return next();
};

const getBalance = (statement) => {
  return statement.reduce((acc, { type, amount }) => {
    if (type === "credit") {
      return acc + amount;
    } else {
      return acc - amount;
    }
  }, 0);
};

app.post("/account", (req, res) => {
  const { name, cpf } = req.body;

  const customerAlreadyExistis = customers.some(
    (customer) => customer.cpf === cpf
  );

  if (customerAlreadyExistis) {
    return res.status(400).json({ error: "Customer already exists!" });
  }

  customers.push({
    id: uuidV4(),
    name,
    cpf,
    statement: [],
  });

  return res.status(201).send();
});

app.use(verifyIfExistsAccountWithCPF);

app.get("/statement", (req, res) => {
  const { customer } = req;

  return res.json(customer.statement);
});

app.post("/deposit", (req, res) => {
  const {
    customer,
    body: { description, amount },
  } = req;

  const statementOperation = {
    description,
    amount,
    created_at: new Date(),
    type: "credit",
  };

  customer.statement.push(statementOperation);

  return res.status(201).send();
});

app.post("/withdraw", (req, res) => {
  const {
    customer,
    body: { amount },
  } = req;

  const balance = getBalance(customer.statement);

  if (balance < amount) {
    return res.status(400).json({ error: "Insufficient funds!" });
  }

  const statementOperation = {
    amount,
    created_at: new Date(),
    type: "debit",
  };

  customer.statement.push(statementOperation);

  return res.status(201).send();
});

app.get("/statement/date", (req, res) => {
  const {
    customer,
    query: { date },
  } = req;

  const dateFormat = new Date(date + " 00:00");

  const statement = customer.statement.filter(({ created_at }) => {
    return created_at.toDateString() === new Date(dateFormat).toDateString();
  });

  return res.json(statement);
});

app.put("/account", (req, res) => {
  const {
    customer,
    body: { name },
  } = req;

  customer.name = name;

  return res.status(201).send();
});

app.get("/account", (req, res) => {
  return res.status(200).json(req.customer);
});

app.delete("/account", (req, res) => {
  const { customer } = req;

  customers.splice(customer, 1);

  return res.status(204).send();
});

app.get("/balance", (req, res) => {
  const { customer } = req;

  const balance = getBalance(customer.statement);

  return res.status(200).json(balance);
});

app.listen(3030);
