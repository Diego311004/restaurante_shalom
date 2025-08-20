# Despliegue en GitHub Pages

## Pasos para desplegar el proyecto Restaurante Shalom

### 1. Preparación del repositorio

1. **Crear un repositorio en GitHub** (si no lo tienes ya):
   - Ve a [GitHub](https://github.com)
   - Crea un nuevo repositorio llamado `restaurante_shalom`
   - **NO** inicialices con README, .gitignore o licencia

2. **Subir el código a GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/Diego311004/restaurante_shalom.git
   git push -u origin main
   ```

### 2. Instalar dependencias

En la carpeta del proyecto, ejecuta:
```bash
npm install
```

### 3. Desplegar en GitHub Pages

Una vez que hayas subido el código a GitHub, ejecuta:
```bash
npm run deploy
```

### 4. Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Ve a **Settings** → **Pages**
3. En **Source**, selecciona **Deploy from a branch**
4. En **Branch**, selecciona **gh-pages** y **/(root)**
5. Haz clic en **Save**

### 5. Verificar el despliegue

Tu sitio estará disponible en: `https://Diego311004.github.io/restaurante_shalom`

**Nota**: Puede tomar unos minutos para que el sitio esté disponible después del primer despliegue.

### 6. Actualizaciones futuras

Para actualizar el sitio después de hacer cambios:
```bash
git add .
git commit -m "Update description"
git push origin main
npm run deploy
```

## Solución de problemas

- **Error 404**: Asegúrate de que la `homepage` en `package.json` coincida exactamente con tu nombre de usuario y repositorio
- **Rutas no funcionan**: Si usas React Router, considera usar `HashRouter` en lugar de `BrowserRouter` para GitHub Pages
- **Imágenes no cargan**: Verifica que las rutas de las imágenes sean relativas y no absolutas
