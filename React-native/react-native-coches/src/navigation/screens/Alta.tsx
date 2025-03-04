import { Button, ButtonText } from "@/components/ui/button";
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import {
  useNavigation,
} from '@react-navigation/native';
import { Input, InputField } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import { AlertCircleIcon } from "@/components/ui/icon";
import { useState } from "react";
import React from "react";

function AltaScreen() {
  const navigation = useNavigation();
  const [datos, setDatos] = useState({
    nombre: "",
    tipo: "",
    precio: "",
  });

  const [datosValidos, setDatosValidos] = useState({
    nombre: false,
    tipo: false,
    precio: false,
  });

  const handleSubmit = async () => {
    if (validarDatos()) {
      try {
        const response = await fetch("http://localhost:3000/api/modelos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datos),
        });

        if (response.ok) {
          const respuesta = await response.json();
          alert(respuesta.mensaje);
          if (respuesta.ok) {
            navigation.goBack();
          }
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error:" + error);
      }
    }
  };

  function validarDatos() {
    const nombreValido = datos.nombre.trim() !== "";
    const tipoValido = datos.tipo.trim() !== "";
    const precioValido = !isNaN(Number(datos.precio)) && Number(datos.precio) > 0;

    setDatosValidos({
      nombre: !nombreValido,
      tipo: !tipoValido,
      precio: !precioValido,
    });

    return nombreValido && tipoValido && precioValido;
  }

  return (
    <VStack className="w-full max-w-[300px] rounded-md border border-background-200 p-4">
      <FormControl isInvalid={datosValidos.nombre} size="md">
        <FormControlLabel>
          <FormControlLabelText>Nombre</FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1" size="md">
          <InputField type="text" placeholder="nombre" value={datos.nombre} onChangeText={(text) => setDatos({ ...datos, nombre: text })} />
        </Input>
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>El nombre del modelo es obligatorio</FormControlErrorText>
        </FormControlError>
      </FormControl>

      <FormControl isInvalid={datosValidos.tipo} size="md">
        <FormControlLabel>
          <FormControlLabelText>Tipo</FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1" size="md">
          <InputField type="text" placeholder="tipo" value={datos.tipo} onChangeText={(text) => setDatos({ ...datos, tipo: text })} />
        </Input>
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>El tipo del modelo es obligatorio</FormControlErrorText>
        </FormControlError>
      </FormControl>

      <FormControl isInvalid={datosValidos.precio} size="md">
        <FormControlLabel>
          <FormControlLabelText>Precio</FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1" size="md">
          <InputField type="text" placeholder="precio" value={datos.precio} onChangeText={(text) => setDatos({ ...datos, precio: text })} />
        </Input>
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>El precio debe ser mayor a 0</FormControlErrorText>
        </FormControlError>
      </FormControl>

      <Button className="w-fit self-end mt-4" size="sm" onPress={handleSubmit}>
        <ButtonText>Aceptar</ButtonText>
      </Button>
    </VStack>
  );
}

export default AltaScreen;
