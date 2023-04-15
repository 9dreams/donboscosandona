import { Container, Typography, CardMedia } from "@mui/material";
import styles from "/components/Paragraph.module.css";

export default function Paragraph(props) {
  return (
    <Container
      className={styles.scritte2}
      maxWidth={props.maxWidth}
      sx={{
        marginTop: "2rem",
        padding: "3rem",
        textAlign: "justify",
        backgroundColor: props.backgroundColor,
        borderRadius: "1rem",
        ...props.sx,
      }}
    >
      {props.topImageUrl && (
        <CardMedia
          component="img"
          image={props.topImageUrl}
          width="100%"
          sx={{
            marginBottom: "3rem",
          }}
        />
      )}
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
      <Container
        disableGutters={true}
        className={styles.scritte}
        sx={{
          maxWidth: false,
          marginTop: "2rem",
          columnCount: props.columnCount,
          columnGap: "3rem",
        }}
      >
        <Typography variant="body1" gutterBottom>
          {props.avatarImageUrl && (
            <CardMedia
              component="img"
              image={props.avatarImageUrl}
              sx={{
                float: "left",
                marginTop: "-1rem",
                marginRight: "1rem",
                width: "8rem",
                borderRadius: "50%",
              }}
            />
          )}
          {props.leftImageUrl && (
            <CardMedia
              component="img"
              image={props.leftImageUrl}
              sx={{
                float: "left",
                marginRight: "1rem",
                marginBottom: "1rem",
                width: "20rem",
                borderRadius: "5px",
              }}
            />
          )}
          {props.rightImageUrl && (
            <CardMedia
              component="img"
              image={props.rightImageUrl}
              sx={{
                float: "right",
                marginLeft: "1rem",
                marginBottom: "1rem",
                width: "20rem",
                borderRadius: "5px",
              }}
            />
          )}
          {props.children}
        </Typography>
      </Container>
    </Container>
  );
}

Paragraph.defaultProps = {
  columnCount: 1,
  maxWidth: "lg",
  backgroundColor: false,
};
