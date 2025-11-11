import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export default function ExampleDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Abrir menú lateral</Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Configuraciones</DrawerTitle>
          <DrawerDescription>
            Cambia tus preferencias y ajustes aquí.
          </DrawerDescription>
        </DrawerHeader>

        <div className="p-4">
          <p>Contenido principal del drawer.</p>
        </div>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cerrar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
