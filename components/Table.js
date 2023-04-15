import { Container, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function MyTable(props) {
  return (
    <Container
      maxWidth={props.maxWidth}
      sx={{
        marginTop: "2rem",
        padding: "3rem",
        textAlign: "justify",
        borderRadius: "1rem",
        ...props.sx,
      }}
    >
      {props.title && (
        <Typography variant="h4" component="h1" gutterBottom>
          {props.title}
        </Typography>
      )}
      {props.subtitle && (
        <Typography variant="h5" component="h1" gutterBottom>
          {props.subtitle}
        </Typography>
      )}

      <TableContainer
        component={Paper}
        sx={{ backgroundColor: props.backgroundColor }}
        elevation={props.elevation}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {props.rows[0].map((titolo) => (
                <TableCell>{titolo}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.map((row, i) => (i>0 && 
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {row.map((content) => (
                  <TableCell>{content}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

MyTable.defaultProps = {
  elevation: 0,
};
