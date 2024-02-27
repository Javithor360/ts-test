// Importando la función test desde el archivo de consultas
import { test } from '../utils/queries';

// Definiendo la función getInfo para usarla en AppContext.tsx
export async function getInfo() {
    const res = await test();
    return res.data.res;
}