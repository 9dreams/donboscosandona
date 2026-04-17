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

        {/* Versione Desktop: Tabella standard */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <TableContainer
            component={Box}
            sx={{ backgroundColor: "transparent" }}
            elevation={0}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {props.rows[0].map((titolo, idx) => (
                    <TableCell key={idx} sx={{ color: props.color, fontWeight: 'bold' }}>{titolo}</TableCell>
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
                        {row.map((content, idx) => (
                          <TableCell key={idx} sx={{ color: props.color }}>
                            {content}
                          </TableCell>
                        ))}
                      </TableRow>
                    )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* Versione Mobile: Sezioni impilate */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          {/* Prima parte (es. Mattino) */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ color: props.color, mb: 1, borderBottom: '1px solid', borderColor: props.color, pb: 1 }}>
              {props.rows[0][0]}
            </Typography>
            <Table size="small">
              <TableBody>
                {props.rows.map((row, i) => i > 0 && row[0] && (
                  <TableRow key={i}>
                    <TableCell sx={{ color: props.color, border: 0, padding: '8px 4px', fontWeight: 'bold', width: '80px' }}>
                      {row[0]}
                    </TableCell>
                    <TableCell sx={{ color: props.color, border: 0, padding: '8px 4px' }}>
                      {row[1]}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>

          {/* Seconda parte (es. Pomeriggio) - Solo se ci sono almeno 3 colonne */}
          {props.rows[0].length >= 3 && (
            <Box>
              <Typography variant="h6" sx={{ color: props.color, mb: 1, borderBottom: '1px solid', borderColor: props.color, pb: 1 }}>
                {props.rows[0][2]}
              </Typography>
              <Table size="small">
                <TableBody>
                  {props.rows.map((row, i) => i > 0 && row[2] && (
                    <TableRow key={i}>
                      <TableCell sx={{ color: props.color, border: 0, padding: '8px 4px', fontWeight: 'bold', width: '80px' }}>
                        {row[2]}
                      </TableCell>
                      <TableCell sx={{ color: props.color, border: 0, padding: '8px 4px' }}>
                        {row[3]}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          )}
        </Box>
      </Container>
    </Container>
  );
}

MyTable.defaultProps = {
  color: "black",
};
