# Integração do Redus

Integração com o sistema [Redus](https://www.redus.org.br)

## Serviço

| Serviço | Descrição | Endereço |
|---------|-----------|----------|
| [Descarregar](descarregar) | Descarregamento do arquivo de respostas do Redus | http://localhost:5010 |

## Executando o serviço

```bash
cp .env.example .env

docker compose up -d
```

## Testando o serviço via http

### Descarregamento do arquivo .cvs

Exemplo com o comando `curl`:

```bash
curl -v --insecure http://127.0.0.1:5010
```

Retornos possíveis:

1. Sucesso

```json
{
  "status": "sucesso",
  "message": "Arquivo descarregado com sucesso"
}
```

2. Erro

```json
{
  "status": "erro",
  "message": "Arquivo não foi descarregado"
}
```
