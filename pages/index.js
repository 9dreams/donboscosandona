import Navbar2 from "@/components/Navbar2"; // Importa il componente Navbar2
import Footer2 from "@/components/Footer2"; // Importa il componente Footer2
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className=" min-h-screen">
      <Navbar2 />
      
    </div>
  );
}