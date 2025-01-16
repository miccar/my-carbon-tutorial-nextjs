import React, { useState } from 'react';
import { Modal } from '@carbon/react';
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
} from '@carbon/react';
const RepoTable = ({ rows, headers }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleRowClick = (rowId) => {
    //alert(`Row clicked: ${rowId}`);
    openModal();
  };

  return (
    <>
      <Modal
        open={isOpen}
        modalHeading="Example Modal"
        modalLabel="Optional Label"
        primaryButtonText="Confirm"
        secondaryButtonText="Cancel"
        onRequestClose={closeModal} // Handles modal close (X or background click)
        onRequestSubmit={() => {
          alert('Confirmed!');
          closeModal(); // Close the modal after submission
        }}>
        <p>Here is some content inside the modal.</p>
      </Modal>
      <DataTable
        rows={rows}
        headers={headers}
        render={({
          rows,
          headers,
          getHeaderProps,
          getRowProps,
          getTableProps,
        }) => (
          <TableContainer
            title="Carbon Repositories"
            description="A collection of public Carbon repositories.">
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  <TableExpandHeader />
                  {headers.map((header) => (
                    <TableHeader
                      key={header.key}
                      {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <React.Fragment key={row.id}>
                    <TableExpandRow {...getRowProps({ row })}>
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableExpandRow>
                    <TableExpandedRow colSpan={headers.length + 1}>
                      <p onClick={() => handleRowClick(row.id)}>
                        Row description
                      </p>
                    </TableExpandedRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      />
    </>
  );
};

export default RepoTable;
