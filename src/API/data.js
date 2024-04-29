export const data = [
  {
    "port": "80",
    "origin": "192.168.134.22",
    "status": "aprobado"
  },
  {
    "port": "8080",
    "origin": "192.168.32.106",
    "status": "aprobado"
  },
  {
    "port": "443",
    "origin": "192.168.100.147",
    "status": "aprobado"
  },
  {
    "port": "443",
    "origin": "192.168.119.45",
    "status": "aprobado"
  },
  {
    "port": "80",
    "origin": "192.168.38.140",
    "status": "aprobado"
  },
  {
    "port": "443",
    "origin": "192.168.50.67",
    "status": "aprobado"
  },
  {
    "port": "8080",
    "origin": "192.168.19.35",
    "status": "aprobado"
  },
  {
    "port": "53",
    "origin": "192.168.236.50",
    "status": "rechazado"
  },
  {
    "port": "443",
    "origin": "192.168.220.156",
    "status": "aprobado"
  },
  {
    "port": "80",
    "origin": "192.168.116.174",
    "status": "aprobado"
  },
  {
    "port": "80",
    "origin": "192.168.186.110",
    "status": "aprobado"
  }
]

export const fakeData = {
  labels : [
    "22", "23", "80", "443", "445","8080"
  ],
  datasets: [
    {
      label: 'Numero de conexiones Aprobadas',
      data: [100,50,10000,10000,300,5000],
      backgroundColor: ["rgba(75,192,192,0.2)"],
      borderColor: ["rgba(54,162,235,1)"],
      borderWidth: 1
    },
    {
      label: 'Numero de solicitudes Maliciosas',
      data: [1500,4000,3000,1000,3000,3],
      backgroundColor: ["rgba(255, 0, 0, 0.8)"],
      borderColor: ["rgba(54,162,235,1)"],
      borderWidth: 1
    },
  ]
}

export const pieData = {
  labels: ["Aprobadas","Maliciosas"],
  datasets : [{
    data: [25450, 12503],
    backgroundColor : ["rgba(64, 177, 111, 1)","rgba(255, 0, 0, 1)"],
    hoverOffset: 4
  }]
}