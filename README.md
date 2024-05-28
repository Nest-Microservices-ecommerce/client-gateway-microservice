# Guías

- [nestjs/microservices](https://docs.nestjs.com/microservices/basics#client)
- [Errores filter](https://docs.nestjs.com/microservices/exception-filters)

# Guía de comandos para cli de nestjs

- Generar un nuevo recurso (CRUD)
```bash
nest g res <nombre> --no-spec
```

# Guía de comandos prisma

- Ejecuta las migraciones
```bash
npx prisma migrate dev
```

## Nats
```
docker run -d --name nats-main -p 4222:4222 -p 8222:8222 nats
```