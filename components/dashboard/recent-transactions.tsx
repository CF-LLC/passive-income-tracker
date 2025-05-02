"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function RecentTransactions() {
  // This would normally come from your database
  const transactions = [
    {
      id: "TX123456",
      source: "Rental Property",
      amount: 1200,
      date: "2023-04-01",
      status: "completed",
    },
    {
      id: "TX123457",
      source: "Dividend Payment",
      amount: 580,
      date: "2023-04-02",
      status: "completed",
    },
    {
      id: "TX123458",
      source: "Digital Product",
      amount: 420,
      date: "2023-04-03",
      status: "completed",
    },
    {
      id: "TX123459",
      source: "Royalties",
      amount: 350,
      date: "2023-04-05",
      status: "pending",
    },
    {
      id: "TX123460",
      source: "Affiliate Commission",
      amount: 180,
      date: "2023-04-10",
      status: "completed",
    },
  ]

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your latest income deposits</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">{transaction.id}</TableCell>
                <TableCell>{transaction.source}</TableCell>
                <TableCell>${transaction.amount}</TableCell>
                <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Badge variant={transaction.status === "completed" ? "default" : "outline"}>
                    {transaction.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
