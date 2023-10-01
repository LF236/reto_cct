
# Reto CTT

Hola me presento, mi nombre es Luis Fernando y presento mi solución al reto Cuida tu Comunidad. Sin importar los resultados, agradezco la información a todo el equipo por permitirme la oportunidad de mostrar mis habilidades.

## Instrucciones backend

Instalar dependencias
```bash
  cd laravel_code
  composer install
```

Configurar variables de entorno
```bash
  cp .env.example .env
```

Generar Aplication Key
```bash
  php artisan key:generate
```

Crear archivo database.sqlite (la base de datos es de sqlite)
```bash
  cd database
  touch database.sqlite
  cd..
```

Correr migraciones
```bash
  php artisan migrate
```

Ejecutar backend
```bash
  php artisan serve
```

En caso de que falle el composer install ejecutar (por versiones de php)
```bash
  composer install --ignore-platform-reqs
```

La dirección ip del backend debería ser
```bash
  http://127.0.0.1:8000
```

## Instrucciones frotend

Instalar dependencias
```bash
  cd code_react
  yarn install
```

Configurar variables de entorno
```bash
  cp .env.example .env
```

Modificar el archivo .env
```bash
  REACT_APP_URL_API_TASK=http://127.0.0.1:8000
```

Ejecutar Aplication
```bash
  npm start
```

## Capturas

![APLICACIÓN](https://i.ibb.co/BtjCLxs/Screenshot-from-2023-09-30-23-33-22.png)

## License

Nuevamente Gracias

[Linkendin](https://www.linkedin.com/in/lfrh)
