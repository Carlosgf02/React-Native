import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

export function ListadoScreen() {
  interface Modelo {
    id_modelo: number; // Se usa para eliminar correctamente
    nombre: string;
    tipo: string;
    precio: number;
  }

  const [datos, setDatos] = useState<Modelo[]>([]);

  // Cargar los modelos al iniciar la pantalla
  useEffect(() => {
    async function getModelos() {
      try {
        const response = await fetch("http://localhost:3000/api/modelos", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Datos recibidos:", data.datos); // Verifica que `id` está presente
          setDatos(data.datos);
        } else {
          console.error("Error al obtener modelos");
        }
      } catch (error) {
        console.error("Error al obtener modelos:", error);
      }
    }

    getModelos();
  }, []);

  // Función para eliminar un modelo por su ID
  const handleDelete = async (id: number) => {
    if (!id) {
      console.error("Error: ID del modelo es undefined");
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:3000/api/modelos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        alert("Modelo eliminado correctamente");
        setDatos(datos.filter((modelo) => modelo.id_modelo !== id)); // Actualiza la lista tras eliminar
      } else {
        const errorData = await response.json();
        console.error("Error al eliminar:", errorData);
        alert("Error al eliminar: " + errorData.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error en la eliminación");
    }
  };
  

  return (
    <ScrollView>
  {datos.map((modelo) => (
    <Card key={modelo.id_modelo} className="p-5 rounded-lg max-w-[360px] m-3">
      <Text className="text-sm font-normal mb-2 text-typography-700">
        Nombre: {modelo.nombre}
      </Text>
      <Heading size="md" className="mb-4">
        Tipo: {modelo.tipo}
      </Heading>
      <Text className="text-sm font-normal text-typography-700 mb-2">
        Precio: {modelo.precio}
      </Text>
      
      {/* Botón para borrar */}
      <Button className="w-fit self-end mt-4" size="sm" onPress={() => handleDelete(modelo.id_modelo)}>
        <ButtonText>Borrar</ButtonText>
      </Button>
    </Card>
  ))}
</ScrollView>

  );
}
