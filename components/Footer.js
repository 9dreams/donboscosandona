import {
  Container,
  Grid,
  Typography,
  Box,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { motion } from "framer-motion";

export default function Footer2() {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        paddingY: 4,
        paddingBottom: 0,
        borderTop: "5px solid #223E91",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* ANFFAS Information */}
          <Grid
            item
            xs={12}
            md={4}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#223E91", marginBottom: 2 }}
            >
              Anffas ETS/APS San Donà di Piave
            </Typography>
            <Typography
              variant="body2"
              paragraph
              sx={{ display: "flex", alignItems: "center" }}
            >
              <IconButton
                href="https://goo.gl/maps/YOUR_GOOGLE_MAPS_LINK"
                target="_blank"
                sx={{ padding: 0, marginRight: 1 }}
              >
                <LocationOnIcon sx={{ color: "#223E91" }} />
              </IconButton>
              Via Cima XI, n.47
            </Typography>
            <Typography
              variant="body2"
              paragraph
              sx={{ display: "flex", alignItems: "center" }}
            >
              <IconButton
                href="https://goo.gl/maps/YOUR_GOOGLE_MAPS_LINK"
                target="_blank"
                sx={{ padding: 0, marginRight: 1 }}
              >
                <LocationOnIcon sx={{ color: "#223E91" }} />
              </IconButton>
              30027 San Donà di Piave (VE)
            </Typography>

            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#223E91", marginTop: 3 }}
            >
              Contatti
            </Typography>
            <Typography
              variant="body2"
              paragraph
              sx={{ display: "flex", alignItems: "center" }}
            >
              <IconButton
                href="tel:3393101429"
                sx={{ padding: 0, marginRight: 1 }}
              >
                <PhoneIcon sx={{ color: "#223E91" }} />
              </IconButton>
              Tel. Direzione: 339-3101429
            </Typography>
            <Typography
              variant="body2"
              paragraph
              sx={{ display: "flex", alignItems: "center" }}
            >
              <IconButton
                href="tel:3354349556"
                sx={{ padding: 0, marginRight: 1 }}
              >
                <PhoneIcon sx={{ color: "#223E91" }} />
              </IconButton>
              Tel. Segreteria: 335-4349556
            </Typography>

            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#223E91", marginTop: 3 }}
            >
              Orari segreteria
            </Typography>
            <Typography
              variant="body2"
              paragraph
              sx={{ display: "flex", alignItems: "center" }}
            >
              <IconButton sx={{ padding: 0, marginRight: 1 }}>
                <AccessTimeIcon sx={{ color: "#223E91" }} />
              </IconButton>
              Lunedì: 9.00-12.00
            </Typography>
            <Typography
              variant="body2"
              paragraph
              sx={{ display: "flex", alignItems: "center" }}
            >
              <IconButton sx={{ padding: 0, marginRight: 1 }}>
                <AccessTimeIcon sx={{ color: "#223E91" }} />
              </IconButton>
              Giovedì: 9.00-12.00
            </Typography>
            <Typography
              variant="body2"
              paragraph
              sx={{ display: "flex", alignItems: "center" }}
            >
              <IconButton sx={{ padding: 0, marginRight: 1 }}>
                <AccessTimeIcon sx={{ color: "#223E91" }} />
              </IconButton>
              Venerdì: 16.00-18.00
            </Typography>
          </Grid>

          {/* Email and PEC */}
          <Grid
            item
            xs={12}
            md={4}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#223E91", marginBottom: 2 }}
            >
              Email
            </Typography>
            <Typography
              variant="body2"
              paragraph
              sx={{ display: "flex", alignItems: "center" }}
            >
              <IconButton
                href="mailto:anffasonlussandonadipiave@gmail.com"
                sx={{ padding: 0, marginRight: 1 }}
              >
                <EmailIcon sx={{ color: "#223E91" }} />
              </IconButton>
              <motion.a
                href="mailto:anffasonlussandonadipiave@gmail.com"
                style={{ textDecoration: "none", color: "inherit" }}
                whileHover={{ scale: 1.05, color: "#223E91" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                anffasonlussandonadipiave@gmail.com
              </motion.a>
            </Typography>

            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#223E91", marginTop: 3 }}
            >
              Pec
            </Typography>
            <Typography
              variant="body2"
              paragraph
              sx={{ display: "flex", alignItems: "center" }}
            >
              <IconButton
                href="mailto:anffassandona@pec.it"
                sx={{ padding: 0, marginRight: 1 }}
              >
                <EmailIcon sx={{ color: "#223E91" }} />
              </IconButton>
              <motion.a
                href="mailto:anffassandona@pec.it"
                style={{ textDecoration: "none", color: "inherit" }}
                whileHover={{ scale: 1.05, color: "#223E91" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                anffassandona@pec.it
              </motion.a>
            </Typography>
          </Grid>

          {/* Donation & Social Media */}
          <Grid
            item
            xs={12}
            md={4}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {/* IBAN for Donations */}
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#223E91", marginBottom: 2 }}
            >
              Ecco il nostro Iban per le donazioni
            </Typography>
            <Typography
              variant="body2"
              paragraph
              sx={{ wordBreak: "break-all" }}
            >
              IT60V0890436281061015011115
            </Typography>

            {/* 5x1000 Donation */}
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#223E91", marginTop: 3 }}
            >
              Dona il tuo 5x1000
            </Typography>
            <Typography variant="body2" paragraph>
              Sostieni Anffas San Donà di Piave donando il tuo 5xmille, a te non
              costa niente e per noi è importante!
              <br />
              C. F. 93024000270
            </Typography>

            {/* Mercatini Section */}
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#223E91", marginTop: 3 }}
            >
              Mercatini di Natale
            </Typography>
            <Typography variant="body2" paragraph>
              Venite a visitare il nostro mercatino, presso la nostra sede,
              <br />
              Esponiamo i lavoretti dei nostri ragazzi eseguiti durante i nostri
              laboratori
            </Typography>
            <Typography
              variant="body2"
              paragraph
              sx={{ display: "flex", alignItems: "center" }}
            >
              <IconButton sx={{ padding: 0, marginRight: 1 }}>
                <AccessTimeIcon sx={{ color: "#223E91" }} />
              </IconButton>
              Lunedì e Giovedì: 9.30-12.30
            </Typography>

            {/* Social Media Links */}
            <Box sx={{ display: "flex", gap: 2, marginTop: 3 }}>
              <IconButton
                href="https://www.facebook.com/AnffasSanDonadipiave/"
                target="_blank"
                sx={{ color: "#223E91" }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/anffassandona/"
                target="_blank"
                sx={{ color: "#223E91" }}
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
