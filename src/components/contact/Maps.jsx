import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

function MyMap() {
  return (
    <Map center={[0, 0]} zoom={2} style={{ height: "100px", width: "100px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[9.915085533193173, -84.0457210670351]}>
        <Popup>Oficina Central - costaRica@grupocastrofallas.com</Popup>
      </Marker>
      <Marker position={[13.46912079583891, -85.2733906614443]}>
        <Popup>Oficina Nicaragua - nicaragua@grupocastrofallas.com</Popup>
      </Marker>
      <Marker position={[39.54230836449892, -101.84087340935952]}>
        <Popup>Oficina USA - usa@grupocastrofallas.com</Popup>
      </Marker>
      <Marker position={[-10.94794924607444, -74.74247102841893]}>
        <Popup>Oficina Perú - peru@grupocastrofallas.com</Popup>
      </Marker>
      <Marker position={[34.70672549614855, 103.11684637190575]}>
        <Popup>Oficina China - china@grupocastrofallas.com</Popup>
      </Marker>
      <Marker position={[-8.482441641225016, -56.40636426171537]}>
        <Popup>Oficina Brasil - brasil@grupocastrofallas.com</Popup>
      </Marker>
      <Marker position={[24.178908261467836, -103.46999241292284]}>
        <Popup>Oficina México - mexico@grupocastrofallas.com</Popup>
      </Marker>
      <Marker position={[15.737811820859697, -90.38080905497554]}>
        <Popup>Oficina Guatemala - guatemala@grupocastrofallas.com</Popup>
      </Marker>
      <Marker position={[8.566968471927227, -80.11959503022514]}>
        <Popup>Oficina Panamá - panama@grupocastrofallas.com</Popup>
      </Marker>
      <Marker position={[36.66815866487394, 138.3889060978813]}>
        <Popup>Oficina Japón - japon@grupocastrofallas.com</Popup>
      </Marker>
      <Marker position={[13.697650453973681, -89.21880515911914]}>
        <Popup>Oficina El Salvador - salvador@grupocastrofallas.com</Popup>
      </Marker>
      <Marker position={[22.912290355139113, 78.99855934480858]}>
        <Popup>Oficina India - india@grupocastrofallas.com</Popup>
      </Marker>
      <Marker position={[51.131320813684, 10.23112667820357]}>
        <Popup>Oficina Alemania - alemania@grupocastrofallas.com</Popup>
      </Marker>
      <Marker position={[3.4708146336733594, -73.78032484349183]}>
        <Popup>Oficina Colombia - colombia@grupocastrofallas.com</Popup>
      </Marker>
      <Marker position={[39.598872488934305, -3.6322701236618204]}>
        <Popup>Oficina España - espana@grupocastrofallas.com</Popup>
      </Marker>
      <Marker position={[52.19173769305382, 5.706617182549954]}>
        <Popup>Oficina Holanda - holanda@grupocastrofallas.com</Popup>
      </Marker>
      <Marker position={[14.894902281974526, -87.00326180265341]}>
        <Popup>Oficina Honduras - honduras@grupocastrofallas.com</Popup>
      </Marker>
      <Marker position={[46.52166759807105, 2.235425022150667]}>
        <Popup>Oficina Francia - francia@grupocastrofallas.com</Popup>
      </Marker>
      <Marker position={[-4.513414852872824, 121.88931514717682]}>
        <Popup>Oficina Indonesia - indonesia@grupocastrofallas.com</Popup>
      </Marker>
      <Marker position={[23.459617189947128, 121.25712937200021]}>
        <Popup>Oficina Taiwán - taiwan@grupocastrofallas.com</Popup>
      </Marker>
      <Marker position={[15.385970263351584, 100.66310951135716]}>
        <Popup>Oficina Thailandia - thailandia@grupocastrofallas.com</Popup>
      </Marker>
      <Marker position={[-30.85430592586592, 24.1864349179294]}>
        <Popup>Oficina Sudáfrica - sudafrica@grupocastrofallas.com</Popup>
      </Marker>
      <Marker position={[-23.221502177920815, -58.4618386170718]}>
        <Popup>Oficina Paraguay - paraguay@grupocastrofallas.com</Popup>
      </Marker>
      <Marker position={[-35.140772366879006, -66.0523202719648]}>
        <Popup>Oficina Argentina - argentina@grupocastrofallas.com</Popup>
      </Marker>
      <Marker position={[-26.49448009031793, -70.18319905977701]}>
        <Popup>Oficina Chile - chile@grupocastrofallas.com</Popup>
      </Marker>
      <Marker position={[60.489970878222174, -110.59295118967651]}>
        <Popup>Oficina Canadá - canada@grupocastrofallas.com</Popup>
      </Marker>
      <Marker position={[43.09309490736015, 12.529588815253362]}>
        <Popup>Oficina Italia - italia@grupocastrofallas.com</Popup>
      </Marker>
      <Marker position={[-1.465947166784015, -78.28522334019827]}>
        <Popup>Oficina Ecuador - ecuador@grupocastrofallas.com</Popup>
      </Marker>
      <Marker position={[36.34371354642492, 127.89090733239382]}>
        <Popup>Oficina Korea - korea@grupocastrofallas.com</Popup>
      </Marker>
    </Map>
  );
}

export default MyMap;
