![Social Image](/assets/images/SocialImage.png)

# <img src="https://raw.githubusercontent.com/TeenBiscuits/MandaRef/refs/heads/main/assets/images/icon.png" alt="" align="left" width="40" height="40"> **MandaRef**

[![React](https://img.shields.io/badge/React_Native-20232a?logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-1C2024?logo=expo&logoColor=white)](https://expo.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Inditex-API](https://img.shields.io/badge/Inditex_API-black?logo=zara&logoColor=white)](https://developer.inditex.com/)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](./LICENSE.md)
[![Stars](https://img.shields.io/github/stars/TeenBiscuits/MandaRef.svg)](https://github.com/TeenBiscuits/MandaRef)


> ¿Buscando una prenda 💅🏻🛍️💕 y no sabes la referencia 😭? Con una descripción o una simple captura la tienes 🤩😎.

El presente proyecto surge de la idea de que los usuarios, puedan encontrar la ropa que ven en un vídeo de Tik Tok o cualquier otra red social, tan solo con una captura de pantalla o buscando por texto con una descripción ded lo que quieren. 
Para ello, hemos creado una aplicación de móvil, apoyándonos en la [API de Visual Search de Inditex](https://developer.inditex.com/apimktplc/web/products/pubapimkt/protocols/REST/apis/visual-search/overview), en la cual, mediante una imagen o un texto, encontramos esa misma prenda y/o prendas relacionadas con ella.

## Tablas de contenidos

- [ **MandaRef**](#-mandaref)
	- [Tablas de contenidos](#tablas-de-contenidos)
	- [Descripción](#descripción)
	- [Instalación](#instalación)
	- [Tecnologías usadas](#tecnologías-usadas)
	- [Autores](#autores)
	- [Licencia](#licencia)
		- [Disclaimer para que no nos denuncien](#disclaimer-para-que-no-nos-denuncien)

## Descripción

La aplicación ha sido pensada para solucionar la problemática que le surge a las persona que, viendo cualquier red social o a una persona de la calle, les gusta alguna prenda de ropa que observan o el conjunto global y luego nunca llegan a saber dónde poder comprarlo. 
Entonces, con nuestra aplicación, solucionamos el problema dando la posibilidad a los usuarios de la misma para poder encontrar todo tipo de prendas relacionadas y que así, puedan confeccionar su outfit deseado.

## Instalación
Para la instalación del proyecto en un entorno local, necesitaremos seguir los siguientes pasos:

**1. Instalar Node.js desde la página oficial:** [Node](https://nodejs.org/es/download) o, si lo haces en Linux, puedes hacerlo de la siguiente manera: 

  1. Actualizar el sistema: Primero, es una buena idea actualizar los paquetes de tu sistema. Abre una terminal y ejecuta el siguiente comando:

```bash
	sudo apt update
	sudo apt upgrade
```

  2. **Instalar Node.js usando el repositorio oficial:** Puedes instalar la última versión estable de Node.js desde los repositorios oficiales de NodeSource. Ejecuta los siguientes comandos para hacerlo:

```bash
	curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - 
	sudo apt install -y nodejs
```

	Esto instalará Node.js y npm (el gestor de paquetes de Node.js).

  3. **Verificar la instalación:** Después de la instalación, puedes verificar que Node.js y npm se instalaron correctamente ejecutando:

```bash
	node -v
	npm -v
```

**2. Instalar Expo Go en el móvil, para poder visualizar la aplicación o conectarse con el navegador al servidor de la aplicación en el puerto especificado:**

   1. **Desde ExpoGo**: escanear el QR que se generará al arrancar la aplicación.

   2. **Desde el navegador**: http://10.20.31.102:8081

**3. Clonar el repositorio de GitHub, donde está el código del proyecto:**
Para ello, lo podremos hacer directamente desde la interfaz de GitHub o por línea de comandos siguiendo los siguientes pasos:

```bash
	git clone https://github.com/TeenBiscuits/MandaRef.git
```

**4. API Key:**

En los archivos de la carpeta [`/hooks/*`](./hooks/) modifica el valor de ``TOKEN_GOES_HERE`` con un ID token obtenido mediante OAuth 2.0 para la API de Inditex. Para más información [Manual de Inditex](https://developer.inditex.com/apimktplc/web/get-started/integrate-with-apis/promote-to-production).

**5. Arrancar la aplicación:**

```bash
	cd <ruta_repositorio>
	npm install
	npm start
```

**6. Dependencias:**

Esta aplicación está desarrollada con React Native y Expo, junto con varias librerías esenciales para la interfaz, navegación y funcionalidad.

🔹 **Principales dependencias**:

|                                          *Dependencias*                                          |                         *Descripción*                         |
| :----------------------------------------------------------------------------------------------: | :-----------------------------------------------------------: |
|                                   [`expo`](https://expo.dev/)                                    |       Framework para desarrollar apps en React Native.        |
|                                  [`react`](https://react.dev/)                                   |             Biblioteca base para construir la UI.             |
|                            [`react-native`](https://reactnative.dev/)                            |       Framework para desarrollar apps móviles nativas.        |
|                   [`expo-router`](https://docs.expo.dev/router/introduction/)                    | Sistema de enrutamiento basado en archivos para React Native. |
|                    [`@react-navigation/native`](https://reactnavigation.org/)                    |                 Navegación en la aplicación.                  |
|    [`@react-navigation/bottom-tabs`](https://reactnavigation.org/docs/bottom-tab-navigator/)     |           Navegación mediante pestañas inferiores.            |
|   [`react-native-gesture-handler`](https://www.npmjs.com/package/react-native-gesture-handler)   |              Manejo avanzado de gestos táctiles.              |
|         [`react-native-reanimated`](https://docs.swmansion.com/react-native-reanimated/)         |             Animaciones fluidas en React Native.              |
|        [`react-native-screens`](https://github.com/software-mansion/react-native-screens)        |          Optimización de rendimiento en navegación.           |
| [`react-native-safe-area-context`](https://github.com/AppAndFlow/react-native-safe-area-context) |           Manejo de áreas seguras en iOS y Android.           |
|         [`expo-splash-screen`](https://docs.expo.dev/versions/latest/sdk/splash-screen/)         |       Configuración de pantalla de carga personalizada.       |
|            [`expo-status-bar`](https://docs.expo.dev/versions/latest/sdk/status-bar/)            |        Control de la barra de estado en iOS y Android.        |

🎨 **Estilos y UI**

|                              *Dependencias*                              |                *Descripción*                 |
| :----------------------------------------------------------------------: | :------------------------------------------: |
|                [`tailwindcss`](https://tailwindcss.com/)                 |          Framework de estilos CSS.           |
|               [`nativewind`](https://www.nativewind.dev/)                |  Adaptación de Tailwind para React Native.   |
|           [`@expo/vector-icons`](https://icons.expo.fyi/Index)           |   Íconos personalizables en la aplicación.   |
|   [`expo-blur`](https://docs.expo.dev/versions/latest/sdk/blur-view/)    |        Efectos de desenfoque para UI.        |
|      [`expo-font`](https://docs.expo.dev/versions/latest/sdk/font/)      |      Manejo de fuentes personalizadas.       |
| [`expo-system-ui`](https://docs.expo.dev/versions/latest/sdk/system-ui/) | Control avanzado de la interfaz del sistema. |

🔗 **Funcionalidad extra**

|                                     *Dependencias*                                     |                *Descripción*                |
| :------------------------------------------------------------------------------------: | :-----------------------------------------: |
|          [`expo-haptics`](https://docs.expo.dev/versions/latest/sdk/haptics/)          |        Feedback háptico (vibración).        |
|          [`expo-linking`](https://docs.expo.dev/versions/latest/sdk/linking/)          | Manejo de enlaces profundos (deep linking). |
|      [`expo-web-browser`](https://docs.expo.dev/versions/latest/sdk/webbrowser/)       |  Apertura de enlaces en navegador externo.  |
| [`react-native-webview`](https://github.com/react-native-webview/react-native-webview) |  Visualización de contenido web en la app.  |

🛠️ **Herramientas de desarrollo**

|                       *Dependencias*                       |               *Descripción*                |
| :--------------------------------------------------------: | :----------------------------------------: |
|      [`typescript`](https://www.typescriptlang.org/)       |     Sistema de tipos para JavaScript.      |
|              [`eslint`](https://eslint.org/)               |   Linter para mantener un código limpio.   |
|                [`jest`](https://jestjs.io/)                |           Framework de testing.            |
| [`jest-expo`](https://docs.expo.dev/develop/unit-testing/) | Configuración de Jest para proyectos Expo. |
|             [`prettier`](https://prettier.io/)             |           Formateador de código.           |

## Tecnologías usadas
Para la realización de del presente proyecto, hemos utilizado tres tecnologías que hemos considerado que se adaptarían perfectamente a las necesidades requeridas:
- React Native
- Expo
- Tailwinds

## Autores
- Nicolás Villar Philippon - @Nicovph
- Andrés Reinaldo Cid - @areinaldo / @reinalx
- Pablo Portas López - @TeenBiscuits
- Santiago Neira Sejean - @sneiira

## Licencia

> Puedes comprobar la lista completa de licencias en [LICESES](/LICENSES.txt).

Copyright 2025 Nicolás Villar Philippon, Andrés Reinaldo Cid, Pablo Portas López, Santiago Neira Sejean

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

### Disclaimer para que no nos denuncien

Todas las imágenes de marca usadas en esta app son propiedad intelectual del grupo Inditex, MandaRef no esta vinculado de ninguna manera con el grupo Inditex. Respetamos fuertemente la propiedad intelectual corporativa.
