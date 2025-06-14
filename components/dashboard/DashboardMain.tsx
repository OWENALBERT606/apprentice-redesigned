// import { MetricCard } from "@/components/metric-card";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   ArrowDown,
//   ArrowRight,
//   ArrowUp,
//   Box,
//   Download,
//   ShoppingBag,
//   ShoppingCart,
//   Users,
// } from "lucide-react";

// const metrics = [
//   {
//     title: "Total Sales",
//     value: "$120,784.02",
//     change: {
//       value: "12.3%",
//       trend: "up" as const,
//       today: "+$1,453.89 today",
//     },
//     color: "bg-blue-500",
//   },
//   {
//     title: "Total Orders",
//     value: "28,834",
//     change: {
//       value: "20.1%",
//       trend: "up" as const,
//       today: "+2,676 today",
//     },
//     color: "bg-purple-500",
//   },
//   {
//     title: "Visitor",
//     value: "18,896",
//     change: {
//       value: "5.6%",
//       trend: "down" as const,
//       today: "-876 today",
//     },
//     color: "bg-violet-500",
//   },
//   {
//     title: "Refunded",
//     value: "2,876",
//     change: {
//       value: "13%",
//       trend: "up" as const,
//       today: "+34 today",
//     },
//     color: "bg-indigo-500",
//   },
// ];

// const recentActivity = [
//   {
//     customer: "Sarah Johnson",
//     email: "sarah.j@example.com",
//     status: "Completed",
//     amount: "$234.50",
//     date: "5 min ago",
//     avatar: "/placeholder.svg?height=40&width=40",
//   },
//   {
//     customer: "Michael Chen",
//     email: "m.chen@example.com",
//     status: "Pending",
//     amount: "$129.99",
//     date: "10 min ago",
//     avatar: "/placeholder.svg?height=40&width=40",
//   },
//   {
//     customer: "Emma Wilson",
//     email: "emma.w@example.com",
//     status: "Processing",
//     amount: "$549.00",
//     date: "15 min ago",
//     avatar: "/placeholder.svg?height=40&width=40",
//   },
// ];

// const topProducts = [
//   {
//     name: "Wireless Earbuds Pro",
//     sales: 1234,
//     revenue: "$45,678",
//     image: "/placeholder.svg?height=40&width=40",
//   },
//   {
//     name: "Smart Watch Elite",
//     sales: 987,
//     revenue: "$39,480",
//     image: "/placeholder.svg?height=40&width=40",
//   },
//   {
//     name: "Premium Laptop Stand",
//     sales: 865,
//     revenue: "$25,950",
//     image: "/placeholder.svg?height=40&width=40",
//   },
// ];
// const bigCards = [
//   {
//     title: "Total Sales",
//     value: "$120,784.02",
//     change: "+12.3%",
//     trend: "up",
//     icon: ShoppingCart,
//   },
//   {
//     title: "Total Orders",
//     value: "28,834",
//     change: "+20.1%",
//     trend: "up",
//     icon: ShoppingBag,
//   },
//   {
//     title: "Total Products",
//     value: "1,429",
//     change: "+8.3%",
//     trend: "up",
//     icon: Box,
//   },
//   {
//     title: "Total Users",
//     value: "12,456",
//     change: "+15.2%",
//     trend: "up",
//     icon: Users,
//   },
// ];
// export default function DashboardMain() {
//   return (
//     <div className="min-h-screen">
//       <div className="max-w-7xl mx-auto space-y-6">
//         <div className="flex items-center justify-between">
//           <div>
//             <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
//             <p className="text-muted-foreground">
//               Here's your statistics overview.
//             </p>
//           </div>
//           <div className="flex items-center space-x-4">
//             <Select defaultValue="7d">
//               <SelectTrigger className="w-[180px]">
//                 <SelectValue placeholder="Select period" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="7d">Last 7 days</SelectItem>
//                 <SelectItem value="30d">Last 30 days</SelectItem>
//                 <SelectItem value="90d">Last 90 days</SelectItem>
//                 <SelectItem value="12m">Last 12 months</SelectItem>
//               </SelectContent>
//             </Select>
//             <Button variant="outline">
//               <Download className="mr-2 h-4 w-4" />
//               Export to Excel
//             </Button>
//           </div>
//         </div>
//         <div className="grid grid-cols-12 gap-6">
//           {/* Big Cards - 4 cards in a row */}
//           {bigCards.map((card, index) => (
//             <Card key={index} className="col-span-3 relative overflow-hidden">
//               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                 <CardTitle className="text-sm font-medium">
//                   {card.title}
//                 </CardTitle>
//                 <card.icon className="h-4 w-4 text-muted-foreground" />
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">{card.value}</div>
//                 <div
//                   className={`flex items-center text-sm ${card.trend === "up" ? "text-green-600" : "text-red-600"}`}
//                 >
//                   View details
//                   <ArrowRight className="mr-1 h-4 w-4" />
//                 </div>
//               </CardContent>
//               <div className="absolute right-0 bottom-0 opacity-5">
//                 <card.icon className="h-24 w-24 text-primary" />
//               </div>
//             </Card>
//           ))}
//         </div>

//         <div className="grid grid-cols-12 gap-6">
//           {/* Recent Activity Table */}
//           <Card className="col-span-8">
//             <CardHeader>
//               <CardTitle>Recent Activity</CardTitle>
//               <CardDescription>Latest customer transactions</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Customer</TableHead>
//                     <TableHead>Status</TableHead>
//                     <TableHead>Amount</TableHead>
//                     <TableHead className="text-right">Time</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {recentActivity.map((activity) => (
//                     <TableRow key={activity.email}>
//                       <TableCell>
//                         <div className="flex items-center space-x-3">
//                           <Avatar>
//                             <AvatarImage
//                               src={activity.avatar}
//                               alt={activity.customer}
//                             />
//                             <AvatarFallback>
//                               {activity.customer
//                                 .split(" ")
//                                 .map((n) => n[0])
//                                 .join("")}
//                             </AvatarFallback>
//                           </Avatar>
//                           <div>
//                             <div className="font-medium">
//                               {activity.customer}
//                             </div>
//                             <div className="text-sm text-muted-foreground">
//                               {activity.email}
//                             </div>
//                           </div>
//                         </div>
//                       </TableCell>
//                       <TableCell>
//                         <div
//                           className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
//                           ${
//                             activity.status === "Completed"
//                               ? "bg-green-100 text-green-800"
//                               : activity.status === "Pending"
//                                 ? "bg-yellow-100 text-yellow-800"
//                                 : "bg-blue-100 text-blue-800"
//                           }`}
//                         >
//                           {activity.status}
//                         </div>
//                       </TableCell>
//                       <TableCell>{activity.amount}</TableCell>
//                       <TableCell className="text-right">
//                         {activity.date}
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </CardContent>
//           </Card>

//           {/* Top Selling Products */}
//           <Card className="col-span-4">
//             <CardHeader>
//               <CardTitle>Top Selling Products</CardTitle>
//               <CardDescription>Best performing products</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-6">
//                 {topProducts.map((product, index) => (
//                   <div key={index} className="flex items-center">
//                     <Avatar className="h-9 w-9">
//                       <AvatarImage src={product.image} alt={product.name} />
//                       <AvatarFallback>P</AvatarFallback>
//                     </Avatar>
//                     <div className="ml-4 space-y-1">
//                       <p className="text-sm font-medium leading-none">
//                         {product.name}
//                       </p>
//                       <p className="text-sm text-muted-foreground">
//                         {product.sales.toLocaleString()} sales
//                       </p>
//                     </div>
//                     <div className="ml-auto font-medium">{product.revenue}</div>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Users, GraduationCap, Heart, DollarSign, BookOpen, MapPin } from "lucide-react"

const ngoMetrics = [
  {
    title: "Total Beneficiaries",
    value: "2,847",
    change: "+18.2%",
    trend: "up",
    icon: Users,
    description: "People impacted this month",
  },
  {
    title: "Active Programs",
    value: "12",
    change: "+3 new",
    trend: "up",
    icon: BookOpen,
    description: "Running programs",
  },
  {
    title: "Donations Received",
    value: "$45,230",
    change: "+25.4%",
    trend: "up",
    icon: DollarSign,
    description: "This month's funding",
  },
  {
    title: "Volunteers",
    value: "156",
    change: "+12 new",
    trend: "up",
    icon: Heart,
    description: "Active volunteers",
  },
]

const recentActivity = [
  {
    beneficiary: "Maria Santos",
    program: "Education Support",
    status: "Enrolled",
    location: "Community Center A",
    date: "2 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    beneficiary: "James Okoye",
    program: "Skills Training",
    status: "Completed",
    location: "Training Hub B",
    date: "5 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    beneficiary: "Fatima Al-Rashid",
    program: "Mentorship",
    status: "In Progress",
    location: "Online Session",
    date: "1 day ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    beneficiary: "David Kim",
    program: "Career Guidance",
    status: "Scheduled",
    location: "Main Office",
    date: "2 days ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

const topPrograms = [
  {
    name: "Digital Literacy Training",
    participants: 234,
    completion: "89%",
    impact: "High",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Youth Mentorship Program",
    participants: 187,
    completion: "92%",
    impact: "High",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Women Empowerment Initiative",
    participants: 156,
    completion: "85%",
    impact: "Medium",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Community Health Education",
    participants: 143,
    completion: "78%",
    impact: "High",
    icon: "/placeholder.svg?height=40&width=40",
  },
]

export default function NGODashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Apprentice NGO Dashboard</h1>
            <p className="text-gray-600">Monitor your impact and program performance</p>
          </div>
          <div className="flex items-center space-x-4">
            <Select defaultValue="30d">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="12m">Last 12 months</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ngoMetrics.map((metric, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">{metric.title}</CardTitle>
                <metric.icon className="h-5 w-5 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-600 font-medium">{metric.change}</span>
                  <span className="text-xs text-gray-500">{metric.description}</span>
                </div>
              </CardContent>
              <div className="absolute right-0 bottom-0 opacity-5">
                <metric.icon className="h-20 w-20 text-blue-600" />
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Beneficiary Activity */}
          <Card className="lg:col-span-2 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">Recent Beneficiary Activity</CardTitle>
              <CardDescription>Latest program enrollments and completions</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Beneficiary</TableHead>
                    <TableHead>Program</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentActivity.map((activity, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage src={activity.avatar || "/placeholder.svg"} alt={activity.beneficiary} />
                            <AvatarFallback className="bg-blue-100 text-blue-600">
                              {activity.beneficiary
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-gray-900">{activity.beneficiary}</div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <MapPin className="h-3 w-3 mr-1" />
                              {activity.location}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="font-medium text-gray-700">{activity.program}</span>
                      </TableCell>
                      <TableCell>
                        <div
                          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium
                          ${
                            activity.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : activity.status === "Enrolled"
                                ? "bg-blue-100 text-blue-800"
                                : activity.status === "In Progress"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {activity.status}
                        </div>
                      </TableCell>
                      <TableCell className="text-right text-sm text-gray-500">{activity.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Top Performing Programs */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">Top Programs</CardTitle>
              <CardDescription>Best performing programs by impact</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {topPrograms.map((program, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <GraduationCap className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{program.name}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-xs text-gray-500">{program.participants} participants</span>
                        <span className="text-xs text-green-600 font-medium">{program.completion} completion</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                        ${program.impact === "High" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                      >
                        {program.impact}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-900">Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button className="h-20 flex flex-col items-center justify-center space-y-2 bg-blue-600 hover:bg-blue-700">
                <Users className="h-6 w-6" />
                <span>Add Beneficiary</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <BookOpen className="h-6 w-6" />
                <span>Create Program</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <Heart className="h-6 w-6" />
                <span>Manage Volunteers</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <DollarSign className="h-6 w-6" />
                <span>Track Donations</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

