function createData(
  id,
  taskId,
  taskName,
  startedDate,
  endDate,
  relatedTo,
  assignTo,
  status,
  action
) {
  return {
    id,
    taskId,
    taskName,
    startedDate,
    endDate,
    relatedTo,
    assignTo,
    status,
  };
}

export const rows = [
  createData(
    1,
    "4561",
    "Write engaging content for posts",
    "1/1/2023",
    "1/5/2023",
    "Social Media Marketing Campaign",
    "Ahmed Elbakly",
    "done"
  ),
  createData(
    1,
    "4562",
    "Write engaging content for posts",
    "1/1/2023",
    "1/5/2023",
    "Social Media Marketing Campaign",
    "Ahmed Elbakly",
    "in progress"
  ),
  createData(
    1,
    "4563",
    "Write engaging content for posts",
    "1/1/2023",
    "1/5/2023",
    "Social Media Marketing Campaign",
    "Ahmed Elbakly",
    "done"
  ),
  createData(
    1,
    "4564",
    "Write engaging content for posts",
    "1/1/2023",
    "1/5/2023",
    "Social Media Marketing Campaign",
    "Ahmed Elbakly",
    "in progress"
  ),
  createData(
    1,
    "4565",
    "Write engaging content for posts",
    "1/1/2023",
    "1/5/2023",
    "Social Media Marketing Campaign",
    "Ahmed Elbakly",
    "in progress"
  ),
  createData(
    1,
    "4566",
    "Write engaging content for posts",
    "1/1/2023",
    "1/5/2023",
    "Social Media Marketing Campaign",
    "Ahmed Elbakly",
    "done"
  ),
  createData(
    1,
    "4567",
    "Write engaging content for posts",
    "1/1/2023",
    "1/5/2023",
    "Social Media Marketing Campaign",
    "Ahmed Elbakly",
    "done"
  ),
  createData(
    1,
    "4568",
    "Write engaging content for posts",
    "1/1/2023",
    "1/5/2023",
    "Social Media Marketing Campaign",
    "Ahmed Elbakly",
    "in progress"
  ),
  createData(
    1,
    "4569",
    "Write engaging content for posts",
    "1/1/2023",
    "1/5/2023",
    "Social Media Marketing Campaign",
    "Ahmed Elbakly",
    "in progress"
  ),

  createData(
    1,
    "45610",
    "Write engaging content for posts",
    "1/1/2023",
    "1/5/2023",
    "Social Media Marketing Campaign",
    "Ahmed Elbakly",
    "done"
  ),
];

export const statusOption = [
  {
    id: 1,
    name: "To do",
    value: "to do",
  },
  {
    id: 2,
    name: "Done",
    value: "done",
  },

  {
    id: 3,
    name: "In progress",
    value: "in progress",
  },
  {
    id: 4,
    name: "Review",
    value: "review",
  },
];

export const priorityOptionData = [
  {
    id: 1,
    name: "Minor",
    value: "minor",
  },
  {
    id: 2,
    name: "Major",
    value: "major",
  },
  {
    id: 2,
    name: "Critical",
    value: "critical",
  },
  {
    id: 4,
    name: "Blocker",
    value: "blocker",
  },
];

export const relatedToOption = [
  {
    id: 1,
    name: "Project",
    value: "project",
  },
  {
    id: 2,
    name: "Client",
    value: "client",
  },
  {
    id: 3,
    name: "Contract",
    value: "contract",
  },
  {
    id: 4,
    name: "Estimate",
    value: "estimate",
  },
  {
    id: 5,
    name: "Expense",
    value: "expense",
  },
  {
    id: 6,
    name: "Invoice",
    value: "invoice",
  },
  {
    id: 7,
    name: "Lead",
    value: "lead",
  },
  {
    id: 8,
    name: "Order",
    value: "order",
  },
  {
    id: 9,
    name: "Subscription",
    value: "subscription",
  },
  {
    id: 8,
    name: "Ticket",
    value: "ticket",
  },
];
