import { Container, Typography, Box } from "@mui/material";
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
        position: "relative",
        marginTop: "2rem",
        padding: "3rem",
        textAlign: "justify",
        borderRadius: "1rem",
        backgroundImage: "url(" + props.backgroundImageUrl + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        ...props.sx,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: props.backgroundColor,
          opacity: props.opacity,
          borderRadius: "1rem",
        }}
      />
      <Container
        maxWidth={false}
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backdropFilter: "blur(" + props.blur + ")",
        }}
      />
      <Container sx={{ position: "relative", color: props.color }}>
        {props.title && (
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ color: props.color }}
          >
            {props.title}
          </Typography>
        )}
        {props.subtitle && (
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            sx={{ color: props.color }}
          >
            {props.subtitle}
          </Typography>
        )}

        <TableContainer
          component={Paper}
          sx={{ backgroundColor: "transparent" }}
          elevation={0}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {props.rows[0].map((titolo) => (
                  <TableCell sx={{ color: props.color }}>{titolo}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {props.rows.map(
                (row, i) =>
                  i > 0 && (
                    <TableRow
                      key={i}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      {row.map((content) => (
                        <TableCell sx={{ color: props.color }}>
                          {content}
                        </TableCell>
                      ))}
                    </TableRow>
                  )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Container>
  );
}

MyTable.defaultProps = {
  color: "black",
};
