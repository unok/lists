import React from 'react'
import DataGrid, { Column } from 'react-data-grid'

interface Row {
  id: number
  title: string
}

const columns: Column<Row>[] = [
  { key: 'id', name: 'ID', width: 100 },
  { key: 'title', name: 'title', width: 300 },
]

const rows: Row[] = [
  { id: 1, title: 'Hello, world!' },
  { id: 2, title: 'Another row' },
]

function App() {
  return (
    <div className="App">
      <DataGrid columns={columns} rows={rows} />
    </div>
  )
}

export default App
