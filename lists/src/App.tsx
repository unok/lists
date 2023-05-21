import { AgGridReact, AgGridReactProps } from '@ag-grid-community/react'
import React from 'react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model'

interface Row {
  id: number
  title: string
}

const gridOptions: AgGridReactProps<Row> = {
  defaultColDef: {
    resizable: true,
    sortable: true,
    filter: true,
  },
  columnDefs: [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Title', field: 'title' },
  ],
  rowData: [
    { id: 1, title: 'Hello, world!' },
    { id: 2, title: 'Another row' },
  ],
}

const App = () => {
  return (
    <div className="ag-theme-alpine" style={{ height: '100%', width: '100%', marginTop: '5px' }}>
      <AgGridReact
        gridOptions={gridOptions}
        modules={[ClientSideRowModelModule]}
        rowData={gridOptions.rowData}
      ></AgGridReact>
    </div>
  )
}

export default App
