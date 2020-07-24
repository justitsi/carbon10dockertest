import React from 'react';
import {
    DataTable,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableExpandHeader,
    TableHeader,
    TableBody,
    TableExpandRow,
    TableCell,
    TableExpandedRow,
  } from "carbon-components-react";

const ItemList = ({ rows, headers }) => {
    return (
        <DataTable
        headers={headers}
        rows = {rows}
        render={({
          headers,
          rows,
          getHeaderProps,
          getRowProps,
          getTableProps,
        }) => (
        <TableContainer
            title=""
            description="">
            <Table {...getTableProps()}>
                <TableHead>
                    <TableRow>
                        <TableExpandHeader/>
                        {headers.map(header => (
                            <TableHeader {...getHeaderProps({ header })}>
                                {header.header}
                            </TableHeader>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map(row => (
                  <React.Fragment key={row.id}>
                    <TableExpandRow {...getRowProps({ row })}>
                      {row.cells.map(cell => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableExpandRow>
                    <TableExpandedRow colSpan={headers.length + 1}>
                      <p>More info will come here</p>
                    </TableExpandedRow>
                  </React.Fragment>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        )}
      />
    );
}

export default ItemList