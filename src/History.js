import React from 'react';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


// Generate Order Data
function createData(id, date, name,emails, course, details) {
  return { id, date, name,emails, course, details };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Pooja Kapare', 'kaparepooja@gmail.com','CDS July 2018 as student', 'Added '),
  createData(1, '16 Mar, 2019', 'Vrushali Limaye', 'limayevrushali@gmail.com','NDA june 2000', 'Deleted '),
  createData(2, '16 Mar, 2019', 'Ameya Bhave', 'bhave@gmail.com', 'NDA June 2017','Added'),
  
];




export default function History() {
 
  return (
    <React.Fragment>
      
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Course</TableCell>
            <TableCell align="right">Detail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.emails}</TableCell>
              <TableCell>{row.course}</TableCell>
              <TableCell align="right">{row.details}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     
    </React.Fragment>
  );
}