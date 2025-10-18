// components/SafetyWarning.tsx
import React from "react"

interface SafetyWarningProps {
  countryName: string
}

export function SafetyWarning({ countryName }: SafetyWarningProps) {
  return (
    <div
      style={{
        borderLeft: "4px solid #E53E3E",
        background: "#FFF5F5",
        padding: "1rem",
        margin: "1.5rem 0",
        color: "#742A2A",
      }}
    >
      <strong>⚠️ Warning:</strong> We just checked and unfortunately{" "}
      {countryName} is currently considered unsafe for travel.  
      For the time being we recommend you not travel here.
    </div>
  )
}
