"use client"
import { useState } from "react";
import QRCode from "qrcode.react"; // Importation par défaut

export default function QRCodeGenerator() {
  const [text, setText] = useState("https://example.com");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Générateur de code QR</h1>
      
      {/* Input pour saisir le texte ou l'URL */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Entrez le texte ou l'URL"
        style={{ padding: "10px", width: "300px" }}
      />
      
      <div style={{ marginTop: "20px" }}>
        {/* Générer le code QR */}
        <QRCode
          value={text}
          size={256} // taille du QR code
          bgColor={"#ffffff"} // couleur de fond
          fgColor={"#000000"} // couleur du QR code
          level={"H"} // niveau de correction d'erreur
        />
      </div>
    </div>
  );
}
