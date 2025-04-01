# 🎉 Dorian's Party

**Dorian's Party** es una invitación digital interactiva con un sistema ligero de confirmación de asistencia (RSVP). Cuenta con un panel de administración con gráficas para visualizar confirmaciones, balance entre familia y amigos, y el número de familias confirmadas. Ideal para llevar el control de invitados de forma visual y divertida.

## 🚀 Tech Stack

Este proyecto fue desarrollado usando:

- **React 19**
- **Tailwind CSS 4**
- **Firebase** (autenticación y base de datos)
- **Vite**
- **Chart.js + react-chartjs-2**
- **Framer Motion**
- **React Confetti** (🎊 porque sí)
- **SweetAlert2**

> Bonus: tipado estricto con TypeScript y control de calidad con ESLint + Stylelint.

## ⚙️ Instalación y uso

Requiere [pnpm](https://pnpm.io/) instalado globalmente.

```bash
pnpm install
pnpm run dev
```

## 🔐 Variables de entorno

Crea un archivo .env en la raíz del proyecto con los siguientes valores:

```env
VITE_APP_FIREBASE_API_KEY=...
VITE_APP_FIREBASE_AUTH_DOMAIN=...
VITE_APP_FIREBASE_PROJECT_ID=...
VITE_APP_FIREBASE_STORAGE_BUCKET=...
VITE_APP_FIREBASE_MESSAGING_SENDER_ID=...
VITE_APP_FIREBASE_APP_ID=...
VITE_APP_HOST_1=...
VITE_APP_HOST_2=...
```

## 🧪 Tests

Este proyecto no cuenta aún con pruebas automatizadas. Las confirmaciones dependen exclusivamente del juicio de los invitados (y su amor por el festejado).

## 📊 Panel de administración

Una vez autenticado, puedes acceder a un dashboard que muestra:

- Total de invitados confirmados
- Distribución por tipo (Familia vs Amigos)
- Conteo de grupos/familias confirmadas
- Animaciones con confeti porque cada RSVP es una victoria

## 📄 Licencia

Este proyecto está licenciado bajo la
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0).](https://creativecommons.org/licenses/by-nc-sa/4.0/)

- Puedes compartir, copiar y adaptar el contenido siempre que:
- Des crédito al autor.
- No lo uses con fines comerciales.

Compartas cualquier modificación bajo la misma licencia.

## ✨ Autor

Desarrollado con cariño y mucho frontend por [@MtzAlfonso](https://github.com/MtzAlfonso) (J. Alfonso Martínez).
