"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Trash2 } from "lucide-react"

export default function IncomeList() {
  // This would normally come from your database
  const [incomeStreams, setIncomeStreams] = useState([
    {
      id: "1",
      name: "Rental Property",
      category: "Real Estate",
      amount: 1200,
      frequency: "Monthly",
      lastPayment: "2023-04-01",
      nextPayment: "2023-05-01",
      status: "active",
    },
    {
      id: "2",
      name: "Dividend Portfolio",
      category: "Investments",
      amount: 580,
      frequency: "Quarterly",
      lastPayment: "2023-04-02",
      nextPayment: "2023-07-02",
      status: "active",
    },
    {
      id: "3",
      name: "E-book Sales",
      category: "Digital Products",
      amount: 420,
      frequency: "Monthly",
      lastPayment: "2023-04-03",
      nextPayment: "2023-05-03",
      status: "active",
    },
    {
      id: "4",
      name: "Music Royalties",
      category: "Royalties",
      amount: 350,
      frequency: "Monthly",
      lastPayment: "2023-04-05",
      nextPayment: "2023-05-05",
      status: "active",
    },
    {
      id: "5",
      name: "Affiliate Marketing",
      category: "Affiliate",
      amount: 180,
      frequency: "Monthly",
      lastPayment: "2023-04-10",
      nextPayment: "2023-05-10",
      status: "active",
    },
    {
      id: "6",
      name: "High-Yield Savings",
      category: "Interest",
      amount: 85,
      frequency: "Monthly",
      lastPayment: "2023-04-15",
      nextPayment: "2023-05-15",
      status: "active",
    },
    {
      id: "7",
      name: "YouTube Channel",
      category: "Content Creation",
      amount: 35,
      frequency: "Monthly",
      lastPayment: "2023-04-20",
      nextPayment: "2023-05-20",
      status: "inactive",
    },
  ])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Income Streams</CardTitle>
        <CardDescription>Manage all your passive income sources</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Frequency</TableHead>
              <TableHead>Next Payment</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {incomeStreams.map((stream) => (
              <TableRow key={stream.id}>
                <TableCell className="font-medium">{stream.name}</TableCell>
                <TableCell>{stream.category}</TableCell>
                <TableCell>${stream.amount}</TableCell>
                <TableCell>{stream.frequency}</TableCell>
                <TableCell>{new Date(stream.nextPayment).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Badge variant={stream.status === "active" ? "default" : "outline"}>{stream.status}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
