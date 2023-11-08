import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Appointment Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    'Elvis',
    'Presley',
    '123',
    'Elvis@yahoo.com',
    'November 8, 2023',
  ),
  createData(
    0,
    'Erika',
    'Presley',
    '456',
    'Erika.P@yahoo.com',
    'November 10, 2023',
  ),
  createData(
    0,
    'Nythane',
    'Myonette',
    '789',
    'Myonette@yahoo.com',
    'November 9, 2023',
  ),
  createData(
    0,
    'James',
    'Santos',
    '246',
    'J.santos@yahoo.com',
    'November 12, 2023',
  ),

];

function preventDefault(event) {
  event.preventDefault();
}

export default function Apointments() {
  return (
    <React.Fragment>
      <Title>Recent Appointments</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>First </TableCell>
            <TableCell>Last</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align="right">Visiting Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="Appointments" onClick={preventDefault} sx={{ mt: 3 }}>
        See more Appointments
      </Link>
    </React.Fragment>
  );
}
