// src/components/PrototypeDashboard.tsx
import { useEffect, useMemo, useState } from "react"
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts"
import {
  AlertTriangle, CheckCircle, XCircle, Activity, Thermometer, Gauge, Droplets, Zap, FileText, ArrowLeft,
} from "lucide-react"

const SHOW_TOP_KPIS = false

/** Types */
type Screen = "dashboard" | "investigation" | "report"
type AssetStatus = "normal" | "warning" | "alert" | "operational" | "critical"
type Asset = {
  id: string
  name: string
  type: string
  status: AssetStatus
  location: string
  lastMaintenance: string
}
type TelemetryPoint = {
  time: string
  temperature: number
  pressure: number
  flow: number
}
type AlertType = "critical" | "warning" | "info"
type SystemAlert = {
  id: number
  type: AlertType
  equipment: string
  message: string
  timestamp: string
}

/** Demo Data */
const INITIAL_ASSETS: Asset[] = [
  { id: "COMP-001", name: "Compressor Unit", type: "Compressor", status: "alert", location: "Unit 3 - Bay A", lastMaintenance: "2023-11-15" },
  { id: "VALVE-001", name: "Main Valve", type: "Valve", status: "warning", location: "Header North", lastMaintenance: "2023-12-20" },
  { id: "PUMP-001", name: "Primary Pump", type: "Pump", status: "operational", location: "Skid 4", lastMaintenance: "2024-01-15" },
  { id: "TURB-005", name: "Turbine G-5B", type: "Turbine", status: "normal", location: "Building B - Floor 1", lastMaintenance: "2024-01-20" },
]

const INITIAL_ALERTS: SystemAlert[] = [
  { id: 1, type: "critical", equipment: "COMP-001", message: "Temperature exceeding safe limits", timestamp: new Date().toLocaleString() },
  { id: 2, type: "warning", equipment: "VALVE-001", message: "Pressure fluctuation detected", timestamp: new Date(Date.now() - 5 * 60 * 1000).toLocaleString() },
  { id: 3, type: "info", equipment: "PUMP-001", message: "Scheduled maintenance due", timestamp: new Date(Date.now() - 15 * 60 * 1000).toLocaleString() },
]

/** Helpers */
const generateDataPoint = (ts: number): TelemetryPoint => ({
  time: new Date(ts).toLocaleTimeString(),
  temperature: 85 + Math.random() * 30,
  pressure: 150 + Math.random() * 50,
  flow: 45 + Math.random() * 20,
})

function useTelemetryData(n: number = 20, intervalMs: number = 3000) {
  const [data, setData] = useState<TelemetryPoint[]>([])
  const [now, setNow] = useState<Date>(new Date())

  useEffect(() => {
    const initial = Array.from({ length: n }, (_, i) =>
      generateDataPoint(Date.now() - (n - 1 - i) * intervalMs)
    )
    setData(initial)
    const t = setInterval(() => {
      setData((prev) => [...prev.slice(1), generateDataPoint(Date.now())])
      setNow(new Date())
    }, intervalMs)
    return () => clearInterval(t)
  }, [n, intervalMs])

  return { data, now }
}

function statusPill(status: AssetStatus) {
  switch (status) {
    case "normal":
    case "operational":
      return { className: "bg-green-500 text-white", icon: <CheckCircle className="h-4 w-4" /> }
    case "warning":
      return { className: "bg-yellow-500 text-black", icon: <Activity className="h-4 w-4" /> }
    case "alert":
    case "critical":
      return { className: "bg-red-500 text-white", icon: <AlertTriangle className="h-4 w-4" /> }
    default:
      return { className: "bg-gray-500 text-white", icon: <XCircle className="h-4 w-4" /> }
  }
}

function alertVariant(t: AlertType) {
  return t === "critical" ? "destructive" : "default"
}

/** Main component */
export default function PrototypeDashboard() {
  const [screen, setScreen] = useState<Screen>("dashboard")
  const [assets] = useState<Asset[]>(INITIAL_ASSETS)
  const [alerts] = useState<SystemAlert[]>(INITIAL_ALERTS)
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null)
  const { data, now } = useTelemetryData(20, 3000)

  const stats = useMemo(() => {
    const counts = { normal: 0, warning: 0, critical: 0, total: assets.length }
    for (const a of assets) {
      if (a.status === "warning") counts.warning += 1
      else if (a.status === "alert" || a.status === "critical") counts.critical += 1
      else counts.normal += 1
    }
    return counts
  }, [assets])

  const handleInvestigate = (asset: Asset) => {
    setSelectedAsset(asset)
    setScreen("investigation")
    setTimeout(() => setScreen("report"), 2500)
  }

  /** Screen: Investigation */
  if (screen === "investigation") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center">
        <div className="text-center space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-foreground">AI Investigation in Progress…</h2>
            <p className="text-muted-foreground">Analyzing {selectedAsset?.name} patterns</p>
          </div>

          <div className="flex items-center justify-center space-x-8">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center animate-pulse">
                <Activity className="w-8 h-8 text-primary animate-bounce" />
              </div>
              <span className="text-sm text-muted-foreground">Data Stream</span>
            </div>
            <div className="text-muted-foreground/60 animate-pulse">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center animate-pulse">
                <FileText className="w-8 h-8 text-primary animate-bounce" />
              </div>
              <span className="text-sm text-muted-foreground">Analysis</span>
            </div>
            <div className="text-muted-foreground/60 animate-pulse">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center animate-pulse">
                <Zap className="w-8 h-8 text-primary-foreground animate-spin" />
              </div>
              <span className="text-sm text-muted-foreground">SustainIQ AI</span>
            </div>
          </div>

          <div className="w-64 mx-auto">
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full animate-pulse" style={{ width: "75%" }} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  /** Screen: Report */
  if (screen === "report") {
    return (
      <div className="min-h-screen bg-muted/30 p-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Unified Intelligence Report</h1>
              <p className="text-muted-foreground">Asset: {selectedAsset?.name}</p>
            </div>
            <Button variant="outline" onClick={() => setScreen("dashboard")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">AI Diagnosis & Recommendations</CardTitle>
              <CardDescription>Complete analysis with evidence, actions, and recent trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Diagnosis */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-red-600">AI Diagnosis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 bg-red-50 rounded-lg">
                      <p className="font-medium text-red-800">Bearing Failure Imminent</p>
                      <p className="text-sm text-red-600 mt-1">Confidence: 94%</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p><strong>Vibration:</strong> 8.2mm/s (Critical)</p>
                      <p><strong>Temperature:</strong> 85°C (High)</p>
                      <p><strong>Oil Analysis:</strong> Metal particles detected</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Evidence */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">Supporting Evidence</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2"><div className="w-2 h-2 bg-red-500 rounded-full" /><span>Vibration trend ↗ 300% (7 days)</span></div>
                      <div className="flex items-center space-x-2"><div className="w-2 h-2 bg-orange-500 rounded-full" /><span>Temperature spike events (3)</span></div>
                      <div className="flex items-center space-x-2"><div className="w-2 h-2 bg-yellow-500 rounded-full" /><span>Acoustic signature change</span></div>
                      <div className="flex items-center space-x-2"><div className="w-2 h-2 bg-red-500 rounded-full" /><span>Oil contamination level: High</span></div>
                    </div>
                    <div className="mt-2 p-2 bg-muted rounded">
                      <p className="text-xs text-muted-foreground">Historical: Similar pattern led to failure in Asset C-8A (2023)</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-green-600">Recommended Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="p-3 bg-red-50 border-l-4 border-red-500">
                      <p className="font-medium text-red-800">IMMEDIATE</p>
                      <p className="text-red-700">Schedule emergency maintenance within 24 hours</p>
                    </div>
                    <div className="p-3 bg-orange-50 border-l-4 border-orange-500">
                      <p className="font-medium text-orange-800">SHORT TERM</p>
                      <p className="text-orange-700">Replace bearing assembly and oil system flush</p>
                    </div>
                    <div className="p-3 bg-muted border-l-4 border-border">
                      <p className="font-medium text-foreground">PREVENTIVE</p>
                      <p className="text-muted-foreground">Implement enhanced monitoring for similar assets</p>
                    </div>
                    <div className="text-xs text-muted-foreground">Estimated cost avoidance: $45,000</div>
                  </CardContent>
                </Card>
              </div>

              {/* Trend chart */}
              <div className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Trends</CardTitle>
                    <CardDescription>Temperature & Pressure (last ~1 min)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="time" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="temperature" stroke="var(--chart-1, #33475b)" strokeWidth={2} name="Temperature (°F)" />
                          <Line type="monotone" dataKey="pressure" stroke="var(--chart-2, #0ea5e9)" strokeWidth={2} name="Pressure (PSI)" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Document Q&A + Quick Actions */}
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Ask the Documents</CardTitle>
                    <CardDescription>Answers with citations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="rounded-md border p-2">
                      Q: What is the shutdown procedure for COMP-001 oil contamination?
                    </div>
                    <div className="rounded-md border p-3 bg-muted">
                      A: Follow OEM Manual §4.2 step 3–7; isolate inlet, depressurize, drain oil, replace filter, run flush cycle.
                      <div className="text-xs text-muted-foreground mt-2">Source: OEM Manual – COMP-001, Rev C</div>
                    </div>
                    <Button size="sm" variant="outline">View Source</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full" variant="destructive">Schedule Maintenance</Button>
                    <Button className="w-full" variant="outline">Generate Audit-Ready Report</Button>
                    <a
                      className="w-full inline-flex items-center justify-center rounded-md px-3 py-2 bg-gradient-primary text-primary-foreground hover:opacity-90"
                      href="mailto:ethiraj.k@sustainiq.ai?subject=ROI%20Assessment&body=We%20would%20like%20a%20custom%20ROI%20projection%20for%20assets%20X%2FY%2FZ."
                    >
                      Get Free ROI Assessment
                    </a>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  /** Screen: Dashboard (default) */
  return (
    <div className="min-h-screen bg-muted/30 p-6">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Header - Simplified since main nav is handled by parent */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Live Platform Demo
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Real-time monitoring with unified intelligence workflow
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Last Updated</p>
            <p className="font-mono text-sm">{now.toLocaleString()}</p>
          </div>
        </div>

        {/* Brand KPIs */}
        {SHOW_TOP_KPIS && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Downtime Reduction", value: "35%" },
              { label: "Avg. Annual Savings", value: "$2.4M" },
              { label: "Compliance Accuracy", value: "95%" },
              { label: "Avg. Deployment", value: "8 weeks" },
            ].map((k) => (
              <div key={k.label} className="rounded-lg border bg-card p-3">
                <div className="text-xl font-bold text-primary">{k.value}</div>
                <div className="text-xs text-muted-foreground">{k.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Temperature</CardTitle>
              <Thermometer className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {`${data.length ? data[data.length - 1].temperature.toFixed(1) : "–"}°F`}
              </div>
              <p className="text-xs text-muted-foreground">Normal range: 80–100°F</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Pressure</CardTitle>
              <Droplets className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {`${data.length ? data[data.length - 1].pressure.toFixed(1) : "–"} PSI`}
              </div>
              <p className="text-xs text-muted-foreground">Normal range: 140–180 PSI</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Flow Rate</CardTitle>
              <Droplets className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {`${data.length ? data[data.length - 1].flow.toFixed(1) : "–"} GPM`}
              </div>
              <p className="text-xs text-muted-foreground">Target: 50–60 GPM</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
              <Zap className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                {alerts.filter((a) => a.type === "critical").length}
              </div>
              <p className="text-xs text-muted-foreground">Critical alerts requiring attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Temperature & Pressure Trends</CardTitle>
              <CardDescription>Real-time over the last few minutes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                        <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                        <CartesianGrid stroke="hsl(var(--border))" />
                        <Legend wrapperStyle={{ color: "hsl(var(--muted-foreground))" }} />
                        <Line type="monotone" dataKey="temperature" stroke="var(--chart-1, #33475b)" strokeWidth={2} />
                        <Line type="monotone" dataKey="pressure"    stroke="var(--chart-2, #54de79)" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Alerts</CardTitle>
              <CardDescription>Live events</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {alerts.map((a) => (
                <Alert key={a.id} variant={alertVariant(a.type)}>
                  <AlertTitle className="flex items-center gap-2">
                    {a.type === "critical" ? <AlertTriangle className="h-4 w-4" /> : <Activity className="h-4 w-4" />}
                    {a.type.toUpperCase()}
                    <Badge variant="outline" className="ml-1">{a.equipment}</Badge>
                  </AlertTitle>
                  <AlertDescription>{a.message} – <span className="text-xs opacity-75">{a.timestamp}</span></AlertDescription>
                </Alert>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Asset table */}
        <Card>
          <CardHeader>
            <CardTitle>Assets</CardTitle>
            <CardDescription>Click investigate to see the AI workflow in action</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-left text-muted-foreground">
                  <tr>
                    <th className="py-2 pr-4">Asset</th>
                    <th className="py-2 pr-4">Type</th>
                    <th className="py-2 pr-4">Status</th>
                    <th className="py-2 pr-4">Location</th>
                    <th className="py-2 pr-4">Last Maintenance</th>
                    <th className="py-2 pr-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {assets.map((a) => {
                    const pill = statusPill(a.status)
                    return (
                      <tr key={a.id} className="border-t">
                        <td className="py-3 pr-4 font-medium">{a.name}</td>
                        <td className="py-3 pr-4">{a.type}</td>
                        <td className="py-3 pr-4">
                          <span className={`inline-flex items-center gap-1 rounded px-2 py-1 text-xs ${pill.className}`}>
                            {pill.icon}{a.status}
                          </span>
                        </td>
                        <td className="py-3 pr-4">{a.location}</td>
                        <td className="py-3 pr-4">{a.lastMaintenance}</td>
                        <td className="py-3 pr-4">
                          <Button size="sm" onClick={() => handleInvestigate(a)}>Investigate</Button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}