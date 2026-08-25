# Plantilla de requerimientos del proyecto (Clase 06)

> 📋 **Este documento es la INSCRIPCIÓN al hackathon.** Cada equipo lo copia a su repositorio (como
> `REQUERIMIENTOS.md`) y lo entrega lleno en la **Clase 06**.
> **Equipo que no entregue sus requerimientos NO participa por el premio.**

El **PM lidera** esta reunión y es el canal con el instructor (que hace de cliente) para dudas.

---

## 1. Identidad del equipo

- **Nombre del equipo:GAES-5**
- **Nombre del proyecto: SegurIA**
- **Integrantes y roles:**
  | Integrante | Rol | Responsable de |
  |-----------|-----|----------------|
  |Laura Quiroz | ⚙️ DevOps | Repo, Git, CI/CD, despliegue |
  |Johan Sanchez | 🎨 Frontend | Interfaz, estilos, interacción |
  |Kaleth García | 🔧 Backend | Servidor, API, lógica + BD |
  |Jorlan Hernandez | 🧭 PM | Canal con el cliente, QA, entregas, desbloquear al equipo |
  |Julian Monsalve | *(otros integrantes)* | Comparten Frontend/Backend según el tamaño del equipo |

> **Datos** y la **feature clave** las conoce y las trabaja **todo el equipo** (son la estructura del
> proyecto, no un rol aparte).

---

## 2. Visión del proyecto

**La idea en una frase: SegurIA es una plataforma colaborativa que permite a los ciudadanos reportar y consultar zonas de riesgo en tiempo real mediante reseñas y alertas de la comunidad.** _..._

- **¿Para quién es? (usuarios): Ciudadanos, estudiantes, turistas y cualquier persona que desee conocer el nivel de seguridad de una zona antes de desplazarse.**
- **¿Qué problema resuelve o qué permite hacer?: Las personas no cuentan con información inmediata sobre situaciones de inseguridad en determinados lugares. SegurIA permite que los mismos usuarios compartan reportes y reseñas para advertir a otros en tiempo real.**
- **Visión (a dónde quieren llevarlo): Convertirse en una aplicación comunitaria de referencia para mejorar la prevención y la toma de decisiones sobre movilidad y seguridad urbana.**
- **Modelo: B2C (usuarios finales)** 
- **¿Cómo generaría valor o dinero? Inicialmente será un proyecto académico. En una versión comercial podría generar ingresos mediante alianzas con municipios, publicidad local y servicios premium de analítica.** (si aplica): _..._

---

## 3. Funcionalidades (alcance)

Marca lo que SÍ entra en el MVP (lo mínimo para la Demo Day) y lo que sería "extra si da tiempo".

| Funcionalidad | ¿MVP? | ¿Extra? | Responsable |
|---------------|:-----:|:-------:|-------------|
|Registro de usuarios |✅ | |Backend |
|Inicio de sesión |✅ | |Backend |
|Publicar una reseña de una zona |✅ | |Frontend + Backend |
|Ver reseñas en tiempo real |✅ | |Backend |

> Regla: si algo no está en el MVP, **no se construye hasta terminar el MVP**. Primero lo esencial.

---

## 4. Requerimientos técnicos (cómo lo van a hacer)

Deben cubrir **los mínimos del curso**. Marquen qué usarán:

- [ ] **Frontend:** HTML semántico + CSS + JavaScript (DOM).
- [ ] **Backend:** Node.js + Express (API con rutas).
- [ ] **Base de datos:** _¿cuál? (SQLite / PostgreSQL / MySQL / otra)_ — listar tablas abajo.
- [ ] **Feature clave:** _¿cuál es la funcionalidad estrella del proyecto?_
- [ ] **Tiempo real (Socket.IO):** ¿lo usarán? _(suma puntos)_
- [ ] **Autenticación:** ¿login con contraseña? ¿sesiones?
- [ ] **Otra técnica / API externa:** _¿cuál?_

**Tablas de datos previstas (borrador):**
```
usuarios(id, nombre, correo, clave_hash, ...)
...
```

---

## 5. Requerimientos de despliegue

- **Frontend se desplegará en:** _(GitHub Pages / Netlify / Vercel / …)_
- **Backend se desplegará en:** _(Render / Railway / Fly.io / VPS / … — ver [../DESPLIEGUE-CICD.md](../DESPLIEGUE-CICD.md))_
- **Base de datos:** _(archivo SQLite junto a la app / servicio gestionado / …)_
- **Dominio:** _(subdominio gratis del host / dominio propio)_
- **CI/CD:** ¿cada `push` actualiza el sitio? (debe ser **sí**)
- **Link del proyecto (cuando exista):** _..._

### Costos estimados de servidores
Aunque usemos capas gratuitas para el curso, estimen qué costaría en "producción real":

| Recurso | Proveedor / plan | Costo estimado (mes) |
|---------|------------------|----------------------|
| Hosting del backend | | |
| Base de datos | | |
| Dominio | | (anual) |
| **Total estimado** | | |

---

## 6. Plan de trabajo (grueso)

| Clases | Qué esperamos terminar |
|--------|------------------------|
| 07–08 (backend) | Servidor + API base |
| 09–10 (datos) | Datos que persisten |
| 11–13 (feature / auth / tiempo real) | La feature clave del proyecto |
| 14–15 (integración) | Todo junto + desplegado |
| 16 | Demo lista y ensayada |

---

## 7. Riesgos y dudas para el cliente (las lleva el PM)

- **Lo que más nos preocupa:** _..._
- **Preguntas para el instructor (cliente):** _(las hace el PM)_

---

> ✅ **Entregable de la Clase 06 (inscripción):** este archivo lleno y subido al repo del equipo
> (commit del PM o del DevOps). Sin él, el equipo no participa por el premio.
